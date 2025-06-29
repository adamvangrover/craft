# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity:** Vignettes must be clear. Questions should be unambiguous. Explanations for answers must be thorough.
*   **Markdown Best Practices:** Follow standard Markdown syntax.
*   **Accuracy:** All content must align with the CFA Institute Level 3 curriculum, especially regarding portfolio management applications and ethical/GIPS integration.
*   **File Naming:** Use `L3_Practice_Item_Set_Exam_N_Questions_Sets_X-Y.md` and corresponding `_Answers_Sets_X-Y.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new item set exams:
    *   Update `CFA/Level_3/Practice_Exams_Item_Sets/README.md` to list new files.
    *   Update `CFA/Level_3/Practice_Exams_Item_Sets/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `CFA/index.html` (Materials Library section) and `CFA/Level_3/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: CFA Level 3 Item Set Exams

### Inherits From
This document inherits from `CFA/Level_3/AGENTS.MD`, `CFA/AGENTS.MD`, and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/CFA/Level_3/Practice_Exams_Item_Sets/` directory contains practice item sets (vignettes with multiple-choice questions) for the CFA Level 3 exam, similar to the afternoon session format.

The main guide is `CFA/Level_3/Practice_Exams_Item_Sets/README.md`.
Individual exams are typically groups of `.md` files.
Navigation is supported by `CFA/Level_3/Practice_Exams_Item_Sets/index.html`.

### 2. Content Structure for Level 3 Item Sets
*   **Question Files (`..._Questions_Sets_X-Y.md`):**
    *   Each file should contain one or more vignettes.
    *   Each vignette should have a clear title/scenario.
    *   Provide detailed background information, financial data, tables, etc., to support 4 or 6 multiple-choice questions.
    *   Present the multiple-choice questions (A, B, C) clearly after each vignette.
*   **Answer Key Files (`..._Answers_Sets_X-Y.md`):**
    *   Correspond to a question file.
    *   For each question: clearly indicate the correct answer, provide a step-by-step explanation (including calculations if any), explain why distractors are incorrect, and reference relevant LOS.

### 3. Specific Guidelines for Level 3 Item Set Content
*   **Portfolio Management Focus:** Vignettes and questions should emphasize portfolio management and wealth planning applications.
*   **Integration of Topics:** Item sets should test synthesis of knowledge, often drawing from multiple L3 topic areas (e.g., asset allocation, behavioral finance, risk management, ethics).
*   **Realistic Scenarios:** Vignettes should be plausible and reflect real-world complexities faced by portfolio managers and wealth advisors.
*   **Application of Judgment:** Questions may require more nuanced judgment than in previous levels.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
