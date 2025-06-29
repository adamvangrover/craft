# Root JavaScript Directory

## Overview

This directory contains JavaScript files that are likely used for core functionalities of the repository's HTML interface, particularly the global navigation system.

## Contents:

*   **`global_nav.js`**: This script is likely responsible for dynamically creating and managing the global navigation menu that appears on many HTML pages across the repository. It probably fetches navigation data and injects the menu into a placeholder element.
*   **`nav_data.js`**: This file probably contains the actual data (e.g., in JSON or a JavaScript object format) that defines the structure and links for the global navigation menu. Modifications to this file directly impact the links available in the global nav.

## Purpose:

The scripts in this directory are crucial for site-wide navigation and user experience on the HTML pages. They ensure a consistent navigation interface.

**Note:** Changes to these files, especially `nav_data.js`, can have a broad impact on site navigation. `global_nav.js` changes can affect how the navigation functions.

For agent instructions on handling JavaScript, refer to `js/AGENTS.MD`.
