"use client"
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import Image from 'next/image';


const styles = {
    // Define your styles here

    color: 'black', // Example color
    fontSize: '16px', // Example font size
    fontFamily: 'Arial, sans-serif',
    paddingTop: '1rem' // Example font family

};

export default function Homepage() {
    const [contractAddress, setContractAddress] = useState('');
    const [chain, setChain] = useState('0x1');
    const [tokenData, setTokenData] = useState('');
    const [loading, setLoading] = useState(false);
    const [groqresult, setGroqresult] = useState('');


    const handleSearch = async (e) => {
        setLoading(true); // Set the loading state to true

        console.log(chain, contractAddress)
        console.log("token data", tokenData)
        const apiUrl = '/api/searchToken'; // Your API route URL
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chain: chain,
                    address: contractAddress,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                setTokenData(result) // Update the tokenData state with the API response
                setGroqresult(result.groqresult);
                // Handle the response as needed
            } else {
                console.error('Failed to send data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set the loading state back to false
        }
    };

    return (
        <div className="bg-white text-black  flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center">🚀 Welcome to PencilGPT – Your Gateway to Crypto Knowledge! 📚</h1>
            <p className="mb-8 text-center">Unlock the power of artificial intelligence with PencilGPT, the ultimate web platform for all your crypto-related data needs.</p>
            <p className="mb-8 text-center">Whether you&apos;re a seasoned trader, a curious investor, or a crypto enthusiast, PencilGPT puts the world of cryptocurrency at your fingertips.</p>
            <p className="mb-8 text-center"> Fundamental analysis at your finger tips - paste the coin contract address - select the right chain and search.</p>
            <p className="mb-8 text-center font-bold"> Note: The coin must already be listed on CMC - Solana and Ton networks are not supported yet.</p>
            <p className="mb-8 text-center font-bold"> New token that's not on CMC will not return any result.</p>

            <div className="flex mb-4">
                <input
                    type="text"
                    value={contractAddress}
                    required={true}
                    onChange={(e) => setContractAddress(e.target.value)}
                    placeholder="Enter contract address"
                    className="border border-gray-300 rounded-md p-1 mr-1"

                />
                <select
                    value={chain}
                    required={true}
                    onChange={(e) => setChain(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"

                >
                    <option value="0x1">Etherum</option>
                    <option value="0x89">Polygon</option>
                    <option value="0x38">BinanceSC</option>
                    <option value="0xa86a">Avalanche</option>
                    <option value="0xfa">Fantom</option>
                    <option value="0x2a15c308d">Palm</option>
                    <option value="0x19">Cronos</option>
                    <option value="0xa4b1">Arbitrum</option>
                    <option value="0x2105">Base</option>
                    <option value="0x64">Gnosis</option>
                    <option value="0xa">Gnosis</option>
                    <option value="0xe705">Linea</option>
                    <option value="0x15b38">Chiliz</option>
                    <option value="moonbeam">Moonbeam</option>
                </select>
            </div>
            <button onClick={handleSearch} className="bg-blue-500 text-white rounded-md px-4 py-2 mb-4 hover:bg-blue-600">Search</button>
            
            {loading && <p className="font-beautiful">Please wait while I fetch the information ....</p>}
            {tokenData && tokenData.response && ( // Ensure tokenData is not null and has the expected properties
                <div className="flex flex-col items-center rounded-lg rounded-md border border-black m-4 p-4">
                    <h2 className="text-2xl font-bold mb-2">{tokenData.response.tokenName} ({tokenData.response.tokenSymbol})</h2>

                    <Image src={tokenData.response.tokenLogo} alt={tokenData.response.tokenName} className=" mb-2"  width={50}
  height={50}/>
                    <p className="mb-2 ">Price: {tokenData.response.usdPrice}</p>
                    <p className="mb-2">24hr Percent Change: {tokenData.response['24hrPercentChange']}</p>
                    <p className="mb-2">Exchange Name: {tokenData.response.exchangeName}</p>
                    <p className="mb-2">Exchange Address: {tokenData.response.exchangeAddress}</p>
                    <p className="mb-2">Token Decimals: {tokenData.response.tokenDecimals}</p>
                    <p className="mb-2"> Contract Verified?: {tokenData.response.verifiedContract ? 'Yes' : 'No'}</p>
                </div>
            )}

            {groqresult && (
                <div className="flex flex-col items-center rounded-lg rounded-md  pt-5 border border-black  p-4">

                    <ReactMarkdown
                        components={{
                            p: ({ node, ...props }) => <p style={styles} {...props} />,
                        }}
                    >
                        {groqresult}
                    </ReactMarkdown>

                </div>
            )}

        </div>

    );
}
