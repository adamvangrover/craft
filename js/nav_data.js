const navData = [
  {
    text: "Home",
    href: "home.html",
    type: "html",
  },
  {
    text: "Site Overview Presentation",
    href: "presentation.html",
    type: "html",
  },
  {
    text: "CFA Program",
    type: "category",
    children: [
      {
        text: "CFA Study Hub",
        href: "CFA/index.html",
        type: "html_hub", // Interactive hub
      },
      {
        text: "Level I Materials",
        href: "CFA/index.html#materials-library", // Link to specific section in hub
        type: "html_hub_section",
        // Or, alternatively, directly link to READMEs if preferred for some items
        // children: [
        //   { text: "L1 Main Guide", href: "CFA/Level_1/README.md", type: "markdown_viewer", viewer: "global" },
        //   { text: "L1 Cheat Sheets", href: "CFA/Level_1/Cheat_Sheets/README.md", type: "markdown_viewer", viewer: "global" },
        // ]
      },
      {
        text: "Level II Materials",
        href: "CFA/index.html#materials-library",
        type: "html_hub_section",
      },
      {
        text: "Level III Materials",
        href: "CFA/index.html#materials-library",
        type: "html_hub_section",
      },
    ],
  },
  {
    text: "Credit Risk Analyst Training (CRAFT)",
    type: "category",
    children: [
      {
        text: "CRAFT Program Hub",
        href: "corporate-credit-risk-analyst-training/index.html",
        type: "html_hub", // Interactive hub
      },
      // Individual modules could be listed here, linking to the CRAFT hub with parameters
      // e.g., href: "corporate-credit-risk-analyst-training/index.html?module=m1"
      // or directly to their specific index.html if the global nav should bypass the hub's own nav for deep links
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
    type: "section_viewer", // This is the main link to the primers viewer page
    children: [ // Optional: Direct links to specific primers if desired in nav.
                // These would load within primers/index.html via its internal JS.
      { text: "Aerospace & Defense", href: "primers/index.html?load=aerospace_defense.md", type: "section_viewer_item"},
      { text: "Automotive", href: "primers/index.html?load=automotive.md", type: "section_viewer_item"},
      { text: "Consumer Products", href: "primers/index.html?load=consumer_products.md", type: "section_viewer_item"},
      { text: "Energy Oil & Gas", href: "primers/index.html?load=energy_oil_gas.md", type: "section_viewer_item"},
      { text: "Financial Institutions", href: "primers/index.html?load=financial_institutions.md", type: "section_viewer_item"},
      { text: "Healthcare", href: "primers/index.html?load=healthcare.md", type: "section_viewer_item"},
      { text: "Industrials", href: "primers/index.html?load=industrials.md", type: "section_viewer_item"},
      { text: "Media", href: "primers/index.html?load=media.md", type: "section_viewer_item"},
      { text: "Real Estate", href: "primers/index.html?load=real_estate.md", type: "section_viewer_item"},
      { text: "Technology", href: "primers/index.html?load=technology.md", type: "section_viewer_item"},
      { text: "Telecommunications", href: "primers/index.html?load=telecommunications.md", type: "section_viewer_item"},
      { text: "Utilities", href: "primers/index.html?load=utilities.md", type: "section_viewer_item"},
      { text: "Corporate Credit Rating Fundamentals", href: "primers/index.html?load=corporate_credit_rating_fundamentals.md", type: "section_viewer_item"}
    ]
  },
  {
    text: "Interactive Notebooks",
    type: "category",
    children: [
      { text: "Notebooks Overview", href: "Interactive_Notebooks/index.html", type: "html_hub" }, // Main page for notebooks
      { text: "Equity Valuation Notebook Guide", href: "Interactive_Notebooks/Financial_Modeling/README.md", type: "jupyter_guide" }, // # This might need to point to a more specific guide if LBO is also under Financial_Modeling
      { text: "LBO Model Basics Guide", href: "Interactive_Notebooks/Financial_Modeling/LBO_Model_Basics/README.md", type: "jupyter_guide" },
      { text: "Credit Agreement Analysis Guide", href: "Interactive_Notebooks/Legal_Analysis/README.md", type: "jupyter_guide" },
      { text: "WACC Calculator Guide", href: "Interactive_Notebooks/Valuation_Components/README.md", type: "jupyter_guide" },
      { text: "VaR Calculation Notebook Guide", href: "Interactive_Notebooks/Risk_Management/README.md", type: "jupyter_guide" },
      { text: "Interactive TVM Solver Guide", href: "Interactive_Notebooks/CFA_Quant_Methods/README.md", type: "jupyter_guide" }, // # Assuming this exists or is planned
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
        href: "Risk_Management/Credit_Risk/index.html", // Main page for Credit Risk section
        type: "section_viewer", // It's a viewer for its own content
        children: [
          { text: "Fundamentals of Credit Risk", href: "Risk_Management/Credit_Risk/CRM_01_Fundamentals_of_Credit_Risk.md", type: "markdown_viewer", viewer: "global"},
          { text: "Credit Analysis Process", href: "Risk_Management/Credit_Risk/CRM_02_Credit_Analysis_Process_and_Tools.md", type: "markdown_viewer", viewer: "global"},
          { text: "Credit Scoring & Rating Models", href: "Risk_Management/Credit_Risk/CRM_03_Credit_Scoring_and_Rating_Models.md", type: "markdown_viewer", viewer: "global"}
        ]
      },
      {
        text: "Market Risk",
        href: "Risk_Management/Market_Risk/index.html", // Main page for Market Risk section
        type: "section_viewer",
        children: [
          { text: "Introduction to Market Risk", href: "Risk_Management/Market_Risk/MRM_01_Introduction_to_Market_Risk.md", type: "markdown_viewer", viewer: "global"}
          // Add more Market Risk .md files here if they exist
        ]
      },
      {
        text: "Operational Risk",
        href: "Risk_Management/Operational_Risk/index.html",
        type: "section_viewer",
        children: [
          { text: "Introduction to Operational Risk", href: "Risk_Management/Operational_Risk/ORM_01_Introduction_to_Operational_Risk.md", type: "markdown_viewer", viewer: "global"}
        ]
      },
      {
        text: "Liquidity Risk",
        href: "Risk_Management/Liquidity_Risk/index.html",
        type: "section_viewer",
        children: [
          { text: "Introduction to Liquidity Risk", href: "Risk_Management/Liquidity_Risk/LRM_01_Introduction_to_Liquidity_Risk.md", type: "markdown_viewer", viewer: "global"}
        ]
      },
      {
        text: "Enterprise Risk Management (ERM)",
        href: "Risk_Management/Enterprise_Risk_Management/index.html",
        type: "section_viewer",
        children: [
            { text: "ERM Overview", href: "Risk_Management/Enterprise_Risk_Management/README.md", type: "markdown_viewer", viewer: "global" }
            // Add links to specific ERM documents as they are created, e.g.,
            // { text: "COSO Framework Deep Dive", href: "Risk_Management/Enterprise_Risk_Management/ERM_01_COSO_Framework_Deep_Dive.md", type: "markdown_viewer", viewer: "global" }
        ]
      }
    ],
  },
  {
    text: "Fintech",
    type: "category",
    children: [
      { text: "Fintech Hub", href: "Fintech/index.html", type: "html_hub" }, // Links to Fintech/index.html
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
        text: "Credit Analyst Foundational Path",
        href: "Learning_Paths/Credit_Analyst_Foundational_Path.md",
        type: "learning_path_definition",
        path_id: "credit_analyst_foundational"
      },
      {
        text: "CFA Level 1 Prep Focus Areas",
        href: "Learning_Paths/CFA_Level_1_Prep_Focus_Areas.md",
        type: "learning_path_definition",
        path_id: "cfa_l1_focus"
      },
      {
        text: "Understanding Fintech for Analysts",
        href: "Learning_Paths/Understanding_Fintech_for_Analysts.md",
        type: "learning_path_definition",
        path_id: "fintech_for_analysts"
      }
    ],
    isLearningPathSection: true
  },
  {
    text: "Additional Resources", // Renamed from "Other Resources" for clarity
    type: "category",
    children: [
        { text: "Market Analysis Quick Start", href: "Market_Analysis_Quick_Start/index.html", type: "section_viewer"},
        { text: "Behavioral Finance", href: "Behavioral_Finance/index.html", type: "section_viewer"},
        { text: "Toolkits & Checklists", href: "Toolkits_and_Checklists/index.html", type: "section_viewer"},
        {
          text: "Professional Development",
          href: "Professional_Development/index.html",
          type: "section_viewer",
          children: [ // Adding direct links to new articles
              {text: "Overview", href: "Professional_Development/README.md", type: "markdown_viewer", viewer: "global"}, // Assuming README is the overview
              {text: "Effective Communication", href: "Professional_Development/Effective_Communication_for_Analysts.md", type: "markdown_viewer", viewer: "global"},
              {text: "Critical Thinking", href: "Professional_Development/Critical_Thinking_in_Financial_Analysis.md", type: "markdown_viewer", viewer: "global"},
              {text: "Negotiation Skills", href: "Professional_Development/Negotiation_Skills_for_Analysts.md", type: "markdown_viewer", viewer: "global"},
              {text: "Presentation Skills", href: "Professional_Development/Presentation_Skills_for_Financial_Information.md", type: "markdown_viewer", viewer: "global"},
              {text: "Ethical Decision Making", href: "Professional_Development/Ethical_Decision_Making_in_Practice.md", type: "markdown_viewer", viewer: "global"}
          ]
        },
        { text: "Interactive Glossary", href: "view_glossary.html", type: "html"},
    ]
  }
];

