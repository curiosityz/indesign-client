// src/applyStylesToInDesignDoc.js
const applyStylesToInDesignDoc = (stylingInstructions, doc) => {
    // Ensure the document and styling instructions are provided
    if (!doc || !stylingInstructions) {
        throw new Error('Document or styling instructions are missing');
    }

    // Iterate over each styling instruction
    stylingInstructions.forEach(instruction => {
        // Find the corresponding paragraph in the InDesign document
        const paragraph = doc.stories[0].paragraphs[instruction.index];

        // Apply the specified style to the paragraph
        switch (instruction.style) {
            case 'bold':
                paragraph.appliedParagraphStyle = doc.paragraphStyles.itemByName('Bold');
                break;
            case 'italic':
                paragraph.appliedParagraphStyle = doc.characterStyles.itemByName('Italic');
                break;
            // Additional cases for other styles can be added here
            // Refine function to accurately apply styles based on analysis from Google Gemini
            case 'header':
                paragraph.appliedParagraphStyle = doc.paragraphStyles.itemByName('Header');
                break;
            case 'subheader':
                paragraph.appliedParagraphStyle = doc.paragraphStyles.itemByName('Subheader');
                break;
            case 'quote':
                paragraph.appliedParagraphStyle = doc.paragraphStyles.itemByName('Quote');
                break;
        }
    });
};

module.exports = applyStylesToInDesignDoc;
