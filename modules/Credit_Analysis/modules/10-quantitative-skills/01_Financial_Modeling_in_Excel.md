# 2.1 Financial Modeling in Excel

This sub-module provides hands-on training in building a dynamic, three-statement financial model. The focus is on best practices for structure, logic, and functionality, creating a tool that is not only accurate but also flexible, transparent, and easy to audit.

## Learning Objectives

- Apply financial modeling best practices for layout, formatting, and structure to create professional, easy-to-follow models.
- Build a fully integrated three-statement projection model (Income Statement, Balance Sheet, Cash Flow Statement) from historical data.
- Construct supporting schedules for debt and interest, ensuring they link correctly to the core financial statements and handle circular references.
- Incorporate scenario and sensitivity analysis functionality to test the model's outputs against changes in key assumptions.

## Key Concepts Outline

### Financial Modeling Best Practices
- **Structure and Layout:** Using a single-worksheet structure with clear separation of inputs, calculations, and outputs is recommended to reduce linking errors and improve navigability.56 Use color-coding (e.g., blue for inputs, black for formulas) to distinguish between assumptions and calculations.
- **Clarity and Simplicity:** Avoid overly complex formulas. Break down calculations into logical steps. The goal is a model that another analyst can easily understand and audit.58
- **Avoiding Hard-Coding:** Inputs and assumptions should be in a dedicated section and linked into the model. Never type a number directly into a formula.

### Building the Three-Statement Model
1.  **Input Historical Data:** Populate the model with at least three years of historical data from the company's financial statements.56
2.  **Create the Assumptions Section:** Calculate historical ratios and growth rates (e.g., revenue growth, margins, working capital days) to inform forecast assumptions.56 This section will drive the entire forecast.
3.  **Project the Income Statement:** Forecast revenue based on growth assumptions. Project expenses based on margin assumptions (e.g., COGS as a % of revenue) down to Earnings Before Interest and Taxes (EBIT).56 Interest and taxes will be calculated later.
4.  **Project the Balance Sheet (Non-Debt/Cash Items):**
    - Forecast Property, Plant & Equipment (PP&E) using a roll-forward schedule: Beginning PP&E + CapEx − Depreciation = Ending PP&E.56
    - Forecast working capital accounts (AR, Inventory, AP) based on assumptions like Days Sales Outstanding (DSO), Days Inventory Held (DIH), and Days Payable Outstanding (DPO).59
    - Forecast other assets and liabilities based on historical relationships or specific guidance.
5.  **Build the Debt and Interest Schedule:**
    - Create a "corkscrew" schedule that links beginning and ending debt balances.57
    - Beginning Debt + New Borrowings − Repayments = Ending Debt.
    - Calculate interest expense based on the average or beginning debt balance and the assumed interest rate.56 This creates a circular reference, as interest expense affects net income, which affects cash flow available for debt repayment, which in turn affects the debt balance.
    - **Handling Circularity:** Use Excel's iterative calculation setting or a "circularity breaker" switch to manage this.57
6.  **Complete the Cash Flow Statement:**
    - Start with Net Income (from the projected Income Statement).
    - Add back non-cash charges like Depreciation & Amortization.
    - Incorporate changes in working capital accounts from the Balance Sheet forecast.
    - Subtract Capital Expenditures (CapEx).
    - Incorporate debt borrowings and repayments from the debt schedule.
7.  **Link Cash to the Balance Sheet:** The ending cash balance from the Cash Flow Statement becomes the cash balance on the ending Balance Sheet. The final check is to ensure the Balance Sheet balances (Assets = Liabilities + Equity) for all forecast years.58

### Scenario and Sensitivity Analysis
- **Sensitivity Analysis:** Analyzes the impact of changing a single input variable (e.g., revenue growth rate) on a key output (e.g., Net Income or Ending Cash). This helps identify the model's most critical drivers.61 Often displayed using a data table.
- **Scenario Analysis:** Involves changing multiple input variables simultaneously to model different potential futures, such as a "Base Case," "Upside Case," and "Downside Case".61 This is crucial for stress-testing a company's ability to service debt in a recessionary environment.

### Practical Application/Case Study Idea

Building on the "StableCo" vs. "GrowthCo" case from Module 1.3, trainees will use the provided historical financial statements for StableCo to build a five-year, three-statement projection model in Excel. The exercise will require them to create an assumptions tab, project all three statements, build a simple debt and interest schedule, and ensure the balance sheet balances.

### Assessment Method

Submission of the completed Excel model. The model will be reviewed for:
- Correctness: Do all formulas calculate correctly?
- Linkages: Are the three statements properly integrated?
- Best Practices: Is the model well-structured, clearly formatted, and easy to follow?
- Balancing: Does the balance sheet balance in all forecast years?
