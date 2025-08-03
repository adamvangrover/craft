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
*   `legal_analysis/`: Guides and tools for understanding legal documents in finance.

Each major directory listed above (and any new ones created at a similar level) **MUST** have its own `AGENTS.MD` file providing section-specific guidance.

**Note on other directories:**
*   `outlook/`: This directory contains market outlook and trend reports. Due to its specific and often time-sensitive nature, content here should follow general guidelines. Specific agent instructions, if any beyond the general ones, would be minimal and could be covered in this root `AGENTS.MD` if necessary, but a dedicated `AGENTS.MD` is not currently mandated for it unless it significantly expands in scope.
*   `assets/`, `css/`, `js/`: These have their own `AGENTS.MD` files focused on asset management and global UI components.

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

*   `home.html` (Root dashboard): This is the primary landing page for the entire financial learning repository. It features a single-scroll layout showcasing a Hero section, Learning Paths, Key Learning Pillars, Tools/Resources, and a "How to Use" guide. It integrates the global navigation sidebar and may include interactive elements like an AI Concept Explainer. It is built with Tailwind CSS.
*   `corporate-credit-risk-analyst-training/index.html` (CRAFT Program Hub): An interactive hub for the CRAFT program, typically using iframes or dynamic content loading for modules.
*   `CFA/index.html` (CFA Study Hub): An interactive hub for CFA program preparation materials.

**Guidelines for Modifying Dashboards (especially `home.html`):**

*   **Backup First:** Before making significant changes, consider version control as your primary backup.
*   **Understand Structure:**
    *   `home.html`: Understand its single-page scroll structure, Tailwind CSS classes, and how sections are defined. JavaScript is used for minor enhancements and potentially for features like the AI explainer.
    *   Other Hubs (`CRAFT/index.html`, `CFA/index.html`): These may have more complex JavaScript for their specific interactivity (e.g., tabbed views, dynamic content loading for modules/resources).
*   **Update Links Carefully:** If new sections are added to the repository, ensure links on `home.html` (e.g., in Key Pillars or Learning Path cards) and within the global navigation data (`js/nav_data.js`) are updated to point to the correct new `README.md` or `index.html` for that section.
*   **Test Interactivity:** After making changes, verify that:
    *   The global navigation sidebar functions correctly.
    *   Internal page links (smooth scrolling) on `home.html` work.
    *   Any interactive JavaScript components (like the AI explainer) on `home.html` are functional.
    *   For other hubs, test their specific interactive elements (tabs, content loaders, charts).
*   **Styling:**
    *   For `home.html`, primarily use Tailwind CSS utility classes. Custom component styles can be defined within `<style>` tags in `home.html` or in a dedicated CSS file (e.g., `assets/css/home_styles.css`) if they become extensive.
    *   For other hubs, adhere to their existing styling approach (which may also include Tailwind or custom CSS).
*   **Developer Notes:** Look for `<!-- DEVELOPER NOTE: ... -->` comments within HTML files for specific guidance or history.
*   **Global Navigation:** Remember that the global navigation is driven by `js/nav_data.js` and rendered by `js/global_nav.js`. Changes to the site's overall structure that need to be reflected in the main navigation menu must be made in `js/nav_data.js`.

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

## 10. Global Navigation System

A global navigation system has been implemented to provide a consistent and comprehensive way to explore the learning hub. This system is data-driven and dynamically generated.

**Key Components:**

*   **`js/nav_data.js`**: This file contains the JavaScript array of objects that defines the entire navigation structure. **This is the primary file to update when adding or modifying navigation links.**
    *   Each object in the array represents a navigation item and can have properties like `text` (display text), `href` (URL), `type` (see below), and `children` (for nested sub-menus).
    *   Paths in `href` should be relative to the repository root (e.g., `CFA/index.html`, `primers/aerospace_defense.md`).
*   **`js/global_nav.js`**: This script reads the `navData` from `nav_data.js` and dynamically generates the HTML for the navigation menu. It handles different link types and constructs appropriate URLs.
*   **`css/global_nav.css`**: This file contains the styles for the global navigation menu. The navigation is currently styled as a left sidebar.
*   **`global_markdown_viewer.html`**: A generic HTML page designed to render Markdown files. It uses `marked.js` and takes a `mdfile` URL parameter (e.g., `global_markdown_viewer.html?mdfile=path/to/your_document.md`).

