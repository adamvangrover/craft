# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and formatting.
*   **Clarity and Actionability:** Toolkits and checklists must be extremely clear, practical, and easy to use.
*   **Markdown Best Practices:** Use Markdown effectively, especially checklists (`- [ ]`) and structured lists/tables.
*   **Accuracy:** Ensure any formulas, process steps, or checklist items are accurate and reflect sound analytical practices.
*   **File Naming:** Use descriptive names (e.g., `Due_Diligence_Checklist.md`).
*   **Links:** Use relative links. Verify functionality. Link to detailed explanations in other sections where a checklist item might require more background.
*   **Updating Navigation:** When adding new content:
    *   Update `Toolkits_and_Checklists/README.md` (the "Core Content Areas" section).
    *   Update `Toolkits_and_Checklists/index.html` (`filesInDir` JavaScript array).
    *   Consider if `home.html` or the main repository `README.md` need updates.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Toolkits & Checklists

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Toolkits_and_Checklists/` directory is designed to house practical, actionable job aids, checklists, simple templates, and quick-reference guides that analysts can use in their day-to-day work. Complex models belong in `/Financial_Modeling/` or `/Interactive_Notebooks/`.

The main human-readable guide is `Toolkits_and_Checklists/README.md`.
The interactive HTML view is `Toolkits_and_Checklists/index.html`.

### 2. Hierarchy and Development Notes
*   Content will primarily be Markdown files, each representing a specific toolkit or checklist (e.g., `Credit_Analysis_Due_Diligence_Checklist.md`, `Basic_Financial_Ratios_Calculator_Guide.md`).
*   **Development Focus:** Ensure each item is self-contained and provides immediate utility. Prioritize checklists for common, repeatable analytical tasks.

### 3. Specific Content Guidelines
*   **Actionability:** Content should be highly practical and directly usable. Checklists should have clear, distinct items. Guides should be step-by-step if applicable.
*   **Clarity and Simplicity:** Avoid jargon where possible. If a tool is complex, break it down or consider if it belongs in a more detailed section elsewhere.
*   **Format for Usability:** Use Markdown formatting effectively (headings, bullet points, checkboxes `[ ]` or `[x]` for checklists) to make the tools easy to read and use.
*   **Modularity:** Each file should be a distinct tool or checklist.
*   **Guidance on Use:** Include a brief introduction in each file explaining the purpose of the tool/checklist and how to use it effectively. Include disclaimers if the tool is a simplification.
*   **Interactive Versions:** If a checklist or simple tool can be made more effective as an interactive Jupyter Notebook (e.g., a ratio calculator, a checklist that allows users to tick boxes and see a summary), then the `.md` file here might describe it and link to the `.ipynb` file in a relevant `/Interactive_Notebooks/` subdirectory (perhaps `Interactive_Notebooks/Toolkits/` if created).

### 4. Linking Strategy
*   Link terms used in the toolkits to the `Global_Financial_Glossary.md`.
*   Refer users to more detailed explanations of underlying concepts in other sections of the repository. For example:
    *   `Credit_Analysis_Due_Diligence_Checklist.md` should link to relevant modules in `/corporate-credit-risk-analyst-training/` or `/Risk_Management/Credit_Risk/`.
    *   A financial ratios guide should link to `/Financial_Modeling/` or `/CFA/` materials on FSA.
*   If an interactive version of a tool exists in `/Interactive_Notebooks/`, ensure a clear link from the `.md` version here.

### 5. Roadmap / Planned Additions (from `README.md`)
*   Financial Model Review Checklist.
*   Covenant Analysis Checklist.
*   Industry Analysis Framework Checklist.
*   Management Meeting Question Template.
*   SWOT Analysis template.
*   Template for a basic credit memo outline.

Refer to the root `AGENTS.MD` for general guidelines.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based tools.
