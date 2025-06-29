# Agent Instructions - /js/ Directory

This directory contains JavaScript files critical for the global navigation system and potentially other root-level HTML page functionalities.

## General Guidelines for AI Agents:

*   **Purpose:** These scripts enable dynamic navigation and other key UI features.
*   **Modification:**
    *   **`global_nav.js`**: Only modify if explicitly tasked to change the *behavior* or *generation logic* of the global navigation menu.
    *   **`nav_data.js`**: This file defines the *content* of the global navigation menu. Modify this file if new top-level sections are added to the repository and need to appear in the global nav, or if existing links need to be changed or reordered. **Be extremely careful with syntax (JSON/JS object structure) in `nav_data.js` as errors can break navigation.**
*   **Code Clarity:** JavaScript should be clear and well-commented, especially `global_nav.js`.
*   **Impact:** Changes here are site-wide for HTML pages using this global navigation.
*   **Pathing:** These scripts are typically referenced from HTML files in the root or one level down (e.g., `../js/global_nav.js`).

## Key Files:

*   **`global_nav.js`**: Contains the logic to dynamically create and manage the global navigation menu.
*   **`nav_data.js`**: Defines the actual links and structure for the global navigation menu. This is the primary file to edit if the *content* of the navigation menu needs to change (e.g., adding a new main section link).

Refer to the root `AGENTS.MD` for general repository guidelines. For more general site scripts, see `assets/js/AGENTS.MD`.
