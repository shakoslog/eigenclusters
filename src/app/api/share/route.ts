import { createClient } from "redis";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: Request) {
  try {
    // Parse the request body to get the state
    const state = await request.json();
    
    // Generate a unique ID for this shared state
    const shareId = uuidv4();
    
    // Connect to Redis
    const redis = await createClient({ 
      url: process.env.REDIS_URL 
    }).connect();
    
    // Store the state in Redis with the share ID as the key
    // Set an expiration of 30 days (in seconds)
    await redis.set(`eigencluster:${shareId}`, JSON.stringify(state), {
      EX: 60 * 60 * 24 * 360 // 120 days expiration
    });
    
    // Close the Redis connection
    await redis.disconnect();
    
    // Return the share ID
    return NextResponse.json({ 
      success: true, 
      shareId,
      shareUrl: `/share/${shareId}`
    });
  } catch (error) {
    console.error("Error sharing state:", error);
    return NextResponse.json(
      { success: false, error: "Failed to share state" },
      { status: 500 }
    );
  }
}