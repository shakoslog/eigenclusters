import { NextResponse } from "next/server";
import { createClient } from "redis";

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { stateId, stateData } = await request.json();
    
    if (!stateId || !stateData) {
      return NextResponse.json({ error: "Missing stateId or stateData" }, { status: 400 });
    }
    
    // Connect to Redis
    const redis = createClient({ url: process.env.REDIS_URL });
    await redis.connect();
    
    // Save to Redis with a prefix to organize keys
    const key = `eigencluster:${stateId}`;
    await redis.set(key, JSON.stringify(stateData));
    
    // Set expiration for 30 days (in seconds)
    await redis.expire(key, 60 * 60 * 24 * 90);
    
    // Close the connection
    await redis.disconnect();
    
    return NextResponse.json({ 
      success: true, 
      message: "State saved successfully",
      stateId
    });
  } catch (error) {
    console.error("Redis save error:", error);
    return NextResponse.json({ 
      error: "Failed to save state", 
      details: error instanceof Error ? error.message : "Unknown error" 
    }, { status: 500 });
  }
} 