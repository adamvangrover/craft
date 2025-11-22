The Credit Lifecycle TimelineVisualizing the typical duration of a syndicated loan deal from inception to maturity.Deal Timeline (Gantt Chart)This chart assumes a standard 6-8 week execution process for a new Leveraged Loan.gantt
    title Syndicated Loan Deal Lifecycle
    dateFormat  YYYY-MM-DD
    section Origination
    Pitch & Mandate       :a1, 2024-01-01, 14d
    Term Sheet Negotiation :a2, after a1, 7d
    section Underwriting
    Due Diligence         :b1, after a2, 14d
    Credit Committee      :crit, b2, after b1, 2d
    section Syndication
    Bank Meeting (Launch) :c1, after b2, 1d
    Commitment Period     :c2, after c1, 14d
    Allocation & Pricing  :c3, after c2, 3d
    section Closing
    Legal Documentation   :d1, after b2, 21d
    Funding Day           :d2, after c3, 1d
    section Monitoring
    Quarterly Reporting   :active, e1, after d2, 90d
    Annual Review         :e2, after d2, 365d
Key Milestones:Mandate: The bank is officially hired.Bank Meeting: The deal is launched to the public market (institutional investors).Commitment Deadline: Investors must submit their orders.Funding: Money changes hands.

Visualizing Credit Risk ProcessesComplex credit processes are often best understood visually. Below are diagrams illustrating the flow of payments in a default scenario and the standard credit approval lifecycle.1. The Waterfall of Payments (Enforcement Priority)This diagram illustrates who gets paid first when a company liquidates. Understanding this hierarchy is critical for determining Loss Given Default (LGD).graph TD
    A[Liquidation Event / Bankruptcy] --> B{Available Assets Sold};
    B --> C[Super-Senior Claims];
    C -->|Admin Expenses, Taxes, DIP Financing| D[Secured Senior Debt];
    D -->|1st Lien Term Loans, Revolvers| E[Junior / Second Lien Debt];
    E -->|2nd Lien Notes| F[Unsecured Senior Debt];
    F -->|Bonds, Trade Payables| G[Subordinated Debt];
    G -->|Mezzanine| H[Equity Holders];
    H -->|Preferred Stock| I[Common Stock];
    
    style D fill:#d1fae5,stroke:#065f46,stroke-width:2px
    style F fill:#fee2e2,stroke:#991b1b,stroke-width:2px
    style I fill:#f3f4f6,stroke:#374151,stroke-width:1px,stroke-dasharray: 5 5
2. The Credit Approval ProcessHow a deal moves from a handshake to a funded loan within a bank or fund.graph LR
    A[Origination] -->|Term Sheet Signed| B[Credit Screening];
    B -->|Green Light| C[Underwriting & Due Diligence];
    C -->|Financial Modeling & Memos| D[Credit Committee];
    D -->|Approve| E[Documentation & Legal];
    D -->|Decline| F[Deal Dead];
    D -->|Approve w/ Conditions| C;
    E --> G[Funding / Closing];
    G --> H[Portfolio Monitoring];

    style D fill:#e0e7ff,stroke:#3730a3,stroke-width:4px
