// src/generateChatReq.js
const axios = require('axios');
const fs = require('fs');

class LLMClient {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.apiUrl = 'https://gemini.googleapis.com/v1/documents:analyze';
    }

    async analyzeText(text) {
        try {
            const response = await axios.post(this.apiUrl, {
                document: {
                    type: 'PLAIN_TEXT',
                    content: text
                },
                features: {
                    extractSyntax: true,
                    classifyText: true
                }
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.error('Error analyzing text:', error);
            return null;
        }
    }
}

const generateChatReq = async (text) => {
    const apiKey = process.env.GEMINI_API_KEY;
    const llmClient = new LLMClient(apiKey);

    const analysisData = await llmClient.analyzeText(text);
    if (!analysisData) return null;

    // Generate styling instructions based on the analysis
    const stylingInstructions = analysisData.tokens.map(token => {
        // Example logic: Apply styles based on token properties
        if (token.partOfSpeech.tag === 'NOUN') {
            return { index: token.index, style: 'bold' };
        } else if (token.partOfSpeech.tag === 'VERB') {
            return { index: token.index, style: 'italic' };
        }
        return null;
    }).filter(instruction => instruction !== null);

    return stylingInstructions;
};

module.exports = generateChatReq;
