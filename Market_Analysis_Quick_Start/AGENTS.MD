# Agent Instructions

This document provides instructions for AI agents working with the content in this directory and its subdirectories.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and formatting.
*   **Clarity and Conciseness:** This is a "Quick Start" section. Content must be very clear, concise, and to the point. Avoid jargon where simpler terms suffice, or define it immediately.
*   **Markdown Best Practices:** Use Markdown effectively for readability.
*   **Accuracy:** Ensure all definitions, explanations, and "rules of thumb" are conceptually sound, even if simplified.
*   **File Naming:** Follow the `XX_Descriptive_Name.md` convention.
*   **Links:** Use relative links. Verify functionality. **Heavy linking to `Global_Financial_Glossary.md` is expected.**
*   **Updating Navigation:** When adding new content:
    *   Update `Market_Analysis_Quick_Start/README.md` (the "Contents" section).
    *   Update `Market_Analysis_Quick_Start/index.html` (`filesInDir` JavaScript array).
    *   Consider if `home.html` or the main repository `README.md` need updates if a major new "quick start" area is added.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Market Analysis Quick Start

### Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

### 1. Purpose and Scope of this Directory
The `/Market_Analysis_Quick_Start/` directory provides a rapid introduction to common market jargon, capital market products, trading levels (spreads, yields), basic valuation rules of thumb, and peer comparison benchmarks. It's aimed at those new to market concepts or needing a quick refresher, especially with a credit analysis lens.

The main human-readable guide is `Market_Analysis_Quick_Start/README.md`.
The interactive HTML view is `Market_Analysis_Quick_Start/index.html`.

### 2. Hierarchy and Development Notes
*   Content is organized into focused Markdown files covering specific topics, numbered for suggested reading order (e.g., `01_Capital_Market_Terms.md`, `02_Key_Market_Products.md`, etc.).
*   Each file should be concise and highly practical.
*   **Development Focus:** Ensure content is easily digestible for someone needing a fast ramp-up. Practical examples are more valuable than deep theory in this section.

### 3. Specific Content Guidelines
*   **Simplicity and Clarity:** Prioritize clear explanations of potentially complex terms and concepts. Avoid overwhelming the reader with excessive detail. Link to deeper content elsewhere.
*   **Actionable Insights:** Where possible, provide "rules of thumb" or quick ways to interpret market data, while also cautioning that these are simplifications and context matters.
*   **Real-World Context:** Use brief, relevant examples to illustrate jargon or product features.
*   **Trading Levels & Spreads (`03_...` file):** This is a key file. Explain concepts like G-spread, I-spread, Z-spread, ASW, and how they relate to bond yields and credit risk perception in an accessible way.
*   **Valuation Rules of Thumb (`04_...` file):** Explain common multiples (P/E, EV/EBITDA) and their general interpretation, perhaps with typical ranges for broad sectors (while noting these are highly variable and context-dependent).
*   **Credit Analyst Perspective:** Maintain a focus on how these market concepts are relevant to credit risk assessment.

### 4. Linking Strategy
*   **Crucially link all jargon and product names to the `Global_Financial_Glossary.md`.** This section will introduce many terms that must be defined centrally.
*   Link to more detailed explanations in other sections where appropriate:
    *   `02_Key_Market_Products.md` could link to `Financial_Modeling/` for how these products are modeled, or to `Risk_Management/` for their risk characteristics, or specific `CFA/` readings.
    *   Valuation concepts in `04_...` can link to deeper dives in `Financial_Modeling/Valuation_Applications/` or `CFA/` materials.
*   Consider if any concepts here (e.g., calculating a simple spread, visualizing peer comps) could be demonstrated with an `Interactive_Notebooks/Market_Analysis/` notebook and link accordingly.

### 5. Roadmap / Planned Additions (from `README.md`)
*   Quick guide to understanding key economic indicators and their market impact.
*   Introduction to basic technical analysis chart patterns (very high-level).
*   Understanding basic option terminology (Greeks) if relevant to credit (e.g., for convertible bonds or hedged positions).
*   Market sentiment indicators (e.g., VIX, put/call ratios, fear & greed index) and their interpretation.

### 6. Developer Notes & Future Considerations

**Developer Notes:**
*   **`Market_Analysis_Quick_Start/index.html` Maintenance:** This HTML file uses a JavaScript array (typically `filesInDir` or similar) to list the Markdown files in this section. When adding a new `.md` topic file, or renaming/reordering existing ones, this array in `index.html` **must** be updated to ensure the new content is discoverable through the interactive viewer.
*   **Conciseness is Key:** This section is a "Quick Start." Content should be highly focused and avoid unnecessary depth. Link to more detailed explanations in other parts of the repository.
*   **Heavy Glossary Linking:** Due to the jargon-heavy nature of market analysis, ensure that all technical terms, product names, and metrics are rigorously linked to their definitions in the `Global_Financial_Glossary.md`.
*   **Credit Analyst Perspective:** Always try to frame the market concepts in terms of their relevance to a credit analyst. How does this market indicator or product affect credit risk, spreads, or a company's ability to access capital?

**Roadmap / Future Considerations:**
*   **Content Expansion:**
    *   Quick guide to understanding key economic indicators (e.g., GDP, inflation, unemployment) and their typical market impact.
    *   Introduction to basic technical analysis chart patterns (e.g., support/resistance, trendlines, moving averages) – keep this very high-level and focused on what a fundamental analyst might observe.
    *   Brief overview of different yield curve shapes and their common interpretations.
    *   Explanation of common credit market indices and their significance.
*   **Interactive Elements:**
    *   Consider simple Jupyter Notebooks in `Interactive_Notebooks/Market_Analysis/` for:
        *   Visualizing a yield curve.
        *   Calculating simple spreads.
        *   A basic peer comparison dashboard.
*   **Visual Aids:**
    *   Where possible, use Markdown tables or simple textual diagrams to illustrate concepts (e.g., a table comparing different types of spreads).
*   **Cross-referencing:** Systematically review content in other sections (CFA, CRAFT, Financial Modeling) and add links *to* relevant Quick Start topics here if they provide useful foundational knowledge for those more advanced topics.

Refer to the root `AGENTS.MD` for general guidelines, especially on Jupyter Notebooks and the `Global_Financial_Glossary.md`.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based illustrations for this section.
Ensure the `Market_Analysis_Quick_Start/README.md` (table of contents) is also kept in sync with `index.html` and the actual files.
