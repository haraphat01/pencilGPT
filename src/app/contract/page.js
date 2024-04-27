'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

const styles = {
    color: 'black', // Example color
    fontSize: '16px', // Example font size
    fontFamily: 'Arial, sans-serif',
    paddingTop: '1rem' // Example font family
};

const SmartContract = () => {
    const [contractCode, setContractCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [contractResult, setContractResult] = useState();

    const handleCodeChange = (value) => {
        setContractCode(value);
    };

    console.log(contractCode);

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
                    chain: contractCode,
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
            setContractCode('');
            setLoading(false); // Set the loading state back to false
        }
    };

    return (
        <div className="container d-flex mx-auto p-4">
             <h1 className="text-3xl font-bold mb-4 text-center">Why Scan a Smart Contract Before Investing in a Coin?</h1>
            <p className="mb-8 text-center">Scanning a smart contract can help you identify potential risks and vulnerabilities in the code.</p>
            <p className="mb-8 text-center">This can give you a better idea of what you&apos;re investing in and how the coin will behave in different situations.</p>
            <AceEditor
                className='CodeEditor'
                height="100px"
                value={contractCode}
                onChange={handleCodeChange}
                mode="javascript"
                theme="monokai"
                fontSize="16px"
                highlightActiveLine={true}
                placeholder='Paste the contract address'
                setOptions={{
                    enableLiveAutocompletion: true,
                    showLineNumbers: true,
                    tabSize: 2
                }}
            />
            <div className='button-css'>
                <button onClick={handleSubmit} className="bg-blue-500 text-white text-center rounded-md px-4 py-2 mt-5 hover:bg-blue-600 button1">Submit</button>
            </div>
            <div className='button1'>
                {loading && <p className="font-beautiful text-center">Please wait while I scan the smart contract ....</p>}
                {contractResult && (
                    <div className=" rounded-lg rounded-md  pt-5 border border-black  p-4">
                        <ReactMarkdown
                            components={{
                                p: ({ node, ...props }) => <p style={styles} {...props} />,
                            }}
                        >
                            {contractResult}
                        </ReactMarkdown>
                    </div>
                )}
            </div>
        </div>
    )
};

export default SmartContract;