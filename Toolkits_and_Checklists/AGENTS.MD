# AGENTS.MD - Toolkits and Checklists Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/Toolkits_and_Checklists/` directory is designed to house practical, actionable job aids, checklists, templates (simple ones, complex models go in `/Financial_Modeling/` or `/Interactive_Notebooks/`), and quick-reference guides that analysts can use in their day-to-day work.

The main entry point is `Toolkits_and_Checklists/README.md`, which should list and briefly describe the available tools.

## 2. Content Structure and Types
Content will primarily be Markdown files, each representing a specific toolkit or checklist. Examples:
*   `Credit_Analysis_Due_Diligence_Checklist.md`
*   `Basic_Financial_Ratios_Calculator_Guide.md` (This might describe how to build one in Excel or link to an interactive notebook version).
*   `Covenant_Review_Checklist.md`
*   `Early_Warning_Signs_Checklist.md`

## 3. Specific Guidelines for Toolkits and Checklists
*   **Actionability:** Content should be highly practical and directly usable. Checklists should have clear items. Guides should be step-by-step if applicable.
*   **Clarity and Simplicity:** Avoid jargon where possible. If a tool is complex, break it down.
*   **Format for Usability:** Use Markdown formatting effectively (headings, bullet points, checkboxes `[ ]` or `[x]` for checklists) to make the tools easy to read and use.
*   **Modularity:** Each file should be a distinct tool or checklist.
*   **Guidance on Use:** Include a brief introduction in each file explaining the purpose of the tool/checklist and how to use it effectively.
*   **Interactive Versions:** If a checklist or simple tool can be made more effective as an interactive Jupyter Notebook (e.g., a ratio calculator, a checklist that allows users to tick boxes and see a summary), then the `.md` file here might describe it and link to the `.ipynb` file in `/Interactive_Notebooks/Toolkits/` (a new subdirectory there).

## 4. Linking
*   Link terms used in the toolkits to the `Global_Financial_Glossary.md`.
*   Refer users to more detailed explanations of underlying concepts in other sections of the repository. For example:
    *   `Credit_Analysis_Due_Diligence_Checklist.md` should link to relevant modules in `/corporate-credit-risk-analyst-training/`.
    *   A financial ratios guide should link to `/Financial_Modeling/` or `/CFA/` materials on FSA.
*   If an interactive version of a tool exists in `/Interactive_Notebooks/`, ensure a clear link from the `.md` version here.

## 5. Roadmap / Planned Additions (Illustrative)
*   SWOT Analysis template for company review.
*   Meeting preparation checklist for analyst calls.
*   Template for a basic credit memo outline.
*   Interactive financial ratio calculator notebook.

Refer to the root `AGENTS.MD` for general guidelines.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based tools.
