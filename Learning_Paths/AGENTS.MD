# AGENTS.MD - Learning Paths Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/Learning_Paths/` directory provides curated guides that suggest a sequence of study through the repository's various resources, tailored to specific roles, goals, or topics. These paths help users navigate the extensive content in a structured way.

*   The main interactive viewer for individual learning path documents (e.g., `Credit_Analyst_Foundational_Path.md`) is `Learning_Paths/index.html`. This page lists available paths and renders their content dynamically.
*   The overview of this "Learning Paths" section itself, contained in `Learning_Paths/README.md`, can be viewed in a standardized, styled format by accessing `Learning_Paths/readme_viewer.html`.

## 2. Content Structure and Types
*   **`index.html`:** The main interactive viewer page for this section. It contains the list of available learning paths and a display area for the selected path's content.
*   **Individual Learning Path Files (`.md`):** Each specific learning path (e.g., `Credit_Analyst_Foundational_Path.md`, `Understanding_Fintech_for_Analysts.md`) remains a Markdown file.
    *   These `.md` files are fetched and rendered into `index.html`.
    *   A learning path document should typically include:
        *   **Target Audience:** Who is this path for?
        *   **Learning Objectives:** What should the user know or be able to do after completing this path?
        *   **Suggested Modules/Reading Order:** A step-by-step list of recommended documents, sections, or interactive notebooks from across the entire repository.
            *   Each step should clearly link to the relevant resource using relative paths.
            *   Briefly explain why each resource is included at that point in the path.
        *   **Estimated Time (Optional):** A rough estimate of the time commitment if feasible.
        *   **Next Steps/Further Learning:** Suggestions for what to explore after completing the path.

## 3. Specific Guidelines for Learning Path Content
*   **Adding a New Learning Path:**
    1.  Create the new `.md` file (e.g., `Advanced_Credit_Path.md`) in the `/Learning_Paths/` directory.
    2.  Populate it with the structure outlined above (Target Audience, Objectives, Reading Order, etc.).
    3.  **Crucially, add a new list item and link to `Learning_Paths/index.html`**. This involves adding an `<li><a href="#" class="path-link" data-md-src="Advanced_Credit_Path.md">Advanced Credit Path</a><p>...</p></li>` to the `<ul>` within the `paths-list-container` nav element. Ensure the `data-md-src` attribute correctly points to your new `.md` file.
*   **Logical Flow:** Ensure the sequence of recommended resources makes sense from a learning progression perspective (e.g., foundational concepts before advanced topics).
*   **Comprehensive but Not Overwhelming:** Paths should be thorough enough to achieve their stated objectives but broken down into manageable stages.
*   **Leverage Existing Content:** The primary role of a learning path is to curate and sequence existing content from other sections. Avoid duplicating large amounts of content within the path document itself; link to it instead.
*   **Clarity of Links:** Ensure all links to resources are correct and clearly described.
*   **Maintainability:** When new content is added to the repository, existing learning paths should be reviewed and potentially updated to include links to the new, relevant material. This is crucial.

## 4. Linking
*   This section is ALL ABOUT linking. Every step in a learning path will be a link to another part of the repository.
*   Ensure links are relative and use descriptive text.
*   The `Learning_Paths/README.md` (viewable via `Learning_Paths/readme_viewer.html`) introduces this section and should ideally list or describe the available learning path documents.
*   The main `home.html` and root `README.MD` should link to this section to make users aware of available paths.

## 5. Roadmap / Planned Additions (Illustrative)
*   Learning path for "Advanced Financial Modeling Techniques."
*   Learning path for "Preparing for a Quant Analyst Role."
*   Learning path for "Understanding Fixed Income Markets."
*   More specialized paths as the repository grows.

## 6. Special Consideration for `home.html`
The `home.html` page itself functions as a high-level, interactive learning path navigator. If significant new roles or learning objectives emerge that are not well-represented by the existing tabs/sections on `home.html`, consider whether `home.html` needs updating or if a new, detailed `.md` learning path in this directory is more appropriate.

Refer to the root `AGENTS.MD` for general guidelines on Markdown, HTML, and linking.
The `AGENTS.MD` files in other directories will indicate new content that might need to be incorporated into these learning paths.
This directory is unlikely to contain interactive notebooks itself but will link to them extensively.
