# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other Risk Management sections.
*   **Clarity and Detail:** Market risk concepts (VaR, stress testing, hedging) require clear explanations, potentially with illustrative examples.
*   **Markdown Best Practices:** Utilize Markdown effectively.
*   **Accuracy:** Ensure all definitions, formulas (e.g., for duration, VaR), and methodologies are accurate.
*   **File Naming:** Follow the `MRM_XX_TopicName.md` convention.
*   **Links:** Use relative links. Verify functionality. Link key terms to `Global_Financial_Glossary.md` and relevant concepts in `CFA/` or `Interactive_Notebooks/`.
*   **Updating Navigation:** When adding new content:
    *   Update `Risk_Management/Market_Risk/README.md`.
    *   Update `Risk_Management/Market_Risk/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Risk_Management/README.md` and `Risk_Management/index.html`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Market Risk Management

### Inherits From
This document inherits from `Risk_Management/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Risk_Management/Market_Risk/` subdirectory focuses on Market Risk, covering its types (interest rate, equity, FX, commodity), measurement (VaR, stress testing), and management (hedging, ALM).

The main guide is `Risk_Management/Market_Risk/README.md`.
Individual topic documents are `MRM_XX_*.md` files.
Navigation is supported by `Risk_Management/Market_Risk/index.html`.

### 2. Content Structure for Market Risk Documents
*   `README.md`: Overview of market risk, learning objectives, and structure of this sub-section.
*   `MRM_01_Introduction_to_Market_Risk.md`: Foundational concepts.
*   Future `MRM_XX_*.md` files will cover VaR, stress testing, hedging, ALM, and specific risk deep dives as outlined in the `README.md`.
*   Each document should explain the concept, its calculation/application (with examples if possible), and its relevance.

### 3. Specific Guidelines for Content
*   **Differentiate Risk Types:** Clearly explain the nuances of interest rate risk, equity risk, FX risk, and commodity risk.
*   **Measurement Techniques:** When discussing VaR or stress testing, explain the methodologies conceptually. Link to interactive notebooks for practical calculation examples.
*   **Hedging Instruments:** Explain how derivatives (futures, forwards, options, swaps) are used for hedging, but keep it conceptual unless it's a deep dive on a specific instrument.
*   **Credit Analyst Relevance:** Include notes on how understanding a company's market risk exposures and hedging strategies is important for credit analysis.

### 4. Development Notes
*   The `README.md` outlines planned future documents (`MRM_02`, `MRM_03`, `MRM_04`). Development of these is a priority.
*   Strong potential for linking to `Interactive_Notebooks/Risk_Management/` for VaR and `Interactive_Notebooks/Market_Analysis/` for yield curve/spread visualization.

Refer to parent `AGENTS.MD` files for broader Risk Management and repository guidelines.
