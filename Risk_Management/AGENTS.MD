# Agent Instructions: Risk Management

This document provides instructions for AI agents working with the content in the `/Risk_Management/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles and linking conventions.
*   Working with interactive hubs and the global navigation system.

### 1. Purpose and Scope of this Directory
The `/Risk_Management/` directory provides a comprehensive understanding of risk management principles, frameworks, and practices, with an emphasis on financial services and relevance to credit risk analysis.

The main entry point is `Risk_Management/index.html`.

### 2. Content Structure and Types
*   **Foundational Concepts:** Located in the root of `/Risk_Management/`, these files are numbered sequentially (e.g., `01_Introduction_to_Risk_Management.md`).
*   **Specific Risk Subdirectories:** Each major risk type has its own subdirectory (e.g., `Credit_Risk/`, `Market_Risk/`).
    *   Each subdirectory **must** have its own `README.md` and `index.html`.
    *   Content within these subdirectories should follow a naming convention (e.g., `CRM_01_Fundamentals.md` for Credit Risk).

### 3. Specific Guidelines for Risk Management Content
*   **Comprehensive and Detailed:** Risk management is a detailed field; aim for thoroughness in explaining concepts, frameworks (e.g., COSO, Basel concepts), and processes.
*   **Practical Relevance:** Connect theoretical concepts to practical applications in financial institutions.
*   **Credit Risk Focus:** While covering various risks, always consider drawing connections back to how they impact credit risk.
*   **Naming Conventions:** Strictly adhere to the established naming conventions for files to maintain order.

### 4. Linking Strategy
*   Define and link key risk management terms to the `Global_Financial_Glossary.md`.
*   Extensively cross-link between different risk topics (e.g., operational risk events can lead to credit risk).
*   Link to relevant content in `modules/` and `Toolkits_and_Checklists/`.
*   Link to `Interactive_Notebooks/Risk_Management/` for any quantitative examples (e.g., VaR calculation).

### 5. Tools
*   **`Risk_Management/index.html`:** The main hub. Its internal JavaScript arrays (`localFiles`, `subDirectoryModules`) **must** be updated when new files or sub-sections are added.
*   **`js/nav_data.js`:** Update the global navigation for significant new additions.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **`index.html` Maintenance:** This is a critical task. The JavaScript arrays in the main `index.html` must be kept in sync with the directory structure.
*   **Subdirectory Hubs:** Each risk type subdirectory must have its own `README.md` and `index.html` to act as a sub-hub.
*   **Use Placeholders:** Use `*(Future Addition)*` in `README.md` files to indicate planned content.

**Roadmap / Planned Additions:**
*   **Content Deepening:** Provide significantly more detailed content for `Liquidity_Risk/`, `Operational_Risk/`, and `Market_Risk/`.
*   **New Risk Modules:** Develop new subdirectories for Enterprise Risk (ERM), Strategic Risk, Reputational Risk, and Climate/ESG Risk.
*   **Practical Tools:** Include more detailed examples of risk reports, dashboards, and Key Risk Indicators (KRIs).
*   **Case Studies:** Develop practical case studies on risk management failures and successes.
*   **Interactive Notebooks:** Create notebooks for quantitative measures like VaR, stress testing, and credit scoring models.
*   **Regulatory Context:** Integrate simplified context on relevant regulatory frameworks (e.g., Basel Accords).
