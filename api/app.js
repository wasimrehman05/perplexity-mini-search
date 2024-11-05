import express from 'express';
import { fetchSearchResults } from '../src/search.js';
import { generateAnswer } from '../src/generateAnswer.js';
import { config } from '../src/config.js';

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.post('/query', async (req, res) => {
    const userQuery = req.body.query;
    if (!userQuery) return res.status(400).json({ error: 'Query is required' });

    try {
        const searchResults = await fetchSearchResults(userQuery);
        const answer = await generateAnswer(searchResults);

        res.json({
            answer,
            sources: searchResults.map(result => ({
                title: result.title,
                link: result.link,
            })),
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
