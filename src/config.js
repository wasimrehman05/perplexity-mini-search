import dotenv from 'dotenv';
dotenv.config();

export const config = {
    googleApiKey: process.env.GOOGLE_API_KEY,
    googleCx: process.env.GOOGLE_CX,
    geminiApiKey: process.env.GEMINI_API_KEY,
    port: process.env.PORT || 4000,
};
