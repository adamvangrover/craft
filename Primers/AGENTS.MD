# AGENTS.MD - Industry Primers Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/Primers/` directory contains concise overview documents (primers) for various industries. The goal of each primer is to provide a foundational understanding of an industry's key characteristics, drivers, risks, and credit considerations for financial analysts.

The main entry point and interactive navigation for these primers is `Primers/index.html`.

## 2. Content Structure and Types
*   Each industry primer is typically a single Markdown file (e.g., `Aerospace_Defense.md`, `Technology_Software.md`).
*   **Standard Primer Structure (Recommended):**
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
*   **Conciseness:** Primers should be "quick start" guides, not exhaustive industry treatises. Aim for a balance between depth and brevity.
*   **Credit Focus:** While providing a general overview, always try to weave in implications for credit risk analysis. What aspects of this industry are most important for a lender or bond investor to understand?
*   **Keywords and Learning Prompts (for `Primers/index.html`):**
    *   The `Primers/index.html` page uses `data-keywords` and `data-learning-prompt` attributes on the primer cards for its search/filter and display functionality.
    *   When adding a **new primer Markdown file** (e.g., `New_Industry.md` in the `/Primers/` directory):
        *   A corresponding `<article class="primer-summary-card" ...>` **MUST** be added to `Primers/index.html`.
        *   This card element **MUST** include a `data-md-src="New_Industry.md"` attribute.
        *   Update `data-title` and `data-keywords` as appropriate.
        *   The `<a>` tag within the card should have `href="#"` and class `view-details-link`.
*   **Markdown Content Viewing within `Primers/index.html` (Implemented):**
    *   `Primers/index.html` now dynamically loads and renders the content of selected `.md` primer files into a dedicated `div#primer-content-display` on the page itself.
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
