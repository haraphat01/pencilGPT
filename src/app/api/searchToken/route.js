import Moralis from 'moralis';
export async function POST(req, res) {
    let passedValue = await new Response(req.body).text();
    let bodyreq = JSON.parse(passedValue);
    const { chain, address } = bodyreq
    console.log(chain, address)
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }


    try {
        await Moralis.start({
            apiKey: process.env.MORALIS_API,
        });

        const response = await Moralis.EvmApi.token.getTokenPrice({
            "chain": chain,
            "include": "percent_change",
            "address": address
        });
        console.log(response)
        res.status(200).json({ response });


    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Failed to generate description' });
    }
}