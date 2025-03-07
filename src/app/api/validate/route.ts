import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

// Helper function to extract JSON from markdown code blocks
const parseDeepSeekContent = (content: string) => {
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);
  if (jsonMatch) {
    return jsonMatch[1].trim();
  }
  return content;
};

export async function POST(request: Request) {
  try {
    console.log('=== Starting Validation Request ===');
    const { jsonData, userPrompt, userParameters, fullPrompt } = await request.json();
    
    if (!jsonData) {
      console.error('Missing JSON data for validation');
      return NextResponse.json({ 
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
      };
      
      // Call o1-mini for validation
      const response = await openai.chat.completions.create(o1MiniConfig);

      // Extract the validated/improved JSON
      let validatedContent = response.choices[0].message.content;
      console.log('Raw response from critic (full):');
      console.log(validatedContent); // Log the full response
      console.log('End of raw response');
      
      // Process the content using the same function used for streaming
      validatedContent = parseDeepSeekContent(validatedContent);
      
      try {
        // Parse the response to ensure it's valid JSON
        const validatedJson = JSON.parse(validatedContent);
        console.log('Validation complete - returning improved JSON');
        
        return NextResponse.json({ 
          success: true, 
          validatedData: validatedJson 
        });
      } catch (parseError) {
        console.error('Critic returned invalid JSON:', parseError);
        console.error('First 200 chars of processed content:', validatedContent.substring(0, 200));
        // If critic returns invalid JSON, return the original
        return NextResponse.json({ 
          success: false, 
          error: 'Critic returned invalid JSON',
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