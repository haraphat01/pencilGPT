"use client"
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import React, { useState } from 'react';

export default function smartContract() {
    const [contractCode, setContractCode] = useState('');
    const [contractResult, setContractResult] = useState()

    const handleCodeChange = (editor, data, value) => {
        setContractCode(value);
    };

    const handleSubmit = async (e) => {
        // Send contractCode to your searchToken API
        console.log(contractCode);
        setLoading(true); // Set the loading state to true
        const apiUrl = '/api/contractAnalysis'; // Your API route URL
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
                 // Update the tokenData state with the API response
                setContractResult(result.groqresult);
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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Why Scan a Smart Contract Before Investing in a Coin?</h1>
            <p className="mb-4">Scanning a smart contract can help you identify potential risks and vulnerabilities in the code. This can prevent you from investing in a coin that might be prone to hacking or other security issues.</p>
            <p className="mb-4">It can also help you understand the functionality of the coin and the terms of the contract. This can give you a better idea of what you're investing in and how the coin will behave in different situations.</p>
            <p className="mb-4">In short, scanning a smart contract can help you make more informed investment decisions and reduce the risk of losing your money.</p>
            <CodeMirror
                value={contractCode}
                onBeforeChange={handleCodeChange}
                className=""
                options={{
                    lineNumbers: true,
                    mode: 'javascript',
                    theme: 'material'
                }}
            />
            <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
        </div>
    )
}