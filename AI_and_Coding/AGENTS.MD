# Agent Instructions: AI & Coding

This document provides instructions for AI agents working with the content in the `/AI_and_Coding/` directory and its subdirectories.

## Inherits From

This document inherits all general principles from the root `AGENTS.MD` file. Please review that document first for guidelines on:

*   Overall repository architecture and purpose.
*   General content creation principles (accuracy, clarity, modularity).
*   Linking conventions.
*   Working with the global navigation system (`js/nav_data.js`).

### 1. Purpose and Scope of this Directory
This `/AI_and_Coding/` directory is dedicated to exploring the intersection of Artificial Intelligence, coding, and finance. It houses resources for using AI tools, developing effective prompts, understanding agent-based systems, and learning relevant coding skills for the financial industry.

The primary interactive entry point for this section is `AI_and_Coding/index.html`.

### 2. Content Structure and Types
This directory is organized by topic. Key subdirectories include:
*   `Prompt_Libraries/`: A collection of prompts for Large Language Models (LLMs) tailored for financial analysis tasks.
*   `Agent_Libraries/`: Resources and information about AI agents that can automate financial analysis tasks.
*   `GenAI_Curriculum/`: Structured learning materials on Generative AI concepts and applications in finance.
*   `ipynb/`: Contains Jupyter Notebooks for hands-on coding examples and tutorials.

### 3. Specific Guidelines for AI & Coding Content
*   **Practicality:** Content should be practical and directly applicable to the work of a financial analyst. Focus on real-world use cases.
*   **Clarity:** Explain technical concepts clearly and concisely. Define terms and avoid unnecessary jargon. When discussing code, ensure it is well-commented and the logic is easy to follow.
*   **Reproducibility:** For any code, scripts, or notebooks, ensure they are self-contained and can be easily reproduced by a user. List any dependencies required.
*   **Vendor-Neutrality:** When discussing AI tools or platforms, aim to be vendor-neutral where possible, focusing on the underlying concepts and capabilities rather than specific products.
*   **Prompt Engineering:** When creating prompts for the `Prompt_Libraries/`, provide context, examples, and explain the expected output. Use a consistent format for prompts.

### 4. Linking Strategy
*   Link technical terms to the `Global_Financial_Glossary.md`.
*   Cross-reference concepts within this section. For example, a guide in `GenAI_Curriculum/` should link to relevant examples in `Prompt_Libraries/` or `ipynb/`.
*   Link to other relevant sections of the repository, such as `Data_Science/` for related technical concepts or `Financial_Modeling/` for applications of AI in modeling.

### 5. Tools
*   **`global_markdown_viewer.html`:** Use this tool to render Markdown-based guides and tutorials.
*   **`AI_and_Coding/index.html`:** Ensure this hub page is updated with links to new, significant content added to the section.
*   **`js/nav_data.js`:** Add new content to the global navigation menu by editing this file.

### 6. Developer Notes, Roadmap & Future Considerations

**Developer Notes:**
*   **Stay Current:** The field of AI changes rapidly. Content should be reviewed periodically for relevance and accuracy. Note the date of creation or last update where appropriate.
*   **Interactive Content:** This section is a prime candidate for interactive content. Prioritize Jupyter Notebooks and potentially simple web-based tools (HTML/JS) to demonstrate concepts.

**Roadmap / Planned Additions:**
*   **Python for Finance:** A dedicated tutorial series on using Python for financial analysis, covering libraries like Pandas, NumPy, and Matplotlib.
*   **API Guides:** Tutorials on how to access financial data using popular APIs.
*   **Machine Learning Intro:** An introduction to machine learning concepts relevant to finance (e.g., regression for forecasting, classification for credit scoring).
*   **Case Studies:** More in-depth case studies on how AI is being used in the real world to solve financial problems.
