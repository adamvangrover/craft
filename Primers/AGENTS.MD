# Agent Instructions: /Primers/ Directory

This document provides instructions for AI agents working with the content in the `/Primers/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles (accuracy, clarity, modularity).
*   Linking conventions.
*   Working with interactive dashboards and the global navigation system (`js/nav_data.js`).
*   Jupyter Notebook and Markdown viewer implementation.
*   Updating the Global Financial Glossary.

## 1. Purpose and Scope
The `/Primers/` directory provides concise overviews of various industries, sectors, or specific financial products/concepts. These primers are intended to give analysts a quick understanding of key characteristics, drivers, risks, and analytical considerations for the topic covered.

The main entry point and interactive viewer for this section is `Primers/index.html`.
The `Primers/README.md` file offers a human-readable list of available primers.

## 2. Content Structure and Types
*   **Individual Primer Files (`.md`):** Each primer (e.g., `aerospace_defense.md`, `technology.md`) is a self-contained Markdown file.
*   **`Primers/index.html`:** This is an HTML page that uses JavaScript (specifically `marked.js` and custom scripts) to dynamically load and display the content of the selected `.md` primer file. It has a navigation list to select which primer to view.
*   **`html/` subdirectory:** Contains pre-rendered HTML versions of some primers. This is a legacy approach. **New primers should be created as `.md` files and rely on the `Primers/index.html` viewer.**

**Typical Structure of a Primer (`.md` file):**
*   **Overview/Introduction:** What the industry/sector/concept is.
*   **Key Characteristics/Segments:** Main components, business models.
*   **Demand Drivers:** What drives growth and activity.
*   **Supply Chain/Key Players:** Who are the major participants.
*   **Financial Profile (Typical):** Common financial statement characteristics, key metrics.
*   **Key Risks:** Specific risks inherent to the industry/sector.
*   **Analytical Considerations (especially for Credit):** What analysts should focus on.
*   **Relevant Ratios/Metrics:** Important performance indicators.
*   **Recent Trends/Outlook (General):** Broad, less time-sensitive trends. Avoid highly specific, rapidly aging data.
*   **Glossary of Key Terms (Optional, if many specific terms):** Or link heavily to Global Glossary.

## 3. Specific Guidelines for Primer Content
*   **Conciseness and Clarity:** Primers should be "quick reads." Focus on the most important information.
*   **Credit Focus:** While providing a general overview, try to weave in implications for credit analysis throughout.
*   **Standardized Structure (Loosely):** While the exact headings can vary by topic, try to cover the core areas listed above for consistency.
*   **Data and Statistics:** Use data sparingly and generally (e.g., "typically high capital intensity" rather than exact figures that will quickly go out of date). If specific data is used, cite the source and year.
*   **Avoid Deep Dives:** Primers are overviews. Link to more detailed content in other sections (e.g., CRAFT modules, Financial Modeling guides, Risk Management sections) for deeper exploration.

## 4. Linking Strategy
*   **Global Glossary:** Extensively link industry-specific jargon and financial terms to the `Global_Financial_Glossary.md`.
*   **Cross-Repository Links:**
    *   Link to relevant `modules/` (e.g., an industry primer can link to industry analysis sections in the CRAFT program).
    *   Link to `Financial_Modeling/` if there are specific modeling considerations for that industry.
    *   Link to `Risk_Management/` for industry-specific risks.
*   **Within Primers:** Link related concepts between different primers if applicable.

## 5. Tools and Technical Notes
*   **`Primers/index.html`:** This is the crucial hub for the section. When adding a new `.md` primer, a corresponding `<li>` element **must be added** to the `<ul id="primer-nav-list">` in this file.
*   **Dynamic Rendering:** The `index.html` uses `marked.js` to render Markdown files on the fly. Write clean, standard Markdown.
*   **`js/nav_data.js`:** Use this to add a link to the main Primers hub in the global navigation.

## 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Focus on `.md` for New Primers:** For any new primer, create it as a Markdown file and add it to the `index.html` navigation list. Avoid using the legacy `html/` subdirectory.
*   **Consistency in `.md` Structure:** Try to follow a similar flow of topics within each primer `.md` file to provide a consistent user experience.

**Roadmap / Planned Additions:**
*   **Content Expansion:** Add primers for more industries (Retail, Transportation, Pharma, Utilities) and financial products (Securitization, Project Finance).
*   **Updating Existing Primers:** Periodically review existing primers for outdated information and refresh as needed.
*   **Interactive Elements:** Consider embedding simple interactive calculators (HTML/JS) or linking to relevant Jupyter Notebooks.
*   **Standardized Templates:** Develop a Markdown template for new primers to ensure all key sections are included.
