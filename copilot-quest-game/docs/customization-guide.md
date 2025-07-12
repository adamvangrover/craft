# Customization Guide

## Introduction
This guide will walk you through the process of customizing Copilot Quest.

## Adding New Questions
To add new questions, open the `game-logic.js` file and add new questions to the `questions` object.

### Example
```javascript
const questions = {
  risk: [
    { text: "What is the biggest risk to our company?", type: "open" },
    { text: "How can we mitigate the risk of a data breach?", type: "open" },
    { text: "What are the top three risks in our industry?", type: "open" },
    // Add your new question here
  ],
  // ...
};
```

## Creating Custom Game Modes
To create a custom game mode, you can modify the `game-logic.js` file to add new game logic.

### Step-by-Step Guide
1. Create a new function for your custom game mode.
2. Add your custom game logic to the function.
3. Call the function when the game starts.

### Example
```javascript
function customGameMode() {
  // Add your custom game logic here
}

// Call the function when the game starts
customGameMode();
```

## Modifying the Game's Appearance
To modify the game's appearance, you can edit the `styles.css` file.

### Example
```css
body {
  background-color: #f0f0f0;
  color: #333;
  /* Add your custom styles here */
}
```
