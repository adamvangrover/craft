# Case Study: Distressed Debt & Restructuring Analysis
## Project Phoenix: Apex Retail Group

> **Buy-Side Perspective:**
> In distressed debt, you aren't just analyzing a going concern; you are analyzing a liquidation and a negotiation. The value of a security depends entirely on where it sits in the "Waterfall." If you buy the wrong tranche, you get zero. If you buy the "Fulcrum Security," you own the company.

## 1. The Scenario
Apex Retail Group, a brick-and-mortar electronics retailer, is facing a liquidity crisis. Sales have declined 15% YoY due to e-commerce competition. The company has hired restructuring advisors.

You are an analyst at a Distressed Debt Hedge Fund. You are looking at the **Second Lien Notes** which are trading at **40 cents on the dollar**.

### The Capital Structure (Pre-Petition)

| Tranche | Amount ($M) | Priority | Collateral |
| :--- | :--- | :--- | :--- |
| **Super Senior Revolver** | $150 | 1st | Inventory & A/R |
| **First Lien Term Loan** | $400 | 2nd | All Assets |
| **Second Lien Notes** | $300 | 3rd | All Assets |
| **Unsecured Bonds** | $500 | 4th | None |
| **Trade Claims (Vendors)** | $200 | 4th (Pari Passu) | None |
| **Equity** | -- | 5th | -- |
| **Total Debt** | **$1,550** | | |

## 2. Valuation & The Waterfall

To value the Second Lien Notes, you must estimate the **Distributable Value (EV)** of the company in a restructuring.

**Analyst Estimates:**
*   **Liquidation Value:** $450M (Fire sale of inventory)
*   **Going Concern Value:** $600M (5.0x adjusted EBITDA of $120M)

### The Waterfall Visualization

<div class="mermaid">
graph TD
    Value[Distributable Value: $600M] --> Revolver[Super Senior Revolver: $150M]
    Revolver --> TermLoan[First Lien Term Loan: $400M]
    TermLoan --> SecondLien[Second Lien Notes: $300M]
    SecondLien --> Unsecured[Unsecured Bonds & Trade: $700M]
    Unsecured --> Equity[Equity: $0]

    style Value fill:#dcfce7,stroke:#166534
    style Revolver fill:#bbf7d0,stroke:#166534
    style TermLoan fill:#86efac,stroke:#15803d
    style SecondLien fill:#fca5a5,stroke:#991b1b,stroke-width:4px
    style Unsecured fill:#fecaca,stroke:#ef4444
</div>

## 3. The Math: Who Gets Paid?

Let's run the numbers based on the **Going Concern Value ($600M)**.

1.  **Total Value:** $600M
2.  **Less: Super Senior Revolver ($150M):** Remaining Value = $450M
3.  **Less: First Lien Term Loan ($400M):** Remaining Value = $50M
4.  **Available for Second Lien ($300M):** $50M

### Recovery Analysis for Second Lien Notes
*   **Claim Amount:** $300M
*   **Value Received:** $50M
*   **Recovery Rate:** $50 / 300 = \mathbf{16.7\%}$

> **Decision Point:**
> The Second Lien Notes are trading at **40 cents (40%)**. Your model shows a recovery of **16.7%**.
>
> *Action:* **SHORT / SELL.** The market is overly optimistic, likely hoping for a white knight buyer or believing adjusted EBITDA is higher.

## 4. The "Fulcrum Security"
The **Fulcrum Security** is the tranche of debt that is most likely to convert into the controlling equity of the reorganized company.

In this case:
*   Value ($600M) covers the 1st Lien fully ($550M cumulative).
*   Value breaks somewhere within the 2nd Lien tranche.
*   Therefore, the **First Lien** gets reinstated or paid in full, and the **Second Lien** holders become the new owners (Equity) of the reorganized company. The Unsecured holders get wiped out (receive zero).

## 5. Senior Analyst Insight: The "EBITDA" Trap

> "Why is the market trading at 40 if the recovery is 16? Look at the 'Adjusted EBITDA'. Management claims EBITDA is $180M after adding back 'Store Closure Costs' and 'Digital Transformation Expenses'.
>
> If you believe the $180M number:
> Value = $180M * 5.0x = $900M.
> Waterfall:
> 1. Revolver ($150) -> Paid
> 2. 1st Lien ($400) -> Paid
> 3. 2nd Lien ($300) -> **Paid in Full (100% Recovery)**
>
> **The Alpha is in the Add-Backs.** If those add-backs are fake cash costs, the value is $600M. If they are one-time items, the value is $900M. Your job is to read the credit agreement definitions."

## 6. Related Concepts
*   **[Fulcrum Security](../../Global_Financial_Glossary.md#F)**
*   **[Waterfall Payment](../../Global_Financial_Glossary.md#W)**
*   **[Absolute Priority Rule](../../Global_Financial_Glossary.md#A)**

---
*To verify if the add-backs are permitted, you would need to check the [Covenant Headroom](../../Interactive_Notebooks/Legal_Analysis/README.md) in the legal docs.*
