# Agent Instructions: Professional Development

This document provides instructions for AI agents working with the content in the `/Professional_Development/` directory.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles and linking conventions.
*   Working with interactive hubs and the global navigation system.

### 1. Purpose and Scope of this Directory
The `/Professional_Development/` directory focuses on essential "soft skills" and broader professional competencies crucial for success in finance. It covers communication, critical thinking, presentation skills, negotiation, and ethical decision-making.

The main entry point is `Professional_Development/index.html`.

### 2. Content Structure and Types
*   Content is organized by skill area in individual Markdown files (e.g., `Effective_Communication_for_Analysts.md`).
*   Each file should provide:
    *   An explanation of why the skill is important in a finance context.
    *   Key principles or frameworks.
    *   Actionable tips and techniques for improvement.
    *   Examples or short scenarios specific to finance.

### 3. Specific Guidelines for Professional Development Content
*   **Actionable Advice:** Focus on providing practical, implementable advice. Checklists, "do's and don'ts," and simple frameworks are encouraged.
*   **Finance Context:** Always relate skills back to scenarios faced by finance professionals (e.g., presenting to a credit committee, writing an investment thesis).
*   **Conciseness:** Aim to be concise. Professionals are often looking for targeted tips.
*   **Integration:** Emphasize how these "soft" skills integrate with and enhance "hard" technical skills.

### 4. Linking Strategy
*   Link specific financial terms used in examples to the `Global_Financial_Glossary.md`.
*   Connect skills to their practical application in other sections (e.g., link `Effective_Communication_for_Analysts.md` to writing sections in `modules/`, or `Ethical_Decision_Making_in_Practice.md` to `CFA/` ethics materials).
*   Link to `Behavioral_Finance/` where relevant (e.g., biases affecting decision-making).

### 5. Tools
*   **`Professional_Development/index.html`:** The main hub for this section. Its internal JavaScript array (`filesInDir`) must be updated when new `.md` files are added.
*   **`js/nav_data.js`:** Update this to add new content to the global navigation.
*   **`quiz_viewer.html`:** Consider using for simple interactive quizzes on topics like ethical dilemmas.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **`index.html` Maintenance:** The JavaScript array in `index.html` **must** be updated when adding or renaming topic files.
*   **Finance-Specific Scenarios:** The key to this section's value is making the advice specific to finance. Generic advice is less helpful.

**Roadmap / Planned Additions:**
*   **Content Gaps:** Create content for placeholder files (`Negotiation_Skills`, `Presentation_Skills`, `Ethical_Decision_Making`).
*   **New Topics:**
    *   Career Management (goal setting, mentorship).
    *   Time Management/Productivity for Analysts.
    *   Foundational Leadership Skills.
    *   Effective Networking in Finance.
    *   Preparing for Finance Interviews.
*   **Case Studies:** Incorporate more short case studies or scenarios to illustrate the application of these skills in realistic settings.
