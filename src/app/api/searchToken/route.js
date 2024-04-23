import Moralis from 'moralis';
import { NextResponse } from 'next/server'
import axios from 'axios';
import  serpResults  from '../../components/serpResults'

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
        console.log("result from response",response)
        let query = `fundamental analysis about ${response.jsonResponse.tokenName} coin with token symbol ${response.jsonResponse.tokenSymbol}`
        const result = await serpResults(query);
      
        
        console.log("result from serp",result)
        return NextResponse.json({ result }, { status: 200 })
       

    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error }, { status: 500 })
    }
}

