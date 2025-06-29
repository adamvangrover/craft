# AGENTS.MD - Primers Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/primers/` directory contains detailed industry-specific analysis guides. Each primer aims to provide a comprehensive overview of an industry, including its structure, long-term trends, business cycles, key credit metrics, rating considerations, specific risk factors, and monitoring/underwriting tips.

The primary interactive entry point for this section is `primers/index.html`.

## 2. Content Structure and Types
*   **Main Navigator:** `primers/index.html` serves as the main navigation page for all primers.
    *   It currently uses a "card" based layout, where each card links to a full HTML version of the primer (e.g., `primers/html/aerospace_defense.html`).
    *   It also includes search functionality.
    *   *Developer Note:* `primers/index.html` had a merge conflict noted in its source. The active version links to separate HTML files for each primer's details. An alternative, commented-out version suggested embedding all primer content with accordions directly within `primers/index.html` or linking to the raw `.md` files. For now, the active version (linking to `primers/html/*.html`) is the standard to follow.
*   **Individual Primer Markdown Files:** Each industry primer is originally authored as a Markdown file (e.g., `primers/aerospace_defense.md`). These are the source files.
*   **Individual Primer HTML Files:** Corresponding HTML versions of each primer are located in `primers/html/` (e.g., `primers/html/aerospace_defense.html`). These are typically generated from the Markdown files and are what `primers/index.html` links to for the full view.

## 3. Specific Guidelines for Primers Content
*   **Standard Sections:** Each primer `.md` file should ideally follow a consistent structure, including sections like:
    1.  Industry Overview (History and Background, Key Segments)
    2.  Long-Term Trends
    3.  Business Cycles
    4.  Key Credit Metrics (differentiated by sub-sector if applicable)
    5.  Rating Criteria & Methodology Highlights
    6.  Specific Risk Factors
    7.  Monitoring & Underwriting Tips
*   **Keywords:** When adding a new primer, ensure relevant keywords are added to its card in `primers/index.html` (in the `data-keywords` attribute) to aid searchability.
*   **Clarity and Depth:** Primers should be detailed enough to be valuable for credit analysts and other finance professionals looking to understand an industry quickly.
*   **Updating `primers/index.html`:**
    *   When a new primer `.md` file is created:
        1.  An HTML version (e.g., `primers/html/new_primer.html`) needs to be generated (currently a manual step, or if an agent can convert Markdown to HTML, that would be the process).
        2.  A new "primer card" needs to be added to `primers/index.html` linking to this new HTML file and including a summary and keywords.
        3.  The `primers/script.js` might need updates if the search or filter logic is complex and relies on specific structures.
*   **Styling:** Individual primer HTML pages (`primers/html/*.html`) should ideally share a common stylesheet (perhaps `primers/styles.css` or a global one from `assets/css/`) for consistency.

## 4. Linking
*   Link key terms within primers to the `Global_Financial_Glossary.md`.
*   Cross-reference primers if industries are closely related (e.g., Automotive and Industrials).

## 5. Generating HTML from Markdown (Agent Workflow)
If an agent is tasked with creating a new primer:
1.  Create the main content in a `new_primer.md` file in the `primers/` directory.
2.  If the agent possesses a reliable Markdown-to-HTML conversion tool (e.g., using `pandoc` or a library via `run_in_bash_session` if available, or an internal tool):
    *   Convert `new_primer.md` to `primers/html/new_primer.html`.
    *   Ensure the generated HTML is clean and well-formatted, ideally linking to shared CSS.
3.  If direct conversion is not reliably available to the agent:
    *   The agent should clearly note that the `primers/html/new_primer.html` file needs to be created/updated from the `new_primer.md` source, potentially by a human user or a separate process.
4.  Update `primers/index.html` to include a card for the new primer, linking to `primers/html/new_primer.html`.

Refer to the root `AGENTS.MD` for general guidelines.


# AGENTS.MD - Industry Primers Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/primers/` directory contains concise overview documents (primers) for various industries. The goal of each primer is to provide a foundational understanding of an industry's key characteristics, drivers, risks, and credit considerations for financial analysts.

The main entry point and interactive navigation for these primers is `Primers/index.html`.

## 2. Content Structure and Types
*   Each industry primer is typically a single Markdown file (e.g., `Aerospace_Defense.md`, `Technology_Software.md`).
*   **Standard Primer Structure (Additional as Needed):**
    *   Overview / Introduction to the Industry
    *   Key Segments / Sub-sectors
    *   Business Model / How Companies Make Money
    *   Key Performance Indicators (KPIs) / Metrics
    *   Competitive Landscape (mentioning major players if appropriate)
    *   Key Drivers (Growth factors, demand influences)
    *   Key Risks (Operational, financial, regulatory, cyclicality)
    *   Credit Considerations / What Analysts Look For
    *   Recent Trends / Outlook (can be general if specific dates are hard to maintain)
    *   Glossary of Industry-Specific Terms (or link to global glossary for common terms)

## 3. Specific Guidelines for Primer Content
*   **Conciseness and Comprehensiveness:** Primers should be "quick start" guides, but also exhaustive industry treatises for expert analysts. Aim for a balance between depth and brevity and ease of use and insightfulness.
*   **Credit Focus:** While providing a general overview, always try to weave in implications for credit risk analysis. What aspects of this industry are most important for a lender or bond investor to understand?
*   **Keywords and Learning Prompts (for `Primers/index.html`):**
    *   The `primers/index.html` page uses `data-keywords` and `data-learning-prompt` attributes on the primer cards for its search/filter and display functionality.
    *   When adding a **new primer Markdown file** (e.g., `New_Industry.md` in the `/Primers/` directory):
        *   A corresponding `<article class="primer-summary-card" ...>` **MUST** be added to `primers/index.html`.
        *   This card element **MUST** include a `data-md-src="New_Industry.md"` attribute.
        *   Update `data-title` and `data-keywords` as appropriate.
        *   The `<a>` tag within the card should have `href="#"` and class `view-details-link`.
*   **Markdown Content Viewing within `primers/index.html` (Implemented):**
    *   `primers/index.html` now dynamically loads and renders the content of selected `.md` primer files into a dedicated `div#primer-content-display` on the page itself.
    *   This uses Marked.js (included via CDN in `index.html`) and JavaScript logic in `primers/script.js`.
    *   New primers added as `.md` files and correctly structured in `index.html` (as per above) will automatically use this enhanced viewing experience.
    *   Ensure the `data-md-src` attribute on the card in `index.html` correctly points to the filename of the Markdown primer.

## 4. Linking
*   Link industry-specific terms to the `Global_Financial_Glossary.md` or define them within the primer if highly specialized.
*   If a primer discusses financial modeling aspects unique to that industry, link to relevant concepts in `/Financial_Modeling/`.
*   If specific risks are highlighted, link to broader discussions in `/Risk_Management/`.
*   Consider if any industry concepts could be illustrated with an `Interactive_Notebooks/` (e.g., modeling a specific KPI for an industry).

## 5. Roadmap / Planned Additions (Illustrative)
*   New primers for emerging industries (e.g., Renewable Energy Infrastructure, Cannabis).
*   Standardized financial ratio benchmarks for key industries.
*   Visual aids (simple diagrams if possible as per root `AGENTS.MD` on visuals) to explain industry value chains.

Refer to the root `AGENTS.MD` for general guidelines on Markdown, HTML, JS modifications, and the use of Markdown viewers.
Pay close attention to the `Primers/index.html` JavaScript structure when adding new primers.
