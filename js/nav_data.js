const navData = [
  {
    text: "Home",
    href: "home.html",
    type: "html",
  },
  {
    text: "Learning Hub",
    type: "category",
    children: [
      {
        text: "All Learning Paths",
        href: "Learning_Paths/index.html",
        type: "section_viewer"
      },
      {
        text: "CFA Study Hub",
        href: "CFA/index.html",
        type: "html_hub", // Interactive hub
      },
      {
        text: "Level I Materials",
        href: "CFA/index.html#materials-library", // Link to specific section in hub
        type: "html_hub_section",
      },
      {
        text: "Interactive Notebooks",
        href: "Interactive_Notebooks/index.html",
        type: "html_hub"
      },
      {
        text: "Market Analysis Quick Start",
        href: "Market_Analysis_Quick_Start/index.html",
        type: "section_viewer"
      },
      {
        text: "Interactive Glossary",
        href: "view_glossary.html",
        type: "html"
      },

      { text: "Module 1: Foundations", href: "corporate-credit-risk-analyst-training/modules/01-foundations/index.html", type: "craft_module_viewer" },
      { text: "Module 2: Understanding the Market", href: "corporate-credit-risk-analyst-training/modules/02-understanding-the-market/index.html", type: "craft_module_viewer" },
      { text: "Module 3: The Analyst's Craft", href: "corporate-credit-risk-analyst-training/modules/03-the-analysts-craft/index.html", type: "craft_module_viewer" },
      { text: "Module 4: The Credit Lifecycle", href: "corporate-credit-risk-analyst-training/modules/04-the-credit-lifecycle/index.html", type: "craft_module_viewer" },
      { text: "Module 5: Future of Risk Management", href: "corporate-credit-risk-analyst-training/modules/05-future-of-risk-management/index.html", type: "craft_module_viewer" },
      { text: "Module 6: Advanced Topics", href: "corporate-credit-risk-analyst-training/modules/06-advanced-topics/index.html", type: "craft_module_viewer" },
      { text: "Module 7: Communication Skills", href: "corporate-credit-risk-analyst-training/modules/07-communication-skills/index.html", type: "craft_module_viewer" },
      { text: "Module 8: Specialized Industries", href: "corporate-credit-risk-analyst-training/modules/08-specialized-industries/index.html", type: "craft_module_viewer" },
      { text: "Module 9: Regulatory & Ethics", href: "corporate-credit-risk-analyst-training/modules/09-regulatory-ethics/index.html", type: "craft_module_viewer" },
      { text: "Module 10: Quantitative Skills", href: "corporate-credit-risk-analyst-training/modules/10-quantitative-skills/index.html", type: "craft_module_viewer" },
      { text: "Module 11: Capstone Project", href: "corporate-credit-risk-analyst-training/modules/11-capstone/index.html", type: "craft_module_viewer" }
    ],
  },
  {
    text: "Financial Modeling",
    type: "category",
    children: [
      { text: "Financial Modeling Hub", href: "Financial_Modeling/index.html", type: "html_hub" },
      { text: "Best Practices", href: "Financial_Modeling/Best_Practices/FM_Best_Practices.md", type: "markdown_viewer", viewer: "global" },
      { text: "Excel Tips & Techniques", href: "Financial_Modeling/Excel_Tips/index.html", type: "section_viewer" },
      { text: "Forecasting Techniques", href: "Financial_Modeling/Forecasting_Techniques/Revenue_Forecasting_Approaches.md", type: "markdown_viewer", viewer: "global" },
      { text: "Templates", href: "Financial_Modeling/Templates/Basic_3_Statement_Model_Structure.md", type: "markdown_viewer", viewer: "global" },
      { text: "Valuation Applications", href: "Financial_Modeling/Valuation_Applications/DCF_Modeling_Overview.md", type: "markdown_viewer", viewer: "global" },
      { text: "Advanced: Real Estate Waterfall Models", href: "Financial_Modeling/Advanced_Topics/Real_Estate_Waterfall_Models.md", type: "markdown_viewer", viewer: "global" },
      { text: "Quiz: FM Best Practices", href: "quiz_viewer.html?quiz=Financial_Modeling/Quizzes/FM_Best_Practices_Quiz.md", type: "quiz" }
    ],
  },
  {
    text: "Industry Primers",
    href: "primers/index.html",
    type: "section_viewer",
    children: [
      { text: "Technology", href: "primers/html/technology.html", type: "html"},
      { text: "Healthcare", href: "primers/html/healthcare.html", type: "html"},
      { text: "Aerospace & Defense", href: "primers/html/aerospace_defense.html", type: "html"},
      { text: "Automotive", href: "primers/html/automotive.html", type: "html"},
      { text: "Consumer Products", href: "primers/html/consumer_products.html", type: "html"},
      { text: "Energy Oil & Gas", href: "primers/html/energy_oil_gas.html", type: "html"},
      { text: "Financial Institutions", href: "primers/html/financial_institutions.html", type: "html"},
      { text: "Industrials", href: "primers/html/industrials.html", type: "html"},
      { text: "Media", href: "primers/html/media.html", type: "html"},
      { text: "Real Estate", href: "primers/html/real_estate.html", type: "html"},
      { text: "Telecommunications", href: "primers/html/telecommunications.html", type: "html"},
      { text: "Utilities", href: "primers/html/utilities.html", type: "html"},
      { text: "Corporate Credit Rating Fundamentals", href: "primers/html/corporate_credit_rating_fundamentals.html", type: "html"}
    ]
  },
  {
    text: "Core Financial Topics",
    type: "category",
    children: [
      {
        text: "Financial Modeling",
        href: "Financial_Modeling/index.html",
        type: "html_hub"
      },
      {
        text: "Risk Management",
        href: "Risk_Management/index.html",
        type: "html_hub"
        
      { text: "Notebooks Overview", href: "Interactive_Notebooks/index.html", type: "html_hub" },
      { text: "Equity Valuation Notebook Guide", href: "Interactive_Notebooks/Financial_Modeling/README.md", type: "jupyter_guide" },
      { text: "LBO Model Basics Guide", href: "Interactive_Notebooks/Financial_Modeling/LBO_Model_Basics/README.md", type: "jupyter_guide" },
      { text: "Credit Agreement Analysis Guide", href: "Interactive_Notebooks/Legal_Analysis/README.md", type: "jupyter_guide" },
      { text: "WACC Calculator Guide", href: "Interactive_Notebooks/Valuation_Components/README.md", type: "jupyter_guide" },
      { text: "VaR Calculation Notebook Guide", href: "Interactive_Notebooks/Risk_Management/README.md", type: "jupyter_guide" },
      { text: "Interactive TVM Solver Guide", href: "Interactive_Notebooks/CFA_Quant_Methods/README.md", type: "jupyter_guide" },
      { text: "Fixed Income Bond Math Guide", href: "Interactive_Notebooks/Fixed_Income/README.md", type: "jupyter_guide" },
    ],
  },
  {
    text: "Risk Management",
    type: "category",
    children: [
      { text: "Risk Management Hub", href: "Risk_Management/index.html", type: "html_hub" },
      { text: "Introduction to Risk Management", href: "Risk_Management/01_Introduction_to_Risk_Management.md", type: "markdown_viewer", viewer: "global" },
      { text: "Risk ID & Assessment Frameworks", href: "Risk_Management/02_Risk_Identification_and_Assessment_Frameworks.md", type: "markdown_viewer", viewer: "global" },
      { text: "Risk Reporting & Dashboards", href: "Risk_Management/03_Risk_Reporting_and_Dashboards.md", type: "markdown_viewer", viewer: "global" },
      { text: "Risk Governance & Culture", href: "Risk_Management/04_Risk_Governance_and_Culture.md", type: "markdown_viewer", viewer: "global" },
      {
        text: "Credit Risk",
        href: "Risk_Management/Credit_Risk/index.html",
        type: "section_viewer",
        children: [
          { text: "Fundamentals of Credit Risk", href: "Risk_Management/Credit_Risk/CRM_01_Fundamentals_of_Credit_Risk.md", type: "markdown_viewer", viewer: "global"},
          { text: "Credit Analysis Process", href: "Risk_Management/Credit_Risk/CRM_02_Credit_Analysis_Process_and_Tools.md", type: "markdown_viewer", viewer: "global"},
          { text: "Credit Scoring & Rating Models", href: "Risk_Management/Credit_Risk/CRM_03_Credit_Scoring_and_Rating_Models.md", type: "markdown_viewer", viewer: "global"}
        ]
      },
      {
        text: "Market Risk",
        href: "Risk_Management/Market_Risk/index.html",
        type: "section_viewer",
        children: [
          { text: "Introduction to Market Risk", href: "Risk_Management/Market_Risk/MRM_01_Introduction_to_Market_Risk.md", type: "markdown_viewer", viewer: "global"}
        ]
      },
      {
        text: "Industry Primers",
        href: "primers/index.html",
        type: "section_viewer"
      },
      {
        text: "Behavioral Finance",
        href: "Behavioral_Finance/index.html",
        type: "section_viewer"
      },
      {
        text: "Legal Analysis",
        href: "legal_analysis/index.html",
        type: "section_viewer"
        text: "Enterprise Risk Management (ERM)",
        href: "Risk_Management/Enterprise_Risk_Management/index.html",
        type: "section_viewer",
        children: [
            { text: "ERM Overview", href: "Risk_Management/Enterprise_Risk_Management/README.md", type: "markdown_viewer", viewer: "global" }
        ]
      }
    ],
  },
  {
    text: "Career & Exams",
    type: "category",
    children: [

      { text: "Fintech Hub", href: "Fintech/index.html", type: "html_hub" },
      { text: "Introduction to Fintech", href: "Fintech/Introduction_to_Fintech.md", type: "markdown_viewer", viewer: "global" },
      { text: "AI in Finance", href: "Fintech/AI_in_Finance.md", type: "markdown_viewer", viewer: "global" },
      { text: "Blockchain in Finance", href: "Fintech/Blockchain_in_Finance.md", type: "markdown_viewer", viewer: "global" },
      { text: "Cybersecurity in Fintech", href: "Fintech/Cybersecurity_in_Fintech.md", type: "markdown_viewer", viewer: "global" },
      { text: "Payment Systems & Digital Currencies", href: "Fintech/Payment_Systems_and_Digital_Currencies.md", type: "markdown_viewer", viewer: "global" },
      { text: "Robo-Advisors", href: "Fintech/Robo_Advisors.md", type: "markdown_viewer", viewer: "global" },
      { text: "Insurtech", href: "Fintech/Insurtech.md", type: "markdown_viewer", viewer: "global" },
      { text: "Regtech", href: "Fintech/Regtech.md", type: "markdown_viewer", viewer: "global" },
      { text: "Open Banking & APIs", href: "Fintech/Open_Banking_and_APIs.md", type: "markdown_viewer", viewer: "global" },
      { text: "Advanced: DAOs", href: "Fintech/Advanced_Topics/Decentralized_Autonomous_Organizations.md", type: "markdown_viewer", viewer: "global"}
    ],
  },
  {
    text: "Learning Paths",
    type: "category",
    children: [
      { text: "All Learning Paths", href: "Learning_Paths/index.html", type: "section_viewer" },
      {
        text: "CFA Program",
        href: "CFA/index.html",
        type: "html_hub",
      },
      {
        text: "Credit Risk Analyst (CRAFT)",
        href: "corporate-credit-risk-analyst-training/index.html",
        type: "html_hub",
      },
      {
        text: "Professional Development",
        href: "Professional_Development/index.html",
        type: "section_viewer"
      },
      {
        text: "Toolkits & Checklists",
        href: "Toolkits_and_Checklists/index.html",
        type: "section_viewer"
      }
    ]
  },
  {
    text: "AI, Coding & Tech",
    type: "category",
    children: [
      {
        text: "AI & Coding Hub",
        href: "AI_and_Coding/index.html",
        type: "html_hub"
      },
      {
        text: "Fintech",
        href: "Fintech/index.html",
        type: "html_hub"
      },
      {
        text: "Prompt Libraries",
        href: "AI_and_Coding/Prompt_Libraries/index.html",
        type: "section_viewer"
      },
      {
        text: "Agent Libraries",
        href: "AI_and_Coding/Agent_Libraries/index.html",
        type: "section_viewer"
      }
    text: "Additional Resources",
    type: "category",
    children: [
        { text: "Market Analysis Quick Start", href: "Market_Analysis_Quick_Start/index.html", type: "section_viewer"},
        { text: "Behavioral Finance", href: "Behavioral_Finance/index.html", type: "section_viewer"},
        { text: "Toolkits & Checklists", href: "Toolkits_and_Checklists/index.html", type: "section_viewer"},
        {
          text: "Professional Development",
          href: "Professional_Development/index.html",
          type: "section_viewer",
          children: [
              {text: "Overview", href: "Professional_Development/README.md", type: "markdown_viewer", viewer: "global"},
              {text: "Effective Communication", href: "Professional_Development/Effective_Communication_for_Analysts.md", type: "markdown_viewer", viewer: "global"},
              {text: "Critical Thinking", href: "Professional_Development/Critical_Thinking_in_Financial_Analysis.md", type: "markdown_viewer", viewer: "global"},
              {text: "Negotiation Skills", href: "Professional_Development/Negotiation_Skills_for_Analysts.md", type: "markdown_viewer", viewer: "global"},
              {text: "Presentation Skills", href: "Professional_Development/Presentation_Skills_for_Financial_Information.md", type: "markdown_viewer", viewer: "global"},
              {text: "Ethical Decision Making", href: "Professional_Development/Ethical_Decision_Making_in_Practice.md", type: "markdown_viewer", viewer: "global"}
          ]
        },
        { text: "Interactive Glossary", href: "view_glossary.html", type: "html"},
    ]
  },
];
