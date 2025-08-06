# Case Study: Comprehensive Analysis of a Public Company

## Objective
This case study is designed to test your ability to use Generative AI to conduct a comprehensive credit analysis of a publicly traded company. You will be required to synthesize information from multiple sources and use advanced prompting techniques to generate a detailed credit assessment.

## Scenario
You are a credit analyst at a major bank. A request has come in for a new revolving credit facility for **"Innovate Corp."**, a publicly traded technology company. Your task is to prepare a preliminary credit assessment for the loan committee.

## Your Toolkit
You have access to the following (hypothetical) documents in your secure, RAG-enabled AI platform:
- **Innovate Corp. 10-K Report (latest fiscal year)**
- **Innovate Corp. 10-Q Report (latest quarter)**
- **Tech Sector Industry Report (latest edition)**
- **Transcript of Innovate Corp.'s latest earnings call**

## Your Tasks

Complete the following tasks using your AI assistant. For each task, you should first craft a detailed prompt, then critically review and refine the AI's output.

### Task 1: Generate a Company Overview
- **Goal:** Create a concise summary of the company's business model, products, and competitive position.
- **Prompting Technique:** Basic prompting, but with a specific persona and audience.
- **Example Prompt Hint:** "Act as a credit analyst preparing a summary for a loan committee. Using the attached 10-K, generate a 'Company Overview' section for Innovate Corp., focusing on its revenue streams and key competitive advantages as described in the 'Business' and 'Management's Discussion and Analysis' sections."

### Task 2: Conduct a SWOT Analysis
- **Goal:** Identify the company's Strengths, Weaknesses, Opportunities, and Threats.
- **Prompting Technique:** Chain-of-Thought (CoT) combined with multi-document synthesis.
- **Example Prompt Hint:** "Perform a SWOT analysis for Innovate Corp. First, analyze the 10-K and earnings call transcript to identify internal Strengths and Weaknesses. Second, analyze the Industry Report to identify external Opportunities and Threats. Synthesize this information into a four-quadrant SWOT analysis. Present the final output as a markdown table."

### Task 3: Analyze Financial Performance and Key Ratios
- **Goal:** Generate a detailed analysis of the company's recent financial performance and calculate key credit ratios.
- **Prompting Technique:** Few-Shot Prompting to ensure consistent output format for ratios.
- **Example Prompt Hint:** "Analyze the financial statements in the 10-K and 10-Q. Generate a narrative summarizing revenue trends, profitability, and cash flow. Then, calculate the following ratios for the last two fiscal years: Debt-to-EBITDA, Interest Coverage Ratio, and Current Ratio. Present the ratios in a table. Example: | Ratio | FY2023 | FY2024 | |---|---|---| | Debt-to-EBITDA | 2.5x | 2.8x |"

### Task 4: Formulate Key Questions for Management
- **Goal:** Based on your analysis, generate a list of insightful questions to ask Innovate Corp.'s management team.
- **Prompting Technique:** Tree of Thoughts (conceptual). The AI should explore different areas of concern to generate questions.
- **Example Prompt Hint:** "Based on the attached financial reports and risk factors, act as a skeptical credit analyst and generate a list of 5 key questions for the management of Innovate Corp. The questions should focus on potential weaknesses or inconsistencies in their financial reporting and strategic outlook. For each question, provide a brief rationale for why it is important to ask."

## Deliverable
Combine the outputs from each task into a single, coherent preliminary credit assessment document. You should add your own summary and recommendation at the end, based on the AI-generated analysis. This is where your human expertise provides the final, critical layer of value.
