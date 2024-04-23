"use strict";
const Groq = require("groq-sdk");
let prompt = "Review the links and the news about the cryptocurrency token mentioned and provide a detailed fundamental analysis based on the context from the attached context. Your analysis should cover various aspects such as the tokenomics, project team, community engagement, development roadmap, market trends, and potential risks. Ensure to provide references from credible sources cited in the document to support your analysis. Pay attention to the token's historical performance, current market sentiment, technological advancements, partnerships, regulatory compliance, and any other relevant factors impacting its value and adoption.";
async function getGroqChatCompletion(content) {
    const groq = new Groq({
        apiKey: process.env.GROQ_API_KEY
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
            model: "mixtral-8x7b-32768"
        });
        
        return chatCompletion.choices[0]?.message?.content || "";
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        return "";
    }
}
export default getGroqChatCompletion