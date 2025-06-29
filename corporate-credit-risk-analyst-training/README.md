# CRAFT – (Credit Risk Analyst Foundations Training)

## Course Overview

Crafting the Modern Corporate Credit Risk Analyst: A Modular Training Course

New York, NY – In response to the evolving landscape of corporate credit risk, a comprehensive, modular training course has been designed to equip new analysts with the essential skills and knowledge for a successful career. This portable program, structured for deployment in a Git repository, provides a holistic overview of accounting, financial analysis, capital markets, and the critical thinking skills necessary to navigate the complexities of modern credit risk management.

The curriculum is meticulously organized into a hierarchical structure of markdown files, ensuring a user-friendly and intuitive learning experience. The course is designed to be self-paced, allowing analysts to delve into specific modules as needed, with integrated quizzes and case studies to reinforce learning and development.

## Learning Objectives

This course aims to equip new analysts with the following:
- A thorough understanding of accounting principles and financial statement analysis.
- The ability to construct and interpret 3-statement financial models.
- Knowledge of capital markets, debt instruments, and leveraged loan structures.
- Skills to perform industry analysis using frameworks like Porter's Five Forces.
- Proficiency in business writing and effective communication for credit memorandums.
- The ability to apply critical thinking to synthesize information and form a credit narrative.
- Understanding of the credit lifecycle, including underwriting, SNC, LBOs, M&A, and ongoing monitoring.
- Awareness of the future trends in risk management, including the role of AI.

## Navigation Guide

The training program is segmented into distinct modules:

*   **Part 1: The Foundations**
    *   Module 1: Accounting & Financial Statement Analysis
    *   Module 2: Financial Analysis & Modeling
*   **Part 2: Understanding the Market**
    *   Module 3: Capital Markets & Leveraged Loans
    *   Module 4: Industry Analysis
*   **Part 3: The Analyst's Craft**
    *   Module 5: Business Writing & Grammar
    *   Module 6: Critical Thinking & Forming a Narrative
*   **Part 4: The Credit Lifecycle**
    *   Module 7: Shared National Credit (SNC) Overview & Criteria
    *   Module 8: Underwriting New Issuers
    *   Module 9: Leveraged Buyouts (LBOs) & M&A Analysis
    *   Module 10: Ongoing Credit Monitoring & Portfolio Review
*   **Part 5: The Future of Risk Management**
    *   Module 11: The Future of Risk Management & AI
*   **Part 6: Advanced Topics**
    *   Module 12: Advanced Financial Statement Analysis & Quality of Earnings
    *   Module 13: Debt Structuring & Restructuring
    *   Module 14: Legal Aspects of Credit & Loan Documentation
*   **Part 7: Advanced Communication & Craft**
    *   Module 15: Advanced Business Writing: Persuasion & Narrative in Credit Memos
    *   Module 17: Negotiation & Communication Skills for Credit Analysts
*   **Part 8: Specialized Applications**
    *   Module 16: Specialized Industry Analysis - Case Studies
*   **Part 9: Regulatory & Quantitative Landscape**
    *   Module 18: Regulatory Environment & Compliance in Lending
    *   Module 19: Data Analytics & Quantitative Tools in Credit Risk (Beyond AI)
*   **Part 10: Capstone**
    *   Module 20: Capstone Project: Full Credit Analysis & Presentation

Each module is contained in its respective markdown file within the `/modules/` directory. Supporting materials like quizzes, case studies, answer keys, and learning resources are generally located within subdirectories of each module's primary folder (e.g., `modules/01-foundations/quizzes/`) or within the course-level `solutions/` directory for consolidated answers.

The interactive HTML guide (`index.html` in the course root) provides the primary means of navigating all course content. This README serves as a high-level map.

---

## Course Resources

*   **[Interactive HTML Guide](./index.html)**: The recommended way to navigate the course materials.
*   **[Comprehensive Course Glossary](./GLOSSARY.md)**: A consolidated list of key terms used throughout the CRAFT program.
*   **[Consolidated Quiz Answers](./solutions/QUIZ_ANSWERS.md)**: Answer keys for all module quizzes.
*   **[Consolidated Case Study Guidance](./solutions/CASE_STUDY_GUIDANCE.md)**: Guidance and discussion points for all case studies.

---
=======

Each module is contained in its respective markdown file within the `/modules/` directory. Quizzes and case studies are located in subdirectories within the relevant module sections. Use this README as your central hub to navigate the course content.

<!-- Machine-readable indexing comment -->
<!-- Index: CRAFT Program, Credit Risk Training; Modules: Foundations, Market Analysis, Analyst Craft, Credit Lifecycle, Future of Risk, Advanced Topics, Communication, Specialized Industries, Regulatory, Quantitative, Capstone -->

## Student & Teacher Notes

**For Students (Aspiring Analysts):**
*   **Start with the Interactive Hub:** The [Interactive HTML Guide](./index.html) is the recommended way to experience the course, as it includes interactive elements and a structured navigation for modules.
*   **Follow Module Sequence:** The modules are generally designed to build upon each other. Starting with "Part 1: The Foundations" is highly recommended.
*   **Engage with Quizzes & Case Studies:** These are crucial for reinforcing learning and applying concepts. Check your answers using the `solutions/` directory.
*   **Use the Glossaries:** Refer to both the [Course Glossary](./GLOSSARY.md) and the [Global Financial Glossary](../../Global_Financial_Glossary.md) for term definitions.
*   **Practical Application:** Constantly think about how the concepts apply to real-world companies and credit scenarios.

**For Teachers & Trainers:**
*   **Modular Design:** The course's modularity allows for flexibility. You can assign specific modules or use them as supplementary material for existing training programs.
*   **Discussion Starters:** Use the case studies and "Analyst Focus" points within modules to spark discussions.
*   **Customization:** The Markdown format allows for easy customization or addition of institution-specific content if forking the repository.
*   **Assessment:** The quizzes and capstone project outline can be adapted for formal assessment.

## Developer Notes & Areas for Impact

*   **Content Population:** Many modules and sub-sections (especially quizzes, case studies within deeper modules) are placeholders or have introductory content. Fleshing these out is the primary area for impact. See `FUTURE_IDEAS.md` for a detailed list.
*   **Interactivity in `index.html`:** The main `index.html` hub has several interactive components. Maintaining and enhancing these (e.g., ensuring chart data is updated, interactive diagrams are functional) is key.
*   **Synchronization:**
    *   The `craftModulesData` JavaScript array in `index.html` must be kept in sync with the actual module structure in the `modules/` directory.
    *   The local `GLOSSARY.md` needs to be updated as new key terms are introduced in modules.
*   **Consistency:** Strive for consistent formatting, tone, and depth across all modules. Refer to existing well-developed modules as examples.
*   **Solutions Directory:** Ensure the `solutions/` directory is kept up-to-date with answers and guidance for all quizzes and case studies.

## Possible Avenues for Exploration and Further Development

Refer to the dedicated **[FUTURE_IDEAS.md](./FUTURE_IDEAS.md)** document for a comprehensive list of potential enhancements, including:
*   Interactive HTML Guide Enhancements (deep linking, search, progress tracking).
*   New Module Content & Expansions (specialized industries, advanced topics, ESG, behavioral economics).
*   Interactive Exercises & Multimedia (drag-and-drop, scenario modeling, videos).
*   Technical & Platform Enhancements (static site generator potential).
*   Course Management & Pedagogy (learning paths, community features).
