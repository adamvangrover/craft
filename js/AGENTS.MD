# Agent Instructions - /js/ Directory

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope
This directory contains JavaScript files that are critical for specific, often root-level, HTML page functionalities, with the most important being the global navigation system.

**Distinction from `assets/js/` directory:**
*   Files in `assets/js/` are for general site-wide JavaScript helpers or page-specific scripts (e.g., quiz loader).
*   Files in this `js/` directory (i.e., at the repository root) are primarily for the global navigation system (`nav_data.js`, `global_nav.js`) and potentially other scripts directly controlling core behaviors of root-level pages like `home.html`.

## 2. General Guidelines for AI Agents

*   **Purpose:** These scripts enable dynamic navigation and other key UI features on main pages.
*   **Modification:**
    *   **`global_nav.js`**: Only modify if explicitly tasked to change the *behavior*, *generation logic*, or *event handling* of the global navigation menu. This script is responsible for rendering the menu based on `nav_data.js`.
    *   **`nav_data.js`**: This file defines the *content and structure* of the global navigation menu. **This is the primary file to edit if new sections are added to the repository and need to appear in the global navigation, or if existing links need to be changed, reordered, or have their types updated.**
        *   **Extreme caution is required when editing `nav_data.js`.** It contains a JavaScript array of objects. Syntax errors (e.g., missing commas, incorrect bracing, invalid property names) will break the global navigation across the entire site.
        *   Refer to the `AGENTS.MD` (root file, section 10) for details on the structure of navigation items and their `type` properties.
*   **Code Clarity:** JavaScript, especially `global_nav.js`, should be clear and well-commented.
*   **Impact:** Changes to these files, particularly `nav_data.js` and `global_nav.js`, are site-wide for all HTML pages that include the global navigation. Test thoroughly by loading `home.html` or another page that uses the global nav.
*   **Pathing:** These scripts are typically referenced from HTML files in the root (e.g., `js/global_nav.js`) or one level down (e.g., `../js/global_nav.js`). The paths within `nav_data.js` for `href` properties are relative to the repository root.

## 3. Key Files

*   **`nav_data.js`**: Defines the actual links, text, types, and hierarchical structure for the global navigation menu. **This is the most frequently edited file in this directory when site structure changes.**
*   **`global_nav.js`**: Contains the client-side JavaScript logic to read `navData` (from `nav_data.js`) and dynamically generate the HTML for the navigation menu. It also handles interactivity like expanding/collapsing sections.

## 4. Developer Notes & Future Considerations

*   **Error Handling:** `global_nav.js` could potentially be enhanced with more robust error handling in case `nav_data.js` has minor issues, though preventing errors in `nav_data.js` is paramount.
*   **JavaScript Libraries/Frameworks:** The current navigation system uses vanilla JavaScript. Future iterations might consider lightweight libraries if more complex state management or UI interactions are needed, but the goal is to keep it simple and performant.
*   **Linting/Formatting:** Implementing a JavaScript linter (like ESLint) and formatter (like Prettier) could help maintain code quality and consistency, especially in `nav_data.js`.
*   **Performance:** While the current navigation data is manageable, if it grows extremely large, performance implications for parsing and rendering might need to be considered.
