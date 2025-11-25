> **Buy-Side Perspective:** Cloud Computing is not just "renting servers"; it is the operating system of the modern economy. For credit analysts, the sector offers high recurring revenue and sticky customers, but also massive capital intensity. The "Hyperscalers" (AWS, Azure, GCP) are essentially utilities. The real credit work is in analyzing the SaaS (Software as a Service) companies built *on top* of them: are they "Mission Critical" or just "Nice to Have"?

# Cloud Computing & SaaS Primer

## 1. Industry Structure: The "Stack"

Understanding where a company sits in the stack is critical for assessing margin profile and competitive moat.

### Infrastructure as a Service (IaaS)
*   **What it is:** Raw compute, storage, and networking. The "Digital Real Estate."
*   **Key Players:** Amazon (AWS), Microsoft (Azure), Google (GCP).
*   **Credit Profile:** Massive CapEx requirements (Data Centers). Oligopoly pricing power. Extremely sticky.

### Platform as a Service (PaaS)
*   **What it is:** Tools for developers to build apps without managing servers (databases, AI tools).
*   **Key Players:** Snowflake, MongoDB, Datadog.
*   **Credit Profile:** High growth, high R&D. Often unprofitable on a GAAP basis but cash flow positive due to deferred revenue (upfront payments).

### Software as a Service (SaaS)
*   **What it is:** Finished applications delivered over the web.
*   **Key Players:** Salesforce (CRM), Adobe (Creative), Workday (HR).
*   **Credit Profile:** The "Holy Grail" of recurring revenue. Low CapEx, high Gross Margins (80%+). Risk is **Churn**.

## 2. Key Metrics for Cloud/SaaS Credits

Traditional metrics (P/E, EBITDA) often fail here. You must look at Unit Economics.

### A. ARR (Annual Recurring Revenue)
The heartbeat of the business. Normalized annualized value of subscription contracts.

### B. Net Revenue Retention (NRR)
*   **Formula:** (Revenue from Existing Cohort in Year 2) / (Revenue from Same Cohort in Year 1).
*   **Buy-Side View:** If NRR > 100%, the business grows even if they never sign a new customer (upselling). Ideally >115% for top-tier SaaS. <100% implies the "leaky bucket" problem.

### C. Rule of 40
*   **Formula:** Revenue Growth Rate + EBITDA Margin (or FCF Margin).
*   **Benchmark:** Should be > 40%.
*   **Why it matters:** It balances growth and profitability. A company growing 50% with -10% margins is fine (Score 40). A company growing 5% with 10% margins is failing (Score 15).

### D. CAC Payback Period
*   **Formula:** Customer Acquisition Cost / (Average Annual Revenue per Customer * Gross Margin).
*   **Benchmark:** < 12 months is excellent. > 24 months is risky (burns too much cash to grow).

## 3. The "Deferred Revenue" Adjustment

SaaS companies collect cash upfront (Jan 1) but recognize revenue over 12 months.
*   **Income Statement:** Shows a loss.
*   **Cash Flow Statement:** Shows huge inflow (Change in Working Capital).
*   **Credit Implication:** You must analyze **Free Cash Flow (FCF)**, not Net Income. However, beware—if growth stops, that "Working Capital float" reverses and cash dries up instantly.

> **Pro Tip:** In a SaaS LBO, look closely at the "Change of Control" provisions in the customer contracts. Do customers have the right to terminate if the vendor is acquired? If 20% of the ARR walks out the door upon closing, your leverage ratio just spiked.

## 4. Key Risks

*   **Seat Compression:** In a recession, companies lay off employees. Fewer employees = fewer Salesforce licenses needed. SaaS is not immune to macro cycles.
*   **Vendor Lock-in vs. Multi-Cloud:** Customers are increasingly using "Containerization" (Kubernetes) to avoid being locked into AWS or Azure. This increases churn risk for sticky platforms.
*   **AI Disruption:** GenAI might reduce the need for "Seat-based" software (AI agents doing the work of 10 humans). Pricing models may need to shift to "Consumption-based."

## 5. Case Study: The "Unprofitable" IPO

**Situation:** CloudCo files for IPO.
*   Revenue Growth: 60%
*   Net Income Margin: -20%
*   Operating Cash Flow Margin: +15%
*   Stock Based Compensation (SBC): 25% of Revenue.

**Analysis:**
*   **The Bull Case:** They are FCF positive! The Net Loss is just non-cash SBC.
*   **The Credit Bear Case:** SBC is a real cost to shareholders (dilution), but for *creditors*, it's an equity cushion. However, rely on the OCF.
*   **The Catch:** Check the CAC Payback. If they stop spending 50% of revenue on Sales & Marketing, does the growth collapse? If yes, the business model is broken.

<details>
<summary><strong>Knowledge Check: Churn Analysis</strong></summary>

**Scenario:** Company A has 5% Annual Logo Churn (losing 5% of customer count). Company B has 5% Annual Revenue Churn (losing 5% of dollars).

**Question:** Which churn metric is more dangerous for a credit analyst?

**Answer:** **Revenue Churn.**
Logo Churn might just mean losing small, unprofitable customers (which can be good). Revenue Churn means losing the big "Whales" that pay the bills. Always weight churn by dollars (ARR), not logos.
</details>

## 6. Glossary

*   **Hyperscaler:** Massive cloud infrastructure providers (AWS, Azure, GCP).
*   **Churn:** The rate at which customers cancel.
*   **RPO (Remaining Performance Obligations):** Backlog. The total future value of unbilled contracts. A leading indicator of revenue.
*   **SBC (Stock Based Compensation):** Paying employees with equity. Improves cash flow but dilutes ownership.
