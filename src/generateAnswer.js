import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from './config.js';

const genAI = new GoogleGenerativeAI(config.geminiApiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-002" });


export async function generateAnswer(searchResults) {

    const generationConfig = {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 250,
    };

    const chatSession = model.startChat({
        generationConfig,
    });

    // Concatenate search results into a single string
    const userMessage = `Here are some search results: ${searchResults.map(result => result.snippet).join(" ")}. Can you provide a concise answer to the query?`;

    try {
        // Pass the message as a simple string
        const { response } = await chatSession.sendMessage(userMessage);

        // Return the generated response text
        return response.text();
    } catch (error) {
        console.error('Error generating answer:', error);
        throw new Error('Failed to generate an answer');
    }
}
