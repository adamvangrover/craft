# Agent Instructions - /assets/ Directory

This directory and its subdirectories (`css/`, `js/`, potentially `images/` or `fonts/` in the future) store static assets used by the HTML pages in this repository.

## General Guidelines for AI Agents:

*   **Purpose:** Understand that files here are not typically Markdown content for direct reading, but support the presentation and interactivity of `.html` files.
*   **Modification:** Only modify files in this directory if specifically instructed to change styling (CSS), client-side scripting (JS), or to add/update shared image assets.
*   **Pathing:** When referencing assets from HTML files, ensure relative paths are correct (e.g., `../assets/css/style.css` if the HTML file is one level down).
*   **Optimization (Conceptual):** While not directly performed by text-based agents, be aware that assets like images might ideally be optimized for size, and CSS/JS could be minified in a production build step (though this is likely outside an agent's direct actions unless specifically tooled).
*   **Adding New Assets:** If adding new global CSS, JS, or images, place them in the appropriate subdirectory (`css/`, `js/`, `images/`). Ensure they are referenced correctly by any pages that need them.
*   **Consistency:** If modifying CSS or JS, try to maintain consistency with the existing coding style found in other files within the same directory.

## Directory-Specific Instructions:

*   **`assets/css/`:** Contains stylesheets.
    *   `style.css`: Main global styles for viewers and potentially `home.html`.
    *   `simple_viewer.css`: Styles for the simple Markdown list-and-display viewers.
    *   `shared-readme-styles.css`: Styles potentially used by more complex HTML pages that render Markdown-like content.
    *   `quiz_viewer.css`: Specific styles for the quiz viewing interface.
*   **`assets/js/`:** Contains JavaScript files.
    *   `script.js`: Potentially global JavaScript functions or event handlers for `home.html` or other main pages.
    *   `quiz_loader.js`: Specific JavaScript for loading and managing quiz interactivity.

Refer to the root `AGENTS.MD` for general repository guidelines.
