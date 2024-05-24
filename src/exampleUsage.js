// src/exampleUsage.js
const InDesignStylingService = require('./InDesignStylingService');
const fs = require('fs');

// Load the document text
const documentText = fs.readFileSync('path/to/your/document.txt', 'utf8');

// Create an instance of InDesignStylingService
const apiKey = 'YOUR_GOOGLE_GEMINI_API_KEY';
const stylingService = new InDesignStylingService(apiKey);

// Analyze the content
stylingService.analyzeContent(documentText).then(stylingInstructions => {
    if (!stylingInstructions) return;

    // Load the InDesign document
    const doc = app.activeDocument;

    // Apply styles to the document
    stylingService.applyStyles(doc, stylingInstructions);

    alert("Styles applied successfully!");
});
