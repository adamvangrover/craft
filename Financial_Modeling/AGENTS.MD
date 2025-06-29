# AGENTS.MD - Financial Modeling Section

## Inherits From
This document inherits general principles from the root `AGENTS.MD` file. Please review that first.

## 1. Purpose and Scope of this Directory
The `/Financial_Modeling/` directory provides resources on best practices, structural guides, Excel tips, and techniques for building robust financial models. The focus is on models used for financial analysis, valuation, and credit assessment.

The `Financial_Modeling/README.md` provides an overview of this section. It is currently best viewed via `Financial_Modeling/index.html`, which is a custom-styled HTML page that directly renders this README. While it doesn't use the `shared-readme-styles.css`, it serves a similar purpose for this specific section.

## 2. Content Structure and Types
This section is typically structured by modeling concepts or applications:
*   `Best_Practices/`: General principles for model building (e.g., formatting, structure, assumption management).
*   `Templates/`: Structural outlines or starter templates for common models (e.g., 3-statement model, LBO model). These might be `.md` descriptions or actual `.xlsx` files (if the agent environment supports adding/committing binary files, otherwise describe the structure in `.md`).
    *   *Self-correction: As an AI, I primarily create text-based files. If actual Excel templates are needed, they would typically be provided by a human user or I would describe their structure in Markdown.*
*   `Valuation_Applications/`: How modeling is used in valuation (e.g., DCF, comparables analysis).
*   `Forecasting_Techniques/`: Methods for projecting financial line items.
*   `Excel_Tips/`: Specific Excel functions or techniques useful for modeling.

## 3. Specific Guidelines for Financial Modeling Content
*   **Clarity and Detail:** Model structures and techniques should be explained with sufficient detail for a user to understand and replicate them.
*   **Best Practices Emphasis:** Consistently reinforce financial modeling best practices (e.g., separating inputs, outputs, and calculations; clear labeling; avoiding hardcoding in formulas).
*   **Assumptions:** Stress the importance of documenting assumptions clearly.
*   **Error Checking:** Include advice on how to check models for errors and ensure they balance.
*   **Visuals (Descriptive):** Since I cannot directly create complex visuals or embed Excel screenshots, use Markdown tables, pseudo-code, or clear textual descriptions to illustrate model layouts and formula logic. If I were to create a Jupyter Notebook for an interactive model, that notebook could generate its own visuals.
*   **Integration with Interactive Notebooks:**
    *   This section is a prime candidate for linking to or housing interactive models built as Jupyter Notebooks in `Interactive_Notebooks/Financial_Modeling/`. For instance, a guide on DCF modeling here should link to any interactive DCF notebook.

## 4. Linking
*   Link terms to the `Global_Financial_Glossary.md`.
*   Connect modeling concepts to their application in other areas, such as `/corporate-credit-risk-analyst-training/` (e.g., how modeling is used in underwriting) or `/CFA/` (e.g., CFA curriculum on valuation).
*   Point to relevant `Interactive_Notebooks/` for hands-on examples.

## 5. Roadmap / Planned Additions (Illustrative)
*   More detailed model templates (e.g., LBO model, M&A model structure).
*   Guides on specific industry modeling nuances.
*   Interactive model examples using Jupyter Notebooks (see `Interactive_Notebooks/AGENTS.MD`).

Refer to the root `AGENTS.MD` for general guidelines.
Refer to `Interactive_Notebooks/AGENTS.MD` if planning to create Jupyter Notebook based models.
