import { createClient } from "redis";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Get the share ID from the context
    const shareId = context.params.id;
    
    console.log("Fetching shared state with ID:", shareId);
    
    // Connect to Redis
    const redis = await createClient({ 
      url: process.env.REDIS_URL 
    }).connect();
    
    // Try the eigencluster: prefix since we saw that in the keys list
    const eigenclusterKey = `eigencluster:${shareId}`;
    console.log(`Looking for Redis key: ${eigenclusterKey}`);
    
    const stateJson = await redis.get(eigenclusterKey);
    await redis.disconnect();
    
    if (!stateJson) {
      console.log(`Key not found: ${eigenclusterKey}`);
      return NextResponse.json({
        success: false,
        error: "Shared state not found"
      }, { status: 404 });
    }
    
    console.log("Redis response: Data found");
    
    // Parse the JSON
    const state = JSON.parse(stateJson);
    console.log("State structure:", Object.keys(state));
    
    return NextResponse.json({
      success: true,
      state
    });
  } catch (error) {
    console.error('Error retrieving shared state:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to retrieve shared state"
    }, { status: 500 });
  }
}