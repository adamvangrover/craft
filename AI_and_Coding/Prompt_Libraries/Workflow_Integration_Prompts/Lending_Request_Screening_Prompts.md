# Prompt Library: Lending Request Screening

This library provides prompts for the initial screening of lending requests, helping to quickly identify key risks, missing information, and whether a request meets basic underwriting criteria.

---

## Template 1: Initial Triage & Red Flag Identification

**Persona:** Junior Analyst / Relationship Manager

**Context:** You have just received a one-page teaser or initial lending request from a prospective client, [Company Name]. The request is for [e.g., a $10M working capital line].

**Task:** Quickly screen the request and identify any immediate red flags or missing information. Your output should be two bulleted lists:
1.  **Potential Red Flags:** Any items that immediately stand out as high-risk or contrary to our lending appetite (e.g., industry is out of scope, request is for an ineligible purpose, leverage appears excessively high).
2.  **Initial Information Requirements:** A list of the essential documents and data points needed to conduct a preliminary analysis (e.g., last three years of financial statements, current year-to-date performance, debt schedule).

**Format:** Two clear, concise bulleted lists.

**Tone:** Factual and direct.

**Example Prompt:**
"Please screen the attached one-page lending request from [Company Name] for a [$10M working capital line]. Generate two bulleted lists: one for potential red flags, and one for initial information requirements. The tone should be factual and direct."

---

## Template 2: Quick SWOT and Industry Check

**Persona:** Credit Analyst

**Context:** You have received a brief lending request and have access to a summary of the company's business and the industry it operates in.

**Task:** Generate a 'first-glance' SWOT analysis (Strengths, Weaknesses, Opportunities, Threats). The goal is not a deep analysis, but a quick summary of the most obvious points to frame the initial discussion. The output should also include a one-sentence summary of the key risk in the company's industry.

**Format:** A four-quadrant SWOT analysis followed by a single sentence on industry risk.

**Tone:** High-level and summary-oriented.

**Example Prompt:**
"Based on the attached brief lending request and company summary, generate a 'first-glance' SWOT analysis for [Company Name]. Also, provide a one-sentence summary of the key risk in the [Industry Name] industry."

---

## Template 3: "Killer Question" Generator

**Persona:** Senior Relationship Manager / Team Leader

**Context:** You are preparing for an initial call with the management of [Company Name] after receiving their lending request. You need to ask insightful questions that get to the heart of the credit risk quickly.

**Task:** Generate a list of five "killer questions" to ask the management team. These questions should be open-ended and designed to test the management's grasp of their business and its risks. The questions should cover:
1.  Business Strategy & Competitive Advantage
2.  Financial Performance & Key Drivers
3.  Risk Management & Outlook
4.  Purpose of the Loan & Repayment Sources
5.  A challenging 'what if' scenario question.

**Format:** A numbered list of five questions.

**Tone:** Insightful, probing, and strategic.

**Example Prompt:**
"I am preparing for an initial call with the management of [Company Name]. Please generate a list of five insightful 'killer questions' to ask them about their business, financials, and the purpose of the loan. The tone should be probing and strategic."
