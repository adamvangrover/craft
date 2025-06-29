# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and style.
*   **Clarity and Detail:** Valuation concepts, especially DCF components, must be explained with clarity and sufficient detail.
*   **Markdown Best Practices:** Use Markdown effectively.
*   **Accuracy:** All valuation theory, formulas, and their applications must be accurate.
*   **File Naming:** Use descriptive names (e.g., `DCF_Modeling_Overview.md`, `Relative_Valuation_Guide.md`).
*   **Links:** Use relative links. Verify functionality. Link key terms to `Global_Financial_Glossary.md` and relevant modeling technique pages.
*   **Updating Navigation:** When adding new valuation application guides:
    *   Update `Financial_Modeling/Valuation_Applications/README.md`.
    *   Update `Financial_Modeling/Valuation_Applications/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Financial_Modeling/index.html` (main navigation) and `Financial_Modeling/README.md`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Financial Modeling Valuation Applications

### Inherits From
This document inherits from `Financial_Modeling/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Financial_Modeling/Valuation_Applications/` directory explains how financial models are used in various valuation contexts, with a current focus on DCF analysis.

The main guide is `Financial_Modeling/Valuation_Applications/README.md`.
Individual guides are `.md` files.
Navigation is supported by `Financial_Modeling/Valuation_Applications/index.html`.

### 2. Content Structure for Valuation Application Guides
Each document should typically include:
*   **Introduction to the Valuation Method:** (e.g., DCF, Relative Valuation).
*   **Core Theory and Principles.**
*   **Key Components / Inputs:** (e.g., for DCF: FCF, WACC, TV; for RelVal: comparable companies/transactions, relevant multiples).
*   **Process/Steps:** How the valuation is typically performed using model outputs.
*   **Interpretation of Results.**
*   **Relevance for Different User Types:** (e.g., equity investors, credit analysts).
*   **Common Pitfalls and Best Practices.**
*   **Links to Supporting Models/Techniques:** (e.g., a DCF guide links to FCF forecasting, WACC calculation).

### 3. Specific Guidelines for Content
*   **Integration with Models:** Clearly show how the outputs of financial models (e.g., projected financials from a 3-statement model) serve as inputs for valuation.
*   **Clarity on Assumptions:** Emphasize the key assumptions driving each valuation method and their impact.
*   **Practical Examples:** Use examples (even if simplified) to illustrate calculations and applications.
*   **Credit Analyst Perspective:** Include notes on how credit analysts might use or interpret these valuation techniques.

Refer to parent `AGENTS.MD` files for broader Financial Modeling and repository guidelines.
