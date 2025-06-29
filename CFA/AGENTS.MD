# AGENTS.MD - CFA Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
This `/CFA/` directory is dedicated to providing comprehensive study materials for all three levels of the Chartered Financial Analyst (CFA) Program. Content should align with the official CFA Institute curriculum learning outcome statements (LOS) as much as possible.

The primary interactive entry point for this section is `CFA/index.html`.

### 1.1. README.md Presentation
*   The main `CFA/README.md` file, which provides an overview of this section, can be viewed in a standardized, styled format by accessing `CFA/readme_viewer.html`.
*   This `readme_viewer.html` uses the shared `assets/css/shared-readme-styles.css` and `marked.js` for rendering.
*   The primary interactive hub for CFA content remains `CFA/index.html`. The `readme_viewer.html` is specifically for presenting the `CFA/README.md` document itself.

## 2. Content Structure and Types
This directory is organized by CFA Program Level (Level_1, Level_2, Level_3). Within each level, common subdirectories include:
*   `Topic_Deep_Dives/`: Detailed explanations of complex topics or readings.
*   `Cheat_Sheets/`: Concise summaries of formulas, definitions, and key concepts.
*   `Practice_Exams/`: Item sets, essay questions (for L3), and individual multiple-choice questions.
*   `Case_Studies/`: Application of concepts to real-world or hypothetical scenarios.
*   `LOS_Mappings/` (Optional but Recommended): Files that map repository content back to specific CFA LOS.

New content should generally fall into one of these categories.

## 3. Specific Guidelines for CFA Content
*   **LOS Focus:** When creating content, especially deep dives or practice questions, try to reference the relevant Learning Outcome Statement(s) it addresses.
*   **Accuracy:** Given the nature of exam preparation, accuracy is paramount. Double-check formulas, definitions, and explanations.
*   **Clarity for Self-Study:** Content should be written clearly enough for individuals to understand concepts through self-study.
*   **Integration with `CFA/index.html`:**
    *   The `CFA/index.html` page acts as an interactive hub. New major content pieces (like a new deep dive series or a full practice exam) should be considered for linking from this hub.
    *   The JavaScript logic in `CFA/index.html` (around `appData.cfaLevels` and `appData.cfaResources`) populates the interactive elements. If adding a new *type* of resource or significantly restructuring, this JS may need updates.
*   **Practice Questions:**
    *   Clearly indicate the correct answer and provide detailed explanations for why it's correct and why distractors are incorrect.
    *   For Level 3, essay questions should include guideline answers and grading rubrics if possible.
*   **Command Words:** Be mindful of CFA command words (Calculate, Explain, Justify, etc.) when framing questions or explanations, especially for Level 3.
*   **Ethical Standards:** Content related to Ethical and Professional Standards should be handled with particular care and precision.

## 4. Linking
*   Link extensively to the `Global_Financial_Glossary.md` for key terms.
*   Cross-reference related topics within the CFA section (e.g., an FSA deep dive might link to relevant quantitative methods).
*   Link to foundational concepts in other parts of the repository if applicable (e.g., a CFA corporate finance reading might link to a more general `Financial_Modeling/` guide).

## 5. Roadmap / Planned Additions (Illustrative)
*   More Level 2 and Level 3 practice exams.
*   Video summaries for challenging topics (future consideration, would require external hosting).
*   Integration of Jupyter Notebooks for quantitative examples (see `Interactive_Notebooks/AGENTS.MD`).

Refer to the root `AGENTS.MD` for guidelines on Jupyter Notebooks and general Markdown/HTML practices.
