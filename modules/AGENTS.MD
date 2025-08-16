# Agent Instructions: Modules

This document provides instructions for AI agents working with the content in the `/modules/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles.
*   Linking conventions and the global navigation system.

### 1. Purpose and Scope of this Directory
The `/modules/` directory is the heart of the structured learning content in this repository. It houses the comprehensive training programs, most notably the **Corporate & Credit Risk Analyst (CRAFT) program**. Each subdirectory within `/modules/` represents a major, self-contained course or subject area.

### 2. Content Structure and Types
*   **Module Subdirectories:** The primary structure is a set of directories, each representing a full module (e.g., `/Accounting/`, `/Credit_Analysis/`).
*   **Module `AGENTS.MD`:** Each module subdirectory (e.g., `/Accounting/`) **must** have its own `AGENTS.MD` file providing specific instructions for that subject matter.
*   **Content within Modules:** Content inside each module can be a mix of Markdown files, interactive HTML, quizzes, and case studies, organized into further subdirectories.

### 3. Specific Guidelines for Modules
*   **Modularity:** Each module should be self-contained but also link to other relevant content across the repository.
*   **Structured Learning:** Content within a module should be structured logically, guiding the user from foundational concepts to more advanced topics.
*   **Consistency:** While each module has its own `AGENTS.MD`, the overall tone and quality should be consistent with the rest of the repository.

### 4. Linking Strategy
*   Modules should link extensively to each other where concepts overlap.
*   All key terms should be linked to the `Global_Financial_Glossary.md`.
*   Modules should link to relevant `Interactive_Notebooks/` for hands-on practice.
*   `Learning_Paths/` will be the primary mechanism for sequencing content both within and between modules for specific user goals.

### 5. Tools
*   **`craft.html`:** This is the main interactive hub for the CRAFT program. It should be updated to reflect the structure and content of the modules.
*   **`js/nav_data.js`:** Update this file to add new modules or significant module content to the global navigation menu.
*   **Quizzes and Viewers:** Utilize the repository's tools like `quiz_viewer.html` and `global_markdown_viewer.html` as needed within modules.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Module Inter-dependency:** Be mindful of how modules connect. A change in a foundational module like `/Accounting/` may require updates in `/Credit_Analysis/`.
*   **CRAFT Program Hub:** The `craft.html` file is the main entry point for the CRAFT program. It is critical to keep its links and structure in sync with the contents of the `/modules/` directory.

**Roadmap / Planned Additions:**
*   Continuously refine and expand existing modules with new case studies and interactive elements.
*   Develop new modules for emerging areas of finance as identified in the strategic roadmap.
*   Ensure tight integration with new `Learning_Paths/` as they are developed.
