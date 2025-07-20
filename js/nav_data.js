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
        text: "Getting Started Guide",
        href: "Getting_Started.html",
        type: "html"
      },
      {
        text: "All Learning Paths",
        href: "Learning_Paths/index.html",
        type: "section_viewer"
      },
      {
        text: "Interactive Notebooks Hub",
        href: "Interactive_Notebooks/index.html",
        type: "html_hub"
      },
      {
        text: "Interactive Glossary",
        href: "view_glossary.html",
        type: "html"
      },
      {
        text: "Site Presentation",
        href: "presentation.html",
        type: "html"
      }
    ]
  },
  // Core Financial Topics
  {
    text: "Core Financial Topics",
    type: "category",
    children: [
      {
        text: "Accounting",
        type: "category",
        children: [
          { text: "Accounting Hub", href: "Accounting/index.html", type: "html_hub" },
          { text: "Core Concepts Interrelationships", href: "Accounting/Core_Concepts_Interrelationships.md", type: "markdown_viewer", viewer: "global" },
          { text: "Three Statements", href: "Accounting/three_statements.md", type: "markdown_viewer", viewer: "global" },
          { text: "Balance Sheet", href: "Accounting/balance_sheet.md", type: "markdown_viewer", viewer: "global" },
          { text: "Income Statement", href: "Accounting/income_statement.md", type: "markdown_viewer", viewer: "global" },
          { text: "Cash Flow Statement", href: "Accounting/cash_flow_statement.md", type: "markdown_viewer", viewer: "global" },
          { text: "Working Capital", href: "Accounting/working_capital.md", type: "markdown_viewer", viewer: "global" },
          { text: "EBITDA Reconciliation", href: "Accounting/ebitda_reconciliation.md", type: "markdown_viewer", viewer: "global" },
          { text: "Deferred Revenue Case Study", href: "Accounting/Case_Studies/deferred_revenue_case_study.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Financial Modeling",
        type: "category",
        children: [
            { text: "Modeling Hub", href: "Financial_Modeling/index.html", type: "html_hub" },
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
          { text: "Risk Management Hub", href: "Risk_Management/index.html", type: "html_hub" },
          { text: "Introduction to Risk", href: "Risk_Management/01_Introduction_to_Risk_Management.md", type: "markdown_viewer", viewer: "global" },
          { text: "Credit Risk Fundamentals", href: "Risk_Management/Credit_Risk/CRM_01_Fundamentals_of_Credit_Risk.md", type: "markdown_viewer", viewer: "global" },
          { text: "Market Risk Introduction", href: "Risk_Management/Market_Risk/MRM_01_Introduction_to_Market_Risk.md", type: "markdown_viewer", viewer: "global" },
          { text: "Liquidity Risk Introduction", href: "Risk_Management/Liquidity_Risk/LRM_01_Introduction_to_Liquidity_Risk.md", type: "markdown_viewer", viewer: "global" },
          { text: "Operational Risk Introduction", href: "Risk_Management/Operational_Risk/ORM_01_Introduction_to_Operational_Risk.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Industry Primers",
        href: "primers/index.html",
        type: "section_viewer"
      },
       {
        text: "Market Analysis Quick Start",
        href: "Market_Analysis_Quick_Start/index.html",
        type: "section_viewer"
      },
      {
        text: "Behavioral Finance",
        type: "category",
        children: [
            { text: "Behavioral Finance Hub", href: "Behavioral_Finance/index.html", type: "section_viewer" },
            { text: "Key Concepts", href: "Behavioral_Finance/Key_Concepts.md", type: "markdown_viewer", viewer: "global" },
            { text: "Debiasing Techniques", href: "Behavioral_Finance/Debiasing_Techniques_for_Analysts.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Legal Analysis",
        type: "category",
        children: [
            { text: "Legal Analysis Hub", href: "legal_analysis/index.html", type: "section_viewer" },
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
          { text: "CFA Hub", href: "CFA/index.html", type: "html_hub" },
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
        text: "Credit Risk Analyst (CRAFT)",
        type: "category",
        children: [
          { text: "CRAFT Hub", href: "corporate-credit-risk-analyst-training/index.html", type: "html_hub" },
          { text: "M1: Foundations", href: "corporate-credit-risk-analyst-training/modules/01-foundations/index.html", type: "craft_module_viewer" },
          { text: "M2: The Market", href: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/index.html", type: "craft_module_viewer" },
          { text: "M3: Analyst's Craft", href: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/index.html", type: "craft_module_viewer" },
          { text: "M4: Credit Lifecycle", href: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/index.html", type: "craft_module_viewer" },
          { text: "M5: Future of Risk", href: "corporate-credit-risk-analyst-training/modules/05-future-of-risk-management/index.html", type: "craft_module_viewer" },
          { text: "M6: Advanced Topics", href: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/index.html", type: "craft_module_viewer" },
        ]
      },
      {
        text: "Professional Development",
        type: "category",
        children: [
            { text: "PD Hub", href: "Professional_Development/index.html", type: "section_viewer" },
            { text: "Critical Thinking", href: "Professional_Development/Critical_Thinking_in_Financial_Analysis.md", type: "markdown_viewer", viewer: "global" },
            { text: "Effective Communication", href: "Professional_Development/Effective_Communication_for_Analysts.md", type: "markdown_viewer", viewer: "global" },
        ]
      },
      {
        text: "Toolkits & Checklists",
        type: "category",
        children: [
            { text: "Toolkits Hub", href: "Toolkits_and_Checklists/index.html", type: "html_hub" },
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
          { text: "AI & Coding Hub", href: "AI_and_Coding/index.html", type: "html_hub" },
          { text: "Prompt Libraries", href: "AI_and_Coding/Prompt_Libraries/index.html", type: "section_viewer" },
          { text: "Agent Libraries", href: "AI_and_Coding/Agent_Libraries/index.html", type: "section_viewer" }
        ]
      },
      {
        text: "Fintech",
        type: "category",
        children: [
            { text: "Fintech Hub", href: "Fintech/index.html", type: "html_hub" },
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
        text: "Analytical Storytelling (So What?)",
        type: "category",
        children: [
            { text: "So What? Hub", href: "so_what/index.html", type: "html_hub" },
            { text: "Forming a Narrative", href: "so_what/forming_a_narrative.html", type: "html" },
            { text: "Critical Thinking", href: "so_what/critical_thinking.html", type: "html" },
        ]
      },
      {
        text: "Financial Analysis Toolkit (FACT)",
        type: "category",
        children: [
            { text: "FACT Hub", href: "fact/index.html", type: "html_hub" },
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
      }
    ]
  },
];
