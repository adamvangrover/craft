# Walkthrough: Basic 3-Statement Linkages Example

**Objective:** This walkthrough provides simple, step-by-step examples of how common business transactions flow through and impact the three core financial statements: the Income Statement (IS), Balance Sheet (BS), and Cash Flow Statement (CFS). Understanding these mechanical linkages is fundamental.

**Assumptions for Simplicity:**
*   No income taxes for these isolated examples.
*   We start with a very simplified "Before Transaction" financial state.
*   Each transaction is analyzed in isolation.

## Initial State (Before Any Transactions)

Let's assume a brand new company, "LinkCo," starts with the following:

**Balance Sheet (Beginning)**
| Assets              | Amount | Liabilities & Equity | Amount |
| ------------------- | ------ | -------------------- | ------ |
| Cash                | $10,000| Accounts Payable     | $0     |
| Accounts Receivable | $0     | Debt                 | $0     |
| Inventory           | $0     |                      |        |
| PP&E                | $0     | Common Stock         | $10,000|
| **Total Assets**    | **$10,000**| Retained Earnings    | $0     |
|                     |        | **Total L & E**    | **$10,000**|

**Income Statement & Cash Flow Statement (Beginning - all $0 for the period)**

---

## Transaction 1: Owner Invests More Cash

**Transaction:** The owner invests an additional $5,000 cash into LinkCo.

**Analysis:**
*   **Income Statement Impact:** None. This is an equity transaction, not an operational revenue or expense.
*   **Cash Flow Statement Impact:**
    *   Cash Flow from Financing (CFF): +$5,000 (Cash inflow from equity issuance).
    *   Net Change in Cash: +$5,000.
*   **Balance Sheet Impact:**
    *   Cash (Asset) increases by $5,000.
    *   Common Stock (Equity) increases by $5,000.

**Financial Statements (After Transaction 1)**

**Income Statement (Period)**
| Item         | Amount |
| ------------ | ------ |
| Net Income   | $0     |

**Cash Flow Statement (Period)**
| Item                       | Amount   |
| -------------------------- | -------- |
| Net Income                 | $0       |
| Adjustments                | $0       |
| Cash Flow from Operations  | $0       |
| Cash Flow from Investing   | $0       |
| Cash Flow from Financing:  |          |
|  Proceeds from Stock       | $5,000   |
| Net Cash from Financing    | $5,000   |
| **Net Change in Cash**     | **$5,000**   |
| Beginning Cash             | $10,000  |
| **Ending Cash**            | **$15,000**  |

**Balance Sheet (End of Period)**
| Assets              | Amount | Liabilities & Equity | Amount |
| ------------------- | ------ | -------------------- | ------ |
| Cash                | $15,000| Accounts Payable     | $0     |
| Accounts Receivable | $0     | Debt                 | $0     |
| Inventory           | $0     |                      |        |
| PP&E                | $0     | Common Stock         | $15,000|
| **Total Assets**    | **$15,000**| Retained Earnings    | $0     |
|                     |        | **Total L & E**    | **$15,000**|
*Balance Sheet Balances!*

---

## Transaction 2: Purchase Inventory on Credit

**Transaction:** LinkCo purchases $3,000 of inventory from a supplier on credit (payment due in 30 days).

**Analysis:**
*   **Income Statement Impact:** None yet. The expense (COGS) is recognized when the inventory is *sold*.
*   **Cash Flow Statement Impact:** None yet. Cash hasn't changed hands.
    *   (Note: If using indirect method for CFO, an increase in Inventory is a use of cash, and an increase in Accounts Payable is a source of cash. These would offset if they were the *only* items, but here we focus on direct cash impact first.)
*   **Balance Sheet Impact:**
    *   Inventory (Asset) increases by $3,000.
    *   Accounts Payable (Liability) increases by $3,000.

**Financial Statements (After Transaction 2, assuming T1 already happened)**

**Income Statement (Period)**
| Item         | Amount |
| ------------ | ------ |
| Net Income   | $0     |

