# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the established format for industry primers.
*   **Clarity and Conciseness:** Primers should be informative yet digestible. Balance depth with brevity.
*   **Markdown Best Practices:** For the source `.md` files of the primers.
*   **HTML Structure (for `index.html` and `html/*.html`):** When adding new primers, ensure the card structure in `primers/index.html` is replicated correctly. Ensure generated HTML files in `primers/html/` are clean and link to appropriate CSS.
*   **Accuracy:** Industry information, KPIs, trends, and risk factors should be accurate and relevant.
*   **File Naming:** Use descriptive names for primer `.md` files (e.g., `Aerospace_Defense.md`) and corresponding `.html` files in the `html/` subdirectory.
*   **Links:** Use relative links. Link key terms to `Global_Financial_Glossary.md`.
*   **Updating Navigation:**
    *   Adding a new primer requires creating its `.md` file, generating its `.html` version in `primers/html/`, AND adding a new `<article class="primer-summary-card" ...>` to `primers/index.html`.
    *   Ensure `data-keywords` in the `index.html` card are relevant for searchability.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Industry Primers

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/primers/` directory contains concise overview documents (primers) for various industries. The goal of each primer is to provide a foundational understanding of an industry's key characteristics, drivers, risks, and credit considerations for financial analysts.

The main entry point and interactive navigation for these primers is `primers/index.html`.
Source content for primers is in `.md` files in this directory.
Rendered HTML versions for individual primers are in the `primers/html/` subdirectory.

### 2. Hierarchy and Development Notes
*   **`primers/index.html` (Main Hub):** This is the primary user interface. It uses JavaScript (`primers/script.js`) to:
    *   Display primer summary cards.
    *   Filter/search primers based on keywords in `data-keywords` attributes.
    *   Dynamically load and render the content of selected `.md` primer files into a `div#primer-content-display` using `marked.js`.
    *   Provide links to standalone HTML versions of primers located in `primers/html/`.
*   **Primer Content (`.md` files):** Each industry primer is a single Markdown file in the `primers/` root (e.g., `Aerospace_Defense.md`).
*   **Rendered HTML Primers (`html/*.html`):** These are static HTML files, typically generated from the Markdown sources. They are linked from the cards in `index.html` as "View Enhanced HTML".
*   **Styling:** `primers/styles.css` is used by `primers/index.html`. Individual HTML primers in `primers/html/` should also link to this or a shared CSS file for consistency.

### 3. Specific Content Guidelines for Primer `.md` Files
*   **Standard Primer Structure (Recommended):**
    1.  Industry Overview (History, Key Segments)
    2.  Business Model / How Companies Make Money
    3.  Key Performance Indicators (KPIs) / Metrics
    4.  Competitive Landscape & Major Players
    5.  Key Drivers (Growth, Demand)
    6.  Key Risks (Operational, Financial, Regulatory, Cyclicality)
    7.  Credit Considerations / Analyst Focus Points
    8.  Recent Trends / Outlook (general terms if specific dates are hard to maintain)
    9.  Glossary of Industry-Specific Terms (or integrate into main text and link to global glossary).
*   **Credit Focus:** Maintain a credit analysis perspective throughout.
*   **Keywords:** For each new primer, identify relevant keywords to be added to its card in `primers/index.html`.

### 4. Workflow for Adding a New Primer
1.  **Create `New_Industry.md`** in the `primers/` directory with comprehensive content.
2.  **(Manual/Separate Process for now) Generate `primers/html/New_Industry.html`** from `New_Industry.md`. Ensure it's styled consistently.
3.  **Update `primers/index.html`:**
    *   Add a new `<article class="primer-summary-card" ...>` block.
    *   Set `data-title="New Industry"`.
    *   Set `data-keywords="..."` with relevant search terms.
    *   Set `data-md-src="New_Industry.md"`.
    *   Update the link for "View original Markdown file" to point to `New_Industry.md`.
    *   Update the link for "Read Primer" to have `data-md-src-override="New_Industry.md"`.
    *   Update the link for "View Enhanced HTML" to point to `html/New_Industry.html`.
4.  Test the search and display functionality in `primers/index.html`.

### 5. Linking Strategy
*   Link industry-specific terms to the `Global_Financial_Glossary.md` or define them within the primer.
*   If a primer discusses financial modeling aspects unique to that industry, link to relevant concepts in `/Financial_Modeling/`.
*   If specific risks are highlighted, link to broader discussions in `/Risk_Management/`.

Refer to the root `AGENTS.MD` for general guidelines on Markdown, HTML, JS modifications.
The `primers/script.js` handles the dynamic loading and search; modifications to it should be done cautiously.

=======


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
