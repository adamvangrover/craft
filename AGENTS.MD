# AGENTS.MD - Instructions for AI Content Developers

## 1. Purpose of This Repository

This repository, "Financial Learning Hub & Credit Risk Analyst Development Program," aims to be a comprehensive, interactive, and continuously evolving resource for individuals at all stages of their finance careers, with a special emphasis on developing skilled credit risk analysts. It combines foundational knowledge, practical toolkits, advanced topics, and exam preparation materials.

The goal is to create a deeply interconnected and engaging learning environment.

## 2. Overall Architecture

The repository is structured into several main thematic directories, each potentially containing subdirectories for more granular topics. Key top-level directories include:

*   `/` (Root): Contains main navigation (`home.html`, `README.MD`), this `AGENTS.MD`, global glossary, and potentially other cross-cutting resources.
*   `CFA/`: Chartered Financial Analyst program materials.
*   `corporate-credit-risk-analyst-training/` (CRAFT): A modular training program for credit analysts.
*   `Financial_Modeling/`: Best practices, templates, and techniques for financial modeling.
*   `Fintech/`: Exploration of financial technology topics.
*   `Risk_Management/`: Frameworks and deep dives into various risk categories.
*   `Interactive_Notebooks/`: Houses Jupyter Notebooks designed for interactive learning experiences.
*   `Primers/`: Industry-specific analysis guides.
*   `Market_Analysis_Quick_Start/`: Rapid onboarding for market concepts.
*   `Behavioral_Finance/`: Psychological aspects of financial decision-making.
*   `Toolkits_and_Checklists/`: Practical job aids.
*   `Professional_Development/`: Soft skills for finance professionals.
*   `Learning_Paths/`: Curated guides for specific learning objectives.

Each major directory listed above (and any new ones created at a similar level) **MUST** have its own `AGENTS.MD` file providing section-specific guidance.

## 3. General Principles for Content Creation

*   **Accuracy and Relevance:** Content must be accurate, up-to-date (to the best of your ability, citing sources or dates where appropriate for rapidly changing topics), and relevant to finance professionals, particularly those in or aspiring to credit risk roles.
*   **Clarity and Conciseness:** Write clearly and avoid unnecessary jargon. If technical terms are used, ensure they are defined in the `Global_Financial_Glossary.md` and linked appropriately.
*   **Modularity:** Design content in manageable chunks. Prefer smaller, focused Markdown files or notebook sections over monolithic documents.
*   **Interconnectivity (Lightweight Connectors):**
    *   Actively link between related concepts across different sections.
    *   New interactive notebooks or embedded Markdown viewers should be referenced from relevant existing content to make them discoverable and integrated.
    *   Link key terms to their definitions in `Global_Financial_Glossary.md`.
*   **Practicality:** Where appropriate, include examples, case studies, or actionable insights.
*   **Maintainability:** Follow consistent formatting and structure to make it easier for others (AI or human) to update and extend content.
*   **Additive Changes:** When modifying existing files, strive to add value and enhance content. If significant refactoring is needed, clearly state the rationale in commit messages.

## 4. Linking Conventions

*   **Relative Links:** **ALWAYS** use relative links for internal navigation between files within this repository. This ensures portability and functionality across different hosting environments (GitHub, local clones, etc.).
    *   Example: `[Link to another document](./path/to/other_document.md)`
    *   Example: `[Link to a section in the same doc](#section-heading)`
*   **Link Descriptions:** Use descriptive text for links that clearly indicates the destination content. Avoid generic "click here."

## 5. Working with Interactive Dashboards

Currently, three main HTML-based interactive dashboards/hubs exist:

*   `home.html` (Root dashboard)
*   `corporate-credit-risk-analyst-training/index.html` (CRAFT Program Hub)
*   `CFA/index.html` (CFA Study Hub)

**Guidelines for Modifying Dashboards:**

*   **Backup First:** Before making significant changes, consider copying the existing file content if you need to revert. (Though version control should handle this).
*   **Maintain Structure:** These pages use specific HTML structures and JavaScript for their interactivity. Understand the existing structure before adding new elements.
*   **Update Links Carefully:** If new sections are added to the repository, ensure links on these dashboards are updated to point to the correct new `README.md` or `index.html` for that section.
*   **Test Interactivity:** After making changes, conceptually verify that existing interactive elements (navigation tabs, module loaders, chart displays) still function as expected.
*   **Styling:** Adhere to the existing Tailwind CSS classes and general aesthetic for consistency.
*   **Developer Notes:** Look for `<!-- DEVELOPER NOTE: ... -->` comments within these HTML files for specific guidance or history.

## 6. Working with Jupyter Notebooks (`.ipynb`)

Jupyter Notebooks are a key component for providing interactive learning experiences.

**Creation Guidelines:**

