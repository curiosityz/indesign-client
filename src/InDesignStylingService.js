// src/InDesignStylingService.js
const generateChatReq = require('./generateChatReq');
const applyStylesToInDesignDoc = require('./applyStylesToInDesignDoc');

class InDesignStylingService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async analyzeContent(text) {
        // Updated to interface with Google Gemini API using the provided apiKey
        const response = await fetch(`https://google-gemini-api.com/analyze?apiKey=${this.apiKey}&text=${encodeURIComponent(text)}`);
        const data = await response.json();
        return data.stylingInstructions;
    }

    applyStyles(doc, stylingInstructions) {
        // Ensures correct interfacing with InDesign to apply styles based on instructions
        applyStylesToInDesignDoc(stylingInstructions, doc);
    }
}

module.exports = InDesignStylingService;
