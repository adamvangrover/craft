import json
import textwrap

def invoke_odyssey_agent(action_summary: dict, analyses_packet: list, strategic_context: dict) -> dict:
    """
    Simulates invoking the Odyssey agent with a full strategic packet.
    In a real system, this would involve sending a very large, structured prompt
    to a powerful generative AI model.
    """
    print("--- Invoking Odyssey Agent (Simulation) ---")

    # This is a mock response that emulates what a real LLM might return
    # based on the system prompt's instructions and the example inputs.
    mock_llm_response = {
      "executive_summary": {
        "overall_recommendation": "Re-evaluate",
        "narrative_summary": "While the proposed acquisition of FutureCorp offers a clear path to achieving the stated goal of market leadership, it presents a critical conflict between strategic ambition and stated risk discipline. The action would breach the firm's hard limit on technology sector concentration, and the optimistic financial projections mirror those of a major past failure. A re-evaluation is required to restructure the deal or update the firm's risk appetite."
      },
      "synthesis_and_deconfliction": {
        "points_of_consensus": [
          "FutureCorp has best-in-class technology.",
          "The acquisition would significantly increase market share."
        ],
        "points_of_contention": [
          "Financial Viability: The business sponsor projects a 25% IRR, while the independent Credit Risk analysis suggests a more conservative 10-12% IRR.",
          "Valuation: Investment Banking team supports the valuation, while the M&A legal team flags the lack of downside protection in the deal terms."
        ]
      },
      "second_order_risk_analysis": {
        "identified_second_order_risks": [
          "Integration Risk: High risk of key talent attrition from FutureCorp post-acquisition due to cultural differences.",
          "Reputational Risk: FutureCorp has pending litigation that was noted by Legal but not factored into financial projections."
        ],
        "identified_blind_spots": [
          "What is the integration cost and timeline for merging FutureCorp's tech stack with our own?",
          "Has a third-party quality of earnings analysis been conducted on the target's financials?"
        ]
      },
      "strategic_alignment_check": {
        "alignment_with_risk_appetite": [
          "BREACH: The resulting portfolio would have a 25% concentration in the Technology sector, exceeding the 20% limit defined in the Risk Appetite Statement."
        ],
        "historical_consistency_check": [
          "WARNING: The financial model's structure is highly similar to 'Project Phoenix' (2022), which failed to deliver projected synergies and resulted in a $500M write-down."
        ]
      }
    }

    return mock_llm_response

def process_odyssey_response(response: dict):
    """
    Processes the JSON response from the Odyssey agent into a human-readable strategic brief.
    """
    print("\n--- ODYSSEY: STRATEGIC RISK & OPPORTUNITY BRIEF ---")

    # Helper for formatted printing
    def print_section(title, bullet_points):
        print(f"\n## {title.upper()}")
        if bullet_points:
            for item in bullet_points:
                print(f"  - {textwrap.fill(item, width=80, subsequent_indent='    ')}")
        else:
            print("  - None identified.")

    # Executive Summary
    exec_summary = response.get("executive_summary", {})
    print(f"\n## OVERALL RECOMMENDATION: {exec_summary.get('overall_recommendation', 'N/A').upper()}")
    print("\n## EXECUTIVE NARRATIVE")
    print(textwrap.fill(exec_summary.get('narrative_summary', 'N/A'), width=80))

    # Deconfliction
    deconflict = response.get("synthesis_and_deconfliction", {})
    print_section("Points of Consensus", deconflict.get("points_of_consensus"))
    print_section("Points of Contention", deconflict.get("points_of_contention"))

    # Second-Order Risks
    second_order = response.get("second_order_risk_analysis", {})
    print_section("Identified Second-Order Risks", second_order.get("identified_second_order_risks"))
    print_section("Identified Blind Spots / Missing Analyses", second_order.get("identified_blind_spots"))

    # Strategic Alignment
    alignment = response.get("strategic_alignment_check", {})
    print_section("Alignment with Risk Appetite", alignment.get("alignment_with_risk_appetite"))
    print_section("Historical Consistency Check", alignment.get("historical_consistency_check"))

    print("\n--- END OF BRIEF ---")


if __name__ == '__main__':
    # --- 1. Define the Request Packet ---

    action = {
      "action_name": "Project Titan - Acquisition of FutureCorp",
      "sponsor_business_unit": "Investment Banking Division",
      "stated_goal": "Achieve #1 market share in the AI-driven analytics sector."
    }

    analyses = [
        {
            "source": "Business Sponsor (IBD)",
            "recommendation": "Approve",
            "key_rationale": ["Projected 25% IRR.", "Synergies of $100M/year.", "Unlocks new client segment."]
        },
        {
            "source": "Credit Risk Team",
            "recommendation": "Approve with Conditions",
            "key_rationale": ["IRR likely closer to 10-12% under stressed assumptions.", "Deal is contingent on raising $2B in new debt."]
        },
        {
            "source": "Legal Department",
            "recommendation": "Re-evaluate",
            "key_rationale": ["Target has pending litigation.", "Lack of downside protection in deal terms.", "Change of control clauses in key contracts are problematic."]
        }
    ]

    context = {
        "risk_appetite_statement": ["No single industry concentration to exceed 20%."],
        "historical_precedents": [{"name": "Project Phoenix", "outcome": "$500M write-down", "rationale_similarity_key": "High-synergy projection model"}]
    }

    # --- 2. Invoke the Odyssey Agent ---
    brief_response = invoke_odyssey_agent(action, analyses, context)

    # --- 3. Process and Display the Response ---
    process_odyssey_response(brief_response)
