# Guide: SQL for Financial Analysts

## Why SQL?
Financial data is rarely perfectly formatted in Excel. As an analyst, you often need to pull data from company databases (e.g., transaction logs, customer records) to build your models. SQL (Structured Query Language) is the standard tool for this.

## 1. Basic Retrieval
**Scenario:** You need to pull all revenue transactions for the fiscal year 2023.

```sql
SELECT transaction_id, date, amount, customer_id
FROM revenue_table
WHERE date BETWEEN '2023-01-01' AND '2023-12-31';
```

## 2. Aggregating Data (Revenue by Month)
**Scenario:** You need monthly revenue figures for your Excel model.

```sql
SELECT
    EXTRACT(MONTH FROM date) as month,
    SUM(amount) as total_revenue
FROM revenue_table
WHERE date BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY month
ORDER BY month;
```

## 3. Customer Analysis (Cohort Logic)
**Scenario:** Calculate the total spend of customers who signed up in Q1.

```sql
SELECT
    c.customer_name,
    SUM(t.amount) as total_spend
FROM customers c
JOIN transactions t ON c.customer_id = t.customer_id
WHERE c.signup_date BETWEEN '2023-01-01' AND '2023-03-31'
GROUP BY c.customer_name
ORDER BY total_spend DESC;
```

## 4. Identifying Red Flags (Forensic)
**Scenario:** Find duplicate transactions (potential error or fraud).

```sql
SELECT transaction_id, COUNT(*)
FROM transactions
GROUP BY transaction_id
HAVING COUNT(*) > 1;
```

## Pro Tip for Analysts
Don't try to do *everything* in SQL. Use SQL to extract and aggregate the raw data into a manageable size, then export to Excel/Python for the final modeling and visualization.
