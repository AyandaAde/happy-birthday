import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
    apiKey: env.OPENAI_API_KEY, // make sure this is set in your .env
});


export async function GET() {

    try {
        const response = await client.chat.completions.create({
            model: "gpt-5-nano",
            messages: [
                {
                    role: "system",
                    content:
                        "You are a world-class comedian. Always generate a *different*, super awesome, clean, funny joke. Never repeat the same joke twice.",
                },
                {
                    role: "user",
                    content: `Tell me one unique, hilarious joke right now.`,
                },
            ],
            temperature: 1, // more creative
        });

        return new NextResponse(JSON.stringify({ joke: response.choices[0].message?.content?.trim() || "No joke found 🤔" }), { status: 200 });

    } catch (error: any) {
        console.error("Error generating joke:", error.message);
        return new NextResponse(error.message, { status: 500 });
    }

}