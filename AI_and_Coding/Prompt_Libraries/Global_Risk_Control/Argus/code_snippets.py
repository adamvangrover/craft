import json
import pandas as pd

def invoke_argus_agent(portfolio_data: list, framework: dict) -> dict:
    """
    Simulates invoking the Argus agent with portfolio data and a risk framework.
    This simulation implements the aggregation and comparison logic from the pseudo-code.
    """
    print("--- Invoking Argus Agent (Simulation) ---")

    df = pd.DataFrame(portfolio_data)
    total_exposure = df['exposure_usd'].sum()

    limit_results = []
    ewi_results = []

    # --- Evaluate Concentration Limits ---
    for limit in framework.get("concentration_limits", []):
        if limit["type"] == "industry":
            industry_exposure = df[df['industry'] == limit['scope']]['exposure_usd'].sum()
            current_pct = industry_exposure / total_exposure
            limit_pct = limit['threshold']
            status = "BREACH" if current_pct > limit_pct else "Warning" if current_pct > limit_pct * 0.9 else "OK"

            limit_results.append({
                "limit_name": f"{limit['scope']} Sector Concentration",
                "limit_type": "Concentration",
                "limit_value": f"< {limit_pct:.0%}",
                "current_value": f"{current_pct:.2%}",
                "status": status
            })

    # --- Evaluate Quality Limits ---
    for limit in framework.get("quality_limits", []):
        if limit["type"] == "min_avg_rating":
            # A simple numeric mapping for ratings
            rating_map = {"A": 1, "B": 2, "C": 3, "D": 4}
            df['rating_num'] = df['internal_risk_rating'].map(rating_map)
            avg_rating = df['rating_num'].mean()
            min_rating_num = rating_map[limit['threshold']]
            status = "BREACH" if avg_rating > min_rating_num else "OK" # Lower num is better

            limit_results.append({
                "limit_name": "Portfolio Average Rating",
                "limit_type": "Quality",
                "limit_value": f"Better than {limit['threshold']}",
                "current_value": f"{avg_rating:.2f}",
                "status": status
            })

    # --- Generate Risk Distribution ---
    # Simplified for example; a real one would be more complex
    risk_dist_data = df.groupby(['industry', 'internal_risk_rating'])['exposure_usd'].sum().unstack(fill_value=0).to_dict()

    # --- Determine Overall Status ---
    has_breach = any(res['status'] == "BREACH" for res in limit_results)
    has_warning = any(res['status'] == "Warning" for res in limit_results)

    status = "Red" if has_breach else "Amber" if has_warning else "Green"
    narrative = "Portfolio is within all established risk appetite limits."
    if status == "Red": narrative = "Critical: One or more hard limits have been breached."
    elif status == "Amber": narrative = "Warning: Approaching one or more concentration limits."

    # --- Assemble Dashboard ---
    dashboard = {
        "dashboard_summary": {
            "overall_status": status,
            "summary_narrative": narrative,
            "timestamp_utc": pd.Timestamp.utcnow().isoformat() + "Z"
        },
        "limit_monitoring": limit_results,
        "risk_distribution": {
            "description": "Exposure (USD) by Industry and Risk Rating",
            "data": risk_dist_data
        },
        "early_warning_indicators": ewi_results # Not simulated in this simple example
    }

    return dashboard

def process_argus_response(response: dict):
    """
    Processes the JSON response from the Argus agent into a human-readable dashboard summary.
    """
    print("\n--- ARGUS: RISK APPETITE DASHBOARD ---")
    summary = response.get("dashboard_summary", {})
    limits = response.get("limit_monitoring", [])

    print(f"\nOVERALL STATUS: {summary.get('overall_status')}")
    print(f"SUMMARY: {summary.get('summary_narrative')}")

    print("\nLIMIT MONITORING:")
    df_limits = pd.DataFrame(limits)
    print(df_limits.to_string(index=False))

    print("\n--- END OF DASHBOARD ---")

if __name__ == '__main__':
    # --- 1. Define the Request Packet ---

    # Example Portfolio Data
    portfolio = [
        {"id": "L1", "exposure_usd": 100, "industry": "Technology", "country": "USA", "internal_risk_rating": "A"},
        {"id": "L2", "exposure_usd": 150, "industry": "Technology", "country": "USA", "internal_risk_rating": "B"},
        {"id": "L3", "exposure_usd": 80, "industry": "Energy", "country": "CAN", "internal_risk_rating": "C"},
        {"id": "L4", "exposure_usd": 200, "industry": "Healthcare", "country": "USA", "internal_risk_rating": "A"},
        {"id": "L5", "exposure_usd": 120, "industry": "Technology", "country": "DEU", "internal_risk_rating": "C"},
    ]
    # Total exposure = 650. Tech exposure = 370 (56.9%)

    # Example Risk Appetite Framework
    risk_framework = {
        "concentration_limits": [
            {"type": "industry", "scope": "Technology", "threshold": 0.50}, # 50% limit
            {"type": "industry", "scope": "Energy", "threshold": 0.30},
        ],
        "quality_limits": [
            {"type": "min_avg_rating", "threshold": "B"} # Avg rating must be B (2) or better
        ],
        "ewi_definitions": []
    }

    # --- 2. Invoke the Argus Agent ---
    dashboard_response = invoke_argus_agent(portfolio, risk_framework)

    # --- 3. Process and Display the Response ---
    process_argus_response(dashboard_response)
