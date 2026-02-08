> **Buy-Side Perspective:** "AI" in credit isn't just about chatbots. It's about predictive power. Traditional rating models (Scorecards) are linear and static. Machine Learning models (Logistic Regression, Random Forest, XGBoost) can capture non-linear relationships—like how high leverage might be acceptable *if* interest coverage is high, but fatal if coverage is low. This notebook teaches you how to build the "Hello World" of quantitative credit risk: a Default Prediction Model.

# Credit Default Prediction with Machine Learning

## 1. The Dataset
We use a synthetic dataset representing a loan portfolio. Key features include:
*   **Income:** Annual borrower income.
*   **Leverage:** Debt-to-Income ratio.
*   **Liquidity:** Current Ratio.
*   **History:** Years of credit history.
*   **Default:** Binary target (0 = Repaid, 1 = Default).

## 2. Model: Logistic Regression
While neural networks get the hype, **Logistic Regression** is the workhorse of banking compliance because it is *interpretable*. You can explain exactly *why* a loan was rejected (e.g., "Leverage coefficient was -2.5").

### Key Metrics
*   **Accuracy:** % of correct predictions. (Beware: In unbalanced datasets where only 2% default, a model that predicts "No Default" for everyone is 98% accurate but useless).
*   **ROC-AUC:** Area Under the Receiver Operating Characteristic Curve. Measures the model's ability to distinguish between classes. 0.5 = Random Guessing, 1.0 = Perfect.
*   **Confusion Matrix:** Shows False Positives (Type I Error) vs. False Negatives (Type II Error).

## 3. Feature Importance
Which variable matters most?
*   **Coefficients:** In Logistic Regression, the magnitude of the coefficient indicates the strength of the relationship.
*   **SHAP Values:** For more complex models (Trees), SHAP values explain the marginal contribution of each feature.

## Usage
Download the notebook below to train the model on sample data.

[Download Notebook](./Credit_Default_Prediction.ipynb)
