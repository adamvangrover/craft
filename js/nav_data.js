const navData = [
  {
    text: "Main Hubs",
    type: "category",
    children: [
      {
        text: "Home Dashboard",
        href: "home.html",
        type: "html_hub",
      },
      {
        text: "Financial Learning Hub",
        href: "index.html",
        type: "html_hub",
      },
      {
        text: "CFA Study Hub",
        href: "CFA/index.html",
        type: "html_hub",
      },
      {
        text: "Credit Analyst (CRAFT)",
        href: "corporate-credit-risk-analyst-training/index.html",
        type: "html_hub",
      },
    ],
  },
  {
    text: "Learning Paths",
    type: "category",
    children: [
      {
        text: "All Learning Paths",
        href: "Learning_Paths/index.html",
        type: "section_viewer",
      },
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
        text: "Fintech for Analysts",
        href: "Learning_Paths/Understanding_Fintech_for_Analysts.md",
        type: "markdown_viewer",
        viewer: "global"
      }
    ],
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
      }
    ],
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
    ]
  },
  {
    text: "Additional Resources",
    type: "category",
    children: [
        { text: "Market Analysis Quick Start", href: "Market_Analysis_Quick_Start/index.html", type: "section_viewer"},
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
