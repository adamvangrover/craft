# Agent Instructions for the Credit Analyst Development Hub

This document provides guidance for agents working on this project. The goal is to create a comprehensive and cohesive learning hub for credit analysts.

## Guiding Principles

*   **Clarity and Simplicity:** The content should be easy to understand for analysts at all levels. Avoid jargon where possible and explain complex concepts in simple terms.
*   **Practicality:** The content should be practical and applicable to the day-to-day work of a credit analyst. Use real-world examples and case studies where possible.
*   **Cohesion:** All the content should be linked together in a logical and intuitive way. The learning paths should be clear and easy to follow.
*   **Consistency:** Maintain a consistent style and tone throughout the hub.

## Development Guidelines

*   **Markdown Files:** All the core content should be in markdown files. This makes it easy to edit and maintain.
*   **HTML Files:** The HTML files should be used to provide a clean and readable interface for the markdown content. Use simple, semantic HTML and a consistent stylesheet.
*   **Linking:** All content should be linked together. The `index.md` and `index.html` files in each subdirectory should serve as the main navigation hubs.
*   **Future Development:** When adding new content, consider how it fits into the existing structure. Create new markdown files for new topics and link to them from the relevant index files.

# AGENTS.MD - Instructions for AI Content Developers

## 1. Purpose of This Directory

This directory, "fact," is a learning hub focused on the core skills of financial analysis. It is designed to be a practical, hands-on resource for analysts to develop their skills in:

*   **Financial Reporting and Analysis (fra):** Understanding and interpreting financial statements.
*   **Credit Risk Rating (pd):** Assessing the creditworthiness of a borrower.
*   **Regulatory Risk Rating (rr):** Understanding and applying regulatory risk ratings.

## 2. Structure of This Directory

This directory is organized into three main subdirectories:

*   `fra/`: Contains materials related to financial reporting and analysis.
*   `pd/`: Contains materials related to credit risk rating.
*   `rr/`: Contains materials related to regulatory risk rating.

Each of these subdirectories contains an `index.html` file that serves as an interactive learning hub for that topic. The content for these hubs is drawn from the markdown files within the same subdirectory.

## 3. Content Creation and Modification

*   **Interactive Hubs:** The `index.html` files in each subdirectory are the primary entry points for the content. They are designed to be interactive and should be updated to reflect any new content that is added.
*   **Markdown Files:** The markdown files contain the core content for each section. When adding new content, it should be added to a new or existing markdown file.
*   **CSS and JavaScript:** The `*.css` and `*.js` files are used to style and add interactivity to the HTML hubs. When adding new interactive features, the corresponding JavaScript file should be updated.

## 4. Linking

*   **Internal Links:** All links within this directory should be relative.
*   **External Links:** External links should be used sparingly and should be clearly marked as such.

## 5. Future Development

*   **More Interactivity:** The interactive hubs can be further enhanced with more quizzes, interactive exercises, and other engaging content.
*   **More Content:** The content can be expanded to cover more advanced topics in financial analysis.
*   **More Learning Paths:** New learning paths can be added to guide users through the content in a structured way.
