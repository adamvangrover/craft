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
    const justificationTextElement = document.getElementById('justification-text');
    const inputMapTableBody = document.querySelector('#input-map-table tbody');
    const runScriptButton = document.getElementById('run-script-button');

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

        let score = 100; // Starting score
        let justification = '';
        let inputMap = [];

        // Quantitative factors
        const quantitativeFactors = [
            { key: 'roe', label: 'Return on Equity (ROE)', thresholds: [0.10, 0.15], weights: [-10, 0, 10] },
            { key: 'op_margin', label: 'Operating Margin', thresholds: [0.10, 0.15], weights: [-10, 0, 10] },
            { key: 'net_debt_ebitda', label: 'Net Debt / EBITDA', thresholds: [4.0, 3.0], weights: [10, 0, -10] },
            { key: 'debt_capital', label: 'Total Debt / Capital', thresholds: [0.6, 0.4], weights: [10, 0, -10] },
            { key: 'ocfl_debt', label: 'Operating Cash Flow / Total Debt', thresholds: [0.15, 0.25], weights: [-10, 0, 10] },
            { key: 'current_ratio', label: 'Current Ratio', thresholds: [1.0, 1.5], weights: [-10, 0, 10] },
            { key: 'quick_ratio', label: 'Quick Ratio', thresholds: [0.8, 1.0], weights: [-10, 0, 10] },
            { key: 'st_debt_pct', label: 'Short-Term Debt % of Total Debt', thresholds: [0.5, 0.3], weights: [10, 0, -10] },
        ];

        quantitativeFactors.forEach(factor => {
            const value = quantitativeValues[factor.key];
            let scoreChange = 0;
            let impact = 'Neutral';

            if (factor.weights[0] > 0) { // Higher is worse
                if (value > factor.thresholds[0]) scoreChange = factor.weights[0];
                else if (value < factor.thresholds[1]) scoreChange = factor.weights[2];
                else scoreChange = factor.weights[1];
            } else { // Higher is better
                if (value < factor.thresholds[0]) scoreChange = factor.weights[0];
                else if (value > factor.thresholds[1]) scoreChange = factor.weights[2];
                else scoreChange = factor.weights[1];
            }

            score += scoreChange;
            if (scoreChange > 0) impact = 'Positive';
            if (scoreChange < 0) impact = 'Negative';

            justification += `${factor.label} of ${value} resulted in a score change of ${scoreChange}. `;
            inputMap.push({ metric: factor.label, value: value, impact: impact });
        });

        // Qualitative factors
        const qualitativeFactors = [
            { key: 'ni_trend', label: 'Net Income Trend', values: ['Declining', 'Stable', 'Consistently Growing'], weights: [-10, 0, 10] },
            { key: 'fcf_gen', label: 'Free Cash Flow (FCF) Generation', values: ['Negative', 'Volatile', 'Consistently Positive'], weights: [-15, -5, 10] },
            { key: 'maturity_profile', label: 'Debt Maturity Profile', values: ['Concentrated', 'Well-Laddered'], weights: [-10, 5] },
            { key: 'ind_cyclicality', label: 'Industry Cyclicality', values: ['High', 'Moderate', 'Low'], weights: [-10, 0, 10] },
            { key: 'ind_competition', label: 'Competitive Intensity', values: ['High', 'Moderate', 'Low'], weights: [-10, 0, 10] },
            { key: 'diversification', label: 'Product/Service Diversification', values: ['Low', 'Moderate', 'High'], weights: [-10, 0, 10] },
        ];

        qualitativeFactors.forEach(factor => {
            const value = qualitativeValues[factor.key];
            const index = factor.values.indexOf(value);
            const scoreChange = factor.weights[index];
            score += scoreChange;

            let impact = 'Neutral';
            if (scoreChange > 0) impact = 'Positive';
            if (scoreChange < 0) impact = 'Negative';

            justification += `${factor.label} of "${value}" resulted in a score change of ${scoreChange}. `;
            inputMap.push({ metric: factor.label, value: value, impact: impact });
        });
        
        let rating = 'PASS';
        if (score < 60) {
            rating = 'Substandard';
        } else if (score < 80) {
            rating = 'Special Mention';
        } else {
            rating = 'PASS';
        }

        indicativeRatingElement.textContent = rating;
        justificationTextElement.textContent = justification;

        // Update visual element
        inputMapTableBody.innerHTML = '';
        inputMap.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.metric}</td>
                <td>${item.value}</td>
                <td class="${item.impact.toLowerCase()}">${item.impact}</td>
            `;
            inputMapTableBody.appendChild(row);
        });
    }

    runScriptButton.addEventListener('click', calculateRating);

    // Remove automatic calculation on input change
    // quantitativeForm.addEventListener('input', calculateRating);
    // qualitativeForm.addEventListener('change', calculateRating);

    calculateRating(); // Calculate initial rating

    console.log('SNC Rating Guide Initialized');
});
