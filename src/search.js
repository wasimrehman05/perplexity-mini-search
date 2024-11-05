import axios from 'axios';
import { config } from './config.js';

export async function fetchSearchResults(query) {
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${config.googleApiKey}&cx=${config.googleCx}`;

    try {
        const response = await axios.get(url);
        const items = response.data.items || [];
        return items.map(item => ({
            title: item.title,
            link: item.link,
            snippet: item.snippet,
        }));
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw new Error('Failed to retrieve search results');
    }
}
