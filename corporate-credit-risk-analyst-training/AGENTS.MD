# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, CRAFT program's established style, and formatting of existing modules.
*   **Clarity and Detail:** CRAFT modules should be comprehensive and detailed enough for self-study by aspiring analysts. Explain concepts from fundamentals.
*   **Markdown Best Practices:** Utilize Markdown effectively for structure, readability, tables, and code blocks (for examples if any).
*   **Accuracy:** All financial concepts, accounting rules, analytical techniques, and market descriptions must be accurate and current where possible.
*   **File Naming:** Follow existing conventions (e.g., `01-foundations/`, `01-accounting-and-financial-statement-analysis.md`).
*   **Links:** Use relative links. Verify functionality. Link extensively to the local `GLOSSARY.md` and the `Global_Financial_Glossary.md`.
*   **Updating Navigation:**
    *   The primary navigation is `corporate-credit-risk-analyst-training/index.html`. Its `craftModulesData` JavaScript array **must** be updated if modules are added, reordered, or their main `index.html` (or `README.md`) path changes.
    *   The main `corporate-credit-risk-analyst-training/README.md` module list should also be kept in sync.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Corporate Credit Risk Analyst Training (CRAFT) Program

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/corporate-credit-risk-analyst-training/` (CRAFT) directory contains a comprehensive, modular training program designed to equip new and aspiring analysts with the essential skills and knowledge for a career in corporate credit risk. It covers accounting, financial analysis, capital markets, the credit lifecycle, and critical thinking.

The primary interactive entry point for this section is `corporate-credit-risk-analyst-training/index.html` (the CRAFT Program Hub). The main textual overview is `corporate-credit-risk-analyst-training/README.md`.

## 2. Content Structure and Types
The CRAFT program is organized into modules, each in its own subdirectory (e.g., `modules/01-foundations/`).
*   Each module directory **MUST** have a `README.md` file that serves as the main content page for that module.
*   Modules can be further broken down into sub-topic Markdown files if necessary, which should be linked from the module's `README.md`.
*   Content typically includes:
    *   Explanatory text.
    *   Examples and illustrations.
    *   Tables summarizing key information.
    *   End-of-module quizzes (can be conceptual or link to interactive tools).
    *   Case studies or practical exercises.

## 3. Specific Guidelines for CRAFT Content
*   **Target Audience:** Assume the reader is an entry-level analyst or someone new to corporate credit risk. Explain concepts from the ground up, but maintain a professional tone.
*   **Practical Application:** Emphasize practical application. How does this concept help an analyst do their job?
*   **Consistency:** Maintain a consistent structure and style across modules for a cohesive learning experience. Refer to existing modules as examples.
*   **Integration with `corporate-credit-risk-analyst-training/index.html` (CRAFT Hub):**
    *   The CRAFT Hub is the primary navigation tool for the modules.
    *   The JavaScript in `index.html` (around `appData.modules`) populates the module list and descriptions. If new modules are added or existing ones are significantly reordered/renamed, this `appData` structure **MUST** be updated.
    *   Ensure the links in `appData.modules` point to the correct module `README.md` files.
*   **GLOSSARY.md (Local):** This directory contains a local `GLOSSARY.md` file specific to terms emphasized in the CRAFT program.
    *   New key terms introduced in CRAFT modules should be added here.
    *   These terms should also be considered for inclusion in the `Global_Financial_Glossary.md` at the repository root, especially if they have broader applicability.
    *   Link to this local glossary AND the global glossary where appropriate.
*   **Works Cited:** The `modules/XX-module-name/README.md` files often contain a "Works Cited" section. If external sources are referenced, list them here.

## 4. Linking
*   Link extensively to the local `GLOSSARY.md` and the root `Global_Financial_Glossary.md`.
*   Link to other CRAFT modules when concepts are related.
*   Link to relevant content in other repository sections (e.g., a CRAFT module on financial modeling could link to more detailed guides in `/Financial_Modeling/`).
*   Consider linking to relevant `Interactive_Notebooks/` for hands-on examples.

## 5. Roadmap / Planned Additions (Illustrative)
*   Development of more interactive quizzes using Jupyter Notebooks or embedded HTML/JS.
*   Video walkthroughs for complex case studies.
*   Advanced modules on specialized lending types (e.g., project finance, real estate).

Refer to the root `AGENTS.MD` for guidelines on Jupyter Notebooks, general Markdown/HTML practices, and global glossary updates.
