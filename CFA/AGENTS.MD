# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure, formatting, and writing style. Refer to the main `README.md` and other `AGENTS.MD` files for examples.
*   **Clarity and Conciseness:** Ensure all documentation, explanations, and comments are clear, concise, and easy to understand.
*   **Markdown Best Practices:** Follow standard Markdown syntax. Use formatting (headings, lists, bolding, etc.) to improve readability.
*   **Accuracy:** Verify the accuracy of all information, especially financial concepts, formulas, and examples.
*   **File Naming:** Use clear and consistent file names (e.g., `snake_case_for_files.md`, `PascalCaseForFolders/`).
*   **Links:**
    *   Use relative links for internal navigation.
    *   Verify that all links are functional.
*   **Updating Navigation:** When adding new content or significantly modifying existing content, ensure that relevant `README.md` files and `index.html` (if applicable) are updated to reflect these changes for discoverability.
*   **Code (if applicable):**
    *   Comment code adequately.
    *   Follow any language-specific style guides if established for this project.
    *   Ensure code is functional and tested.
*   **Review:** Before submitting changes, review your work for adherence to these guidelines and the specific task requirements.

## Directory-Specific Instructions: CFA Program Study Resources

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
This `/CFA/` directory is dedicated to providing comprehensive study materials for all three levels of the Chartered Financial Analyst (CFA) Program. Content should align with the official CFA Institute curriculum learning outcome statements (LOS) as much as possible.

The primary interactive entry point for this section is `CFA/index.html`.

### 2. Content Structure and Types
This directory is organized by CFA Program Level (Level_1, Level_2, Level_3). Within each level, common subdirectories include:
*   `Topic_Deep_Dives/`: Detailed explanations of complex topics or readings.
*   `Cheat_Sheets/`: Concise summaries of formulas, definitions, and key concepts.
*   `Practice_Exams/`: Item sets, essay questions (for L3), and individual multiple-choice questions.
*   `Case_Studies/`: Application of concepts to real-world or hypothetical scenarios.
*   `LOS_Mappings/` (Optional but Recommended): Files that map repository content back to specific CFA LOS.

New content should generally fall into one of these categories.

### 3. Specific Guidelines for CFA Content
*   **LOS Focus:** When creating content, especially deep dives or practice questions, try to reference the relevant Learning Outcome Statement(s) it addresses.
*   **Accuracy:** Given the nature of exam preparation, accuracy is paramount. Double-check formulas, definitions, and explanations.
*   **Clarity for Self-Study:** Content should be written clearly enough for individuals to understand concepts through self-study.
*   **Integration with `CFA/index.html`:**
    *   The `CFA/index.html` page acts as an interactive hub. New major content pieces (like a new deep dive series or a full practice exam) should be considered for linking from this hub.
    *   The JavaScript logic in `CFA/index.html` (around `AppData.levels` and the "Study Materials Library" section) populates the interactive elements. If adding or removing files from Level subdirectories, ensure the "Study Materials Library" in `CFA/index.html` is updated with correct links. If adding new *types* of resources or significantly restructuring, the `AppData` JavaScript object might also need updates.
*   **Practice Questions:**
    *   Clearly indicate the correct answer and provide detailed explanations for why it's correct and why distractors are incorrect.
    *   For Level 3, essay questions should include guideline answers and grading rubrics if possible.
*   **Command Words:** Be mindful of CFA command words (Calculate, Explain, Justify, etc.) when framing questions or explanations, especially for Level 3.
*   **Ethical Standards:** Content related to Ethical and Professional Standards should be handled with particular care and precision.

### 4. Linking
*   Link extensively to the `Global_Financial_Glossary.md` for key terms.
*   Cross-reference related topics within the CFA section (e.g., an FSA deep dive might link to relevant quantitative methods).
*   Link to foundational concepts in other parts of the repository if applicable (e.g., a CFA corporate finance reading might link to a more general `Financial_Modeling/` guide).

### 5. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **`CFA/index.html` Maintenance:** The "Study Materials Library" section of `CFA/index.html` is populated by JavaScript logic (around `AppData.levels`). When adding new content files (Cheat Sheets, Deep Dives, Practice Exams, Case Studies) to the Level subdirectories, ensure this HTML file is updated with correct links and metadata. If new *types* of resources are added or the structure is significantly changed, the `AppData` JavaScript object within `CFA/index.html` might also need modification.
*   **LOS Tagging:** While not strictly enforced for all content yet, consistently tagging content with the relevant CFA Learning Outcome Statement(s) (LOS) it addresses would be a significant enhancement for users. This could be done as comments in Markdown or as part of the frontmatter if a more formal system is adopted.
*   **Practice Exam Structure:** Ensure practice questions and answers are clearly separated or formatted in a way that `quiz_viewer.html` can parse them if they are intended to be interactive. For PDF-style exams, ensure questions and answers are distinct sections.

**Roadmap / Planned Additions (Illustrative):**
*   **Content Expansion:**
    *   More Level 2 and Level 3 practice exams, especially essay questions for Level 3 with detailed guideline answers.
    *   Expand `Topic_Deep_Dives/` for all levels, covering a wider range of challenging readings.
    *   Develop more `Case_Studies/` that integrate multiple topic areas.
*   **Interactive Elements:**
    *   Integrate more Jupyter Notebooks for quantitative examples, particularly for topics like derivatives, fixed income, and portfolio management. Refer to `Interactive_Notebooks/AGENTS.MD` and root `AGENTS.MD` for guidelines.
    *   Explore options for interactive formula sheets or concept maps.
*   **Multimedia Content (Future):**
    *   Video summaries or walkthroughs for particularly challenging topics (would require decisions on hosting and embedding).
*   **LOS Mapping Files:** Systematically create/update `LOS_Mappings/` files that explicitly link content within this repository to each CFA LOS.

Refer to the root `AGENTS.MD` for guidelines on Jupyter Notebooks, general Markdown/HTML practices, and global navigation updates.
