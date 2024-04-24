"use strict";
const Groq = require("groq-sdk");
let prompt = "Review the links and the news sources provided about the cryptocurrency token mentioned and provide a detailed fundamental and sentimental analysis based on the context provided. Your analysis should cover various aspects such as the tokenomics, project team, community engagement, development roadmap, market trends, and potential risks. Ensure to provide references from credible sources cited in the document to support your analysis. Pay attention to the token's historical performance, current market sentiment, technological advancements, partnerships, regulatory compliance, and any other relevant factors impacting its value and adoption.";
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