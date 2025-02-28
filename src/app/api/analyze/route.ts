import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { readFileSync } from 'fs';
import { join } from 'path';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const deepseek = new OpenAI({
    apiKey: process.env.DEEPSEEK_API_KEY,
    baseURL: "https://api.deepseek.com"
  });


// Helper function to timeout a promise
const timeoutPromise = (promise: Promise<any>, timeoutMs: number) => {
  return Promise.race([
    promise,
    new Promise((_, reject) => 
      setTimeout(() => reject(new Error(`Request timed out after ${timeoutMs}ms`)), timeoutMs)
    )
  ]);
};

// Add error interface
interface ApiError extends Error {
  response?: {
    data?: any;
    status?: number;
    headers?: any;
  };
}

// Add interfaces for the response structure
interface ClusterData {
  name: string;
  description: string;
  trajectory: Record<string, {
    variance_explained: number;
    description: string;
    key_manifestations: string[];
  }>;
}

interface TransformedResponse {
  metadata: {
    period: string;
    interval: string;
    cluster_range: string;
    measurement: string;
    top_50_clusters: string[];
  };
  clusters: Record<string, ClusterData>;
}

// Add the transform function before the POST handler
const transformResponse = (jsonResponse: any): TransformedResponse => {
  const transformed: TransformedResponse = {
    metadata: {
      period: jsonResponse.metadata.period,
      interval: jsonResponse.metadata.interval,
      cluster_range: jsonResponse.metadata.cluster_range,
      measurement: jsonResponse.metadata.measurement,
      top_50_clusters: jsonResponse.metadata.top_50_clusters
    },
    clusters: {}
  };

  Object.entries(jsonResponse.clusters).forEach(([key, cluster]: [string, any]) => {
    transformed.clusters[key] = {
      name: cluster.name,
      description: cluster.description,
      trajectory: {}
    };

    Object.entries(cluster.trajectory).forEach(([year, data]: [string, any]) => {
      transformed.clusters[key].trajectory[year] = {
        variance_explained: data.score,
        description: data.description,
        key_manifestations: data.key_manifestations
      };
    });
  });

  return transformed;
};

const createStreamHandlerOpenAI = (stream: any) => {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      let controllerClosed = false;
      
      try {
        console.log('Starting OpenAI stream processing');
        let accumulatedContent = '';

        for await (const chunk of stream) {
          if (controllerClosed) break;
          
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            accumulatedContent += content;
          }
        }

        // Try to parse the accumulated JSON to check if it's complete
        try {
          JSON.parse(accumulatedContent);
        } catch (e) {
          console.error('Incomplete or invalid JSON received');
          // Send error through the stream before closing
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            error: "Token limit reached. The response was cut off. Please try a shorter prompt or fewer clusters."
          })}\n\n`));
        }

        if (!controllerClosed) {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          controllerClosed = true;
        }
      } catch (error) {
        console.error('OpenAI stream processing error:', error);
        if (!controllerClosed) {
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            error: "Stream processing error: " + (error instanceof Error ? error.message : String(error))
          })}\n\n`));
          controller.close();
          controllerClosed = true;
        }
      }
    }
  });
};

