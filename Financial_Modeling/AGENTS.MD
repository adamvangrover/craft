# Agent Instructions: Financial Modeling

This document provides instructions for AI agents working with the content in the `/Financial_Modeling/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles (accuracy, clarity, modularity).
*   Linking conventions.
*   Working with interactive dashboards and the global navigation system (`js/nav_data.js`).
*   Jupyter Notebook and Markdown viewer implementation.
*   Updating the Global Financial Glossary.

### 1. Purpose and Scope of this Directory
The `/Financial_Modeling/` directory provides resources on best practices, structural guides, Excel tips, and techniques for building robust financial models. The focus is on models used for financial analysis, valuation, and credit assessment.

The main entry point and human-readable guide is `Financial_Modeling/README.md`.
The interactive HTML view is `Financial_Modeling/index.html`.

### 2. Hierarchy and Development Notes
This section is typically structured by modeling concepts or applications:
*   **`Best_Practices/`**: General principles for model building (e.g., formatting, structure, assumption management).
*   **`Templates/`**: Structural outlines or starter templates for common models (e.g., 3-statement model, LBO model).
    *   *Agent Note:* As an AI, text-based descriptions of model structures are preferred. If actual `.xlsx` templates are required, they would typically be provided by a human user or the AI would describe their structure in Markdown for a human to build.
*   **`Valuation_Applications/`**: How modeling is used in valuation (e.g., DCF, comparables analysis).
*   **`Forecasting_Techniques/`**: Methods for projecting financial line items.
*   **`Excel_Tips/`** (or similar): Specific Excel functions or techniques useful for modeling. *(Consider creating this if not present)*
*   **`Advanced_Topics/`**: For more complex modeling subjects like M&A, LBOs, or specialized industry models.

**Development Focus:**
*   Prioritize clarity and step-by-step instructions.
*   Emphasize best practices consistently.
*   Integrate with interactive notebooks where possible for hands-on learning.

### 3. Specific Content Guidelines for Financial Modeling
*   **Clarity and Detail:** Model structures and techniques should be explained with sufficient detail for a user to understand and replicate them.
*   **Best Practices Emphasis:** Consistently reinforce financial modeling best practices (e.g., separating inputs, outputs, and calculations; clear labeling; avoiding hardcoding in formulas; using consistent formatting).
*   **Assumptions:** Stress the importance of clearly documenting all assumptions, their rationale, and potential sensitivities.
*   **Error Checking & Model Integrity:** Include advice on how to check models for errors, ensure they balance (e.g., balance sheet), and build in checks and balances.
*   **Visuals (Descriptive):** Since AI cannot directly create complex visuals or embed Excel screenshots easily into Markdown, use Markdown tables, pseudo-code, or clear textual descriptions to illustrate model layouts and formula logic. If a Jupyter Notebook is created for an interactive model, that notebook can generate its own visuals.
*   **Integration with Interactive Notebooks:**
    *   This section is a prime candidate for linking to or housing interactive models built as Jupyter Notebooks in `Interactive_Notebooks/Financial_Modeling/`. For instance, a guide on DCF modeling here should link to any interactive DCF notebook. Guides here can explain the theory and structure, while notebooks provide the interactive practice.

### 4. Linking Strategy
*   Link key financial and modeling terms to the `Global_Financial_Glossary.md`.
*   Connect modeling concepts to their application in other areas, such as `/corporate-credit-risk-analyst-training/` (e.g., how modeling is used in underwriting), `/CFA/` (e.g., CFA curriculum on valuation), or specific `/primers/` if discussing industry-specific models.
*   Point to relevant `Interactive_Notebooks/` for hands-on examples.

### 5. Tools

*   **`global_markdown_viewer.html`:** Use this tool to render Markdown files.
*   **`Financial_Modeling/index.html`:** Use this tool to add new content to the Financial Modeling Hub.
*   **`js/nav_data.js`:** Use this tool to add new content to the global navigation.
*   **`Global_Financial_Glossary.md`:** Use this tool to add new terms to the global glossary.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **`Financial_Modeling/index.html` Maintenance:** This HTML file serves as an interactive hub for the Financial Modeling section. When new major content (e.g., a new best practice guide, a new template description, a new valuation application overview) is added, ensure `Financial_Modeling/index.html` is updated to link to it. This might involve modifying the JavaScript data structures that populate the cards or lists on that page.
*   **Excel Templates vs. Descriptions:** As noted, agents primarily create text-based descriptions of model structures in Markdown. If actual `.xlsx` files are needed, they would typically be provided by a human or the agent's Markdown description would serve as a spec for a human. Focus on creating very clear, step-by-step structural guides in Markdown.
*   **Formula Representation:** When describing formulas in Markdown, use clear notation. Code blocks can be used for `Value = Other_Value * (1 + Growth_Rate)` style representations. For complex formulas, consider breaking them down.
*   **Interactive Notebooks:** Guides in this section should heavily cross-reference and link to corresponding Jupyter Notebooks in `Interactive_Notebooks/Financial_Modeling/`. The Markdown guides can explain theory and high-level structure, while notebooks provide the hands-on practice.

**Roadmap / Planned Additions:**
*   **Content Expansion:**
    *   Create the `Excel_Tips/` subdirectory with content on useful Excel functions, shortcuts, and techniques (e.g., XLOOKUP, INDEX/MATCH, data tables, goal seek).
    *   Develop more detailed model structure guides/templates (e.g., LBO model, M&A model, 3-statement projection model, DCF model variations).
    *   Add guides on specific industry modeling nuances (e.g., for banking (FIG), real estate (REITs), natural resources, SaaS).
    *   Create a dedicated section/guide on "Model Auditing and Testing" including common checks, stress testing, and scenario analysis.
    *   Expand `Forecasting_Techniques/` with more detailed approaches for various financial statement line items.
*   **Interactive Elements:**
    *   Develop more interactive model examples as Jupyter Notebooks in `Interactive_Notebooks/Financial_Modeling/`.
    *   Consider simple web-based calculators (HTML/JS) for common ratios or formulas, embedded within relevant Markdown guides.
*   **Visual Aids:**
    *   While direct image creation is limited for agents, encourage textual descriptions that could easily be translated into diagrams (e.g., flowcharts of model logic, schematics of sheet linking).
