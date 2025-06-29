# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity:** Essay questions (vignettes and prompts) must be clear. Guideline answers need to be exceptionally well-structured and easy for graders (and students learning) to follow.
*   **Markdown Best Practices:** Use Markdown effectively for structuring essay questions and guideline answers (headings, lists, bolding for command words).
*   **Accuracy:** All content must align with the CFA Institute Level 3 curriculum, especially regarding application of concepts and justification.
*   **File Naming:** Use `L3_Practice_Essay_Exam_N_Questions.md` and `L3_Practice_Essay_Exam_N_Guideline_Answers.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new essay exams:
    *   Update `CFA/Level_3/Practice_Exams_Essays/README.md` to list new files.
    *   Update `CFA/Level_3/Practice_Exams_Essays/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `CFA/index.html` (Materials Library section) and `CFA/Level_3/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: CFA Level 3 Essay Exams

### Inherits From
This document inherits from `CFA/Level_3/AGENTS.MD`, `CFA/AGENTS.MD`, and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/CFA/Level_3/Practice_Exams_Essays/` directory contains practice constructed response (essay) questions and guideline answers for the CFA Level 3 exam.

The main guide is `CFA/Level_3/Practice_Exams_Essays/README.md`.
Individual exams are pairs of `.md` files.
Navigation is supported by `CFA/Level_3/Practice_Exams_Essays/index.html`.

### 2. Content Structure for Essay Exams
*   **Question Files (`..._Questions.md`):**
    *   Each file should contain one or more essay vignettes/scenarios.
    *   Following each scenario, list the specific question parts, clearly indicating the "command words" (e.g., Formulate, Justify, Calculate) and the minutes allocated to each part.
*   **Guideline Answer Files (`..._Guideline_Answers.md`):**
    *   Provide a detailed, well-structured guideline answer for each question part.
    *   Answers should explicitly demonstrate how to use information from the vignette.
    *   Justifications must be thorough.
    *   Calculations should be shown step-by-step.
    *   Mimic the style and level of detail found in official CFA Institute guideline answers.
    *   Reference relevant LOS.

### 3. Specific Guidelines for Level 3 Essay Content
*   **Command Word Focus:** Questions and answers must revolve around Level 3 command words.
*   **Justification Emphasis:** Guideline answers must thoroughly justify all recommendations and conclusions, linking directly to case facts.
*   **Integration of Knowledge:** Essay questions often require synthesizing knowledge from multiple Level 3 topic areas.
*   **Realistic Scenarios:** Vignettes should be plausible and reflect real-world portfolio management and wealth planning situations.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
