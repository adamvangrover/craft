# CRM 01: Fundamentals of Credit Risk

## Table of Contents
1.  [Introduction: What is Credit Risk?](#1-introduction-what-is-credit-risk)
2.  [Core Components of Credit Risk Quantification](#2-core-components-of-credit-risk-quantification)
3.  [Types of Credit Risk](#3-types-of-credit-risk)
4.  [The Five Cs of Credit (Traditional Framework)](#4-the-five-cs-of-credit-traditional-framework)
5.  [Overview of the Credit Lifecycle](#5-overview-of-the-credit-lifecycle)
6.  [Key Players in Credit Markets](#6-key-players-in-credit-markets)

## 1. Introduction: What is Credit Risk?

**Credit Risk** is the risk of financial loss arising from a borrower or counterparty failing to meet its contractual obligations, typically the failure to repay principal and/or interest on a debt instrument. It is one of the oldest and most significant risks faced by lenders, investors in debt securities, and any entity that extends terms of trade (e.g., accounts receivable).

**Core Elements:**
*   **Obligation:** There is a contractual promise by one party (obligor/borrower) to pay another party (obligee/lender/creditor).
*   **Failure (Default):** The obligor does not fulfill this promise according to the agreed terms.
*   **Financial Loss:** The obligee suffers a monetary loss as a result of the failure.

Understanding and managing credit risk is fundamental to the stability of individual financial institutions and the financial system as a whole.

## 2. Core Components of Credit Risk Quantification

While credit risk is a broad concept, it can be quantified by focusing on three main components. This formula is central to regulatory capital models (like Basel II/III) and internal risk management.

*   **Probability of Default (PD):** The likelihood that a borrower will default on its obligations over a specific time horizon (usually one year). It is expressed as a percentage.
*   **Loss Given Default (LGD):** The portion of an asset that is likely to be lost if a borrower defaults. It is expressed as a percentage of the exposure. LGD is the inverse of the recovery rate (LGD = 1 - Recovery Rate).
*   **Exposure at Default (EAD):** The total value that a lender is exposed to when a borrower defaults. For a simple term loan, this is the outstanding principal. For revolving credit lines or derivatives, it can be more complex to estimate.

The **Expected Loss (EL)** from a credit exposure can be calculated as:
`Expected Loss = PD * LGD * EAD`

This formula is a cornerstone of modern credit risk management.

## 3. Types of Credit Risk

Credit risk can manifest in several ways:

*   **3.1. Default Risk:**
    *   **Definition:** The risk that a borrower will be unable or unwilling to make its required debt payments (interest or principal) on time or in full. This is the most common form of credit risk.
    *   **Example:** A company misses an interest payment on its bond or fails to repay a loan at maturity.
*   **3.2. Downgrade Risk (Credit Migration Risk):**
    *   **Definition:** The risk that a borrower's creditworthiness will deteriorate, leading to a downgrade in its credit rating by rating agencies (e.g., S&P, Moody's, Fitch) or an internal risk rating downgrade by a lender.
    *   **Impact:** While not a default, a downgrade typically increases the market yield required on the borrower's debt, causing its market price to fall (for traded debt). It can also signal an increased probability of future default and may trigger certain clauses in loan agreements (e.g., increased interest rate).
    *   **Example:** A company rated 'BBB' is downgraded to 'BB' due to declining profitability and rising leverage.
*   **3.3. Counterparty Risk (Settlement Risk - pre-settlement & settlement):**
    *   **Definition:** The risk that the other party to a financial transaction (e.g., a derivative contract, a foreign exchange trade, a securities trade before settlement) will default before the transaction is completed or on its obligations under the contract. This risk is particularly relevant in over-the-counter (OTC) markets.
    *   **Pre-Settlement Risk:** The risk of loss due to a counterparty defaulting on an obligation *before* the final settlement of a transaction. The loss is typically the cost of replacing the defaulted contract at current market prices. More significant for longer-dated, over-the-counter (OTC) derivatives.
    *   **Settlement Risk (Herstatt Risk):** The risk that one party in a two-way transaction pays out the funds or delivers the assets it owes, but the counterparty defaults before fulfilling its part of the deal. This is most acute when payments are made in different time zones.
    *   **Example (Pre-Settlement):** A bank has an interest rate swap with a corporation. The corporation goes bankrupt before the swap matures, and replacing the swap at current market rates results in a loss for the bank.
*   **3.4. Concentration Risk:**
    *   **Definition:** The risk of loss arising from having a high exposure to a single borrower/counterparty, a group of connected counterparties, a specific industry sector, a geographic region, or a particular type of collateral.
    *   **Impact:** Lack of diversification means that a negative event affecting that concentrated exposure can lead to disproportionately large losses.
    *   **Example:** A bank has 25% of its loan portfolio concentrated in the commercial real estate sector. A downturn in this sector could lead to significant credit losses for the bank.
*   **3.5. Country Risk:**
    *   **Definition:** The risk of loss arising from operating or investing in a particular country, closely related to sovereign risk. It includes the risk that a sovereign government may be unwilling or unable to meet its debt obligations (sovereign default risk), or that it may impose exchange controls, expropriate assets, or that political/economic instability will harm investments.
    *   **Impact:** Can affect all entities operating within or exposed to that country.
    *   **Example:** A company has significant operations in a country that suddenly imposes capital controls, preventing the company from repatriating its profits.

## 4. The Five Cs of Credit (Traditional Framework)

The "Five Cs of Credit" is a traditional, qualitative framework used by lenders to assess the creditworthiness of a borrower. While more sophisticated quantitative models exist, the principles remain highly relevant and provide a robust structure for analysis.

*   **4.1. Character (Willingness to Pay):**
    *   **Focus:** The borrower's integrity, reputation, track record of meeting obligations, and overall trustworthiness. It addresses the question: "Will the borrower pay us back if they are able to?"
    *   **Assessment:** Reviewing payment history, credit reports, management's experience and reputation, business ethics, and any history of defaults or bankruptcies.
    *   *Credit Analyst Note:* Considered by many to be the most important "C". A borrower with strong capacity but poor character may still choose not to pay.
*   **4.2. Capacity (Ability to Pay from Operating Cash Flow):**
    *   **Focus:** The borrower's ability to generate sufficient cash flow from its operations to service its debt obligations (interest and principal). This is the primary source of repayment.
    *   **Assessment:** Analyzing historical and projected financial statements, particularly cash flow statements. Key metrics include Debt Service Coverage Ratio (DSCR), Interest Coverage Ratio (TIE), Fixed Charge Coverage Ratio (FCCR), and overall profitability and cash flow trends.
    *   *Credit Analyst Note:* This involves assessing the sustainability and quality of earnings and cash flows. Is cash flow stable and predictable or volatile and uncertain?
*   **4.3. Capital (Financial Strength & Net Worth):**
    *   **Focus:** The borrower's financial position, net worth, and overall financial resilience. The amount of equity or capital the owners have invested in the business, which acts as a buffer against losses.
    *   **Assessment:** Analyzing the balance sheet, particularly leverage ratios (e.g., Debt-to-Equity, Debt-to-Capital), tangible net worth, and the quality of assets.
    *   *Credit Analyst Note:* A strong capital base provides a cushion to absorb losses and protect creditors. It also indicates the "skin in the game" for the owners.
*   **4.4. Collateral (Secondary Source of Repayment):**
    *   **Focus:** Assets pledged by the borrower to secure the loan, which the lender can claim in the event of default to recover its losses.
    *   **Assessment:** Evaluating the type, quality, value (market value, liquidation value), and liquidity of the collateral. Ensuring the lender has a perfected security interest (legal claim).
    *   *Credit Analyst Note:* While important, collateral is a secondary source of repayment. Lenders prefer to be repaid from cash flow, not by seizing and selling assets. The quality of the collateral directly impacts the Loss Given Default (LGD).
*   **4.5. Conditions (Economic & Industry Environment):**
    *   **Focus:** The external economic and industry conditions that may affect the borrower's ability to repay.
    *   **Assessment:** Analyzing the overall economic outlook (GDP growth, inflation, interest rates), industry trends (growth prospects, competitive intensity, regulatory changes), and any specific conditions impacting the borrower or the loan (e.g., purpose of the loan).
    *   *Credit Analyst Note:* This involves understanding cyclical factors, industry-specific risks, and how the borrower is positioned to navigate these conditions. A strong company in a declining industry still faces significant headwinds.

## 5. Overview of the Credit Lifecycle

The management of credit risk typically follows a lifecycle approach:

*   **5.1. Origination & Business Development:**
    *   Identifying potential borrowers that meet the lender's target market and risk appetite.
    *   Initial discussions and gathering of preliminary information.
*   **5.2. Underwriting & Due Diligence:**
    *   The core credit analysis process. Involves detailed financial analysis, industry assessment, management evaluation, collateral appraisal (if any), and overall risk assessment (as outlined by the Five Cs and other frameworks).
    *   (See `CRM_02_Credit_Analysis_Process_and_Tools.md` for details).
*   **5.3. Credit Approval & Structuring:**
    *   Based on the underwriting, a credit decision is made (approve, decline, or approve with modifications).
    *   If approved, the loan is structured with appropriate terms, conditions, pricing, covenants, and security designed to mitigate identified risks.
*   **5.4. Documentation & Closing:**
    *   Legal documentation of the loan agreement and any security interests.
    *   Fulfillment of conditions precedent before funding.
*   **5.5. Monitoring & Portfolio Management:**
    *   Ongoing review of the borrower's financial performance, compliance with covenants, and changes in its business or industry.
    *   Regular risk rating updates.
    *   Management of the overall credit portfolio to control concentrations and optimize risk-return.
*   **5.6. Problem Loan Management & Workout/Recovery:**
    *   If a borrower shows signs of financial distress or defaults, this stage involves strategies to minimize losses.
    *   May include forbearance, loan restructuring, workout plans, or, as a last resort, legal action, collateral seizure, and recovery efforts.
    *   (To be detailed in `CRM_05_Problem_Loan_Management_and_Workout.md`).

## 6. Key Players in Credit Markets

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
