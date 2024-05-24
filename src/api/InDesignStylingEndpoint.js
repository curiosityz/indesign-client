// src/api/InDesignStylingEndpoint.js
const express = require('express');
const InDesignStylingService = require('../InDesignStylingService');

const app = express();
app.use(express.json());

const stylingService = new InDesignStylingService(process.env.GEMINI_API_KEY);

app.post('/applyStyles', async (req, res) => {
    const { text } = req.body;
    if (!text) {
        return res.status(400).send({ error: 'Text is required.' });
    }

    try {
        const stylingInstructions = await stylingService.analyzeContent(text);
        if (!stylingInstructions) {
            return res.status(500).send({ error: 'Failed to analyze text.' });
        }

        // This is where the integration with InDesign would occur
        // For demonstration purposes, we're just returning the styling instructions
        return res.status(200).send(stylingInstructions);
    } catch (error) {
        console.error('Error applying styles:', error);
        return res.status(500).send({ error: 'Internal server error.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`InDesign Styling Endpoint listening on port ${PORT}`);
});
