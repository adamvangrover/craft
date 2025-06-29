# Agent Instructions - CRAFT Module 01: Foundations

This document provides instructions for AI agents working with the content in this specific module directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall CRAFT program style, formatting, and tone. Refer to the main CRAFT `AGENTS.MD` and other module `AGENTS.MD` files.
*   **Clarity and Detail:** Foundational concepts must be explained very clearly and accurately. This module sets the stage for the entire program.
*   **Markdown Best Practices:** Use Markdown effectively for structure, readability, tables, and examples.
*   **Accuracy:** All accounting principles, financial statement descriptions, ratio formulas, and modeling concepts must be accurate.
*   **File Naming:** Follow existing conventions (e.g., `01-accounting-and-financial-statement-analysis.md`, `quizzes/accounting-quiz.md`).
*   **Links:**
    *   Use relative links for internal navigation within this module and to other CRAFT modules.
    *   Link extensively to the local CRAFT `GLOSSARY.md` and the root `Global_Financial_Glossary.md`.
    *   Verify all links are functional.
*   **Updating Navigation:**
    *   The primary navigation for this module's content is `corporate-credit-risk-analyst-training/modules/01-foundations/index.html`. Ensure its `filesInDir` and `subDirsInfo` JavaScript arrays are accurate if content files are added/removed.
    *   The main CRAFT Hub (`corporate-credit-risk-analyst-training/index.html`) links to this module's `index.html`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Module 01 - Foundations

### Inherits From
This document inherits from `corporate-credit-risk-analyst-training/AGENTS.MD` and the root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This module directory (`01-foundations/`) covers:
1.  **Accounting and Financial Statement Analysis:** Core accounting principles, the three financial statements (Balance Sheet, Income Statement, Cash Flow Statement), their interconnectedness, revenue recognition, expense analysis, and footnote importance.
2.  **Financial Analysis and Modeling Techniques:** Building 3-statement models, forecasting principles, key credit ratios, and an introduction to sensitivity/scenario analysis.

The main guide for this module is `README.md`. Content is detailed in:
*   `01-accounting-and-financial-statement-analysis.md`
*   `01-accounting-learning-materials.md`
*   `02-financial-analysis-and-modeling.md`
*   `02-modeling-learning-materials.md`
Quizzes are in the `quizzes/` subdirectory.

### 2. Hierarchy and Development Notes
*   **Core Content:** The `.md` files listed above contain the primary textual explanations.
*   **Learning Materials:** The `*-learning-materials.md` files are intended for glossaries specific to that lesson and links to external resources or other parts of the hub.
*   **Quizzes:** The `quizzes/` subdirectory contains Markdown-based quizzes and their answer keys. Ensure these are clearly formatted and that questions accurately test the module's content. The `quiz_viewer.html` at the repository root is used to render these.
*   **Development Focus:**
    *   Ensure clarity and accuracy of all foundational concepts.
    *   Provide simple, clear examples for accounting entries, ratio calculations, and model linkages.
    *   The link to `temp_accounting_quiz_for_parser.md` in the `README.md` suggests this is a newer interactive quiz format; ensure this is functional and well-integrated.

### 3. Specific Content Guidelines
*   **Accounting Principles:** Explain GAAP/IFRS differences at a high level if mentioned. Emphasize principles most relevant to credit analysis (e.g., conservatism, accrual method).
*   **Financial Statement Linkages:** This is a critical area. Use diagrams or clear textual explanations to show how IS, BS, and CFS are interconnected.
*   **3-Statement Model:** Explain the typical build order and the concept of a "plug" (often cash or revolver).
*   **Ratios:** For each ratio, provide the formula, explain what it measures, and its typical interpretation from a credit perspective.

### 4. Linking Strategy
*   Link all key terms to both the local CRAFT `GLOSSARY.md` and the `Global_Financial_Glossary.md`.
*   Cross-reference heavily with later CRAFT modules that build on these foundations (e.g., links from ratio descriptions to later modules where those ratios are applied in case studies).
*   Link to relevant sections in `/Financial_Modeling/` for more detailed modeling best practices or templates.
*   Link to `/CFA/Level_1/` materials for related topics (e.g., FSA, Quantitative Methods).

Refer to parent `AGENTS.MD` files for broader CRAFT program and repository guidelines.
