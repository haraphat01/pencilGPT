"use strict";
const Groq = require("groq-sdk");
let prompt = "Review this smart contract and give your honest review about it, your response should contain full analysis of the smart contract, the security flaws, is the ownership renounced and other things that can be improved.";
async function getGroqChatCompletion(content) {
    const groq = new Groq({
        apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY
    });

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {

                    role: "system",
                    content: prompt
                },
                {

                    role: "user",
                    content: content
                }
            ],
            model: "llama3-70b-8192",
            temperature: 1,
            max_tokens: 2024
        });

        return chatCompletion.choices[0]?.message?.content || "";
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        return "";
    }
}
export default getGroqChatCompletion