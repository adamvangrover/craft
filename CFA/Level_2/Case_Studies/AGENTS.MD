# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style.
*   **Clarity and Conciseness:** Vignettes should be detailed but clear. Questions must be unambiguous. Explanations should be thorough.
*   **Markdown Best Practices:** Follow standard Markdown syntax.
*   **Accuracy:** All financial data, concepts, formulas, and curriculum references must be accurate and align with the CFA Institute Level 2 curriculum.
*   **File Naming:** Use descriptive names, e.g., `L2_Case_DescriptiveName.md`.
*   **Links:** Use relative links. Verify functionality.
*   **Updating Navigation:** When adding new case studies:
    *   Update `CFA/Level_2/Case_Studies/README.md` to list the new file.
    *   Update `CFA/Level_2/Case_Studies/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `CFA/index.html` (Materials Library section) and `CFA/Level_2/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: CFA Level 2 Case Studies

### Inherits From
This document inherits from `CFA/Level_2/AGENTS.MD`, `CFA/AGENTS.MD`, and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/CFA/Level_2/Case_Studies/` directory contains case studies (vignettes) for the CFA Level 2 exam, focusing on application and analysis.

The main guide is `CFA/Level_2/Case_Studies/README.md`.
Individual cases are `.md` files.
Navigation is supported by `CFA/Level_2/Case_Studies/index.html`.

### 2. Content Structure for Level 2 Case Studies (Vignettes)
Each case study file should represent a single vignette and typically include:
*   **Vignette Title/Scenario:** A clear title describing the case.
*   **Introduction/Background:** Setting the context.
*   **Detailed Information:** Text, tables (financial data, assumptions, etc.) forming the basis for questions. This should be comprehensive enough to support 4-6 multiple-choice questions.
*   **Multiple-Choice Questions:** A series of 4 or 6 questions directly based on the vignette.
*   **Answers and Detailed Explanations:** For each question:
    *   Clearly indicate the correct choice (A, B, or C).
    *   Provide a thorough explanation of how to arrive at the correct answer, including calculations if any.
    *   Explain why the distractors are incorrect.
    *   Reference relevant CFA Level 2 LOS.

### 3. Specific Guidelines for Level 2 Case Study Content
*   **Vignette Format:** Adhere strictly to the item set (vignette) style used in the Level 2 exam.
*   **Integration of Topics:** Vignettes should often require knowledge from multiple Level 2 topic areas.
*   **Application Focus:** Questions should test the application of concepts and valuation models, not just recall.
*   **Plausibility:** Scenarios and data should be realistic.
*   **No Standalone Questions:** All questions must relate directly to the provided vignette.

Refer to parent `AGENTS.MD` files for broader CFA and repository guidelines.
