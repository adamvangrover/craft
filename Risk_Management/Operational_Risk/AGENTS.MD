# Agent Instructions

This document provides instructions for AI agents working with the content in this directory.

## General Guidelines:

*   **Consistency:** Maintain consistency with the overall repository structure and the style of other Risk Management sections.
*   **Clarity and Detail:** Operational risk concepts, categories, and management frameworks should be clearly explained.
*   **Markdown Best Practices:** Utilize Markdown effectively.
*   **Accuracy:** Ensure definitions (e.g., Basel definition of OpRisk), event categories, and control concepts are accurate.
*   **File Naming:** Follow the `ORM_XX_TopicName.md` convention.
*   **Links:** Use relative links. Verify functionality. Link key terms to `Global_Financial_Glossary.md`.
*   **Updating Navigation:** When adding new content:
    *   Update `Risk_Management/Operational_Risk/README.md`.
    *   Update `Risk_Management/Operational_Risk/index.html` (`filesInDir` JavaScript array).
    *   Notify or update `Risk_Management/README.md` and `Risk_Management/index.html`.
*   **Review:** Adhere to guidelines and task requirements.

## Directory-Specific Instructions: Operational Risk Management

### Inherits From
This document inherits from `Risk_Management/AGENTS.MD` and root `AGENTS.MD`. Review those first.

### 1. Purpose and Scope
This `/Risk_Management/Operational_Risk/` subdirectory focuses on Operational Risk, covering its definition, categories, frameworks, tools, and specific areas like BCP and Cybersecurity.

The main guide is `Risk_Management/Operational_Risk/README.md`.
Individual topic documents are `ORM_XX_*.md` files.
Navigation is supported by `Risk_Management/Operational_Risk/index.html`.

### 2. Content Structure for Operational Risk Documents
*   `README.md`: Overview of operational risk, learning objectives, and structure of this sub-section.
*   `ORM_01_Introduction_to_Operational_Risk.md`: Foundational concepts, Basel definition, event categories (people, process, systems, external), KRIs, internal controls.
*   Future `ORM_XX_*.md` files will cover RCSAs, BCP/DRP, Cybersecurity, as outlined in the `README.md`.
*   Each document should explain the concept, its components, and its relevance to overall risk management.

### 3. Specific Guidelines for Content
*   **Basel Definition:** Use the standard Basel definition of operational risk as a starting point.
*   **Event Categories:** Clearly explain the common categories of operational risk events with examples.
*   **Internal Controls:** Emphasize the importance of internal controls (preventive, detective, corrective) and link to frameworks like COSO if relevant.
*   **Practical Tools:** When discussing RCSAs, KRIs, loss data collection, make the explanations practical.
*   **Cybersecurity Link:** Ensure `ORM_04` (once created) links effectively with `Fintech/Cybersecurity_in_Fintech.md`, focusing on the operational risk *management* aspects.

### 4. Development Notes
*   The `README.md` outlines planned future documents (`ORM_02`, `ORM_03`, `ORM_04`). Development of these is a priority.
*   Case studies of significant operational risk events would be very valuable additions.

Refer to parent `AGENTS.MD` files for broader Risk Management and repository guidelines.
