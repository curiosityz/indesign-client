# InDesign Styling Service

## Google Gemini API Configuration

1. **Get API Key**:
   - Sign up for Google Gemini API and obtain an API key.

2. **Set Up Environment Variable**:
   - Create a `.env` file in the root of your project and add your API key:
     ```env
     GEMINI_API_KEY=your_api_key_here
     ```

3. **Install `dotenv` Package**:
   - Install the `dotenv` package to load environment variables:
     ```sh
     npm install dotenv
     ```

4. **Load Environment Variables in Your Code**:
   - At the top of your `generateChatReq.js` file, add:
     ```javascript
     require('dotenv').config();
     ```

## Using the InDesignStylingService

### Analyzing Text and Applying Styles

1. **Load Document Text**:
   ```javascript
   const fs = require('fs');
   const documentText = fs.readFileSync('path/to/your/document.txt', 'utf8');
Analyze Content:

javascript
Copy code
const stylingService = new InDesignStylingService(apiKey);
stylingService.analyzeContent(documentText).then(stylingInstructions => {
    if (!stylingInstructions) return;
    // Apply styles to InDesign document
});
Apply Styles to InDesign Document:

javascript
Copy code
const doc = app.activeDocument;
stylingService.applyStyles(doc, stylingInstructions);
alert("Styles applied successfully!");
Applying Styles to InDesign Documents
Example Workflow:
javascript
Copy code
// src/exampleUsage.js
const InDesignStylingService = require('./InDesignStylingService');
const fs = require('fs');

// Load the document text
const documentText = fs.readFileSync('path/to/your/document.txt', 'utf8');

// Create an instance of InDesignStylingService
const apiKey = 'GOOGLE_API_KEY';
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

## Setup Instructions for InDesign and Google Gemini Integration

To fully integrate InDesign with Google Gemini for applying design styles programmatically, follow these setup instructions:

1. **Obtain Google Gemini API Key**: Ensure you have a valid API key from Google Gemini.
2. **Configure Environment Variables**: Store your Google Gemini API key in a `.env` file as `GEMINI_API_KEY`.
3. **Install Dependencies**: Run the provided Python script `src/setupDependencies.py` to automatically install all necessary libraries and dependencies for the integration.
4. **Use InDesignStylingService**: Utilize the `InDesignStylingService` class for analyzing text content and applying styles in InDesign documents as demonstrated in `src/exampleUsage.js`.

These steps ensure that your project is fully equipped to interface with InDesign and Google Gemini, enabling intelligent application of design styles based on content analysis.

## API Endpoint for InDesign Styling

An API endpoint is now available for calling from InDesign to programmatically apply design styles from the style guide for a given text. This endpoint is defined in `src/api/InDesignStylingEndpoint.js` and utilizes the functionality defined in `src/InDesignStylingService.js` for analyzing text and generating styling instructions.

To use the API endpoint, send a POST request to `/applyStyles` with the text content as JSON payload. The endpoint will return styling instructions based on the analysis.

Example usage:
```javascript
fetch('http://localhost:3000/applyStyles', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text: 'Your text here' }),
})
.then(response => response.json())
.then(data => console.log(data));
```

This API endpoint provides a seamless way to integrate InDesign with Google Gemini, allowing for the intelligent application of design styles to text content.
