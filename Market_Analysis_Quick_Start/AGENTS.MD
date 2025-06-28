# AGENTS.MD - Market Analysis Quick Start Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/Market_Analysis_Quick_Start/` directory is designed to provide a rapid introduction to common market jargon, capital market products, understanding trading levels (spreads, yields), basic valuation rules of thumb, and peer comparison benchmarks. It's aimed at those new to market concepts or needing a quick refresher.

The main entry point is `Market_Analysis_Quick_Start/README.md`.

## 2. Content Structure and Types
Content is typically organized into focused Markdown files covering specific topics:
*   `01_Common_Market_Jargon.md`
*   `02_Key_Capital_Market_Products.md`
*   `03_Understanding_Trading_Levels_and_Spreads.md`
*   `04_Valuation_Rules_of_Thumb.md`
*   `05_Peer_Comps_Quick_Guide.md`

Each file should be concise and highly practical.

## 3. Specific Guidelines for Market Analysis Content
*   **Simplicity and Clarity:** Prioritize clear explanations of potentially complex terms and concepts. Avoid overwhelming the reader with excessive detail.
*   **Actionable Insights:** Where possible, provide "rules of thumb" or quick ways to interpret market data, while also cautioning that these are simplifications.
*   **Real-World Context:** Use examples to illustrate jargon or product features.
*   **Trading Levels (`03_...Spreads.md`):** This is a key file. Explain concepts like G-spread, I-spread, Z-spread, ASW, and how they relate to bond yields and credit risk perception.
*   **Valuation Rules of Thumb (`04_...Rules_of_Thumb.md`):** Explain common multiples (P/E, EV/EBITDA) and their general interpretation, perhaps with typical ranges for broad sectors (while noting these are highly variable).

## 4. Linking
*   **Crucially link all jargon and product names to the `Global_Financial_Glossary.md`.** This section will introduce many terms.
*   Link to more detailed explanations in other sections where appropriate:
    *   `Key_Capital_Market_Products.md` could link to `Financial_Modeling/` for how these products are modeled, or to `Risk_Management/` for their risk characteristics.
    *   Valuation concepts can link to deeper dives in `CFA/` materials or `Financial_Modeling/Valuation_Applications/`.
*   Consider if any concepts here (e.g., calculating a simple spread, visualizing peer comps) could be demonstrated with an `Interactive_Notebooks/Market_Analysis/` notebook.

## 5. Roadmap / Planned Additions (Illustrative)
*   Quick guide to understanding economic indicators and their market impact.
*   Introduction to technical analysis charts (very basic).
*   Interactive notebook for visualizing yield curves or spread movements.

Refer to the root `AGENTS.MD` for general guidelines.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based illustrations.
