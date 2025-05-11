import { OpenAI } from 'openai';
import type { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'No message provided' });
    }

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });
    console.log(process.env.OPENAI_API_KEY)

    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
    });

    const reply = response.choices?.[0]?.message?.content || 'No reply generated.';
    return res.status(200).json({ reply });
}