*   **Location:** New notebooks should generally be placed within the `Interactive_Notebooks/` directory, organized into subdirectories by topic (e.g., `Interactive_Notebooks/Financial_Modeling/`).
*   **Content:**
    *   Combine Markdown cells for explanation with Python code cells for demonstration.
    *   Use common Python libraries for data analysis and visualization (Pandas, NumPy, Matplotlib, Seaborn, Plotly). `ipywidgets` can be used for interactivity within the notebook environment itself.
    *   Ensure notebooks are well-commented and easy to understand.
    *   For data, prefer to include small, illustrative datasets directly (e.g., in a `data/` subdirectory next to the notebook, or embedded as Python data structures) to ensure the notebook is self-contained and runnable by users who download it.
    *   If demonstrating web scraping, include the code but also provide the static fallback dataset, as live scraping may not work for all users or in all environments.
*   **Naming:** Use clear, descriptive names for notebook files (e.g., `InteractiveDCFModel.ipynb`).

**Handling of Jupyter Notebooks (Current Strategy):**

Due to environmental constraints preventing reliable execution of `jupyter nbconvert` by the agent, the primary method for presenting notebook content is as follows:
1.  **Create the `.ipynb` file** with all interactive code, visualizations, and Markdown explanations.
2.  **Create a comprehensive `README.md` file** in the same subdirectory as the `.ipynb` file. This `README.md` acts as the "guide" or "viewer" for the notebook. It should:
    *   Explain the notebook's purpose and learning objectives.
    *   Describe key sections of the notebook.
    *   Include illustrative code snippets (as text/code blocks).
    *   Describe expected outputs, visualizations, and interactive elements.
    *   Provide a clear, relative link to download the actual `.ipynb` file for local execution.
3.  **Link to the Notebook's `README.md`:** The main `Interactive_Notebooks/README.md` will serve as an index, linking to each notebook's specific guide `README.md`. Other relevant content pages throughout the repository should also link to these guide `README.md` files.

**Future Consideration (If `nbconvert` becomes reliably available to the agent):**
*   The original plan to convert notebooks to static HTML and embed them via `<iframe>` remains a valid alternative if `nbconvert` can be executed.
*   The `run_in_bash_session` tool would be used for:
    ```bash
    pip install jupyter nbconvert pandas # Add other common notebook libraries
    # Ensure pandoc is available if needed by nbconvert
    jupyter nbconvert --to html path/to/YourNotebook.ipynb
    ```
    Then, the generated HTML would be embedded in a new or existing `.html` page.

## 7. Implementing Markdown Viewers in HTML (Dynamic Content Loading)

To improve the readability of linked Markdown documents directly within HTML pages (rather than navigating to the raw `.md` file), the following approach has been implemented (e.g., in `primers/index.html` and `Learning_Paths/index.html`):

**Guidelines & Implementation Summary:**

1.  **Library:** Marked.js is used (included via CDN in the HTML file).
    ```html
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    ```
2.  **HTML Structure:**
    *   The main HTML page is structured to have a navigation area (listing items that link to `.md` files) and a content display area (e.g., `<div id="markdown-content-display"></div>`).
    *   Links that trigger dynamic loading have a `data-md-src="filename.md"` attribute.
3.  **JavaScript Implementation (Example Conceptual Flow):**
    *   Add JavaScript to handle link clicks (or other triggers).
    *   Prevent the default navigation.
    *   Use `fetch()` to get the content of the target `.md` file.
    *   Use `marked.parse(markdownText)` to convert the Markdown to HTML.
    *   Set the `innerHTML` of your target `div` with the rendered HTML.
    *   Example (conceptual):
        ```javascript
        document.querySelectorAll('a.markdown-link').forEach(link => {
            link.addEventListener('click', async (event) => {
                event.preventDefault();
                const mdUrl = link.href; // Or get from a data attribute
                const response = await fetch(mdUrl);
                const markdownText = await response.text();
                document.getElementById('markdown-content-area').innerHTML = marked.parse(markdownText);
            });
        });
        ```
4.  **Styling:** Apply CSS to the `#markdown-content-area` and its generated elements (headings, paragraphs, lists, tables) to ensure it is aesthetically pleasing and readable.

## 8. Updating the Global Financial Glossary

*   File: `Global_Financial_Glossary.md`
*   **Adding Terms:** When introducing new key financial or technical terms in any content, add them to the glossary.
    *   Maintain alphabetical order.
    *   Provide a clear, concise definition.
    *   Specify the primary context (e.g., `(Financial Modeling)`, `(Credit Risk)`).
    *   If the term is explained in detail elsewhere, add a cross-reference link: `*See: \`path/to/document.md#section-if-any\`*`.
*   **Linking to Terms:** From content files, link important terms to their glossary entries where it aids understanding, e.g., `[Term](./Global_Financial_Glossary.md#term)`. (Note: anchor linking to specific terms in a long Markdown glossary can be tricky depending on the renderer; test or use broader section links if necessary).

## 9. AGENTS.MD File Maintenance

*   This root `AGENTS.MD` should be updated if the overall repository architecture or core development principles change significantly.
*   Section-specific `AGENTS.MD` files should be updated when new patterns, tools, or content types are introduced within that section.
*   **ALWAYS** read the relevant `AGENTS.MD` files before starting significant work in a new section or with a new type of interactive content.

By following these guidelines, we can ensure this repository remains a valuable, coherent, and maintainable resource for all users and future developers (AI or human).
