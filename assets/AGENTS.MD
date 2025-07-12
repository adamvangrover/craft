# Agent Instructions - /assets/ Directory

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope
This directory and its subdirectories (`assets/css/`, `assets/js/`, and potentially `assets/images/` or `assets/fonts/` in the future) store general static assets used by various HTML pages across the repository. These assets support the presentation and interactivity of content.

**Distinction from root `css/` and `js/` directories:**
*   The root `css/` and `js/` directories are primarily for assets related to the global navigation system and specific root-page functionalities (e.g., `home.html` direct scripts).
*   This `assets/` directory is for more broadly shared stylesheets (e.g., for Markdown rendering, quiz viewers, general content styling) and JavaScript helpers not tied directly to the global navigation.

## 2. General Guidelines for AI Agents

*   **Purpose:** Understand that files here are not typically Markdown content for direct reading, but support the presentation and interactivity of `.html` files.
*   **Modification:** Only modify files in this directory if specifically instructed to change styling (CSS), client-side scripting (JS), or to add/update shared image/font assets.
*   **Pathing:** When referencing assets from HTML files, ensure relative paths are correct (e.g., `../assets/css/style.css` if the HTML file is one level down from the root, or `assets/css/style.css` if the HTML file is at the root).
*   **Adding New Assets:** If adding new general-purpose CSS, JS, or images, place them in the appropriate subdirectory (`assets/css/`, `assets/js/`, `assets/images/`). Ensure they are referenced correctly by any pages that need them.
*   **Consistency:** If modifying CSS or JS, try to maintain consistency with the existing coding style found in other files within the same directory.

## 3. Directory-Specific Instructions

*   **`assets/css/`:** Contains general-purpose stylesheets.
    *   `style.css`: General styles that can be applied to various HTML viewers or content pages.
    *   `simple_viewer.css`: Styles for the simple Markdown list-and-display viewers (e.g., `primers/index.html`).
    *   `shared-readme-styles.css`: Styles used by HTML pages that render rich Markdown content.
    *   `quiz_viewer.css`: Specific styles for the `quiz_viewer.html` interface.
*   **`assets/js/`:** Contains general-purpose JavaScript files.
    *   `script.js`: General JavaScript functions or event handlers for common interactive elements, not specific to the global navigation.
    *   `quiz_loader.js`: Specific JavaScript for loading and managing quiz interactivity within `quiz_viewer.html`.

## 4. Developer Notes & Future Considerations

*   **Images and Fonts:** Currently, there isn't a dedicated `assets/images/` or `assets/fonts/` directory. If such assets are needed globally, they should be created here.
*   **Optimization:** While not directly performed by text-based agents, be aware that assets like images might ideally be optimized for size, and CSS/JS could be minified in a production build step. This is currently outside an agent's direct actions unless specifically tooled.
*   **Modularity:** Consider creating more specific CSS files if `style.css` becomes too large or unwieldy.
