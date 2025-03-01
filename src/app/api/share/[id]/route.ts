import { createClient } from "redis";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const shareId = params.id;
    
    // Connect to Redis
    const redis = await createClient({ 
      url: process.env.REDIS_URL 
    }).connect();
    
    // Retrieve the state from Redis
    const stateJson = await redis.get(`eigencluster:${shareId}`);
    
    // Close the Redis connection
    await redis.disconnect();
    
    if (!stateJson) {
      return NextResponse.json(
        { success: false, error: "Shared state not found" },
        { status: 404 }
      );
    }
    
    // Parse and return the state
    const state = JSON.parse(stateJson);
    return NextResponse.json({ success: true, state });
  } catch (error) {
    console.error("Error retrieving shared state:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve shared state" },
      { status: 500 }
    );
  }
}