const createStreamHandlerAnthropic = (stream: any) => {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      let controllerClosed = false;
      
      try {
        console.log('Starting Anthropic stream processing');
        let accumulatedContent = '';
        
        for await (const chunk of stream) {
          if (controllerClosed) break;
          
          if (chunk.type === 'content_block_delta' && chunk.delta?.type === 'text_delta') {
            const content = chunk.delta.text;
            if (content) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
              accumulatedContent += content;
            }
          }
        }

        // Try to parse the accumulated JSON to check if it's complete
        try {
          JSON.parse(accumulatedContent);
        } catch (e) {
          console.error('Incomplete or invalid JSON received');
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
            error: "The response was cut off. Please try a shorter prompt or break it into parts."
          })}\n\n`));
        }

        if (!controllerClosed) {
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
          controllerClosed = true;
        }
      } catch (error) {
        console.error('Anthropic stream processing error:', error);
        if (!controllerClosed) {
          controller.error(error);
          controllerClosed = true;
        }
      }
    }
  });
};


// Add model lookup definitions at the top after the client initializations
const MODEL_CONFIGS = {
  'claude': {
    provider: 'anthropic',
    model: 'claude-3-5-sonnet-latest',
    maxTokens: 8192,
    temperature: 0
  },
  'deepseek_chat': {
    provider: 'deepseek',
    model: 'deepseek-chat',
    maxTokens: 8192,
    temperature: 0
  },
  'deepseek': {
    provider: 'deepseek',
    model: 'deepseek-reasoner',
    maxTokens: 8000,
    temperature: 0
  },
  'gpt4o': {
    provider: 'openai',
    model: 'gpt-4o-2024-08-06',
    maxTokens: 16384,
    temperature: 0,
    topP: 0
  },
  'gpt4o-mini': {
    provider: 'openai',
    model: 'gpt-4o-mini-2024-07-18',
    maxTokens: 16384,
    temperature: 0,
    topP: 0
  },
  'o1-mini': {
    provider: 'openai',
    model: 'o1-mini-2024-09-12',
    maxTokens: 65536,
    temperature: 1,
    stream: true,
    store: true,
    reasoning_effort: 'high'
  }
} as const;

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    console.log('=== Starting Analysis Request ===');
    const { prompt, model } = await request.json();
    console.log(`Model: ${model}`);
    console.log(`Prompt: ${prompt}`);

    const modelConfig = MODEL_CONFIGS[model as keyof typeof MODEL_CONFIGS];
    if (!modelConfig) {
      throw new Error(`Unsupported model: ${model}`);
    }

    let systemPrompt: string;
    try {
      const response = await fetch(new URL('/prompts/analyze.txt', request.url));
      systemPrompt = await response.text();
    } catch (error) {
      console.error('Failed to read prompt file:', error);
      throw new Error('Failed to initialize analysis system');
    }

    if (model === 'claude') {
      console.log('Using Claude 3.5 Sonnet...');
      const stream = await anthropic.messages.create({
        model: modelConfig.model,
        messages: [{
          role: 'user',
          content: systemPrompt + "\n\n" + prompt
        }],
        max_tokens: modelConfig.maxTokens,
        temperature: modelConfig.temperature,
        stream: true
      });

      const customStream = createStreamHandlerAnthropic(stream);
      return new Response(customStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive'
        }
      });
    }

    if (model === 'deepseek_chat') {
      console.log('Using DeepSeek Chat model...');
      try {
        console.log('Testing DeepSeek connection...');
        console.log('DeepSeek client config:', {
          baseURL: deepseek.baseURL,
          apiKeyPresent: !!process.env.DEEPSEEK_API_KEY
        });

        console.log('Creating DeepSeek Chat stream...');
        const stream = await deepseek.chat.completions.create({
          model: "deepseek-chat",
          messages: [
            {
              role: 'system',
              content: `${systemPrompt}\n\nPlease provide your response in JSON format following this schema. The output must be valid JSON.`
            },
            {
              role: 'user',
              content: `Please analyze and return the results in JSON format: ${prompt}`
            }
          ],
          stream: true,
          response_format: {
            type: 'json_object'
          },
          temperature: 0,
          max_tokens: 8192
        });

        console.log('Stream created successfully');

        // Since DeepSeek uses OpenAI format, we can use the OpenAI stream handler
        const customStream = createStreamHandlerOpenAI(stream);
        console.log('Created stream handler');

        return new Response(customStream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
          }
        });

      } catch (err) {
        const error = err as ApiError;
        console.error('DeepSeek Chat API error:', error);
        throw error;
      }
    } else if (model === 'deepseek') {
      console.log('Using DeepSeek model...');
      try {
        console.log('Creating DeepSeek stream...');
        const stream = await deepseek.chat.completions.create({
          model: "deepseek-reasoner",
          messages: [
            {
              role: 'system',
              content: systemPrompt + "\n\nPlease ensure the output is in valid JSON format following the schema provided."
            },
            {
              role: 'user',
              content: prompt
            }
          ],
          stream: true,
          max_tokens: 8000
        });

        console.log('Stream created successfully');

        const encoder = new TextEncoder();
        const customStream = new ReadableStream({
          async start(controller) {
            try {
              console.log('Starting stream processing');
              let accumulatedContent = '';
              let chunkCount = 0;

              for await (const chunk of stream) {
                chunkCount++;
                if (chunkCount % 10 === 0) {
                  console.log(`Processed ${chunkCount} chunks`);
                }

                console.log('Chunk structure:', JSON.stringify(chunk.choices[0].delta));

                if (chunk.choices[0]?.delta?.content) {
                  const content = chunk.choices[0].delta.content;
                  console.log('Content received:', content);
                  accumulatedContent += content;
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
                    content: content 
                  })}\n\n`));
                }
              }

              try {
                JSON.parse(accumulatedContent);
                console.log('Final JSON is valid');
              } catch (e) {
                console.error('Final JSON validation failed:', e);
              }

              console.log('Stream processing complete');
              console.log('Total chunks processed:', chunkCount);
              
              controller.enqueue(encoder.encode('data: [DONE]\n\n'));
              controller.close();
              console.log('Stream closed successfully');
            } catch (error) {
              console.error('Stream processing error:', error);
              controller.error(error);
            }
          }
        });

        console.log('Returning response stream');
        return new Response(customStream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Transfer-Encoding': 'chunked'
          }
        });

      } catch (err) {
        const error = err as ApiError;
        console.error('DeepSeek API error:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          response: error.response?.data
        });
        throw error;
      }
    } else if (model === 'gpt4o' || model === 'gpt4o-mini') {
      console.log(`Using ${model} model...`);
      const stream = await openai.chat.completions.create({
        model: modelConfig.model,
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        stream: true,
        temperature: 0,
        top_p: 0,
        response_format: { 
          type: "json_object"
        },
        max_tokens: modelConfig.maxTokens
      });

      const customStream = createStreamHandlerOpenAI(stream);
      return new Response(customStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Transfer-Encoding': 'chunked'
        }
      });
    }

    if (model === 'o1-mini') {
      console.log('Using o1-mini model...');
      const stream = await openai.chat.completions.create({
        model: modelConfig.model,
        messages: [
          {
            role: 'user',
            content: `${systemPrompt}\n\n${prompt}`
          }
        ],
        stream: true,
        temperature: modelConfig.temperature,
        max_completion_tokens: modelConfig.maxTokens,
        ...(model === 'o1-mini' ? {
          reasoning_effort: 'high',
          store: true
        } : {})
      });

      const customStream = createStreamHandlerOpenAI(stream);
      return new Response(customStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Transfer-Encoding': 'chunked'
        }
      });
    }

    // ... rest of the error handling code ...
  } catch (err) {
    // Type assertion for the first catch block
    const error = err as ApiError;
    console.error('General API error:', error);
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      response: error.response?.data
    });

    return new Response(JSON.stringify({ 
      error: 'API Error', 
      details: error.message,
      stack: error.stack 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Add longer timeout to the route config
export const config = {
  runtime: 'edge',  // Use Edge Runtime
  maxDuration: 300  // 5 minutes in seconds
};