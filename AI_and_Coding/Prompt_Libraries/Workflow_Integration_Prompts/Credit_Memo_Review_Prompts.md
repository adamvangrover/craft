# Prompt Library: Credit Memorandum Review

This library provides advanced, action-oriented prompts for reviewing and commenting on credit memorandums within a workflow. These are designed to be used with a copilot to generate specific outputs for inclusion in review systems.

---

## Template 1: Comprehensive Credit Memo Review

**Persona:** Senior Credit Officer / Portfolio Manager

**Context:** You are reviewing a detailed credit memorandum for a new lending request for [Company Name], a [brief description of company, e.g., mid-sized software company]. The request is for a [e.g., $50M Term Loan B]. The attached document is the full credit memo.

**Task:** Generate a comprehensive review of the credit memorandum. Your review should be structured into three parts:
1.  **Executive Summary:** A concise summary of the request and your overall recommendation.
2.  **Key Strengths & Mitigants:** A bulleted list of the primary positive factors and how risks are mitigated.
3.  **Critical Questions & Concerns:** A numbered list of the most important questions and concerns that need to be addressed by the deal team before approval. Focus on the 'so what?' of each point.

**Format:** A well-formatted markdown document, suitable for copying into an email or a credit review system.

**Tone:** Professional, critical, and constructive.

**Example Prompt:**
"As a Senior Credit Officer, please perform a comprehensive review of the attached credit memorandum for [Company Name]. The request is for a [$50M Term Loan B]. Generate an executive summary, a list of key strengths and mitigants, and a list of critical questions and concerns. The output should be in markdown format with a professional and constructive tone."

---

## Template 2: Focused Section Review (e.g., Financial Projections)

**Persona:** Financial Analyst / Specialist

**Context:** You are tasked with reviewing the financial projections section of the credit memorandum for [Company Name]. The company operates in the [Industry Name] industry.

**Task:** Critically evaluate the financial projections. Your output should be a list of comments and questions, focusing on:
1.  **Realism of Assumptions:** Are the key assumptions (e.g., revenue growth, margins, capex) realistic compared to historical performance, industry trends, and economic outlook?
2.  **Internal Consistency:** Are the projections internally consistent? (e.g., does the balance sheet balance? does the cash flow statement reconcile?).
3.  **Downside Case Analysis:** How robust is the downside case? Does it represent a truly stressful but plausible scenario? Suggest one additional stress test that should be run.

**Format:** A bulleted list of comments and questions.

**Tone:** Inquisitive and detail-oriented.

**Example Prompt:**
"As a Financial Analyst, please review the financial projections section of the credit memo for [Company Name]. Generate a bulleted list of comments and questions focusing on the realism of assumptions, internal consistency, and the downside case analysis. The tone should be inquisitive and detail-oriented."

---

## Template 3: Generating a Contrarian View

**Persona:** Devil's Advocate / Risk Committee Member

**Context:** The deal team is highly supportive of the lending request for [Company Name]. Your role is to challenge the consensus and present a strong contrarian case.

**Task:** Generate a 'Red Team' analysis of the proposed transaction. Your analysis should:
1.  **Identify Hidden Risks:** Uncover potential risks that may have been downplayed or overlooked in the credit memorandum.
2.  **Challenge Key Strengths:** For each key strength identified by the deal team, provide a counter-argument or explain why it might not be as strong as presented.
3.  **Present an Alternative Narrative:** Construct a plausible narrative for why this loan could result in a significant loss.

**Format:** A short memo (3-4 paragraphs).

**Tone:** Skeptical, challenging, and data-driven.

**Example Prompt:**
"As a 'Devil's Advocate' on the risk committee, please generate a 'Red Team' analysis of the attached credit memorandum for [Company Name]. Identify hidden risks, challenge the key strengths, and present an alternative narrative for why this loan could fail. The output should be a short memo with a skeptical and data-driven tone."

---

## Template 4: ESG Risk Assessment

**Persona:** ESG Specialist / Responsible Investment Officer

**Context:** You are reviewing the credit memorandum for [Company Name] to assess its Environmental, Social, and Governance (ESG) risk profile.

**Task:** Provide a summary of the key ESG risks and opportunities for [Company Name]. Your summary should cover:
1.  **Environmental:** Any material risks related to climate change, pollution, or resource management.
2.  **Social:** Any material risks related to labor practices, data privacy, or community relations.
3.  **Governance:** Any concerns related to board structure, executive compensation, or shareholder rights.
4.  **Overall Recommendation:** A concluding statement on whether the ESG risks are adequately addressed in the credit memo.

**Format:** A structured summary with headings for each ESG category.

**Tone:** Objective and risk-focused.

**Example Prompt:**
"As an ESG Specialist, please review the attached credit memo for [Company Name] and provide a structured summary of the key ESG risks and opportunities. Conclude with a statement on whether these risks are adequately addressed. The tone should be objective and risk-focused."
