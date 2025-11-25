# Contributing to the Financial Learning Hub

Thank you for your interest in contributing to this comprehensive financial learning repository! Whether you're fixing a typo, adding a new concept, creating a new module, or improving interactivity, your contributions are valuable.

This document provides guidelines to help ensure consistency, quality, and maintainability of the content. While many `AGENTS.MD` files exist throughout the repository to guide AI content developers, this `CONTRIBUTING.md` summarizes key principles for human contributors.

## Guiding Principles

1.  **Accuracy and Relevance:**
    *   Content must be accurate, up-to-date (citing sources/dates for rapidly changing topics like Fintech), and relevant to finance professionals, especially those in or aspiring to credit risk roles.
    *   Verify information, formulas, and examples.

2.  **Clarity and Conciseness:**
    *   Write clearly and avoid unnecessary jargon.
    *   If technical terms are essential, ensure they are defined in the `Global_Financial_Glossary.md` and linked appropriately from your content.

3.  **Modularity:**
    *   Design content in manageable chunks. Prefer smaller, focused Markdown files or Jupyter Notebook sections over monolithic documents. This makes content easier to digest and maintain.

4.  **Interconnectivity:**
    *   Actively link between related concepts across different sections of the repository using relative paths.
    *   Link key terms to their definitions in `Global_Financial_Glossary.md`.
    *   If you add new content (e.g., a new primer, a new notebook), ensure it's discoverable by linking to it from relevant `README.md` files, `index.html` hub pages, and the global navigation (`js/nav_data.js`) if it's a major section.

5.  **Practicality and Actionability:**
    *   Where appropriate, include examples, case studies, or actionable insights that users can apply.
    *   For toolkits and checklists, ensure they are directly usable.

6.  **Maintainability:**
    *   Follow consistent formatting and structure. Observe the style of existing content in the section you're working on.
    *   Use relative links for all internal content.
    *   If making significant changes or additions, consider if any `AGENTS.MD` files need updates to reflect new patterns or structures (though this is primarily for AI guidance, it helps keep overall documentation aligned).

## Getting Started

1.  **Familiarize Yourself with the Structure:**
    *   Explore the repository to understand how content is organized into main thematic directories (e.g., `CFA/`, `Financial_Modeling/`, `Risk_Management/`, `Primers/`, `Interactive_Notebooks/`).
    *   Review the main `README.MD` and `home.html` for an overview.
    *   **Read `PEDAGOGY.md`**: This is essential. It explains our "Active Learning" philosophy. Your content should align with these principles (e.g., using "Buy-Side Perspective" blocks).
    *   Check the `AGENTS.MD` file in the root directory and in the specific section you're interested in. While targeted at AI, they provide deep insights into the intended structure, scope, and technical considerations for each area.

2.  **Choose What to Contribute:**
    *   **Fixes:** Correct typos, broken links, or factual inaccuracies.
    *   **Enhancements:** Improve existing explanations, add more examples, or clarify difficult concepts.
    *   **New Content:**
        *   Many `AGENTS.MD` files (and section `README.md` files) have "Roadmap" or "Future Considerations" sections that list desired new content. This is a great place to find ideas.
        *   If adding a new major section or a new type of interactive component, it's a good idea to first propose it via an Issue to discuss how it fits into the overall architecture.

## Content Types

*   **Markdown (`.md`):** The primary format for most textual content. Use clear headings, lists, tables, and code blocks.
*   **HTML (`.html`):** Used for hub pages (e.g., `CFA/index.html`), section viewers (e.g., `Primers/index.html`), and sometimes for content requiring complex layouts.
    *   Many `index.html` viewers use JavaScript (often with `marked.js`) to dynamically load and display `.md` files. If you add a new `.md` file to such a section, you'll likely need to update a JavaScript array or list in the corresponding `index.html` file. Check the relevant `AGENTS.MD` or the `index.html` source for details.
*   **Jupyter Notebooks (`.ipynb`):** For interactive learning.
    *   Place notebooks in appropriate subdirectories under `Interactive_Notebooks/`.
    *   Each notebook or small group of related notebooks should have a guiding `README.md` file in its directory that explains its purpose, how to use it, and links to the `.ipynb` file.
    *   Refer to `Interactive_Notebooks/AGENTS.MD` for detailed guidelines.
*   **JavaScript (`.js`):**
    *   The global navigation is primarily driven by `js/nav_data.js` (defines structure) and `js/global_nav.js` (renders the menu). Adding new top-level sections or changing major navigation requires editing `js/nav_data.js`.
    *   Section-specific `index.html` files often contain JavaScript for their local navigation and content loading.
*   **CSS (`.css`):** Global styles are in `css/` and `assets/css/`. Try to use existing styles and maintain consistency.

## Making Changes

1.  **Fork the Repository (if you're an external contributor):** Create your own copy of the repository to work on.
2.  **Create a New Branch:** For any non-trivial change, create a new branch from `main` (or the relevant development branch). Use a descriptive branch name (e.g., `feature/add-erm-module`, `fix/typo-in-cfa-ethics`).
3.  **Make Your Changes:**
    *   Adhere to the principles outlined above.
    *   Test your changes locally (e.g., open HTML files in a browser, ensure links work).
4.  **Commit Your Changes:** Use clear and descriptive commit messages.
5.  **Push to Your Fork (if applicable) and Create a Pull Request:**
    *   Submit a Pull Request (PR) to the main repository.
    *   Clearly describe the changes you've made and why.
    *   If your PR addresses an existing Issue, link to it.

## Key Files to Be Aware Of

*   **`AGENTS.MD` (various locations):** Provide detailed instructions, primarily for AI, but very useful for understanding section goals and technical details. The root `AGENTS.MD` is crucial.
*   **`Global_Financial_Glossary.md`:** Add new key terms here. Link to it from your content.
*   **`js/nav_data.js`:** The source of truth for the global navigation sidebar.
*   **Section `index.html` files (e.g., `Primers/index.html`, `Financial_Modeling/index.html`):** These often control navigation and content display within their respective sections. If you add content to these sections, these files may need updating.

## Questions?

If you have questions or want to discuss a potential contribution, please feel free to open an Issue on GitHub.

We look forward to your contributions!
