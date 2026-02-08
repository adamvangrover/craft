
```markdown
# Restructuring Negotiation Simulation: Strategy & Mechanics

> **Buy-Side Perspective:** "In restructuring, **Control** is the most valuable asset. If you own the 'Fulcrum Security' (the debt layer where value breaks), you effectively own the company. This simulation tests your ability to identify the Fulcrum and negotiate a debt-for-equity swap."

> **Lender Perspective:** "As a Senior Secured Lender, your priority is **Capital Preservation**. You must decide if a forbearance agreement offers a path to recovery or if it merely delays the inevitable liquidation, eroding your collateral value."

---

## 1. Scenario Overview: The Distressed Borrower
You are stepping into a high-stakes negotiation regarding a distressed company. Whether analyzing a **Brick-and-Mortar Retailer** facing secular decline or a **Manufacturing Firm** hitting a liquidity wall due to supply chain shocks, the fundamental capital structure challenges remain the same.

The Borrower is requesting a **Forbearance Agreement** (a pause on default enforcement) while proposing a restructuring plan. You must navigate the competing interests of the Sponsor (Equity), Senior Lenders, and Distressed Debt Investors.

### Learning Objectives
1.  **Master Priority of Claims:** Distinguish between First Lien (1L), Second Lien (2L), Unsecured Debt, and Equity in the repayment waterfall.
2.  **Evaluate Strategic Options:** Compare a **Distressed Debt Exchange (DDE)** against a Chapter 11 Bankruptcy or Liquidation.
3.  **Apply Game Theory:** Anticipate the moves of the Sponsor (who wants to retain option value) vs. the Senior Lenders (who want to de-risk).
4.  **Calculate the Breaking Point:** Determine where value runs out in the capital structure.

---

## 2. Key Concepts & Definitions

### A. Fulcrum Security
The class of debt that is most likely to convert into equity during a restructuring because the company's enterprise value (EV) falls within its coverage zone. The holders of this security often control the restructuring process.

* **Example:**
    * **Enterprise Value:** $100 Million
    * **First Lien Debt:** $60 Million (Fully Covered)
    * **Second Lien Debt:** $80 Million (Partially Covered)
    * **Unsecured Debt:** $50 Million (Out of the Money)
    * **Analysis:** The value "breaks" in the Second Lien layer ($60M to $140M). The **Second Lien** is the Fulcrum Security; they will likely become the new owners.

### B. Blocking Position
Holding enough of a specific debt tranche to block a Plan of Reorganization in bankruptcy. In the U.S., a plan typically requires acceptance by at least two-thirds in amount and more than one-half in number of the allowed claims in an impaired class.

* **Strategy:** If a hedge fund buys **33.4%** of the First Lien debt, they can effectively veto any plan that doesn't meet their demands, forcing the company back to the negotiating table.

### C. Cramdown
A bankruptcy court mechanism that forces a restructuring plan on a dissenting class of creditors, provided the plan does not discriminate unfairly and is "fair and equitable."

* **Example:** If the Fulcrum Security class votes to accept a plan that wipes out the old equity and gives them 100% ownership, the court may "cram down" this plan on the old equity holders, even if they vote against it.

### D. Priming (Uptiering)
When a company issues *new* debt that has priority over *existing* debt, often by utilizing "baskets" or loopholes in the original credit agreement.

* **Scenario:** A distressed retailer issues a new "Super-Priority" term loan to inject liquidity. This new loan sits *above* the existing First Lien lenders in the waterfall, effectively pushing the old lenders down (priming them). This is often a trigger for litigation.

---

## 3. How to Run the Simulation

### Step 1: Launch the Environment
Open the Jupyter Notebook `Restructuring_Negotiation_Simulation.ipynb` (or `Restructuring_Negotiation_Sim.ipynb`) in your interactive coding environment.

### Step 2: Analyze the Financials
Review the `financial_position` dataframe provided in the notebook. Pay close attention to:
* **LTM EBITDA:** (Last Twelve Months Earnings Before Interest, Taxes, Depreciation, and Amortization)
* **Leverage Ratios:** (Total Debt / EBITDA)
* **Liquidity Runway:** How many months of cash does the company have left?

### Step 3: Make Critical Decisions
Use the interactive dropdown menus to simulate the Credit Committee voting process:

#### Decision Point A: The Forbearance Request
* **Option 1: Grant Forbearance.** Charge a fee, tighten covenants, and give them 3 months to find a buyer.
    * *Pros:* Keeps the company alive, avoids immediate legal fees.
    * *Cons:* Collateral might depreciate; "Kick the can down the road."
* **Option 2: Deny & Accelerate.** Declare immediate default and move to seize collateral.
    * *Pros:* Immediate control of assets.
    * *Cons:* destruction of enterprise value; likely triggers free-fall bankruptcy.

#### Decision Point B: The Debt-for-Equity Swap
* **Scenario:** The 2nd Lien lenders offer to wipe out $100M of debt in exchange for 90% of the equity.
* **Your Move:** As a Senior Lender, do you accept this? Does it sufficiently de-lever the company to make your remaining debt safe?

### Step 4: Run the Code
Execute the cells to see the outcome of your decisions based on the simulation's probability engine.

```python
# Example Code Snippet from Simulation
def calculate_recovery_rate(enterprise_value, senior_debt, junior_debt):
    """
    Calculates recovery rate for different tranches.
    """
    if enterprise_value >= senior_debt:
        senior_recovery = 1.0 # 100%
        remaining_value = enterprise_value - senior_debt
        junior_recovery = min(remaining_value / junior_debt, 1.0)
    else:
        senior_recovery = enterprise_value / senior_debt
        junior_recovery = 0.0
    
    return senior_recovery, junior_recovery

```

## 4. Advanced Tactics: Game Theory

When negotiating, assume the following motivations:

1. **Private Equity Sponsor:** Wants to extend the runway at all costs (option value) or inject "rescue financing" on aggressive terms (Priming).
2. **Senior Lenders (Banks):** Risk-averse. Prefer a par recovery or a quick exit. Often willing to sell at 90 cents on the dollar to avoid a 2-year workout.
3. **Distressed Funds:** Aggressive. Look to buy blocking positions to force a conversion to equity (Loan-to-Own strategy).

Good luck. The fate of the company is in your hands.

```

```