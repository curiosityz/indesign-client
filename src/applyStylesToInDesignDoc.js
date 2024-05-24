// src/applyStylesToInDesignDoc.js
const applyStylesToInDesignDoc = (stylingInstructions, doc) => {
    stylingInstructions.forEach(instruction => {
        const paragraph = doc.stories[0].paragraphs[instruction.index]; // Adjust index as necessary
        switch (instruction.style) {
            case 'bold':
                paragraph.appliedParagraphStyle = doc.paragraphStyles.itemByName('Bold');
                break;
            case 'italic':
                paragraph.appliedParagraphStyle = doc.characterStyles.itemByName('Italic');
                break;
            // Add more cases as needed
        }
    });
};

module.exports = applyStylesToInDesignDoc;
