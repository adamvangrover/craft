# Agent Instructions: Behavioral Finance

This document provides instructions for AI agents working with the content in the `/Behavioral_Finance/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles.
*   Linking conventions.
*   Working with the global navigation system.

### 1. Purpose and Scope of this Directory
The `/Behavioral_Finance/` directory explores how psychological influences, cognitive biases, and emotional factors affect financial decision-making by individuals and institutions, and how these can impact financial markets.

The main entry point is `Behavioral_Finance/index.html` and the guide is `Behavioral_Finance/README.md`.

### 2. Content Structure and Types
Content is primarily in Markdown files, organized by topic:
*   `Key_Concepts.md`: Explains core behavioral finance theories, biases (e.g., anchoring, herding, loss aversion), and heuristics.
*   `Case_Studies.md`: A central document linking to or containing case studies. Individual, detailed cases may be in their own files (e.g., `Case_Study_Herd_Mentality.md`).
*   `Debiasing_Techniques_for_Analysts.md`: Practical advice and strategies for mitigating cognitive biases.
*   `Applications_in_Analysis.md` (Recommended): A future file discussing how understanding behavioral finance can improve investment analysis and risk management.

### 3. Specific Guidelines for Behavioral Finance Content
*   **Clear Definitions:** Each cognitive or emotional bias must be clearly defined with relatable, intuitive examples before applying them to financial contexts.
*   **Distinguish Bias Types:** Where appropriate, categorize biases (e.g., cognitive vs. emotional) to help users understand their origins and potential for mitigation.
*   **Practical Implications:** Focus on how awareness of these biases can lead to better decision-making, improved analysis, and more robust risk management.
*   **Accessible Tone:** While based on academic research, explanations should be accessible to finance practitioners and avoid overly academic language.

### 4. Linking Strategy
*   Link all key behavioral terms (e.g., anchoring, loss aversion) to their definitions in the `Global_Financial_Glossary.md`.
*   Connect behavioral concepts to practical applications in `/Risk_Management/` and critical thinking skills in `/Professional_Development/`.
*   Case studies can reference market events or concepts detailed in the `/CFA/` materials.

### 5. Tools
*   **`Behavioral_Finance/index.html`:** This hub page must be updated when new `.md` files are added to the directory. It uses a JavaScript array to populate its links.
*   **`global_markdown_viewer.html`:** Use this viewer for rendering the Markdown files.
*   **`js/nav_data.js`:** Update this file to add new content to the global navigation menu.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Relatability is Key:** Use simple, everyday examples to explain biases first. This makes the financial examples more intuitive.
*   **Academic Foundation:** Ensure the descriptions of biases and theories are consistent with established academic research (e.g., work by Kahneman, Tversky, Thaler).
*   **`index.html` Maintenance:** The `Behavioral_Finance/index.html` file contains a JavaScript data structure that lists the markdown files. This **must** be kept in sync with the directory's contents.

**Roadmap / Planned Additions:**
*   Expand the number of `Case_Studies` covering different market cycles, asset classes, and decision types.
*   Create a section on how behavioral concepts can be integrated into quantitative investment or risk models.
*   Develop interactive quizzes or scenarios as Jupyter Notebooks (in a new `Interactive_Notebooks/Behavioral_Finance/` subdirectory) to let users test their own understanding of biases.
*   Explore concepts from "neurofinance" if they can be presented accessibly with practical implications.
