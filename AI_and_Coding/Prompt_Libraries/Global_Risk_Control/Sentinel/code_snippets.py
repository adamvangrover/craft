import json
import pandas as pd
from io import StringIO

def invoke_sentinel_agent(data_content: str, schema: dict, rules: list) -> dict:
    """
    Simulates invoking the Sentinel agent with a request packet.
    In a real system, this would involve an API call to an LLM or a microservice.
    """
    print("--- Invoking Sentinel Agent ---")

    # For this simulation, we will implement the logic from pseudo_code.txt directly.
    # In a real scenario, you would pass the system prompt and the inputs to an LLM.

    report = {
        "report_summary": {},
        "detected_anomalies": []
    }

    anomalies_list = []
    records_with_errors = set()
    total_errors = 0

    try:
        df = pd.read_csv(StringIO(data_content))
        total_records = len(df)

        # --- Schema and Rule Validation ---
        for index, row in df.iterrows():
            record_id = row.get("LoanID", f"Row_{index}")

            # Check schema (basic example: field presence)
            for field_def in schema.get("fields", []):
                field_name = field_def["name"]
                if not field_def["is_nullable"] and (field_name not in row or pd.isna(row[field_name])):
                    total_errors += 1
                    records_with_errors.add(record_id)
                    anomalies_list.append({
                        "record_id": record_id,
                        "field_name": field_name,
                        "error_type": "SCHEMA_VIOLATION",
                        "error_description": f"Field '{field_name}' is required but was found empty.",
                        "erroneous_value": None
                    })

            # Check business rules
            for rule in rules:
                field_name = rule["field"]
                if field_name in row:
                    value = row[field_name]
                    if rule["rule"] == "between":
                        low, high = rule["values"]
                        if not (low <= value <= high):
                            total_errors += 1
                            records_with_errors.add(record_id)
                            anomalies_list.append({
                                "record_id": record_id,
                                "field_name": field_name,
                                "error_type": "RULE_VIOLATION",
                                "error_description": f"Value '{value}' is outside the allowed range of {rule['values']}.",
                                "erroneous_value": value
                            })

    except Exception as e:
        # Handle file parsing errors, etc.
        return {"error": f"Failed to process data file: {e}"}

    # --- Finalize Report ---
    report["report_summary"] = {
        "input_filename": "loan_portfolio_q3.csv",
        "total_records_processed": total_records,
        "total_records_with_errors": len(records_with_errors),
        "total_errors_found": total_errors,
        "data_quality_score": (total_records - len(records_with_errors)) / total_records if total_records > 0 else 1.0,
        "validation_status": "Failed" if total_errors > 0 else "Passed",
        "timestamp_utc": pd.Timestamp.utcnow().isoformat() + "Z"
    }
    report["detected_anomalies"] = anomalies_list

    return report


def process_sentinel_response(response: dict):
    """
    Processes the JSON response from the Sentinel agent for human review.
    """
    print("\n--- Processing Sentinel Response ---")
    summary = response.get("report_summary", {})
    anomalies = response.get("detected_anomalies", [])

    print(f"Validation Status: {summary.get('validation_status')}")
    print(f"Data Quality Score: {summary.get('data_quality_score'):.2%}")
    print(f"Total Records Processed: {summary.get('total_records_processed')}")
    print(f"Total Errors Found: {summary.get('total_errors_found')}")

    if anomalies:
        print("\nDetected Anomalies:")
        df_anomalies = pd.DataFrame(anomalies)
        print(df_anomalies.to_string(index=False))
    else:
        print("\nNo anomalies detected.")


if __name__ == '__main__':
    # --- 1. Define the Request Packet ---

    # Example Data File Content (as a string)
    # Note the errors: LTV > 1.2, missing maturity_date
    csv_data = """LoanID,Borrower,OriginalBalance,CurrentBalance,LTV,MaturityDate
LN-101,Corp A,5000000,4500000,0.75,2030-01-01
LN-102,Corp B,3000000,3000000,1.25,2028-06-15
LN-103,Corp C,10000000,9500000,0.80,
"""

    # Example Schema Definition
    file_schema = {
        "fields": [
            {"name": "LoanID", "type": "string", "is_nullable": False},
            {"name": "Borrower", "type": "string", "is_nullable": False},
            {"name": "OriginalBalance", "type": "float", "is_nullable": False},
            {"name": "CurrentBalance", "type": "float", "is_nullable": False},
            {"name": "LTV", "type": "float", "is_nullable": False},
            {"name": "MaturityDate", "type": "date", "is_nullable": False}
        ]
    }

    # Example Business Rules
    business_rules = [
        {"field": "LTV", "rule": "between", "values": [0.0, 1.20]}
    ]

    # --- 2. Invoke the Sentinel Agent ---
    validation_response = invoke_sentinel_agent(csv_data, file_schema, business_rules)

    print("\nRaw JSON Response:")
    print(json.dumps(validation_response, indent=2))

    # --- 3. Process the Response ---
    process_sentinel_response(validation_response)
