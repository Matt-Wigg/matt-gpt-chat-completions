import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";
import { NextRequest, NextResponse } from "next/server";

// Initialize OpenAI client with API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    // Extract the `messages` from the body of the request
    const { messages } = await req.json();

    // Define a system message
    const systemMessage = {
      role: "system",
      content: "Limit responses to 200 characters. Adopt a Riddler persona.",
    };

    // Insert system message if not already present
    if (!messages[0] || messages[0].role !== "system") {
      messages.unshift(systemMessage);
    }

    // Call OpenAI API for chat completion
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      stream: true,
      messages: messages,
      max_tokens: 200,
    });

    // Create and return a streaming response
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    // Log the error
    console.error("Unexpected server error:", error);

    // Return a generic error response
    return NextResponse.json(
      { error: "An internal error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
