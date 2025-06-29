# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity:** Vignettes must be clear and provide sufficient information for the questions. Questions should be unambiguous. Explanations must be thorough.
*   **Markdown Best Practices:** Follow standard Markdown syntax.
*   **Accuracy:** All content must align with the CFA Institute Level 2 curriculum. Financial data, calculations, and explanations must be precise.
*   **File Naming:** Use `L2_Practice_Exam_N_Item_Sets_X-Y_Questions.md` and corresponding `_Answer_Key.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new practice exams or item sets:
    *   Update `CFA/Level_2/Practice_Exams/README.md` to list new files.
    *   Update `CFA/Level_2/Practice_Exams/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `CFA/index.html` (Materials Library section) and `CFA/Level_2/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: CFA Level 2 Practice Exams

### Inherits From
This document inherits from `CFA/Level_2/AGENTS.MD`, `CFA/AGENTS.MD`, and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/CFA/Level_2/Practice_Exams/` directory contains practice item sets (vignettes with multiple-choice questions) for the CFA Level 2 exam.

The main guide is `CFA/Level_2/Practice_Exams/README.md`.
Individual exams are typically groups of `.md` files (Questions and Answer Keys for different item sets).
Navigation is supported by `CFA/Level_2/Practice_Exams/index.html`.

### 2. Content Structure for Level 2 Practice Exams
*   **Vignette Files (`..._Questions.md`):**
    *   Each file might contain one or more vignettes.
    *   Each vignette should have a clear title/scenario.
    *   Provide detailed background information, financial data, tables, and text as needed to support 4-6 multiple-choice questions.
    *   Present the multiple-choice questions (A, B, C) clearly after each vignette.
*   **Answer Key Files (`..._Answer_Key.md`):**
    *   Correspond to a question file.
    *   For each question: clearly indicate the correct answer, provide a step-by-step explanation (including calculations), explain why distractors are incorrect, and reference the relevant LOS.

### 3. Specific Guidelines for Level 2 Practice Exam Content
*   **Item Set Format:** Strictly adhere to the vignette + multiple-choice questions format of the Level 2 exam.
*   **Realistic Complexity & Integration:** Vignettes should be challenging and often require integrating knowledge from different LOS or readings.
*   **LOS Coverage:** Ensure questions map to specific Level 2 LOS.
*   **Plausible Distractors:** Incorrect choices should reflect common errors or misunderstandings.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
