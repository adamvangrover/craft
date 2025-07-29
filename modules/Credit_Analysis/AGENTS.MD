# Agent Instructions: Corporate Credit Risk Analyst Training (CRAFT) Program

This document provides instructions for AI agents working with the content in the `/corporate-credit-risk-analyst-training/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles (accuracy, clarity, modularity).
*   Linking conventions.
*   Working with interactive dashboards and the global navigation system (`js/nav_data.js`).
*   Jupyter Notebook and Markdown viewer implementation.
*   Updating the Global Financial Glossary.

### 1. Purpose and Scope of this Directory
The `/corporate-credit-risk-analyst-training/` (CRAFT) directory contains a comprehensive, modular training program designed to equip new and aspiring analysts with the essential skills and knowledge for a career in corporate credit risk. It covers accounting, financial analysis, capital markets, the credit lifecycle, and critical thinking.

The primary interactive entry point for this section is `corporate-credit-risk-analyst-training/index.html` (the CRAFT Program Hub). The main textual overview is `corporate-credit-risk-analyst-training/README.md`.

## 2. Content Structure and Types
The CRAFT program is organized into modules, each in its own subdirectory (e.g., `modules/01-foundations/`).
*   Each module directory **MUST** have a `README.md` file that serves as the main content page for that module.
*   Modules can be further broken down into sub-topic Markdown files if necessary, which should be linked from the module's `README.md`.
*   Content typically includes:
    *   Explanatory text.
    *   Examples and illustrations.
    *   Tables summarizing key information.
    *   End-of-module quizzes (can be conceptual or link to interactive tools).
    *   Case studies or practical exercises.

## 3. Specific Guidelines for CRAFT Content
*   **Target Audience:** Assume the reader is an entry-level analyst or someone new to corporate credit risk. Explain concepts from the ground up, but maintain a professional tone.
*   **Practical Application:** Emphasize practical application. How does this concept help an analyst do their job?
*   **Consistency:** Maintain a consistent structure and style across modules for a cohesive learning experience. Refer to existing modules as examples.
*   **Integration with `corporate-credit-risk-analyst-training/index.html` (CRAFT Hub):**
    *   The CRAFT Hub is the primary navigation tool for the modules.
    *   The JavaScript in `index.html` (around `appData.modules`) populates the module list and descriptions. If new modules are added or existing ones are significantly reordered/renamed, this `appData` structure **MUST** be updated.
    *   Ensure the links in `appData.modules` point to the correct module `README.md` files.
*   **GLOSSARY.md (Local):** This directory contains a local `GLOSSARY.md` file specific to terms emphasized in the CRAFT program.
    *   New key terms introduced in CRAFT modules should be added here.
    *   These terms should also be considered for inclusion in the `Global_Financial_Glossary.md` at the repository root, especially if they have broader applicability.
    *   Link to this local glossary AND the global glossary where appropriate.
*   **Works Cited:** The `modules/XX-module-name/README.md` files often contain a "Works Cited" section. If external sources are referenced, list them here.

## 4. Linking
*   Link extensively to the local `GLOSSARY.md` and the root `Global_Financial_Glossary.md`.
*   Link to other CRAFT modules when concepts are related.
*   Link to relevant content in other repository sections (e.g., a CRAFT module on financial modeling could link to more detailed guides in `/Financial_Modeling/`).
*   Consider linking to relevant `Interactive_Notebooks/` for hands-on examples.

### 5. Tools

*   **`quiz_viewer.html`:** Use this tool to create interactive quizzes.
*   **`global_markdown_viewer.html`:** Use this tool to render Markdown files.
*   **`corporate-credit-risk-analyst-training/index.html`:** Use this tool to add new content to the CRAFT Program Hub.
*   **`js/nav_data.js`:** Use this tool to add new content to the global navigation.
*   **`GLOSSARY.md`:** Use this tool to add new terms to the local glossary.
*   **`Global_Financial_Glossary.md`:** Use this tool to add new terms to the global glossary.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **CRAFT Hub (`corporate-credit-risk-analyst-training/index.html`):** This is the main entry point. The `appData.modules` JavaScript array within this HTML file is critical for module navigation. **It MUST be updated when modules are added, reordered, or their main `README.md` path changes.** Ensure descriptions are concise and accurate.
*   **Module `README.md` as Main Content:** The primary content for each module resides in its `README.md` file. Sub-topic Markdown files should be clearly linked from this main README.
*   **Local `GLOSSARY.md` vs. `Global_Financial_Glossary.md`:** Prioritize adding terms to the local `GLOSSARY.md` first if they are highly specific to CRAFT or introduced with a CRAFT-specific nuance. If the term has broader applicability, ensure it's also in the `Global_Financial_Glossary.md`. Link to both where it makes sense.
*   **`FUTURE_IDEAS.md`:** This file in the `corporate-credit-risk-analyst-training/` directory contains a backlog of potential content and structural ideas. Consult this file for inspiration and to align new content with planned expansions.
*   **Teacher/Developer Notes within Modules:** Some modules (especially advanced ones like in `modules/06-advanced-topics/`) include `*-developer-notes.md` and `*-teacher-notes.md`. These are valuable for providing deeper context, alternative explanations, or teaching tips. Consider adding these for new complex modules.
*   **Consistency is Key:** Given this is a structured training program, maintaining consistency in module structure, tone, formatting, and depth of explanation across all modules is very important for the learner experience.

**Roadmap / Future Considerations (also see `FUTURE_IDEAS.md`):**
*   **Content Expansion (Ongoing):**
    *   Systematically work through the items in `FUTURE_IDEAS.md`.
    *   Flesh out existing modules with more diverse case studies (covering different industries/scenarios), more comprehensive quizzes, and deeper dives into complex sub-topics.
    *   Develop advanced modules on specialized lending types (e.g., project finance, real estate, asset-based lending) and emerging risk areas.
*   **Interactive Learning:**
    *   Increase the use of interactive quizzes, potentially leveraging `quiz_viewer.html` or creating module-specific interactive HTML/JS components.
    *   Integrate more Jupyter Notebooks from `Interactive_Notebooks/` as practical exercises for financial analysis, modeling, or data interpretation within relevant CRAFT modules.
*   **Multimedia Content:**
    *   Develop video walkthroughs for complex case studies or particularly challenging analytical techniques (would require decisions on hosting and embedding).
    *   Consider audio summaries for key concepts.
*   **Assessment & Feedback:**
    *   Long-term: Explore options for more robust end-of-module assessments and a capstone project for the entire CRAFT program.
    *   Consider mechanisms for learners to provide feedback on module content for continuous improvement.
*   **Skills Mapping & Learning Paths:**
    *   Develop a detailed skills matrix mapping CRAFT content to core competencies for credit analysts.
    *   Potentially define specialized learning paths within CRAFT (e.g., "Focus on SME Lending," "Focus on Large Corporate Syndications").
*   **Solution Guides:** Ensure comprehensive solution guides or walkthroughs are available for all case studies and complex quizzes.
