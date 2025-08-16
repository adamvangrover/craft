# Agent Instructions: Learning Paths

This document provides instructions for AI agents working with the content in the `/Learning_Paths/` directory.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles.
*   Linking conventions and updating the global navigation system.

### 1. Purpose and Scope of this Directory
The `/Learning_Paths/` directory provides curated guides that suggest a sequence of study through the repository's various resources. These paths are tailored to specific roles, goals, or topics, helping users navigate the extensive content in a structured way.

The main entry point is `Learning_Paths/index.html`, which dynamically loads and renders the individual learning path `.md` files.

### 2. Content Structure and Types
*   **`index.html`:** The interactive viewer. **A critical agent task is to update this file's navigation list (`<ul id="learning-path-nav-list">`) when a new path is created.**
*   **Learning Path Files (`.md`):** Each path (e.g., `Credit_Analyst_Foundational_Path.md`) is a Markdown file that should be structured with:
    *   Target Audience
    *   Learning Objectives
    *   Suggested Modules/Reading Order (with descriptive, relative links)
    *   Next Steps

### 3. Specific Guidelines for Learning Paths
*   **Curate, Don't Duplicate:** The primary role of a learning path is to curate and sequence existing content. Link to resources, but do not copy large amounts of content into the path file itself.
*   **Logical Flow:** Ensure the sequence of recommended resources makes sense from a learning progression perspective (foundational concepts first).
*   **Action-Oriented Language:** Use verbs that encourage action (e.g., "Review...", "Complete the notebook...", "Understand the concepts in...").
*   **Maintainability:** Learning paths are highly dependent on other content. They are a key area for ongoing review to fix broken links or update sequences when other parts of the repository change.

### 4. Linking Strategy
*   This entire section is about linking. All links must be relative and have descriptive text.
*   The main `home.html` and other overview pages should link to `Learning_Paths/index.html` to ensure discoverability.
*   If a path is featured in the global navigation, it needs a unique `path_id` in `js/nav_data.js`.

### 5. Tools
*   **`Learning_Paths/index.html`:** The main hub. Its `<ul>` of paths must be manually updated when new `.md` files are added.
*   **`js/nav_data.js`:** Update this to add significant new learning paths to the global navigation menu.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **`index.html` is Manual:** Remember that adding a new `<li>` element to the list in `index.html` is a required manual step for every new learning path file.
*   **Path Maintenance is Critical:** The value of this section depends on accurate links. When content is changed elsewhere, these paths must be reviewed and updated.

**Roadmap / Planned Additions:**
*   **New Paths:**
    *   Advanced Credit Risk Analysis
    *   CFA Level 2 & 3 Prep Focus Areas
    *   Financial Modeling Mastery
    *   Risk Management Professional
    *   Introduction to Capital Markets
    *   Skill-based "mini-paths" (e.g., "Mastering Covenant Analysis").
*   **Feature Enhancements (Advanced/Future):**
    *   Client-side progress tracking (using local storage).
    *   Providing realistic time estimates for path completion.