**Integrating Global Navigation into HTML Pages:**

To display the global navigation on an HTML page:
1.  Include the navigation CSS in the `<head>`:
    ```html
    <link rel="stylesheet" href="css/global_nav.css">
    ```
2.  Add the placeholder `div` where the navigation should appear (typically as the first element inside `<body>` if it's a sidebar):
    ```html
    <div id="global-nav-placeholder"></div>
    ```
    Your page layout might need adjustments (e.g., using flexbox) to accommodate the sidebar. See `home.html` for an example.
3.  Include the JavaScript files at the end of your `<body>`, ensuring `nav_data.js` comes before `global_nav.js`:
    ```html
    <script src="js/nav_data.js" defer></script>
    <script src="js/global_nav.js" defer></script>
    ```

**Adding Content to the Global Navigation:**

To add a new link or section to the global navigation, you primarily need to edit `js/nav_data.js`.

**Navigation Item Types in `js/nav_data.js`:**

When adding an item to `navData`, specify its `type`. Common types include:

*   `type: "html"`: For a standard standalone HTML page.
    *   Example: `{ text: "Home", href: "home.html", type: "html" }`
*   `type: "html_hub"`: For main interactive HTML hub pages (e.g., `CFA/index.html`).
    *   Example: `{ text: "CFA Study Hub", href: "CFA/index.html", type: "html_hub" }`
*   `type: "html_hub_section"`: For linking to a specific section (using a URL anchor) within an `html_hub`.
    *   Example: `{ text: "Level I Materials", href: "CFA/index.html#materials-library", type: "html_hub_section" }`
*   `type: "category"`: For creating a collapsible section or dropdown menu. It must have a `children` array containing other navigation items.
    *   Example:
        ```javascript
        {
          text: "Financial Modeling",
          type: "category",
          children: [
            { text: "FM Hub", href: "Financial_Modeling/index.html", type: "html_hub" },
            // ... more items
          ]
        }
        ```
*   `type: "markdown_viewer"`: For Markdown files that should be rendered using a dedicated viewer.
    *   `viewer: "global"`: Use this property if the Markdown file should be opened with `global_markdown_viewer.html`. The `href` should be the path to the `.md` file.
        *   Example: `{ text: "FM Best Practices", href: "Financial_Modeling/Best_Practices/FM_Best_Practices.md", type: "markdown_viewer", viewer: "global" }`
    *   `viewer: "path/to/section_viewer.html"`: (Future/Advanced) If a Markdown file is best viewed by a specific existing section viewer (like `primers/index.html`), you can specify the viewer's path here. The `href` in `nav_data.js` should then be constructed with the appropriate URL parameters for that viewer.
        *   Example (conceptual for primers): `{ text: "Aerospace Primer", href: "primers/index.html?load=aerospace_defense.md", type: "markdown_viewer", viewer: "primers/index.html" }` (Note: `global_nav.js` might need adjustment for this pattern if it differs from simple `mdfile` param).
*   `type: "section_viewer"`: For HTML pages that are themselves viewers for a collection of content (e.g., `primers/index.html` which loads various Markdown files).
    *   Example: `{ text: "Industry Primers", href: "primers/index.html", type: "section_viewer" }`
*   `type: "jupyter_guide"`: For linking to `README.md` files that serve as guides for Jupyter Notebooks. These links typically open in a new tab.
    *   Example: `{ text: "Equity Valuation Notebook Guide", href: "Interactive_Notebooks/Financial_Modeling/README.md", type: "jupyter_guide" }`
*   `type: "craft_module_viewer"`: Specifically for CRAFT program modules that are typically loaded within the CRAFT hub's iframe.
    *   Example: `{ text: "Module 1: Foundations", href: "corporate-credit-risk-analyst-training/modules/01-foundations/index.html", type: "craft_module_viewer" }`
*   `type: "learning_path_definition"`: For Markdown files that define a specific learning path.
    *   `path_id`: A unique machine-readable ID for the path.
    *   Example: `{ text: "Credit Analyst Foundational Path", href: "Learning_Paths/Credit_Analyst_Foundational_Path.md", type: "learning_path_definition", path_id: "credit_analyst_foundational" }`

**Linking Markdown Files:**

*   **For general Markdown files:** Add an entry to `js/nav_data.js` with `type: "markdown_viewer"` and `viewer: "global"`. Set `href` to the path of your `.md` file from the repository root.
    ```javascript
    {
      text: "My New Document",
      href: "path/to/my_new_document.md",
      type: "markdown_viewer",
      viewer: "global"
    }
    ```
*   **For Markdown files within a section viewer (e.g., a new Primer):**
    1.  Add the `.md` file to the appropriate directory (e.g., `primers/`).
    2.  Update the section viewer's HTML/JS to include a link to your new `.md` file (e.g., add a card in `primers/index.html`).
    3.  If you want a direct link from the global navigation to this specific primer *within the primer viewer*, you'd add an item to `js/nav_data.js` like:
        ```javascript
        // Inside a 'Primers' category or similar
        {
          text: "My New Primer",
          href: "primers/index.html?load=my_new_primer.md", // URL param tells primer viewer what to load
          type: "section_viewer_item" // Or markdown_viewer with viewer: "primers/index.html"
        }
        ```
        The main link to the `primers/index.html` itself would be of `type: "section_viewer"`.

Always test your changes by opening an HTML page that includes the global navigation (e.g., `home.html`) locally.
Refer to the existing entries in `js/nav_data.js` for more examples.

## 11. Developer Notes & Future Considerations

This section outlines broader ideas for repository improvement, technical debt, and potential future features that agents should be aware of.

### Getting Started: Quick Guide for New Contributors

1.  **Read the Root `AGENTS.MD`:** This file is the most important document in the repository. It contains the overall strategy and guidelines for content creation.
2.  **Explore the Repository:** Familiarize yourself with the existing content and structure.
3.  **Review the `AGENTS.MD` for the Section You're Working In:** Each major section has its own `AGENTS.MD` file with specific guidelines.
4.  **Check for "Roadmap" or "Future Additions" Sections:** These sections often contain specific content needs.
5.  **Start Small:** If you're not sure where to start, try adding a new term to the `Global_Financial_Glossary.md` or fixing a broken link.

### Tone and Voice

*   **Professional and Authoritative:** The tone of the content should be professional and authoritative, but also accessible and engaging.
*   **Clear and Concise:** Avoid jargon and use clear, concise language.
*   **Objective and Unbiased:** Present information in an objective and unbiased manner.

### Image and Asset Guidelines

*   **Optimize Images:** All images should be optimized for the web to ensure fast loading times.
*   **Use Descriptive File Names:** File names should be descriptive and use hyphens instead of spaces (e.g., `financial-modeling-best-practices.png`).
*   **Add Alt Text:** All images should have descriptive alt text for accessibility.
*   **Store Images in the `assets/` Directory:** All images should be stored in the `assets/` directory, organized into subdirectories by topic.

*   **Global Navigation Enhancements:**
    *   The current system is functional but could be improved with different visual styles (e.g., a top menu option).
    *   Active link highlighting could be more robust.
    *   More advanced learning path integration (e.g., tracking progress, suggesting next steps) is a long-term goal.
*   **Jupyter Notebook Integration:**
    *   The current strategy of using `README.md` guides for notebooks is due to agent limitations with `nbconvert`. If `nbconvert` becomes reliably available and performant for agents, revisiting direct HTML conversion and embedding of notebooks (as outlined in section 6) would be valuable. This would involve:
        *   Ensuring `pandoc` is available if `nbconvert` requires it.
        *   Standardizing `nbconvert` commands and output styling.
*   **Interactive Quiz Enhancements:**
    *   The `quiz_viewer.html` and `assets/js/quiz_loader.js` provide basic quiz functionality. Future enhancements could include:
        *   Different question types (e.g., fill-in-the-blank, matching).
        *   Score tracking and feedback persistence (potentially using local storage).
        *   Randomization of questions and answers.
*   **Content Discoverability:**
    *   While the global navigation helps, implementing a simple client-side search functionality could greatly improve content discoverability.
    *   Topic maps or visual diagrams showing connections between different learning modules could be beneficial.
*   **Accessibility (A11y):**
    *   Future efforts should include a more thorough review of HTML structures and CSS to ensure content is accessible (e.g., proper ARIA roles, keyboard navigation, color contrast).
*   **Automated Checks & Linting:**
    *   Implementing automated checks for broken links would be highly beneficial.
    *   Using linters for Markdown (e.g., Markdownlint) and formatters for code (e.g., Prettier for JS/CSS/HTML, Black for Python in notebooks) could improve consistency.
*   **Contribution Guide for Humans (`CONTRIBUTING.md`):**
    *   Creating a `CONTRIBUTING.md` file to guide human contributors, summarizing key principles from these `AGENTS.MD` files, is a planned addition.
*   **Performance:**
    *   Regularly review image sizes and consider optimizing large assets.
    *   Monitor JavaScript performance, especially for scripts that manipulate large amounts of content.
*   **Content Gaps & Expansion:**
    *   **Industry Primers:** The `modules/primers` directory is a key area for expansion. New primers on major industries (e.g., Automotive, Healthcare, Consumer Goods) would be valuable additions. Each primer should follow the existing structure: Introduction, Key Segments, Financial Analysis, Risks, and Further Reading.
    *   **CFA Case Studies:** The `CFA` directory can be enhanced with more case studies, particularly for Level II and Level III, focusing on complex valuation, derivatives, and portfolio management topics.
    *   **Interactive Notebooks:** The `Interactive_Notebooks` directory is a priority for new content. Notebooks that provide interactive calculators (e.g., for WACC, Black-Scholes), data visualizations, and simple models are highly desirable.
    *   **Legal Analysis:** The `legal_analysis` section can be expanded with more case studies on recent LME transactions and in-depth guides on specific clauses in credit agreements.
    *   **Quizzes:** New quizzes can be created for any section of the repository. Existing quizzes should be periodically updated with new questions.
    *   **Cross-linking:** As new content is added, it is crucial to add links to it from other relevant parts of the repository to ensure it is discoverable.

## 12. Strategic Roadmap

This section outlines the high-level strategic roadmap for the Financial Learning Hub. The goal is to provide a clear vision for the future development of the repository.

### Q3 2024: Foundational Content & Interactivity

*   **Content:**
    *   **Accounting:** Add more case studies and interactive notebooks.
    *   **Financial Modeling:** Add more advanced modeling topics, such as M&A and LBO models.
    *   **Data Science:** Add more notebooks on topics such as natural language processing (NLP) for financial news analysis and time series analysis for stock price prediction.
*   **Features:**
    *   **Interactive Quizzes:** Develop a more robust quiz engine with support for different question types, score tracking, and instant feedback.
    *   **Personalized Learning Paths:** Create a more personalized and interactive learning path system with progress tracking and gamification elements.

### Q4 2024: New Content Verticals & Community Building

*   **Content:**
    *   **Sustainable Finance:** Launch a new section on sustainable finance, covering topics such as ESG investing, green bonds, and impact investing.
    *   **Wealth Management:** Launch a new section on wealth management, covering topics such as financial planning, investment management, and estate planning.
*   **Features:**
    *   **Community Forum:** Launch a community forum where users can ask questions, share insights, and collaborate with each other.
    *   **Video Content:** Add more video content, such as tutorials, lectures, and interviews with industry experts.

### 2025: Expansion & Outreach

*   **Content:**
    *   **Advanced Topics:** Add more advanced topics to all sections, such as advanced derivatives, alternative investments, and private equity.
    *   **New Languages:** Translate the repository into other languages, starting with Spanish and Mandarin.
*   **Features:**
    *   **Mobile App:** Develop a mobile app to make the repository more accessible to users on the go.
    *   **Partnerships:** Partner with universities and other educational institutions to offer our content to a wider audience.
