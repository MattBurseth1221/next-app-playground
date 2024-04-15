import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(req: Request) {
    try {
        const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_PHOTO_API_KEY});

        try {
            const response = await openai.images.generate({
                prompt: 'A chesapeake bay retriever dog',
            });

            console.log(response);

            return NextResponse.json({ message: 'Image generation successful', data: response })
        } catch (err) {
            return NextResponse.json({ message: 'Error generating image', Error: err });
        }

        return NextResponse.json({message: 'Image generated successfully' });
    } catch (err) {
        return NextResponse.json({ message: 'Internal Server Error' });
    }
}