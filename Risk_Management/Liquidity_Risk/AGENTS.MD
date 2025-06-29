# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other Risk Management sections.
*   **Clarity and Detail:** Liquidity risk concepts, metrics (LCR, NSFR), and management strategies (CFP, FTP) should be explained thoroughly.
*   **Markdown Best Practices:** Utilize Markdown effectively.
*   **Accuracy:** Ensure all definitions, regulatory concepts (simplified), and methodologies are accurate.
*   **File Naming:** Follow the `LRM_XX_TopicName.md` convention.
*   **Links:** Use relative links. Verify functionality. Link key terms to `Global_Financial_Glossary.md`.
*   **Updating Navigation:** When adding new content:
    *   Update `Risk_Management/Liquidity_Risk/README.md`.
    *   Update `Risk_Management/Liquidity_Risk/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Risk_Management/README.md` and `Risk_Management/index.html`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Liquidity Risk Management

### Inherits From
This document inherits from `Risk_Management/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Risk_Management/Liquidity_Risk/` subdirectory focuses on Liquidity Risk, covering its types, sources, measurement, and management.

The main guide is `Risk_Management/Liquidity_Risk/README.md`.
The primary content file is `LRM_01_Introduction_to_Liquidity_Risk.md`.
Navigation is supported by `Risk_Management/Liquidity_Risk/index.html`.

### 2. Content Structure for Liquidity Risk Documents
*   `README.md`: Overview of liquidity risk, learning objectives, and structure of this sub-section.
*   `LRM_01_Introduction_to_Liquidity_Risk.md`: Comprehensive introduction covering definitions, importance, sources, measurement (metrics, stress testing), management (CFP, collateral, FTP), and regulatory landscape.
*   Future `LRM_XX_*.md` files could provide deeper dives into specific areas mentioned in the `README.md` (e.g., detailed LCR/NSFR calculations, stress testing methodologies, CFP construction).

### 3. Specific Guidelines for Content
*   **Distinguish Funding vs. Market Liquidity Risk:** Clearly explain the difference.
*   **Regulatory Context:** Briefly explain key regulatory concepts like LCR and NSFR from Basel III, but keep it conceptual unless specifically aiming for a regulatory deep dive.
*   **Practical Management Tools:** Emphasize practical tools like cash flow forecasting, stress testing, and CFPs.
*   **Interconnectedness:** Highlight how liquidity risk can be triggered by or exacerbate other risk types (credit, market, operational).

### 4. Development Notes
*   The `LRM_01_Introduction_to_Liquidity_Risk.md` is currently the main content file and is quite comprehensive.
*   Future development should focus on the "Developer Notes & Areas for Impact" mentioned in the `Risk_Management/Liquidity_Risk/README.md`.

Refer to parent `AGENTS.MD` files for broader Risk Management and repository guidelines.
