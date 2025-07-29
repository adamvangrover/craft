const navData = [
  {
    text: "Home",
    href: "home.html",
    type: "html",
  },
  // Main Hubs
  {
    text: "Main Hubs",
    type: "category",
    children: [
      {
        text: "Getting Started",
        href: "Getting_Started.html",
        type: "html"
      },
      {
        text: "Learning Paths",
        href: "Learning_Paths/index.html",
        type: "section_viewer"
      },
      {
        text: "Interactive Notebooks",
        href: "Interactive_Notebooks/index.html",
        type: "html_hub"
      },
      {
        text: "Glossary",
        href: "view_glossary.html",
        type: "html"
      },
      {
        text: "Presentation",
        href: "presentation.html",
        type: "html"
      },
      {
        text: "Contributing",
        href: "CONTRIBUTING.md",
        type: "markdown_viewer",
        viewer: "global"
      },
      {
        text: "Roadmap",
        href: "ROADMAP.md",
        type: "markdown_viewer",
        viewer: "global"
      }
    ]
  },
  // Modules
  {
    text: "Modules",
    type: "category",
    children: [
      {
        text: "Accounting",
        type: "category",
        children: [
          { text: "Accounting", href: "modules/Accounting/index.html", type: "html_hub" },
          { text: "Core Concepts Interrelationships", href: "modules/Accounting/Core_Concepts_Interrelationships.md", type: "markdown_viewer", viewer: "global" },
          { text: "Three Statements", href: "modules/Accounting/three_statements.md", type: "markdown_viewer", viewer: "global" },
          { text: "Balance Sheet", href: "modules/Accounting/balance_sheet.md", type: "markdown_viewer", viewer: "global" },
          { text: "Income Statement", href: "modules/Accounting/income_statement.md", type: "markdown_viewer", viewer: "global" },
          { text: "Cash Flow Statement", href: "modules/Accounting/cash_flow_statement.md", type: "markdown_viewer", viewer: "global" },
          { text: "Working Capital", href: "modules/Accounting/working_capital.md", type: "markdown_viewer", viewer: "global" },
          { text: "EBITDA Reconciliation", href: "modules/Accounting/ebitda_reconciliation.md", type: "markdown_viewer", viewer: "global" },
          { text: "Deferred Revenue Case Study", href: "modules/Accounting/Case_Studies/deferred_revenue_case_study.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Credit Analysis",
        type: "category",
        children: [
          { text: "Credit Analysis", href: "modules/Credit_Analysis/index.html", type: "html_hub" },
          { text: "M1: Foundations", href: "modules/Credit_Analysis/modules/01-foundations/index.html", type: "craft_module_viewer" },
          { text: "M2: The Market", href: "modules/Credit_Analysis/modules/02-understanding-the-market/index.html", type: "craft_module_viewer" },
          { text: "M3: Analyst's Craft", href: "modules/Credit_Analysis/modules/03-the-analysts-craft/index.html", type: "craft_module_viewer" },
          { text: "M4: Credit Lifecycle", href: "modules/Credit_Analysis/modules/04-the-credit-lifecycle/index.html", type: "craft_module_viewer" },
          { text: "M5: Future of Risk", href: "modules/Credit_Analysis/modules/05-future-of-risk-management/index.html", type: "craft_module_viewer" },
          { text: "M6: Advanced Topics", href: "modules/Credit_Analysis/modules/06-advanced-topics/index.html", type: "craft_module_viewer" },
        ]
      },
      {
        text: "Primers",
        href: "modules/primers/index.html",
        type: "section_viewer"
      },
      {
        text: "Loan & Capital Market Terms",
        href: "modules/Loan_and_Capital_Market_Terms/index.html",
        type: "section_viewer"
      },
      {
        text: "Critical Thinking",
        type: "category",
        children: [
            { text: "Critical Thinking", href: "modules/Critical_Thinking/index.html", type: "html_hub" },
            { text: "Forming a Narrative", href: "modules/Critical_Thinking/forming_a_narrative.html", type: "html" },
            { text: "Critical Thinking", href: "modules/Critical_Thinking/critical_thinking.html", type: "html" },
        ]
      },
    ]
  },
  // Core Financial Topics
  {
    text: "Core Financial Topics",
    type: "category",
    children: [
      {
        text: "Financial Modeling",
        type: "category",
        children: [
            { text: "Modeling", href: "Financial_Modeling/index.html", type: "html_hub" },
            { text: "Best Practices", href: "Financial_Modeling/Best_Practices/FM_Best_Practices.md", type: "markdown_viewer", viewer: "global" },
            { text: "Forecasting Techniques", href: "Financial_Modeling/Forecasting_Techniques/Revenue_Forecasting_Approaches.md", type: "markdown_viewer", viewer: "global" },
            { text: "LBO Modeling Deep Dive", href: "Financial_Modeling/Advanced_Topics/LBO_Modeling_Deep_Dive.md", type: "markdown_viewer", viewer: "global" },
            { text: "DCF Overview", href: "Financial_Modeling/Valuation_Applications/DCF_Modeling_Overview.md", type: "markdown_viewer", viewer: "global" },
            { text: "Excel Tips", href: "Financial_Modeling/Excel_Tips/01_XLOOKUP_Guide.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Risk Management",
        type: "category",
        children: [
          { text: "Risk Management", href: "Risk_Management/index.html", type: "html_hub" },
          { text: "Introduction to Risk", href: "Risk_Management/01_Introduction_to_Risk_Management.md", type: "markdown_viewer", viewer: "global" },
          { text: "Credit Risk Fundamentals", href: "Risk_Management/Credit_Risk/CRM_01_Fundamentals_of_Credit_Risk.md", type: "markdown_viewer", viewer: "global" },
          { text: "Market Risk Introduction", href: "Risk_Management/Market_Risk/MRM_01_Introduction_to_Market_Risk.md", type: "markdown_viewer", viewer: "global" },
          { text: "Liquidity Risk Introduction", href: "Risk_Management/Liquidity_Risk/LRM_01_Introduction_to_Liquidity_Risk.md", type: "markdown_viewer", viewer: "global" },
          { text: "Operational Risk Introduction", href: "Risk_Management/Operational_Risk/ORM_01_Introduction_to_Operational_Risk.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Behavioral Finance",
        type: "category",
        children: [
            { text: "Behavioral Finance", href: "Behavioral_Finance/index.html", type: "section_viewer" },
            { text: "Key Concepts", href: "Behavioral_Finance/Key_Concepts.md", type: "markdown_viewer", viewer: "global" },
            { text: "Debiasing Techniques", href: "Behavioral_Finance/Debiasing_Techniques_for_Analysts.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Legal Analysis",
        type: "category",
        children: [
            { text: "Legal Analysis", href: "legal_analysis/index.html", type: "section_viewer" },
            { text: "Guide to Reading Credit Agreements", href: "legal_analysis/how_to_read_legal_documents/guide_to_reading_credit_agreements.md", type: "markdown_viewer", viewer: "global" },
            { text: "Types of Covenants", href: "legal_analysis/covenant_compliance_and_reporting/types_of_covenants.md", type: "markdown_viewer", viewer: "global" },
            { text: "LME Overview", href: "legal_analysis/miscellaneous_credit_analysis_topics/lme_strategies_and_case_studies/lme_overview.md", type: "markdown_viewer", viewer: "global" },
            { text: "J. Crew Case Study", href: "legal_analysis/miscellaneous_credit_analysis_topics/lme_strategies_and_case_studies/j_crew_case_study.md", type: "markdown_viewer", viewer: "global" },
        ]
      }
    ],
  },
  // Career & Exams
  {
    text: "Career & Exams",
    type: "category",
    children: [
      {
        text: "CFA Program",
        type: "category",
        children: [
          { text: "CFA", href: "CFA/index.html", type: "html_hub" },
          {
            text: "Level I",
            type: "category",
            children: [
              { text: "Ethics & Professional Standards", href: "CFA/Level_1/Topic_Deep_Dives/Ethics_Professional_Standards.md", type: "markdown_viewer", viewer: "global" },
              { text: "Quantitative Methods", href: "CFA/Level_1/Topic_Deep_Dives/Quant_Time_Value_of_Money.md", type: "markdown_viewer", viewer: "global" },
              { text: "FSA Deep Dive", href: "CFA/Level_1/Topic_Deep_Dives/Understanding_Financial_Statement_Analysis.md", type: "markdown_viewer", viewer: "global" },
              { text: "Cheat Sheet: Quant Methods", href: "CFA/Level_1/Cheat_Sheets/CS_02_Quantitative_Methods.md", type: "markdown_viewer", viewer: "global" },
              { text: "Practice Exam 1", href: "CFA/Level_1/Practice_Exams/Practice_Exam_1_Questions.md", type: "markdown_viewer", viewer: "global" },
            ]
          },
          {
            text: "Level II",
            type: "category",
            children: [
              { text: "Equity Valuation Models", href: "CFA/Level_2/Topic_Deep_Dives/L2_Advanced_Equity_Valuation_Models.md", type: "markdown_viewer", viewer: "global" },
              { text: "Fixed Income - Credit Risk", href: "CFA/Level_2/Topic_Deep_Dives/L2_Fixed_Income_Analysis_Credit_Risk.md", type: "markdown_viewer", viewer: "global" },
              { text: "Cheat Sheet: Equity Valuation", href: "CFA/Level_2/Cheat_Sheets/L2_CS_Equity_Valuation.md", type: "markdown_viewer", viewer: "global" },
            ]
          },
          {
            text: "Level III",
            type: "category",
            children: [
                { text: "IPS Construction", href: "CFA/Level_3/Topic_Deep_Dives/L3_DD_IPS_Construction_Private_Wealth.md", type: "markdown_viewer", viewer: "global" },
                { text: "Behavioral Finance in PM", href: "CFA/Level_3/Topic_Deep_Dives/L3_Behavioral_Finance_in_Portfolio_Management.md", type: "markdown_viewer", viewer: "global" },
                { text: "Cheat Sheet: Asset Allocation", href: "CFA/Level_3/Cheat_Sheets/L3_CS_Asset_Allocation.md", type: "markdown_viewer", viewer: "global" },
            ]
          }
        ]
      },
      {
        text: "Professional Development",
        type: "category",
        children: [
            { text: "Professional Development", href: "Professional_Development/index.html", type: "section_viewer" },
            { text: "Critical Thinking", href: "Professional_Development/Critical_Thinking_in_Financial_Analysis.md", type: "markdown_viewer", viewer: "global" },
            { text: "Effective Communication", href: "Professional_Development/Effective_Communication_for_Analysts.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Toolkits & Checklists",
        type: "category",
        children: [
            { text: "Toolkits", href: "Toolkits_and_Checklists/index.html", type: "html_hub" },
            { text: "Credit Analysis Checklist", href: "Toolkits_and_Checklists/credit_analysis_checklist.html", type: "html" },
            { text: "Financial Model Review Checklist", href: "Toolkits_and_Checklists/financial_model_review_checklist.html", type: "html" },
            { text: "Debiasing Checklist", href: "Toolkits_and_Checklists/debiasing_checklist.html", type: "html" },
        ]
      }
    ]
  },
  // AI, Tech & More
  {
    text: "AI, Tech & More",
    type: "category",
    children: [
      {
        text: "AI & Coding",
        type: "category",
        children: [
          { text: "AI & Coding", href: "AI_and_Coding/index.html", type: "html_hub" },
          { text: "Prompt Libraries", href: "AI_and_Coding/Prompt_Libraries/index.html", type: "section_viewer" },
          { text: "Agent Libraries", href: "AI_and_Coding/Agent_Libraries/index.html", type: "section_viewer" }
        ]
      },
      {
        text: "Fintech",
        type: "category",
        children: [
            { text: "Fintech", href: "Fintech/index.html", type: "html_hub" },
            { text: "AI in Finance", href: "Fintech/AI_in_Finance.md", type: "markdown_viewer", viewer: "global" },
            { text: "Blockchain in Finance", href: "Fintech/Blockchain_in_Finance.md", type: "markdown_viewer", viewer: "global" },
            { text: "Open Banking & APIs", href: "Fintech/Open_Banking_and_APIs.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Data Science",
        href: "Data_Science/index.html",
        type: "html_hub"
      },
      {
        text: "Financial Analysis Toolkit (FACT)",
        type: "category",
        children: [
            { text: "FACT", href: "fact/index.html", type: "html_hub" },
            { text: "Financial Ratios Analysis", href: "fact/fra/index.html", type: "html_hub" },
            { text: "Probability of Default", href: "fact/pd/index.html", type: "html_hub" },
            { text: "Regulatory Ratings", href: "fact/rr/index.html", type: "html_hub" },
        ]
      },
       {
        text: "Special Projects",
        type: "category",
        children: [
            { text: "Copilot Quest Game", href: "copilot-quest/index.html", type: "html" },
            { text: "Copilot Quest Game (Src)", href: "copilot-quest-game/README.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Presentations",
        type: "category",
        children: [
            { text: "Three Financial Statements", href: "modules/presentations/three_financial_statements.md", type: "markdown_viewer", viewer: "global" },
            { text: "Corporate Credit Rating Fundamentals", href: "modules/presentations/corporate_credit_rating_fundamentals.md", type: "markdown_viewer", viewer: "global" },
        ]
      }
    ]
  },
];
