# Agent Instructions - /assets/css/ Directory

This directory contains Cascading Style Sheets (CSS) that define the visual presentation of HTML pages throughout the repository.

## General Guidelines for AI Agents:

*   **Purpose:** These files control the look and feel (layout, fonts, colors, etc.) of web content.
*   **Modification:** Only modify CSS files if explicitly tasked with changing styling. Be specific about which elements and properties to change.
*   **Selectors:** Use clear and efficient CSS selectors. Prefer class-based styling over ID-based styling for reusability where appropriate.
*   **Comments:** Comment complex CSS rules or sections for clarity.
*   **Consistency:** Maintain a consistent styling approach with existing CSS files unless a redesign is intended.
*   **Impact:** Changes to global stylesheets (like `style.css` or `shared-readme-styles.css`) can affect many pages. Test or preview changes carefully if possible.
*   **New Stylesheets:** If adding a stylesheet for a very specific new component or page type, consider if its styles can be incorporated into existing relevant files or if a new, narrowly scoped file is justified.

## Key Files (Illustrative):

*   `style.css`: Likely contains global styles for main pages like `home.html` and common elements.
*   `simple_viewer.css`: Styles for the standardized Markdown list-and-display HTML viewers.
*   `shared-readme-styles.css`: May contain styles used for rendering Markdown content within more complex HTML pages.
*   `quiz_viewer.css`: Styles specific to the quiz interface.

Refer to `assets/AGENTS.MD` and the root `AGENTS.MD` for broader guidelines.
