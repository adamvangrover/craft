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
*   Template for a basic credit memo outline/structure.
*   Checklist for reviewing data room contents during due diligence.
*   Quick reference for common accounting red flags.

### 6. Developer Notes & Future Considerations

**Developer Notes:**
*   **`Toolkits_and_Checklists/index.html` Maintenance:** This HTML file uses a JavaScript array (typically `filesInDir` or similar) to list the Markdown files in this section. When adding a new toolkit or checklist `.md` file, or renaming/reordering existing ones, this array in `index.html` **must** be updated for discoverability via the interactive viewer.
*   **Actionability and Clarity:** These are paramount. Toolkits should be immediately usable. Checklists should have clear, distinct, and actionable items. Use precise language.
*   **Markdown Formatting:** Leverage Markdown's features for checklists (`- [ ] Task`), tables, and structured lists to enhance usability.
*   **Guidance on Use:** Each toolkit/checklist `.md` file should include a brief introduction explaining its purpose, intended audience, and how to use it effectively. Include disclaimers if the tool is a simplification or not exhaustive.
*   **Print-Friendly Consideration:** While not a primary design constraint for agents, consider if the Markdown structure lends itself to being reasonably print-friendly, as users might want to print checklists.

**Roadmap / Future Considerations:**
*   **Content Expansion:**
    *   Systematically develop the planned additions: Financial Model Review Checklist, Covenant Analysis Checklist, Industry Analysis Framework Checklist, Management Meeting Question Template, SWOT Analysis template.
    *   Add a quick reference guide for common Excel formulas used in finance.
    *   Develop a simple "Early Warning Signals" checklist for credit monitoring.
    *   Create a toolkit for preparing a basic sources and uses table.
*   **Interactive Versions:**
    *   For certain tools (e.g., financial ratio calculators, simple scenario analysis templates), consider developing interactive Jupyter Notebook versions in `Interactive_Notebooks/Toolkits/` (a new subdirectory might be needed there). The `.md` file here would then describe the tool and link to the interactive notebook.
*   **Version Control/Updates:**
    *   As best practices evolve, checklists and toolkits may need updating. Consider a simple versioning note or "last reviewed" date in the Markdown if significant changes occur.
*   **Categorization:** If the number of toolkits grows significantly, consider adding subdirectories within `Toolkits_and_Checklists/` for better organization (e.g., `Credit_Analysis_Tools/`, `Modeling_Aids/`). This would require updating `index.html` logic.

Refer to the root `AGENTS.MD` for general guidelines, especially on Jupyter Notebooks and the `Global_Financial_Glossary.md`.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based interactive versions of these tools.
Ensure `Toolkits_and_Checklists/README.md` (table of contents) is also kept in sync with `index.html` and the actual files.
