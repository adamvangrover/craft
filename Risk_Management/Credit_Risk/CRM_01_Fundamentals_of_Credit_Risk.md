# CRM 01: Fundamentals of Credit Risk

## 1. Introduction: What is Credit Risk?

**Credit Risk** is the risk of financial loss arising from a borrower or counterparty failing to meet its contractual obligations, typically the failure to repay principal and/or interest on a debt instrument. It is one of the oldest and most significant risks faced by lenders, investors in debt securities, and any entity that extends terms of trade (e.g., accounts receivable).

**Core Elements:**
*   **Obligation:** There is a contractual promise by one party (obligor/borrower) to pay another party (obligee/lender/creditor).
*   **Failure (Default):** The obligor does not fulfill this promise according to the agreed terms.
*   **Financial Loss:** The obligee suffers a monetary loss as a result of the failure.

Understanding and managing credit risk is fundamental to the stability of individual financial institutions and the financial system as a whole.

## 2. Types of Credit Risk

Credit risk can manifest in several ways:

*   **2.1. Default Risk:**
    *   **Definition:** The risk that a borrower will be unable or unwilling to make its required debt payments (interest or principal) on time or in full. This is the most common form of credit risk.
    *   **Example:** A company misses an interest payment on its bond or fails to repay a loan at maturity.
*   **2.2. Downgrade Risk (Credit Migration Risk):**
    *   **Definition:** The risk that a borrower's creditworthiness will deteriorate, leading to a downgrade in its credit rating by rating agencies (e.g., S&P, Moody's, Fitch) or an internal risk rating downgrade by a lender.
    *   **Impact:** While not a default, a downgrade typically increases the market yield required on the borrower's debt, causing its market price to fall (for traded debt). It can also signal an increased probability of future default and may trigger certain clauses in loan agreements (e.g., increased interest rate).
    *   **Example:** A company rated 'BBB' is downgraded to 'BB' due to declining profitability and rising leverage.
*   **2.3. Counterparty Risk (Settlement Risk - pre-settlement & settlement):**
    *   **Definition:** The risk that the other party to a financial transaction (e.g., a derivative contract, a foreign exchange trade, a securities trade before settlement) will default before the transaction is completed or on its obligations under the contract.
    *   **Pre-Settlement Risk:** The risk of loss due to a counterparty defaulting on an obligation *before* the final settlement of a transaction. The loss is typically the cost of replacing the defaulted contract at current market prices. More significant for longer-dated, over-the-counter (OTC) derivatives.
    *   **Settlement Risk (Herstatt Risk):** The risk that one party in a two-way transaction pays out the funds or delivers the assets it owes, but the counterparty defaults before fulfilling its part of the deal. This is most acute when payments are made in different time zones.
    *   **Example (Pre-Settlement):** A bank has an interest rate swap with a corporation. The corporation goes bankrupt before the swap matures, and replacing the swap at current market rates results in a loss for the bank.
*   **2.4. Concentration Risk:**
    *   **Definition:** The risk of loss arising from having a high exposure to a single borrower/counterparty, a group of connected counterparties, a specific industry sector, a geographic region, or a particular type of collateral.
    *   **Impact:** Lack of diversification means that a negative event affecting that concentrated exposure can lead to disproportionately large losses.
    *   **Example:** A bank has 25% of its loan portfolio concentrated in the commercial real estate sector. A downturn in this sector could lead to significant credit losses for the bank.
*   **2.5. Country Risk:**
    *   **Definition:** The risk of loss arising from operating or investing in a particular country, closely related to sovereign risk. It includes the risk that a sovereign government may be unwilling or unable to meet its debt obligations (sovereign default risk), or that it may impose exchange controls, expropriate assets, or that political/economic instability will harm investments.
    *   **Impact:** Can affect all entities operating within or exposed to that country.
    *   **Example:** A company has significant operations in a country that suddenly imposes capital controls, preventing the company from repatriating its profits.

## 3. The Five Cs of Credit (Traditional Framework)

The "Five Cs of Credit" is a traditional, qualitative framework used by lenders to assess the creditworthiness of a borrower. While more sophisticated quantitative models exist, the principles remain highly relevant.

*   **3.1. Character (Willingness to Pay):**
    *   **Focus:** The borrower's integrity, reputation, track record of meeting obligations, and overall trustworthiness.
    *   **Assessment:** Reviewing payment history, credit reports, management's experience and reputation, business ethics, and any history of defaults or bankruptcies.
    *   *Credit Analyst Note:* Considered by many to be the most important "C". A borrower with strong capacity but poor character may still choose not to pay.
