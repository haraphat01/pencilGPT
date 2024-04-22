export async function POST(req, res) {
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }


    try {
        await Moralis.start({
            apiKey: process.env.MORALIS_API,
        });

        const response = await Moralis.EvmApi.token.getTokenPrice({
            "chain": "0x1",
            "include": "percent_change",
            "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0"
        });

        res.status(200).json({ description: response.choices[0] });
        // return OpenAIStream(response);

    } catch (error) {
        console.error('OpenAI API Error:', error);
        res.status(500).json({ error: 'Failed to generate description' });
    }
}