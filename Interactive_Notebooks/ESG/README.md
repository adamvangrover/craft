> **Buy-Side Perspective:** In the age of "Greenwashing," glossy PDF sustainability reports are useless. The real alpha lies in unstructured data. By analyzing the sentiment and semantic density of earnings call transcripts, analysts can detect when management is pivoting *away* from ESG commitments before it hits the capex guidance. This notebook demonstrates how to build a basic NLP detector for such signals.

# ESG Sentiment Analysis & Greenwashing Detection

## Overview

This notebook provides a Python framework for scraping, processing, and analyzing financial texts for ESG signals.

**Learning Objectives:**
1.  **Text Preprocessing:** Cleaning financial text (removing stopwords, lemmatization).
2.  **Keyword Density:** Measuring the frequency of "E", "S", and "G" terms.
3.  **Sentiment Analysis:** Using `TextBlob` or `VADER` to determine if the context around ESG terms is positive (committal) or vague (evasive).
4.  **Greenwashing Flag:** Identifying high frequency of buzzwords with low specificity or neutral sentiment.

## Key Sections

### 1. The Dictionary
We define specific lexicons for Environmental, Social, and Governance topics to filter the noise.
*   *Environment:* "Carbon", "Scope 3", "Net Zero", "Renewable", "Biodiversity".
*   *Social:* "Diversity", "Labor", "Safety", "Community", "Human Rights".
*   *Governance:* "Board", "Executive Pay", "Audit", "Compliance", "Shareholder".

### 2. The Analysis Logic
We compare "General Sentiment" (entire call) vs. "ESG Sentiment" (sentences containing keywords).
*   **Hypothesis:** If a company is greenwashing, they might have high *frequency* of ESG terms but widely divergent *sentiment* or low *complexity* (simple, repetitive slogans).

## Usage
Download the `.ipynb` file linked below to run the code locally. You will need `pandas`, `matplotlib`, and `nltk`.

[Download Notebook](./ESG_Sentiment_Analysis.ipynb)
