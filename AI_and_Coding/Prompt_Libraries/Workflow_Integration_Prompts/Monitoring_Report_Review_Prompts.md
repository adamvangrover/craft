# Prompt Library: Monitoring Report Review

This library provides prompts for reviewing ongoing monitoring reports (e.g., quarterly compliance certificates, annual reviews), to help identify performance variances, emerging risks, and necessary follow-up actions.

---

## Template 1: Variance and Covenant Analysis

**Persona:** Junior Portfolio Analyst

**Context:** You are reviewing the quarterly compliance certificate and management accounts for [Company Name].

**Task:** Analyze the company's performance against its budget and its compliance with financial covenants. Your output should be a structured summary covering:
1.  **Performance vs. Budget:** A table comparing the actual vs. budgeted results for key metrics (e.g., Revenue, EBITDA). Calculate the variance in percentage terms.
2.  **Covenant Compliance:** A table showing each financial covenant, the required level, the actual level, and the calculated headroom (cushion).
3.  **Key Highlights:** A bulleted list of the top three key takeaways from the report (e.g., "Revenue was 10% ahead of budget, driven by strong performance in the X division.").

**Format:** A structured report with tables and a bulleted list.

**Tone:** Factual and quantitative.

**Example Prompt:**
"Please review the attached quarterly compliance certificate and management accounts for [Company Name]. Generate a structured summary that analyzes performance vs. budget and covenant compliance. Include tables and a list of key highlights. The tone should be factual and quantitative."

---

## Template 2: Emerging Risk Identification

**Persona:** Senior Portfolio Manager

**Context:** You are conducting the annual review for [Company Name], a borrower that has been performing well. Your goal is to look beyond the numbers and proactively identify any emerging risks.

**Task:** Generate a list of potential emerging risks that may not be immediately obvious from the financial statements. For each risk, suggest a corresponding follow-up question for the management team. The risks should cover:
1.  **Strategic / Competitive Risks:** (e.g., a new competitor, a disruptive technology).
2.  **Operational Risks:** (e.g., key-person dependency, supply chain vulnerabilities).
3.  **Financial Risks:** (e.g., upcoming debt maturity, reliance on short-term funding).

**Format:** A bulleted list, with each item containing the risk and a follow-up question.

**Tone:** Forward-looking and risk-aware.

**Example Prompt:**
"I am conducting the annual review for [Company Name]. Please generate a list of potential emerging strategic, operational, and financial risks. For each risk, provide a follow-up question to ask management. The tone should be forward-looking and risk-aware."

---

## Template 3: Drafting a Watchlist / Downgrade Recommendation

**Persona:** Credit Risk Officer

**Context:** The latest monitoring report for [Company Name] shows a significant deterioration in performance and a breach of one financial covenant. You need to draft a recommendation to place the loan on the 'Watchlist'.

**Task:** Draft a concise recommendation memo for the credit committee. The memo should include:
1.  **Subject:** A clear subject line (e.g., "Recommendation to Downgrade [Company Name] to Watchlist").
2.  **Background:** A brief summary of the credit and the reason for the review.
3.  **Reason for Downgrade:** A clear and concise explanation of the recent performance deterioration and the covenant breach.
4.  **Proposed Action Plan:** A list of immediate next steps (e.g., "Schedule a meeting with management," "Request a detailed turnaround plan," "Increase monitoring frequency to monthly").
5.  **Recommendation:** A clear statement recommending the downgrade.

**Format:** A professional memo.

**Tone:** Urgent, clear, and decisive.

**Example Prompt:**
"Based on the attached monitoring report showing a covenant breach, draft a recommendation memo to the credit committee to place [Company Name] on the 'Watchlist'. The memo should include a background, the reason for the downgrade, a proposed action plan, and a clear recommendation. The tone should be urgent and decisive."
