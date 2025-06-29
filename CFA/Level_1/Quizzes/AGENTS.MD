# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity:** Questions should be clear. Explanations for answers should be concise yet comprehensive.
*   **Markdown Best Practices:** Follow standard Markdown syntax.
*   **Accuracy:** Questions, answers, and explanations must align with the CFA Institute Level 1 curriculum.
*   **File Naming:** Use `Quiz_TopicName_Questions.md` and `Quiz_TopicName_Answers.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new quizzes:
    *   Update `CFA/Level_1/Quizzes/README.md` to list new files.
    *   Update `CFA/Level_1/Quizzes/index.html` (the `filesInDir` JavaScript array).
    *   Consider if `CFA/index.html` (Main CFA Hub) or `CFA/Level_1/README.md` should also be updated if the quiz is significant.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: CFA Level 1 Quizzes

### Inherits From
This document inherits from `CFA/Level_1/AGENTS.MD`, `CFA/AGENTS.MD`, and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/CFA/Level_1/Quizzes/` directory holds topic-specific quizzes for CFA Level 1, designed for targeted review.

The main guide is `CFA/Level_1/Quizzes/README.md`.
Individual quizzes are pairs of `.md` files (Questions and Answers).
Navigation is supported by `CFA/Level_1/Quizzes/index.html`.

### 2. Content Structure for Quizzes
*   **Question Files (`..._Questions.md`):**
    *   Clearly present multiple-choice questions (typically 3 options for L1).
    *   Number questions sequentially.
*   **Answer Key Files (`..._Answers.md`):**
    *   Correspond to a question file.
    *   Clearly indicate the correct answer for each question.
    *   Provide detailed explanations for the correct answer and, ideally, why distractors are incorrect. Reference specific LOS or curriculum concepts.

### 3. Specific Guidelines for Level 1 Quiz Content
*   **Targeted Focus:** Each quiz should cover a specific, narrow topic or a few related LOS.
*   **Brevity:** Quizzes are meant to be shorter than full practice exams.
*   **Curriculum Alignment:** Strictly adhere to Level 1 curriculum.
*   **Question Style:** Reflect CFA Level 1 multiple-choice format.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
