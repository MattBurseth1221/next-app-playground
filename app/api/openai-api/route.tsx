export const runtime = 'edge';

import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Invalid Method', status: 405 })
    }

    try {
        const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_PHOTO_API_KEY});
        const body = await req.json();
        console.log(body.userPrompt);

        if (body.userPrompt.length <= 20) {
            return NextResponse.json({ message: 'Prompt too short', status: 401 })
        }

        try {
            const response = await openai.images.generate({
                model: "dall-e-3",
                prompt: `${body.userPrompt}`,
                n: 1,
                size: "1024x1024",
            });

            console.log(response);

            return NextResponse.json({ message: 'Image generation successful', data: response.data })
        } catch (err) {
            return NextResponse.json({ message: 'Error generating image', Error: err });
        }
    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}