**Cash Flow Statement (Period - reflecting only T2 impact for clarity, T1 impact already in Beginning Cash for T2)**
| Item                       | Amount   |
| -------------------------- | -------- |
| Net Income                 | $0       |
| Adjustments:               |          |
|  Increase in Inventory     | ($3,000) (Non-cash for this isolated view, but reflects asset build) |
|  Increase in Accts Payable | $3,000   (Non-cash for this isolated view, but reflects liability build) |
| Cash Flow from Operations  | $0       |
| ...                        |          |
| **Net Change in Cash**     | **$0**   |
| Beginning Cash (after T1)  | $15,000  |
| **Ending Cash**            | **$15,000**  |

**Balance Sheet (End of Period)**
| Assets              | Amount | Liabilities & Equity | Amount |
| ------------------- | ------ | -------------------- | ------ |
| Cash                | $15,000| Accounts Payable     | $3,000 |
| Accounts Receivable | $0     | Debt                 | $0     |
| Inventory           | $3,000 |                      |        |
| PP&E                | $0     | Common Stock         | $15,000|
| **Total Assets**    | **$18,000**| Retained Earnings    | $0     |
|                     |        | **Total L & E**    | **$18,000**|
*Balance Sheet Balances!*

---

## Transaction 3: Sell Inventory on Credit

**Transaction:** LinkCo sells $2,000 of inventory (which cost $1,200) to a customer on credit.

**Analysis:**
*   **Income Statement Impact:**
    *   Revenue: +$2,000
    *   Cost of Goods Sold (COGS): -$1,200
    *   Gross Profit: +$800
    *   Net Income: +$800 (assuming no other expenses)
*   **Cash Flow Statement Impact (Indirect Method):**
    *   Start with Net Income: +$800
    *   Adjustments:
        *   Increase in Accounts Receivable: -$2,000 (use of cash, as revenue recognized but not collected)
        *   Decrease in Inventory: +$1,200 (source of cash, as inventory sold is converted from asset)
    *   Net Cash from Operations: $800 - $2,000 + $1,200 = $0
*   **Balance Sheet Impact:**
    *   Accounts Receivable (Asset) increases by $2,000.
    *   Inventory (Asset) decreases by $1,200.
    *   Retained Earnings (Equity) increases by $800 (due to Net Income).

**Financial Statements (After Transaction 3, building on T1 & T2)**

**Income Statement (Period)**
| Item         | Amount |
| ------------ | ------ |
| Revenue      | $2,000 |
| COGS         | ($1,200)|
| Net Income   | $800   |

**Cash Flow Statement (Period - reflecting cumulative impact for T1, T2, T3 for CFO)**
| Item                       | Amount   |
| -------------------------- | -------- |
| Net Income                 | $800     |
| Adjustments:               |          |
|  Increase in Accts Rec.    | ($2,000) |
|  Decrease in Inventory     | $1,200   | (Inventory went from $0 to $3000, then down by $1200, net increase $1800 so far. This is simplified for transaction impact)
|  (Prior Incr. Inventory)   | ($1,800) | *(To adjust for full period change if we started from $0 inventory)* This part gets complex without full period view. Let's simplify to **transactional impact on CFO**: NI $800 - Inc A/R $2000 + Dec Inv $1200 = $0 cash impact *from this transaction's accruals*.
| Prior Incr. Accts Payable  | $3,000   |
| Cash Flow from Operations  | $800 - $2000 + $1200 = $0 *from this specific sale transaction's non-cash elements.*
| (Net CFO for period from T1, T2, T3 if T2 was cash neutral on CFO: $0 from T2 ops, $0 from T3 ops) = $0 for ops.
| Cash Flow from Financing:  |          |
|  Proceeds from Stock (T1)  | $5,000   |
| Net Cash from Financing    | $5,000   |
| **Net Change in Cash**     | **$5,000** |
| Beginning Cash (absolute)  | $10,000  |
| **Ending Cash**            | **$15,000**|

**Balance Sheet (End of Period)**
| Assets              | Amount | Liabilities & Equity | Amount |
| ------------------- | ------ | -------------------- | ------ |
| Cash                | $15,000| Accounts Payable     | $3,000 |
| Accounts Receivable | $2,000 | Debt                 | $0     |
| Inventory           | $1,800 | ($3,000 - $1,200)    |        |
| PP&E                | $0     | Common Stock         | $15,000|
| **Total Assets**    | **$18,800**| Retained Earnings    | $800   |
|                     |        | **Total L & E**    | **$18,800**|
*Balance Sheet Balances!*

