import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { readFileSync } from 'fs';
import { join } from 'path';

// const anthropic = new Anthropic({
//   apiKey: process.env.ANTHROPIC_API_KEY || '',
// });

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

const analysisSchema = {
  type: "object",
  properties: {
    metadata: {
      type: "object",
      properties: {
        period: { type: "string" },
        interval: { type: "string" },
        cluster_range: { type: "string" },
        measurement: { type: "string" },
        top_50_clusters: {
          type: "array",
          items: { type: "string" },
          minItems: 50,
          maxItems: 50
        }
      },
      required: ["period", "interval", "cluster_range", "measurement", "top_50_clusters"],
      additionalProperties: false
    },
    clusters1_50: {
      type: "array",
      items: {
        type: "object",
        properties: {
          rank: { type: "number" },
          description: { type: "string" }
        },
        required: ["rank", "description"],
        additionalProperties: false
      },
      minItems: 50,
      maxItems: 50
    },
    clusters: {
      type: "object",
      patternProperties: {
        "^[0-9]+_[a-z_]+$": {
          type: "object",
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            trajectory: {
              type: "object",
              patternProperties: {
                "^[0-9]{4}$": {
                  type: "object",
                  properties: {
                    score: { type: "number" },
                    description: { type: "string" },
                    key_manifestations: {
                      type: "array",
                      items: { type: "string" },
                      minItems: 1,
                      maxItems: 3
                    }
                  },
                  required: ["score", "description", "key_manifestations"],
                  additionalProperties: false
                }
              },
              additionalProperties: false
            }
          },
          required: ["name", "description", "trajectory"],
          additionalProperties: false
        }
      },
      additionalProperties: false
    }
  },
  required: ["metadata", "clusters1_50", "clusters"],
  additionalProperties: false
};

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

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    console.log('=== Starting Analysis Request ===');
    const { prompt, model } = await request.json();
    console.log(`Model: ${model}`);
    console.log(`Prompt: ${prompt}`);

    // Fetch the prompt file
    let systemPrompt: string;
    try {
      const response = await fetch(new URL('/prompts/analyze.txt', request.url));
      systemPrompt = await response.text();
    } catch (error) {
      console.error('Failed to read prompt file:', error);
      throw new Error('Failed to initialize analysis system');
    }

    if (model === 'deepseek_chat') {
      console.log('Using DeepSeek Chat model...');
      try {
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
          top_p: 0.1,
          frequency_penalty: 0.1,
          presence_penalty: 0.1,
          max_tokens: 8192,
          stream_options: {
            include_usage: true
          }
        });

        const encoder = new TextEncoder();
        const customStream = new ReadableStream({
          async start(controller) {
            try {
              console.log('Starting stream processing');
              let rawContent = '';
              let chunkCount = 0;
              let controllerClosed = false;

              // Stream raw content first
              for await (const chunk of stream) {
                if (controllerClosed) break;
                
                chunkCount++;
                if (chunk.choices[0]?.delta?.content) {
                  const content = chunk.choices[0].delta.content;
                  rawContent += content;
                  
                  // Stream the raw content immediately
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                }
              }

              // Once streaming is complete, try to parse the full JSON
              if (!controllerClosed) {
                try {
                  // Clean up the raw content
                  const cleanJson = rawContent
                    .replace(/```json\s*/, '')
                    .replace(/\s*```$/, '')
                    .trim();

                  // Parse and validate the complete JSON
                  const parsedJson = JSON.parse(cleanJson);
                  
                  // Send the complete, formatted JSON
                  const formattedJson = JSON.stringify(parsedJson, null, 2);
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
                    content: formattedJson,
                    isComplete: true 
                  })}\n\n`));
                  
                  console.log('Successfully processed complete JSON');
                } catch (e) {
                  console.error('Final JSON processing failed:', e);
                }

                console.log('Stream processing complete');
                console.log('Total chunks processed:', chunkCount);
                console.log('Total content length:', rawContent.length);
                
                controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                controller.close();
                controllerClosed = true;
                console.log('Stream closed successfully');
              }
            } catch (error) {
              console.error('Stream processing error:', error);
              if (!controllerClosed) {
                controller.error(error);
                controllerClosed = true;
              }
            }
          }
        });

        return new Response(customStream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Transfer-Encoding': 'chunked'
          }
        });

      } catch (err) {
        const error = err as ApiError;  // Type assertion
        console.error('DeepSeek Chat API error:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          response: error.response?.data
        });
        
        return new Response(JSON.stringify({ 
          error: error.message || 'An error occurred during analysis'
        }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        });
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
              let isInJsonBlock = false;
              let controllerClosed = false;

              for await (const chunk of stream) {
                if (controllerClosed) break;
                
                chunkCount++;
                if (chunk.choices[0]?.delta?.content) {
                  const content = chunk.choices[0].delta.content;
                  
                  // Check if we're entering a JSON block
                  if (content.includes('```json')) {
                    isInJsonBlock = true;
                    accumulatedContent = ''; // Reset for clean JSON
                    continue;
                  }

                  // If we're in a JSON block, accumulate the content
                  if (isInJsonBlock) {
                    if (content.includes('```')) {
                      isInJsonBlock = false;
                      try {
                        const cleanJson = accumulatedContent.trim();
                        const parsedJson = JSON.parse(cleanJson);
                        const formattedJson = JSON.stringify(parsedJson);
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: formattedJson })}\n\n`));
                      } catch (e) {
                        console.log('JSON block parsing failed, sending raw content');
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                      }
                    } else {
                      accumulatedContent += content;
                    }
                  } else {
                    // Not in JSON block, send content directly
                    controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                  }
                }
              }

              if (!controllerClosed) {
                console.log('Stream processing complete');
                console.log('Total chunks processed:', chunkCount);
                controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                controller.close();
                controllerClosed = true;
                console.log('Stream closed successfully');
              }
            } catch (error) {
              console.error('Stream processing error:', error);
              if (!controllerClosed) {
                controller.error(error);
                controllerClosed = true;
              }
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
        const error = err as ApiError;  // Type assertion
        console.error('DeepSeek API error:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack,
          response: error.response?.data
        });
        throw error;
      }
    } else if (model === 'gpt4' || model === 'gpt4o-mini') {
      // OpenAI streaming response
      const stream = await openai.chat.completions.create({
        model: model === 'gpt4o-mini' ? 'gpt-4o-mini-2024-07-18' : 'gpt-4',
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
        max_tokens: model === 'gpt4o-mini' ? 16384 : 4096
      });

      const encoder = new TextEncoder();
      const customStream = new ReadableStream({
        async start(controller) {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'));
          controller.close();
        }
      });

      return new Response(customStream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          'Transfer-Encoding': 'chunked'
        }
      });
    } else if (model === 'claude3.5') {
      console.log('Starting Claude 3.5 request...');
      
      try {
        console.log('Initializing Anthropic client...');
        const anthropicClient = new Anthropic({
          apiKey: process.env.ANTHROPIC_API_KEY
        });

        console.log('Creating message stream with claude-3-5-sonnet-latest...');
        const stream = await anthropicClient.messages.create({
          model: 'claude-3-5-sonnet-latest',
          messages: [
            {
              role: 'user',
              content: systemPrompt + "\n\n" + prompt
            }
          ],
          max_tokens: 8000,
          temperature: 0,
          stream: true
        });

        console.log('Stream created successfully');
        
        const encoder = new TextEncoder();
        const customStream = new ReadableStream({
          async start(controller) {
            try {
              let accumulatedContent = '';
              
              for await (const chunk of stream) {
                if (chunk.type === 'content_block_delta' && 
                    chunk.delta.type === 'text_delta') {
                  const content = chunk.delta.text;
                  accumulatedContent += content;
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
                }
              }
              
              controller.enqueue(encoder.encode('data: [DONE]\n\n'));
              controller.close();
              
            } catch (error) {
              console.error('Stream processing error:', error);
              controller.error(error);
            }
          }
        });

        return new Response(customStream, {
          headers: {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
          }
        });

      } catch (err: any) {
        console.error('Claude API error:', {
          message: err.message,
          status: err.status,
          type: err.type,
          stack: err.stack
        });
        
        return Response.json({ 
          error: 'Claude API Error', 
          details: err.message,
          status: err.status,
          type: err.type,
          stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
        }, { status: err.status || 500 });
      }
    } else {
      // Claude response
      const message = await anthropic.messages.create({
        model: 'claude-3-opus-20240229',
        max_tokens: 4000,
        messages: [
          {
            role: 'user',
            content: systemPrompt + "\n\n" + prompt
          }
        ],
        temperature: 0.7
      });

      // Handle different content block types
      const contentBlock = message.content[0];
      let jsonResponse;
      
      if ('text' in contentBlock) {
        jsonResponse = JSON.parse(contentBlock.text);
      } else {
        throw new Error('Unexpected content type from Claude');
      }
      
      const transformedResponse = transformResponse(jsonResponse);
      return NextResponse.json(transformedResponse);
    }

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