# Agent Instructions - /Primers/ Directory

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first, particularly sections on general content creation, linking conventions, and the use of `marked.js` for HTML viewers.

## 1. Purpose and Scope
The `/Primers/` directory provides concise overviews of various industries, sectors, or specific financial products/concepts. These primers are intended to give analysts a quick understanding of key characteristics, drivers, risks, and analytical considerations for the topic covered.

The main entry point and interactive viewer for this section is `Primers/index.html`.
The `Primers/README.md` file offers a human-readable list of available primers.

## 2. Content Structure and Types
*   **Individual Primer Files (`.md`):** Each primer (e.g., `aerospace_defense.md`, `technology.md`) is a self-contained Markdown file.
*   **`Primers/index.html`:** This is an HTML page that uses JavaScript (specifically `marked.js` and custom scripts) to dynamically load and display the content of the selected `.md` primer file. It has a navigation list to select which primer to view.
*   **`html/` subdirectory:** Contains pre-rendered HTML versions of some primers. This might be a legacy approach or for specific primers that require complex HTML not easily achieved by `marked.js` rendering. **New primers should generally be created as `.md` files at the root of the `Primers/` directory and rely on the `Primers/index.html` viewer.**

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

## 4. Technical Considerations & Hub Integration

*   **`Primers/index.html` Maintenance:**
    *   This is the crucial file for this section. It contains a navigation list (e.g., `<ul id="primer-nav-list">`).
    *   When a new primer `.md` file is added to the `Primers/` directory, a corresponding `<li>` element **must be added** to this list in `Primers/index.html`.
    *   The `<li>` should contain an `<a>` tag with an `href` that points to the `.md` file (e.g., `href="technology.md"`) and potentially a `data-md-src` attribute if the JavaScript uses that. The existing JavaScript in `Primers/script.js` or inline in `Primers/index.html` handles loading the `.md` content into the display area.
*   **Markdown for Dynamic Rendering:** Write clean, standard Markdown. The `marked.js` library (or similar) used by `Primers/index.html` will convert it to HTML on the fly.
*   **`html/` Subdirectory Primers:** If modifying existing primers in the `html/` subdirectory, you are editing HTML directly. Ensure these are also linked correctly from `Primers/index.html` if they are meant to be part of the main primer navigation. Prioritize creating new primers as `.md` files.

## 5. Linking Strategy
*   **Global Glossary:** Extensively link industry-specific jargon and financial terms to the `Global_Financial_Glossary.md`.
*   **Cross-Repository Links:**
    *   Link to relevant CRAFT modules (e.g., an industry primer can link to industry analysis sections in CRAFT).
    *   Link to `Financial_Modeling/` if there are specific modeling considerations for that industry.
    *   Link to `Risk_Management/` for industry-specific risks.
    *   Link to `Market_Analysis_Quick_Start/` for foundational market concepts relevant to the primer.
*   **Within Primers:** Link related concepts between different primers if applicable.

## 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Focus on `.md` for New Primers:** For any new primer, create it as a Markdown file in the root of the `Primers/` directory and ensure it's added to the navigation in `Primers/index.html`. Avoid adding new files to the `Primers/html/` subdirectory unless there's a compelling reason related to complex HTML structure.
*   **`Primers/script.js` and `Primers/styles.css`:** These control the behavior and appearance of the `Primers/index.html` viewer. Modifications here would affect all primers viewed through it.
*   **Consistency in `.md` Structure:** While not rigidly enforced, try to follow a similar flow of topics within each primer `.md` file to provide a consistent user experience.

**Roadmap / Future Considerations:**
*   **Content Expansion (New Primers):**
    *   Add primers for more industries and sectors (e.g., Retail, Transportation, Pharmaceuticals, Utilities, etc.).
    *   Develop primers for specific financial products or complex concepts (e.g., "Securitization Primer," "Project Finance Primer").
*   **Updating Existing Primers:**
    *   Periodically review existing primers for outdated information (especially in "Recent Trends") and refresh as needed. This is an ongoing task.
*   **Interactive Elements:**
    *   Consider if any primer could benefit from a small, embedded interactive element (e.g., a simple calculator for a key industry metric, created with HTML/JS) or a link to a relevant Jupyter Notebook in `Interactive_Notebooks/`.
*   **Standardized Templates:**
    *   Develop a Markdown template for new primers to ensure all key sections are considered.
*   **Visuals:**
    *   If simple diagrams (e.g., of a supply chain) can be represented effectively with Markdown/HTML or text art, consider adding them. Avoid actual image files unless a process for managing them in `assets/` is established and they are truly essential.

Refer to the root `AGENTS.MD` for general guidelines on Markdown, linking, `marked.js` usage, and global navigation.
Ensure the `Primers/README.md` file is kept in sync with the list of available primers in `Primers/index.html`.
