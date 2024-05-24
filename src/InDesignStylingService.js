// src/InDesignStylingService.js
const generateChatReq = require('./generateChatReq');
const applyStylesToInDesignDoc = require('./applyStylesToInDesignDoc');

class InDesignStylingService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async analyzeContent(text) {
        return await generateChatReq(text);
    }

    applyStyles(doc, stylingInstructions) {
        applyStylesToInDesignDoc(stylingInstructions, doc);
    }
}

module.exports = InDesignStylingService;
