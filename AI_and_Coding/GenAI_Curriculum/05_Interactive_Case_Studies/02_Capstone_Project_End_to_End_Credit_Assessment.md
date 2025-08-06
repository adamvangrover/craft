# Capstone Project: End-to-End Credit Assessment

## Objective
This capstone project is the final assessment for the GenAI for Credit Analysts learning path. It requires you to integrate all the skills you have learned, from foundational knowledge to advanced prompting and workflow automation, to perform a complete end-to-end credit assessment of a private company.

## Scenario
You are the lead analyst responsible for a loan request from **"Apex Logistics"**, a mid-sized, private logistics and supply chain management company. The company is seeking a term loan to finance a major expansion of its warehouse capacity.

## Your Toolkit
You have been granted access to a secure data room containing the following documents:
- **Apex Logistics Confidential Information Memorandum (CIM)**: Contains company history, management bios, and strategic plans.
- **Apex Logistics Audited Financial Statements (last 3 years)**
- **Apex Logistics Financial Projections (next 5 years)**, including management's assumptions.
- **Third-party market research report on the logistics industry.**
- **Draft Loan Agreement** with proposed terms and covenants.

## Your Tasks

This project is broken down into three phases, mirroring a real-world credit assessment workflow.

### Phase 1: Initial Screening and Data Extraction (Automation Focus)

1.  **Automated Document Processing**: Use your AI assistant to process all the documents in the data room. Your goal is to extract key data points and create structured summaries.
    - **Prompt Hint**: Use Few-Shot prompting to extract key financial data (Revenue, EBITDA, Net Income, Total Debt) for the last 3 years into a consistent JSON or markdown table format.
    - **Prompt Hint**: Use a prompt to summarize the key terms and conditions from the draft loan agreement.

2.  **Generate Preliminary Business & Risk Summary**:
    - **Goal**: Create a high-level summary of the business and its key risks.
    - **Prompt Hint**: "Using the CIM and the market research report, generate a preliminary summary covering Apex Logistics' business model, market position, and the top 3 strategic risks identified in the documents."

### Phase 2: Deep-Dive Analysis (Advanced Prompting Focus)

1.  **Critical Analysis of Financial Projections**:
    - **Goal**: Use AI to critically evaluate the reasonableness of management's financial projections.
    - **Prompt Hint (Chain-of-Thought)**: "Act as a skeptical senior analyst. Review the attached historical financials and future projections for Apex Logistics. First, calculate the historical CAGR for revenue and gross margin. Second, compare these to the projected CAGR. Third, analyze the key assumptions listed for the projections and identify the 2-3 most optimistic or aggressive assumptions. Finally, provide a summary of your findings and list questions for management regarding these assumptions."

2.  **Covenant Analysis and Stress Testing**:
    - **Goal**: Analyze the proposed covenants and stress test them against a downside scenario.
    - **Prompt Hint (Multi-step reasoning)**: "From the attached draft loan agreement, extract the proposed financial covenants (e.g., Debt/EBITDA < 3.0x). Then, using the company's projections, model a downside scenario where revenue is 15% lower than projected and operating margins are 10% lower. Calculate the projected covenants under this stress scenario and identify any potential breaches."

### Phase 3: Synthesis and Recommendation (Human-in-the-Loop Focus)

1.  **Drafting the Credit Memo**:
    - **Goal**: Use the outputs from the previous phases to generate a full draft of the credit memo.
    - **Action**: You should have a series of structured outputs from your AI assistant. Your task is to now act as the final editor, weaving these components together into a coherent narrative.

2.  **Final Recommendation and Justification**:
    - **This task is for you, the human analyst, not the AI.**
    - **Action**: Based on all the analysis, write a final recommendation. Should the bank proceed with the loan? If so, under what conditions? Should the terms be modified? Your recommendation must be supported by a clear, concise justification that references the key findings from your analysis.

## Final Deliverable
A complete, polished credit memorandum for Apex Logistics, including your final, human-generated recommendation. This document should demonstrate your ability to effectively orchestrate AI tools to perform a comprehensive credit assessment, while overlaying your own critical judgment and expertise.
