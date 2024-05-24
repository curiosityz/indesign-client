const express = require('express');
const InDesignStylingService = require('../InDesignStylingService');

const app = express();
app.use(express.json());

const stylingService = new InDesignStylingService(process.env.GEMINI_API_KEY);

app.post('/applyStyles', async (req, res) => {
    const { text, documentId } = req.body;
    if (!text || !documentId) {
        return res.status(400).send({ error: 'Missing text or documentId' });
    }

    try {
        const stylingInstructions = await stylingService.analyzeContent(text);
        if (!stylingInstructions) {
            return res.status(500).send({ error: 'Failed to generate styling instructions' });
        }

        // Here, you would apply the styling instructions to the InDesign document.
        // This example does not include the logic for interacting with InDesign directly.
        // You would need to replace the following line with your own implementation.
        console.log(`Apply the following styling instructions to document ${documentId}:`, stylingInstructions);

        res.json({ message: 'Styling instructions generated successfully', stylingInstructions });
    } catch (error) {
        console.error('Error applying styles:', error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
