# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and formatting.
*   **Clarity:** Learning paths must be clearly structured and easy to follow. Link descriptions should be unambiguous.
*   **Markdown Best Practices:** For individual learning path `.md` files.
*   **HTML/JS (for `index.html`):** When updating `Learning_Paths/index.html` to add new paths, ensure HTML structure and JavaScript data attributes (`data-md-src`) are correctly implemented.
*   **Accuracy:** Ensure all links within learning paths point to the correct and most relevant resources.
*   **File Naming:** Use descriptive names for path files (e.g., `Credit_Analyst_Foundational_Path.md`).
*   **Links:** All links must be relative and functional. This is critical for learning paths.
*   **Updating Navigation:**
    *   When a new learning path `.md` file is created, the `Learning_Paths/index.html` file **must** be updated by adding a new `<li>` element to the `<ul id="learning-path-nav-list">`.
    *   The main `Interactive_Notebooks/README.md` (if paths are linked from there) and the root `README.md` should also be checked for relevance.
*   **Review:** Thoroughly review new paths and changes to `index.html` to ensure correct navigation and rendering.

## Directory-Specific Instructions: Learning Paths

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Learning_Paths/` directory provides curated guides that suggest a sequence of study through the repository's various resources, tailored to specific roles, goals, or topics. These paths help users navigate the extensive content in a structured way.

The main entry point is `Learning_Paths/index.html`. This HTML file dynamically loads and renders the content of individual learning path `.md` files.
The `Learning_Paths/README.md` file serves as a human-readable overview of this section and its contents.

### 2. Hierarchy and Development Notes
*   **`index.html`:** The interactive viewer. **Key agent task:** When a new `.md` path is added, this file's navigation list must be manually updated by adding a new `<li>` with the correct `data-md-src` attribute.
*   **Individual Learning Path Files (`.md`):** Each path (e.g., `Credit_Analyst_Foundational_Path.md`) is a Markdown file.
    *   Structure: Target Audience, Learning Objectives, Suggested Modules/Reading Order (with links and brief explanations), Estimated Time (Optional), Next Steps.
*   **Maintainability:** This is crucial. As content across the repo changes, learning paths may need updating to reflect new or moved resources. This is a key area for ongoing review.

### 3. Specific Content Guidelines for Learning Paths
*   **Logical Flow:** Ensure the sequence of recommended resources makes sense from a learning progression perspective (e.g., foundational concepts before advanced topics).
*   **Comprehensive but Not Overwhelming:** Paths should be thorough enough to achieve their stated objectives but broken down into manageable stages.
*   **Leverage Existing Content:** The primary role of a learning path is to curate and sequence existing content from other sections. Avoid duplicating large amounts of content within the path document itself; link to it instead.
*   **Clarity of Links:** Ensure all links to resources are correct and clearly described with context.
*   **Action-Oriented Language:** Use verbs that encourage action (e.g., "Review...", "Complete the notebook...", "Understand the concepts in...").

### 4. Linking Strategy
*   This section is **all about linking**. Every step in a learning path will be a link to another part of the repository.
*   Ensure links are relative and use descriptive text.
*   The `Learning_Paths/README.md` provides an overview and should generally reflect the paths available in `index.html`.
*   The main `home.html` and root `README.md` should link to `Learning_Paths/index.html` to make users aware of available paths.

### 5. Roadmap / Planned Additions (from `README.md`)
*   Learning path for "Advanced Credit Risk Analysis Path."
*   Learning path for "CFA Level 2 Prep Focus Areas Path."
*   Learning path for "CFA Level 3 Prep Focus Areas Path."
*   Learning path for "Financial Modeling Mastery Path."
*   Learning path for "Risk Management Professional Path."
*   Learning path for "Introduction to Capital Markets Path."

### 6. Special Consideration for `home.html`
The `home.html` page itself functions as a high-level, interactive learning path navigator. If significant new roles or learning objectives emerge that are not well-represented by the existing tabs/sections on `home.html`, consider whether `home.html` needs updating or if a new, detailed `.md` learning path in this directory is more appropriate.

The `AGENTS.MD` files in other directories will indicate new content that might need to be incorporated into these learning paths. This directory is unlikely to contain interactive notebooks itself but will link to them extensively.
