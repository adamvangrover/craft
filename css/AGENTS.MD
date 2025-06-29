# Agent Instructions - /css/ Directory

This directory contains CSS files, primarily `global_nav.css`, which styles the global navigation menu injected into many HTML pages across the repository.

## General Guidelines for AI Agents:

*   **Purpose:** These CSS files control the visual presentation of specific root-level HTML components.
*   **Modification:** Only modify files in this directory if specifically instructed to change styling related to the global navigation or other root-level page elements they might control.
*   **Specificity:** Be mindful that `global_nav.css` affects a widely used component. Changes should be tested or carefully considered for their broad impact.
*   **Selectors & Style:** Use clear CSS selectors. Maintain consistency with existing styles if making minor changes.
*   **Pathing:** This CSS is typically referenced from HTML files in the root or one level down (e.g., `../css/global_nav.css`).

## Key Files:

*   **`global_nav.css`**: Styles for the main navigation bar found on `home.html` and injected into various `index.html` viewers. Changes here will have a site-wide effect on that navigation component.

Refer to the root `AGENTS.MD` for general repository guidelines. For more general site styles, see `assets/css/AGENTS.MD`.
