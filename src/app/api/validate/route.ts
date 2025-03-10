import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

// Enhanced helper function to extract JSON from various formats
const parseDeepSeekContent = (content: string) => {
  // Log first 100 chars to see what we're receiving
  console.log('Raw content start:', content.substring(0, 100));
  
  // First try to match JSON code blocks
  const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
  if (jsonMatch) {
    const extracted = jsonMatch[1].trim();
    console.log('Extracted from code block, first 100 chars:', extracted.substring(0, 100));
    return extracted;
  }
  
  // Try to find JSON by looking for opening/closing braces
  const jsonObjectMatch = content.match(/(\{[\s\S]*\})/);
  if (jsonObjectMatch) {
    const extracted = jsonObjectMatch[1].trim();
    console.log('Extracted JSON object, first 100 chars:', extracted.substring(0, 100));
    return extracted;
  }
  
  // If we get here, just sanitize the string to remove any potential BOM or whitespace
  const sanitized = content.trim().replace(/^\uFEFF/, '');
  console.log('Sanitized content, first 100 chars:', sanitized.substring(0, 100));
  return sanitized;
};

// Create a stream handler that follows the pattern from analyze/route.ts
const createStreamHandlerOpenAI = (stream: any, originalData: any) => {
  const encoder = new TextEncoder();
  
  return new ReadableStream({
    async start(controller) {
      let controllerClosed = false;
      let accumulatedContent = '';
      
      try {
        console.log('Starting OpenAI stream processing for validation');
        
        // Stream chunks exactly like analyze does
        for await (const chunk of stream) {
          if (controllerClosed) break;
          
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
            accumulatedContent += content;
          }
        }
        
        // Send DEBUG message with the EXACT content that will be parsed
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
          debug: true,
          debugContent: accumulatedContent,
          debugContentFirstChar: accumulatedContent.charAt(0),
          debugContentFirstCharCode: accumulatedContent.charCodeAt(0),
          debugContentLength: accumulatedContent.length,
          message: "THIS IS THE EXACT CONTENT TO BE PARSED. CHECK CLIENT-SIDE PARSING LOGIC."
        })}\n\n`));
        
        // Send another message with the exact format of the expected structure
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({
          clientDebug: true,
          instruction: "LOG THE EXACT TEXT BEING PARSED CLIENT-SIDE",
          message: "Find the client-side JSON.parse call and log its input"
        })}\n\n`));
        
        // Still send a complete message but keep it simple
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({
          status: "complete",
          parsedServerSide: true
        })}\n\n`));

        // Standard stream completion
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      } catch (error) {
        console.error('Error in validation stream:', error);
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ 
          error: String(error)
        })}\n\n`));
        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
        controller.close();
      }
    }
  });
};

// Add this function to help with debugging
const debugStreamResponse = (data: any) => {
  if (data.content) {
    // This is a content chunk, no need to debug every chunk
    return;
  }
  
  console.log("Stream response received:", data);
  
  if (data.validatedData) {
    console.log("Validated data received, first 100 chars:", 
      JSON.stringify(data.validatedData).substring(0, 100));
  }
  
  if (data.error) {
    console.error("Stream error:", data.error);
    if (data.originalData) {
      console.log("Original data available as fallback");
    }
  }
};

