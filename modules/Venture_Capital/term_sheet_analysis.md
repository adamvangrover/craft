# VC Term Sheets: Structural Protections

> **Buy-Side Perspective:**
> The Term Sheet dictates the economic and control rights. For an analyst, understanding "Liquidation Preferences" and "Anti-Dilution" is critical to modeling the "Exit Waterfall" \u2013 determining who gets paid what in a sale.

## 1. Liquidation Preference

This clause determines the payout order in a liquidity event (Sale/IPO).

*   **1x Non-Participating:** Preferred investors get their money back (1x) OR convert to common and share pro-rata. (Standard/Founder Friendly).
*   **1x Participating:** Preferred investors get their money back (1x) AND then share pro-rata with common in the remaining proceeds. (Investor Friendly - "Double Dipping").
*   **Seniority:** Later rounds (Series B) usually have seniority over earlier rounds (Series A).

## 2. Anti-Dilution Provisions

Protects investors if the company raises money later at a lower price ("Down Round").

*   **Full Ratchet:** The conversion price is lowered to the new (lower) price. Extremely punitive to founders.
*   **Weighted Average (Broad-Based):** The conversion price is adjusted based on a formula considering the *amount* of money raised at the lower price. (Market Standard).

## 3. Dividends

*   **Non-Cumulative:** Dividends are declared by the board (rarely happens).
*   **Cumulative:** Dividends accrue (e.g., 8%) and must be paid upon liquidation. Acts like compound interest, increasing the liquidation preference over time.

## 4. Control Rights

*   **Board Seats:** Investors often demand a board seat.
*   **Protective Provisions (Veto Rights):** Investors can veto key decisions like selling the company, issuing more debt, or changing the business line.
*   **Drag-Along Rights:** If majority investors want to sell, they can force minority shareholders to sell too.

## 5. Modeling the Cap Table

To build a Cap Table:
1.  **Input:** Pre-Money Valuation, Option Pool Size, Investment Amount.
2.  **Calculate:** Price Per Share (PPS).
3.  **Iterate:** Calculate share counts for Founders, Seed, Series A.
4.  **Waterfall:** Upon exit, apply Liquidation Preferences first, then convert to common if beneficial.

> **Pro Tip:** Always check for "Pay-to-Play" provisions. Investors who don't participate in future rounds might lose their preferred status and convert to common, losing their liquidation preference.
