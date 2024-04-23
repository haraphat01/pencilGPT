import Moralis from 'moralis';
import { NextResponse } from 'next/server'
export async function POST(req, res) {
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);
    const { chain, address } = bodyreq
    console.log(chain, address)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }


    try {
        if (!Moralis.Core.isStarted) {
            await Moralis.start({
                apiKey: process.env.MORALIS_API,
            });
        }

        const response = await Moralis.EvmApi.token.getTokenPrice({
            "chain": chain,
            "include": "percent_change",
            "address": address
        });
        console.log(response)
        return NextResponse.json({ response }, { status: 200 })

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error }, { status: 500 })
    }
}

