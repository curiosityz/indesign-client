// src/exampleUsage.js
const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_ENDPOINT = 'http://localhost:3000/applyStyles';

app.post('/sendTextForStyling', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send({ error: 'Text is required.' });
    }

    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error('Failed to apply styles');
        }

        const stylingInstructions = await response.json();
        return res.status(200).send(stylingInstructions);
    } catch (error) {
        console.error('Error sending text for styling:', error);
        return res.status(500).send({ error: 'Internal server error.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