---

## Transaction 4: Collect Cash from Customer

**Transaction:** LinkCo collects $1,000 cash from the customer for the previous credit sale.

**Analysis:**
*   **Income Statement Impact:** None. Revenue was already recognized when the sale was made.
*   **Cash Flow Statement Impact:**
    *   Cash Flow from Operations: +$1,000 (Cash inflow from collecting receivables).
    *   (Indirect method: Net Income no change, Decrease in A/R is an add-back of $1,000).
*   **Balance Sheet Impact:**
    *   Cash (Asset) increases by $1,000.
    *   Accounts Receivable (Asset) decreases by $1,000.

**Financial Statements (After Transaction 4)**

**Income Statement (Period - no change from T3)**
| Item         | Amount |
| ------------ | ------ |
| Revenue      | $2,000 |
| COGS         | ($1,200)|
| Net Income   | $800   |

**Cash Flow Statement (Period - cumulative)**
| Item                       | Amount   |
| -------------------------- | -------- |
| Net Income                 | $800     |
| Adjustments:               |          |
|  Change in Accts Rec.      | ($1,000) | (Was +$2000, now +$1000 net for period)
|  Change in Inventory       | $1,200   | (Net decrease from sale, after initial purchase)
|  Change in Accts Payable   | $3,000   |
| Cash Flow from Operations  | $800 - $1000 + $1200 + $3000 = $4,000 (This is becoming complex without full IS/BS changes from prior. Simpler: Net collection is +$1000 to CFO).
| For simplicity, let's show the *change* in cash from T4 alone: +$1000 in CFO.
| Net Cash from Operations (Period to date, simplified)  | $1,000 (from this collection)
| Net Cash from Financing (T1) | $5,000   |
| **Net Change in Cash (Period)**| **$6,000**   |
| Beginning Cash (absolute)  | $10,000  |
| **Ending Cash**            | **$16,000**|

**Balance Sheet (End of Period)**
| Assets              | Amount | Liabilities & Equity | Amount |
| ------------------- | ------ | -------------------- | ------ |
| Cash                | $16,000| Accounts Payable     | $3,000 |
| Accounts Receivable | $1,000 | ($2,000 - $1,000)    |        |
| Inventory           | $1,800 |                      |        |
| PP&E                | $0     | Common Stock         | $15,000|
| **Total Assets**    | **$18,800**| Retained Earnings    | $800   |
|                     |        | **Total L & E**    | **$18,800**|
*Balance Sheet Balances!*

---

## Transaction 5: Pay Supplier for Inventory

**Transaction:** LinkCo pays $1,500 cash to the supplier for inventory purchased earlier on credit.

**Analysis:**
*   **Income Statement Impact:** None. The expense related to inventory (COGS) is recognized when sold, not when paid for.
*   **Cash Flow Statement Impact:**
    *   Cash Flow from Operations: -$1,500 (Cash outflow for paying A/P).
    *   (Indirect method: Net Income no change, Decrease in A/P is a subtraction of $1,500).
*   **Balance Sheet Impact:**
    *   Cash (Asset) decreases by $1,500.
    *   Accounts Payable (Liability) decreases by $1,500.

**Financial Statements (After Transaction 5)**
*(Ending cash will now be $16,000 - $1,500 = $14,500. Total Assets will decrease by $1,500, and Total Liabilities will decrease by $1,500, keeping it balanced.)*

## Key Takeaways:

*   **Dual Entry:** Every transaction has at least two effects on the balance sheet to keep Assets = Liabilities + Equity.
*   **Accrual vs. Cash:** The Income Statement (accrual) recognizes revenue when earned and expenses when incurred, not necessarily when cash moves. The Cash Flow Statement tracks the actual cash.
*   **Linkages:**
    *   Net Income (IS) links to Retained Earnings (BS) and is the starting point for CFO (CFS).
    *   Changes in Balance Sheet accounts (A/R, Inventory, A/P, PP&E, Debt, Equity) are key components or results of items in the Cash Flow Statement.
    *   Ending Cash on the CFS *must* equal Cash on the Balance Sheet.

This simplified walkthrough illustrates the core mechanics. Real company models involve many more accounts and complexities, but the fundamental principles of how the statements articulate remain the same.
