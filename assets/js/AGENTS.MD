# Agent Instructions - /assets/js/ Directory

This directory contains JavaScript files that provide interactivity, dynamic content loading, and other client-side functionalities for the HTML pages in this repository.

## General Guidelines for AI Agents:

*   **Purpose:** These scripts enhance user experience and enable dynamic features on web pages.
*   **Modification:** Only modify JavaScript files if explicitly tasked with changing client-side behavior or adding new interactive features. Be very specific about the desired functionality and logic.
*   **Code Clarity:** Write clear, well-commented JavaScript. Use meaningful variable and function names.
*   **Efficiency:** Be mindful of performance, especially with DOM manipulations or complex calculations, though clarity is often prioritized in educational contexts.
*   **Error Handling:** Implement basic error handling (e.g., checking if elements exist before manipulating them) where appropriate.
*   **Consistency:** Follow existing coding patterns and styles within the directory.
*   **Impact:** Changes to global scripts (like a main `script.js` or `global_nav.js`) can affect multiple pages. Test thoroughly if possible.
*   **New Scripts:** If adding a new script for a specific page or component, ensure it's well-scoped and doesn't conflict with existing scripts.

## Key Files (Illustrative):

*   `script.js`: May contain general utility functions or event handlers for common pages.
*   `quiz_loader.js`: Likely handles the logic for loading quiz questions, processing answers, and displaying feedback in `quiz_viewer.html`.
*   `global_nav.js`: Probably responsible for loading and managing the global navigation menu present on many HTML pages.
*   `nav_data.js`: Likely contains the data structure (e.g., JSON or JS object) defining the navigation links for `global_nav.js`. **Modifying this file directly impacts global navigation.**

## Important Considerations for `nav_data.js`:

*   If new top-level sections or pages are added to the repository that should appear in the global navigation, the `nav_data.js` file will likely need to be updated to include these new links.
*   Be very careful with the syntax (JSON or JS object structure) in `nav_data.js` as errors can break the global navigation.

Refer to `assets/AGENTS.MD` and the root `AGENTS.MD` for broader guidelines.
