import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    console.log('=== Starting Validation Request ===');
    const { jsonData } = await request.json();
    
    if (!jsonData) {
      return NextResponse.json({ 
        error: 'Missing JSON data for validation' 
      }, { status: 400 });
    }
    
    console.log('Validating JSON with o1-mini critic...');
    
    // Critic prompt that focuses on historical accuracy and quality
    const criticPrompt = `
You are a historical accuracy critic for cultural eigencluster analysis. 
Review the following JSON data that describes cultural trends and patterns.

Your task is to:
1. Verify historical accuracy of all references and descriptions
2. Check that variance percentages are reasonable and consistent
3. Ensure trajectory patterns match historical reality
4. Make in-place corrections to any problematic content
5. Return the improved JSON with your changes

Focus on improving historical accuracy and quality while maintaining the original structure.
Do not comment on the structure - just fix any issues directly in the JSON.

Here is the JSON to review:
${JSON.stringify(jsonData, null, 2)}

Return only the corrected JSON with no additional text or explanations.
`;

    // Call o1-mini for validation
    const response = await openai.chat.completions.create({
      model: "o1-mini-2024-09-12",
      messages: [
        { role: "user", content: criticPrompt }
      ],
      temperature: 0.2, // Lower temperature for more consistent validation
      max_completion_tokens: 32768, // Ensure enough tokens for the full response
    });

    // Extract the validated/improved JSON
    const validatedContent = response.choices[0].message.content;
    
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
      // If critic returns invalid JSON, return the original
      return NextResponse.json({ 
        success: false, 
        error: 'Critic returned invalid JSON',
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