// Example of how a learning path definition might look if stored separately or fetched:
// This part remains as a comment for conceptual reference.
// const learningPaths = {
//   "credit_analyst_foundational": {
//     name: "Credit Analyst Foundational Path",
//     description: "A curated path to build foundational skills for credit analysis.",
//     steps: [
//       { text: "CRAFT Module 1: Foundations", nav_data_ref_text: "Module 1: Foundations" }, // Points to an item in navData
//       { text: "Understanding Financial Statements (Toolkit)", internal_anchor: "#toolkit_financial_statements" }, // Points to a conceptual anchor in home.html or other hub
//       { text: "Industry Primer: Technology", href: "primers/index.html?load=technology.md", type: "section_viewer_item" },
//       // ... more steps
//     ]
//   }
// };

/**
 * Types definition:
 * - html: A standard HTML page.
 * - html_hub: An interactive HTML page that serves as a central point for a section (e.g., CFA/index.html).
 * - html_hub_section: A link to a specific part/anchor within an html_hub.
 * - category: A non-linkable item that groups other items in its `children` array.
 * - markdown_viewer: A Markdown file that should be opened using a dedicated viewer.
 *   - viewer: "global" (use `global_markdown_viewer.html`) or "section_specific_viewer_url" (e.g. primers/index.html). The `href` for a `markdown_viewer` type should be the path to the .md file itself if using the `global_markdown_viewer.html`, or the path to the specific viewer with appropriate query params.
 * - section_viewer: An HTML page that is itself a viewer for a collection of content (e.g., primers/index.html). If it has children, they are specific items viewable by this section_viewer or direct markdown files related to it.
 * - section_viewer_item: A link that loads specific content into a section_viewer, often using URL parameters.
 * - jupyter_guide: A link to a README.md file that explains a Jupyter notebook.
 * - craft_module_viewer: A link to the index.html of a CRAFT module, intended to be loaded by the CRAFT hub.
 * - learning_path_definition: A Markdown file that defines a learning path.
 *   - path_id: A unique identifier for this path.
 * - isLearningPathSection: A boolean flag for the top-level "Learning Paths" category.
 */