export async function POST(request: Request) {
  try {
    console.log('=== Starting Validation Request ===');
    const { jsonData, userPrompt, userParameters, fullPrompt } = await request.json();
    
    if (!jsonData) {
      console.error('Missing JSON data for validation');
      return NextResponse.json({ 
        success: false,
        error: 'Missing JSON data for validation' 
      }, { status: 400 });
    }
    
    if (!userPrompt && userPrompt !== '') {
      console.error('Missing user prompt for validation');
      return NextResponse.json({ 
        error: 'Missing user prompt for validation' 
      }, { status: 400 });
    }
    
    // Allow empty string for userPrompt but still require the field to be present
    console.log('User prompt for validation:', userPrompt);
    
    if (!userParameters) {
      console.error('Missing user parameters for validation');
      return NextResponse.json({ 
        error: 'Missing user parameters for validation' 
      }, { status: 400 });
    }
    
    console.log('Validating JSON with o1-mini critic...');
    
    // Ensure we have a valid API key
    if (!process.env.OPENAI_API_KEY) {
      console.error('Missing OpenAI API key');
      return NextResponse.json({ 
        success: false, 
        error: 'OpenAI API key is not configured',
        originalData: jsonData
      }, { status: 500 });
    }
    
    try {
      // Enhanced critic prompt that includes user context and full prompt if available
      const criticPrompt = `
You are a historical pattern specialist reviewing cultural eigencluster data.
${fullPrompt ? `The full system prompt used was: ${fullPrompt}` : ''}
The user provided this initial prompt: "${userPrompt}" 
and these parameters: ${JSON.stringify(userParameters, null, 2)}

The JSON provided shows trajectories of cultural forces over time, but contains common historical accuracy issues that need fixing:

You are a historical accuracy expert reviewing cultural eigencluster JSON data.

Your task is to correct any historically inaccurate patterns in the "variance_explained" values while maintaining truthfulness to the actual historical record.

COMMON HISTORICAL INACCURACIES TO CHECK FOR:

1. UNNATURAL UNIFORMITY: Multiple clusters following identical trajectories (all rising/falling together) is usually historically inaccurate unless there's a specific reason

2. MISSING HISTORICAL IMPACTS: Major events often create visible changes in trajectories (e.g., wars, economic shifts, technological breakthroughs)

3. HISTORICALLY INAPPROPRIATE RELATIONSHIPS: Some cultural forces naturally compete with each other (as one rises, another might fall)

4. UNREALISTIC SMOOTHNESS: Cultural trends rarely change at perfectly consistent rates - look for unnatural linearity

CORRECTION APPROACH:
- Identify specific historical events or trends from the period
- Modify "variance_explained" values ONLY where needed to align with historical reality
- Make changes of sufficient magnitude (2-5 points) when historical evidence suggests significant shifts 
- Do NOT introduce artificial patterns - only make changes supported by historical evidence
- When in doubt, maintain the original values

Return the complete JSON with your historically-justified corrections.

Make direct numerical changes to the "variance_explained" values to fix these issues. 
Don't hesitate to make significant numerical changes - it's common to need adjustments of 20-50% to create historically accurate patterns.

Focus on improving historical accuracy and quality while maintaining the original structure.
Do not comment on the structure - just fix any issues directly in the JSON.
Do not hestitate to make significant corrections to bring it in line witht he original prompt
The previous LLM who created the JSON may have made mistakes, so you may need to make significant corrections.

Here is the JSON to review:
${JSON.stringify(jsonData, null, 2)}

Return only the corrected JSON with no additional text or explanations.
`;

      // Use the exact same configuration as in route.ts for o1-mini
      const o1MiniConfig = {
        model: "o1-mini-2024-09-12",
        messages: [
          { role: "user", content: criticPrompt }
        ],
        temperature: 1,
        max_completion_tokens: 65536,
        stream: true,
      };
      
      // Call OpenAI with streaming still enabled
      const stream = await openai.chat.completions.create(o1MiniConfig);
      
      // KEY CHANGE: Collect the complete response instead of streaming to client
      console.log('Starting OpenAI stream processing for validation');
      
      // Collect the full content from the stream
      let fullContent = '';
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          fullContent += content;
        }
      }
      
      console.log('Stream collection complete, processing response');
      console.log('Full content length:', fullContent.length);
      
      // Use your existing extraction helpers to clean the content
      // This handles JSON in code blocks, etc.
      const cleanedContent = parseDeepSeekContent(fullContent);
      
      try {
        // Parse the JSON on the server
        const validatedData = JSON.parse(cleanedContent);
        
        // Return a single JSON response
        return NextResponse.json({
          success: true,
          validatedData: validatedData
        });
      } catch (error) {
        console.error('JSON parsing error:', error);
        
        // Return error with original data as fallback
        return NextResponse.json({
          success: false,
          error: `Validation failed to parse result: ${error.message}`,
          originalData: jsonData
        });
      }
    } catch (apiError) {
      console.error('OpenAI API error:', apiError);
      return NextResponse.json({ 
        success: false, 
        error: `OpenAI API error: ${apiError instanceof Error ? apiError.message : 'Unknown error'}`,
        originalData: jsonData
      });
    }
  } catch (err) {
    console.error('Validation API error:', err);
    return NextResponse.json({ 
      success: false, 
      error: err instanceof Error ? err.message : 'Unknown validation error' 
    }, { status: 500 });
  }
}

// Add longer timeout to the route config
export const config = {
  runtime: 'edge',  // Use Edge Runtime
  maxDuration: 300  // 5 minutes in seconds
}; 