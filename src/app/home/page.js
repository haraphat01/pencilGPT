"use client"
import React, { useState } from 'react';

export default function Homepage() {
    const [contractAddress, setContractAddress] = useState('');
    const [chain, setChain] = useState('mainnet');
    const [tokenData, setTokenData] = useState(null);

    const handleSearch = async (e) => {
        console.log(chain, contractAddress)
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
                // Handle the response as needed
                console.log("result", result)
            } else {
                console.error('Failed to send data:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };

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

            {tokenData && (
                <div>
                    <h2>{tokenData.name} ({tokenData.symbol})</h2>
                    <p>Total Supply: {tokenData.totalSupply}</p>
                    <p>Current Price: {tokenData.currentPrice}</p>
                    {/* Add more details here */}
                </div>
            )}
        </div>
    );
}
