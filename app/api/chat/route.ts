import { API_AUTH, CHAT_COMPLETION_URL, CONTENT_TYPE, MODEL } from "@/app/constants/constants";
import { NextResponse } from "next/server";

/**
 * Local server endpoint
 * --------------------
 * 
 * Accepts a request that is then forwards it to the Mistral API chat endpoint.
 * 
 * @param req The request
 * @throws {Error} If the API key is not set or if the API call fails.
 */
export async function POST(req: Request) : Promise<Response> {
  try {

    // returns a promise that resolves with the result parsing the body text as JSON
    const body = await req.json();

    const { model = MODEL, messages } = body;

    /* Make sure that the message is an array and that the API key env var has been set */
    if (!Array.isArray(messages)) {
      return NextResponse.json({error: "messages must be an array"}, {status: 400})
    }

    if (!process.env.MISTRAL_API_KEY) {
      throw new Error("MISTRAL_API_KEY is not set in environment");
    }

    const upstream = await fetch(CHAT_COMPLETION_URL, {
      method: "POST",
      headers: {
        "Authorization": API_AUTH,
        "Content-Type": CONTENT_TYPE,
      },
      body: JSON.stringify( {model, messages} )
    })
    
    const text = await upstream.text();

    if (!upstream.ok) {
      throw new Error(`Mistral API error ${upstream.status}: ${text}`)
    }

    return new Response(text, {status: upstream.status, headers: { "Content-Type": CONTENT_TYPE},});
  } catch (err) {
    console.error(err);
    return NextResponse.json({error: "internal"}, {status: 500});
  }
}