*   **3.2. Capacity (Ability to Pay from Operating Cash Flow):**
    *   **Focus:** The borrower's ability to generate sufficient cash flow from its operations to service its debt obligations (interest and principal).
    *   **Assessment:** Analyzing historical and projected financial statements, particularly cash flow statements. Key metrics include Debt Service Coverage Ratio (DSCR), Interest Coverage Ratio (TIE), Fixed Charge Coverage Ratio (FCCR), and overall profitability and cash flow trends.
    *   *Credit Analyst Note:* This involves assessing the sustainability and quality of earnings and cash flows.
*   **3.3. Capital (Financial Strength & Net Worth):**
    *   **Focus:** The borrower's financial position, net worth, and overall financial resilience. The amount of equity or capital the owners have invested in the business.
    *   **Assessment:** Analyzing the balance sheet, particularly leverage ratios (e.g., Debt-to-Equity, Debt-to-Capital), tangible net worth, and the quality of assets.
    *   *Credit Analyst Note:* A strong capital base provides a cushion to absorb losses and protect creditors.
*   **3.4. Collateral (Secondary Source of Repayment):**
    *   **Focus:** Assets pledged by the borrower to secure the loan, which the lender can claim in the event of default.
    *   **Assessment:** Evaluating the type, quality, value (market value, liquidation value), and liquidity of the collateral. Ensuring the lender has a perfected security interest (legal claim).
    *   *Credit Analyst Note:* While important, collateral is a secondary source of repayment. Lenders prefer to be repaid from cash flow, not by seizing and selling assets.
*   **3.5. Conditions (Economic & Industry Environment):**
    *   **Focus:** The external economic and industry conditions that may affect the borrower's ability to repay.
    *   **Assessment:** Analyzing the overall economic outlook (GDP growth, inflation, interest rates), industry trends, competitive landscape, regulatory environment, and any specific conditions impacting the borrower or the loan (e.g., purpose of the loan).
    *   *Credit Analyst Note:* This involves understanding cyclical factors, industry-specific risks, and how the borrower is positioned to navigate these conditions.

## 4. Overview of the Credit Lifecycle

The management of credit risk typically follows a lifecycle approach:

*   **4.1. Origination & Business Development:**
    *   Identifying potential borrowers that meet the lender's target market and risk appetite.
    *   Initial discussions and gathering of preliminary information.
*   **4.2. Underwriting & Due Diligence:**
    *   The core credit analysis process. Involves detailed financial analysis, industry assessment, management evaluation, collateral appraisal (if any), and overall risk assessment (as outlined by the Five Cs and other frameworks).
    *   (See `CRM_02_Credit_Analysis_Process_and_Tools.md` for details).
*   **4.3. Credit Approval & Structuring:**
    *   Based on the underwriting, a credit decision is made (approve, decline, or approve with modifications).
    *   If approved, the loan is structured with appropriate terms, conditions, pricing, covenants, and security.
*   **4.4. Documentation & Closing:**
    *   Legal documentation of the loan agreement and any security interests.
    *   Fulfillment of conditions precedent before funding.
*   **4.5. Monitoring & Portfolio Management:**
    *   Ongoing review of the borrower's financial performance, compliance with covenants, and changes in its business or industry.
    *   Regular risk rating updates.
    *   Management of the overall credit portfolio to control concentrations and optimize risk-return.
*   **4.6. Problem Loan Management & Workout/Recovery:**
    *   If a borrower shows signs of financial distress or defaults, this stage involves strategies to minimize losses.
    *   May include forbearance, loan restructuring, workout plans, or, as a last resort, legal action, collateral seizure, and recovery efforts.
    *   (To be detailed in `CRM_05_Problem_Loan_Management_and_Workout.md`).

## 5. Key Players in Credit Markets

*   **Borrowers:** Individuals, corporations, governments, and other entities seeking funds.
*   **Lenders/Creditors:**
    *   **Banks:** Commercial banks, investment banks.
    *   **Non-Bank Financial Institutions (NBFIs):** Insurance companies, pension funds, asset managers, private credit funds, finance companies.
    *   **Bondholders/Investors:** Purchasers of corporate or government bonds.
    *   **Suppliers (Trade Creditors):** Companies offering credit terms to their customers.
*   **Intermediaries:**
    *   **Investment Banks:** Arrange and underwrite debt issuances.
    *   **Brokers/Dealers:** Facilitate trading of debt securities.
*   **Credit Rating Agencies:** (e.g., S&P, Moody's, Fitch) Provide independent opinions on creditworthiness.
*   **Regulators:** (e.g., Central Banks, Financial Supervisory Authorities) Set rules and oversee the stability of the financial system, including capital adequacy for lenders.

**Conclusion:**
These fundamental concepts of credit risk – its definition, types, assessment frameworks like the Five Cs, and the typical lifecycle – provide the essential groundwork for more detailed credit analysis and risk management practices. Understanding these basics is the first step for any aspiring credit professional.
