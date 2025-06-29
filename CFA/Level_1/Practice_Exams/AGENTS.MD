# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style. Refer to the main `README.md` and other `AGENTS.MD` files for examples.
*   **Clarity and Conciseness:** Questions should be clear and unambiguous. Explanations for answers should be concise yet comprehensive.
*   **Markdown Best Practices:** Follow standard Markdown syntax.
*   **Accuracy:** Questions, answers, and explanations must be accurate and align with the CFA Institute Level 1 curriculum.
*   **File Naming:** Use consistent naming like `Practice_Exam_N_Questions.md` and `Practice_Exam_N_Answer_Key.md`.
*   **Links:**
    *   Use relative links if linking to other resources.
    *   Verify that all links are functional.
*   **Updating Navigation:** When adding new practice exams:
    *   Ensure `CFA/Level_1/Practice_Exams/README.md` is updated to list the new files.
    *   Ensure `CFA/Level_1/Practice_Exams/index.html` has the new files listed in its `filesInDir` JavaScript array.
    *   Notify or update `CFA/index.html` (Materials Library section) and `CFA/Level_1/README.md` to reflect new exams.
*   **Review:** Before submitting changes, review your work for adherence to these guidelines and the specific task requirements.

## Directory-Specific Instructions: CFA Level 1 Practice Exams

### Inherits From
This document inherits general principles from `CFA/Level_1/AGENTS.MD`, `CFA/AGENTS.MD`, and the root `AGENTS.MD`. Please review those first.

### 1. Purpose and Scope of this Directory
This `/CFA/Level_1/Practice_Exams/` directory contains full practice exams and their corresponding answer keys for the CFA Level 1 exam.

The introductory guide for this section is `CFA/Level_1/Practice_Exams/README.md`.
Individual exams are pairs of `.md` files (Questions and Answer Key).
Navigation is also supported by `CFA/Level_1/Practice_Exams/index.html`.

### 2. Content Structure for Practice Exams
*   **Question Files (`..._Questions.md`):**
    *   Should clearly present multiple-choice questions, typically with three options (A, B, C).
    *   Questions should be numbered sequentially.
    *   Avoid including answers or explanations in the question files.
*   **Answer Key Files (`..._Answer_Key.md`):**
    *   Should correspond to a question file.
    *   For each question, clearly indicate the correct answer.
    *   Provide a detailed explanation for why the correct answer is right and, ideally, why the distractors are incorrect. Reference specific LOS or curriculum concepts.

### 3. Specific Guidelines for Level 1 Practice Exam Content
*   **Curriculum Coverage:** Aim for practice exams to cover topics in proportion to their weights in the Level 1 exam.
*   **Question Style:** Mimic the style and difficulty of official CFA Level 1 questions. Questions should be clear, concise, and test application of concepts, not just rote memorization.
*   **Originality:** While based on curriculum concepts, questions should be original and not direct copies from copyrighted materials.
*   **No Item Sets:** Level 1 questions are standalone, not part of vignettes or item sets.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
