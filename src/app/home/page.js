"use client"
import React, { useState } from 'react';

export default function Homepage() {
    const [contractAddress, setContractAddress] = useState('');
    const [chain, setChain] = useState('0x1');
    const [tokenData, setTokenData] = useState('');
    const [loading, setLoading] = useState('');

    const handleSearch = async (e) => {
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
                setLoading(false);
                // Handle the response as needed

            } else {
                console.error('Failed to send data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };
    console.log("token data", tokenData)
    return (
        <div className="bg-white text-black  flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center">Crypto Token Explorer</h1>
            <p className="mb-8 text-center">Discover and explore cryptocurrency tokens with ease</p>
            <p className="mb-8 text-center">Understanding the fundamentals of a project is crucial for making informed investment decisions in the crypto space.</p>
            <p className="mb-8 text-center"> Fundamental analysis involves evaluating various aspects of a project, such as its technology, team, use case, market potential, and community support.</p>

            <div className="flex mb-4">
                <input
                    type="text"
                    value={contractAddress}
                    required={true}
                    onChange={(e) => setContractAddress(e.target.value)}
                    placeholder="Enter contract address"
                    className="border border-gray-300 rounded-md p-2 mr-2"

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
            {loading && <p>Loading...</p>} {/* Show a loading message while waiting for the API response */}
            {tokenData && tokenData.response && ( // Ensure tokenData is not null and has the expected properties
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold mb-2">{tokenData.response.tokenName} ({tokenData.response.tokenSymbol})</h2>
                    <img src={tokenData.response.tokenLogo} alt={tokenData.response.tokenName} className="w-24 h-24 mb-2" />
                    <p className="mb-2 ">Price: {tokenData.response.usdPrice}</p>
                    <p className="mb-2">24hr Percent Change: {tokenData.response['24hrPercentChange']}</p>
                    <p className="mb-2">Exchange Name: {tokenData.response.exchangeName}</p>
                    <p className="mb-2">Exchange Address: {tokenData.response.exchangeAddress}</p>
                    <p className="mb-2">Token Decimals: {tokenData.response.tokenDecimals}</p>
                    <p className="mb-2"> Contract Verified?: {tokenData.response.verifiedContract ? 'Yes' : 'No'}</p>
                </div>
            )}
        </div>

    );
}
