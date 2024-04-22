"use client"
import React, { useState } from 'react';

export default function Homepage() {
    const [contractAddress, setContractAddress] = useState('');
    const [network, setNetwork] = useState('mainnet');
    const [tokenData, setTokenData] = useState(null);

    const handleSearch = async () => {
        // try {
        //   const response = await axios.get(`https://your-dapp-api.com/token/${contractAddress}?network=${network}`);
        //   setTokenData(response.data);
        // } catch (error) {
        //   console.error('Error fetching token data:', error);
        // }
    };

    return (
        <div className="bg-white text-black p-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-center">Crypto Token Explorer</h1>
            <p className="mb-8 text-center">Discover and explore cryptocurrency tokens with ease</p>
            <p className="mb-8 text-center">Understanding the fundamentals of a project is crucial for making informed investment decisions in the crypto space.</p>
            <p className="mb-8 text-center"> Fundamental analysis involves evaluating various aspects of a project, such as its technology, team, use case, market potential, and community support.</p>

            <div className="flex mb-4">
                <input
                    type="text"
                    value={contractAddress}
                    onChange={(e) => setContractAddress(e.target.value)}
                    placeholder="Enter contract address"
                    className="border border-gray-300 rounded-md p-2 mr-2"
                />
                <select
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="border border-gray-300 rounded-md p-2"
                >
                    <option value="mainnet">Mainnet</option>
                    <option value="ropsten">Ropsten</option>
                    <option value="rinkeby">Rinkeby</option>
                    <option value="kovan">Kovan</option>
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
