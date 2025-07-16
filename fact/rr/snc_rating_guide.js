document.addEventListener('DOMContentLoaded', function() {
    const guidelines = {
        collateral_risk: `You are an expert credit risk analyst specializing in Shared National Credits (SNCs).
Evaluate the collateral risk for a loan based on the provided information and regulatory guidelines.

Regulatory Guideline Context:
- Substandard Definition (Collateral Aspect): "{{guideline_substandard_collateral}}"
- Primary Repayment Source Expectation: "{{guideline_repayment_source}}"

Loan Collateral Information:
- Collateral Description: {{collateral_description}}
- Loan-to-Value (LTV) Ratio: {{ltv_ratio}}
- Other Collateral Notes: {{other_collateral_notes}}

Based on all the above, assess if the collateral position significantly mitigates risk, presents concerns, or is critically deficient.
Output your assessment in the following format:
Assessment: [Pass/Special Mention/Substandard]
Justification: [Provide a brief justification for your assessment, referencing specific details and guidelines.]`,
        repayment_capacity: `You are an expert credit risk analyst specializing in Shared National Credits (SNCs), focusing on repayment capacity.
Evaluate the borrower's ability to meet its debt obligations from sustainable sources of cash under its control, considering the provided data and regulatory guidelines.

Regulatory Guideline Context:
- Primary Repayment Source Expectation: "{{guideline_repayment_source}}"
- Definition of Substandard (Paying Capacity Aspect): "{{guideline_substandard_paying_capacity}}"
- Typical Repayment Capacity Period to Consider: {{repayment_capacity_period_years}} years

Borrower Financial Information:
- Historical Free Cash Flows (FCF) (Last 3 periods, most recent last): {{historical_fcf}}
- Historical Cash Flow from Operations (CFO) (Last 3 periods): {{historical_cfo}}
- Current Debt Service Requirement (Annualized): {{annual_debt_service}}
- Key Financial Ratios (e.g., Debt/EBITDA, Interest Coverage): {{relevant_ratios}}
- Projected FCF (if available, for {{repayment_capacity_period_years}} years): {{projected_fcf}}
- Qualitative Notes on Revenue/Cash Flow Stability (e.g., customer concentration, contract terms, industry cyclicality): {{qualitative_notes_stability}}

Based on all the above:
1. Assess the strength and sustainability of the primary repayment sources.
2. Identify any significant concerns regarding future paying capacity over the typical repayment period.
3. Conclude on the overall repayment capacity.

Output your assessment in the following format:
Assessment: [Strong/Adequate/Weak/Unsustainable]
Justification: [Detailed justification for your assessment, referencing specific data points, trends, qualitative factors, and how they align or conflict with the regulatory expectation of a sustainable primary repayment source under borrower control.]
Concerns: [List any specific concerns identified, or "None".]`,
        non_accrual_status: `You are an expert credit risk analyst specializing in Shared National Credits (SNCs), focusing on non-accrual status.
Evaluate if the borrower's loan should be placed on non-accrual status based on the provided data and regulatory guidelines.

Regulatory Guideline Context:
- Non-Accrual Status Definition: "{{guideline_nonaccrual_status}}"
- Interest Capitalization Guideline: "{{guideline_interest_capitalization}}"

Borrower Information:
- Payment History (e.g., Days Past Due): {{payment_history_status}}
- Key Financial Ratios (e.g., Liquidity, Coverage, Leverage): {{relevant_ratios}}
- Current Assessment of Repayment Capacity: {{repayment_capacity_assessment}}
- Notes on Borrower's Financial Condition Deterioration: {{notes_financial_deterioration}}
- Is interest currently being capitalized? {{interest_capitalization_status}}

Based on all the above:
1. Determine if the borrower's condition aligns with the definition of non-accrual status.
2. If interest is being capitalized, assess if it's appropriate per guidelines.
3. Conclude on whether non-accrual status is indicated.

Output your assessment in the following format:
Assessment: [Non-Accrual Warranted/Monitor for Non-Accrual/Accrual Appropriate]
Justification: [Detailed justification for your assessment, referencing specific data points, qualitative factors, and how they align or conflict with regulatory guidelines regarding non-accrual and interest capitalization.]`
    };

    const guidelineToggles = document.querySelectorAll('.guideline-toggle');

    guidelineToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const guidelineKey = this.dataset.guideline;
            const guidelineTextElement = document.querySelector(`.guideline-text[data-guideline="${guidelineKey}"]`);
            
            if (guidelineTextElement.innerHTML === '') {
                guidelineTextElement.innerHTML = `<pre>${guidelines[guidelineKey]}</pre>`;
            } else {
                guidelineTextElement.innerHTML = '';
            }
        });
    });

    const quantitativeForm = document.getElementById('quantitative-form');
    const qualitativeForm = document.getElementById('qualitative-form');
    const indicativeRatingElement = document.getElementById('indicative-rating');

    function calculateRating() {
        const quantitativeData = new FormData(quantitativeForm);
        const qualitativeData = new FormData(qualitativeForm);

        const quantitativeValues = {};
        for (let [key, value] of quantitativeData.entries()) {
            quantitativeValues[key] = parseFloat(value);
        }

        const qualitativeValues = {};
        for (let [key, value] of qualitativeData.entries()) {
            qualitativeValues[key] = value;
        }

        // This is a simplified version of the decision tree logic.
        // A more complete implementation would parse the JSON file and
        // dynamically build the decision tree.
        let score = 50; // Starting score

        // Quantitative factors
        if (quantitativeValues.roe >= 0.15) score += 5; else score -= 5;
        if (quantitativeValues.op_margin >= 0.12) score += 5; else score -= 5;
        if (quantitativeValues.net_debt_ebitda <= 3.0) score += 5; else score -= 5;
        if (quantitativeValues.debt_capital <= 0.50) score += 5; else score -= 5;
        if (quantitativeValues.ocfl_debt >= 0.25) score += 5; else score -= 5;
        if (quantitativeValues.current_ratio >= 1.8) score += 5; else score -= 5;
        if (quantitativeValues.quick_ratio >= 1.0) score += 5; else score -= 5;
        if (quantitativeValues.st_debt_pct <= 0.30) score += 5; else score -= 5;

        // Qualitative factors
        if (qualitativeValues.ni_trend === 'Consistently Growing') score += 5; else score -= 5;
        if (qualitativeValues.fcf_gen === 'Consistently Positive') score += 5; else score -= 5;
        if (qualitativeValues.maturity_profile === 'Well-Laddered') score += 5; else score -= 5;
        if (qualitativeValues.ind_cyclicality === 'Low') score += 5; else score -= 5;
        if (qualitativeValues.ind_competition === 'Low' || qualitativeValues.ind_competition === 'Moderate') score += 5; else score -= 5;
        if (qualitativeValues.diversification === 'High') score += 5; else score -= 5;
        
        let rating = 'PASS';
        if (score < 30) {
            rating = 'Substandard';
        } else if (score < 50) {
            rating = 'Special Mention';
        } else if (score < 70) {
            rating = 'PASS';
        } else {
            rating = 'PASS';
        }


        indicativeRatingElement.textContent = rating;
    }

    quantitativeForm.addEventListener('input', calculateRating);
    qualitativeForm.addEventListener('change', calculateRating);

    calculateRating(); // Calculate initial rating

    console.log('SNC Rating Guide Initialized');
});
