# Agent Instructions: Toolkits & Checklists

This document provides instructions for AI agents working with the content in the `/Toolkits_and_Checklists/` directory.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles and linking conventions.
*   Working with interactive hubs and the global navigation system.

### 1. Purpose and Scope of this Directory
The `/Toolkits_and_Checklists/` directory houses practical, actionable job aids, checklists, simple templates, and quick-reference guides that analysts can use in their day-to-day work.

The main entry point is `Toolkits_and_Checklists/index.html`.

### 2. Content Structure and Types
*   Content consists of Markdown files, each representing a specific toolkit or checklist (e.g., `Credit_Analysis_Due_Diligence_Checklist.md`).
*   Each file should include a brief introduction explaining its purpose and how to use it effectively.
*   Use Markdown formatting effectively (e.g., checkboxes `- [ ]`) to make tools easy to use.

### 3. Specific Guidelines for Toolkits & Checklists
*   **Actionability:** Content must be highly practical and directly usable. Checklists should have clear, distinct items.
*   **Clarity and Simplicity:** Avoid jargon. If a tool is complex, consider if it belongs in a more detailed section elsewhere.
*   **Modularity:** Each file should be a distinct tool or checklist.

### 4. Linking Strategy
*   Link terms to the `Global_Financial_Glossary.md`.
*   Link checklist items or tool steps to more detailed explanations in other sections (e.g., a `Credit_Analysis_Due_Diligence_Checklist.md` should link to relevant `modules/`).
*   If an interactive version of a tool exists in `/Interactive_Notebooks/`, ensure a clear link from the `.md` version here.

### 5. Tools
*   **`Toolkits_and_Checklists/index.html`:** The main hub. Its internal JavaScript array (`filesInDir`) **must** be updated when new `.md` files are added.
*   **`js/nav_data.js`:** Update the global navigation for significant new additions.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **`index.html` Maintenance:** The JavaScript array in `index.html` is critical and must be updated when adding or renaming files.
*   **Usability:** The primary goal is usability. Use clear formatting and precise language. Consider if the Markdown is reasonably print-friendly.

**Roadmap / Planned Additions:**
*   **New Checklists:**
    *   Financial Model Review Checklist
    *   Covenant Analysis Checklist
    *   Industry Analysis Framework Checklist
    *   Management Meeting Question Template
    *   SWOT Analysis Template
*   **New Guides:**
    *   Template for a basic credit memo outline.
    *   Quick reference for common accounting red flags.
*   **Interactive Versions:** Consider developing Jupyter Notebook versions of some tools (like ratio calculators) in a new `Interactive_Notebooks/Toolkits/` subdirectory.
