import Moralis from 'moralis';
import { NextResponse } from 'next/server'
import axios from 'axios';
import serpResults from '../../components/serpResults'
import getGroqChatCompletion from '../../components/contractChatCompletion'

export async function POST(req, res) {
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);
    const { contract } = bodyreq
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {


        const groqresult = await getGroqChatCompletion(textContent);

        return NextResponse.json({ response, groqresult }, { status: 200 })

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error }, { status: 500 })
    }
}

