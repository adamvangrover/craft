# Agent Instructions - CRAFT Program Solutions

This document provides instructions for AI agents working with the content in this specific directory.

## General Guidelines:

*   **Consistency:** Maintain CRAFT program style. Explanations in solutions must be clear and directly correspond to the questions/cases in the modules.
*   **Accuracy:** All answers and guidance must be accurate.
*   **Markdown Best Practices:** Use Markdown effectively, especially for structuring answers and explanations.
*   **File Naming:** `QUIZ_ANSWERS.md` and `CASE_STUDY_GUIDANCE.md` are the primary files. If these become too large, modularization (e.g., `Module_XX_Quiz_Answers.md`) might be needed, requiring updates to linking and READMEs.
*   **Links:** Use relative links if pointing to specific questions or case files in the modules.
*   **Updating Navigation:**
    *   The `corporate-credit-risk-analyst-training/solutions/README.md` should accurately describe the content of this directory.
    *   The `corporate-credit-risk-analyst-training/solutions/index.html` `filesInDir` array must list all `.md` files here.
*   **Review:** Critical: Ensure solutions are correct and clearly explained.

## Directory-Specific Instructions: CRAFT Solutions

### Inherits From
This document inherits from `corporate-credit-risk-analyst-training/AGENTS.MD` and the root `AGENTS.MD`.

### 1. Purpose and Scope
This `/corporate-credit-risk-analyst-training/solutions/` directory provides consolidated answers and guidance for quizzes and case studies from the CRAFT program.

The main guide is `README.md`. Content files are primarily `QUIZ_ANSWERS.md` and `CASE_STUDY_GUIDANCE.md`.
Navigation is supported by `index.html`.

### 2. Hierarchy and Development Notes
*   **Centralized Solutions:** The intent is to provide a central place for solutions.
*   **Synchronization:** This is paramount. When a quiz or case study is added or modified in any module, the corresponding solution/guidance in this directory **must** be updated. Maintaining this synchronization is a key ongoing task.
*   **Clarity of Reference:** Solutions should clearly state which module, quiz, question number, or case study they refer to.

### 3. Specific Content Guidelines
*   **Quiz Answers:**
    *   Clearly list the question (or a summary/ID).
    *   State the correct answer.
    *   Provide a brief but clear explanation for why the answer is correct and, if applicable, why common distractors are incorrect.
*   **Case Study Guidance:**
    *   Should not just be "the answer," but rather guide the student through the analytical process.
    *   Highlight key data points from the case.
    *   Explain the application of relevant frameworks or calculations.
    *   Discuss potential alternative interpretations or nuances if appropriate.
    *   May include example calculations or snippets of what a good written response might look like.

### 4. Linking Strategy
*   The solution files should ideally link back to the specific quiz/case study `.md` file in the respective module for easy reference by the user.
*   Module `README.md` files (and quiz/case study files themselves) should link *to* this solutions directory.

### 5. Development Notes from `README.md`
*   Consider modularizing solution files if they become too large.
*   Possibility of interactive solutions or "common mistake" sections.

Refer to parent `AGENTS.MD` files for broader CRAFT program and repository guidelines.
