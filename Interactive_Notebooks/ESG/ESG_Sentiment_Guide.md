# ESG Sentiment Analysis with NLP

> **Buy-Side Perspective:**
> Public ESG scores (like MSCI or Sustainalytics) are often backward-looking. Analysts can get an edge by monitoring real-time sentiment in news and earnings calls. A sudden spike in negative sentiment around "safety" or "governance" can precede a credit event.

## Overview
This notebook demonstrates how to apply basic Natural Language Processing (NLP) techniques to financial news headlines to assess ESG sentiment.

## Key Features
*   **Sentiment Scoring:** Uses the `TextBlob` library to assign polarity scores (-1 to +1) to text.
*   **Data Visualization:** Aggregates sentiment by company to visualize relative performance.
*   **Customizable:** Can be adapted to load real data from APIs or CSV files.

## How to Use
1.  Download the [ESG_Sentiment_Analysis.ipynb](./ESG_Sentiment_Analysis.ipynb) file.
2.  Ensure you have `pandas`, `matplotlib`, and `textblob` installed (`pip install textblob`).
3.  Run the cells to process the mock headlines and generate the sentiment chart.

## Use Cases for Analysts
*   **Early Warning System:** monitoring news feeds for negative spikes.
*   **Peer Comparison:** comparing the "buzz" around different companies' sustainability efforts.
*   **Greenwashing Detection:** comparing positive press releases with negative news coverage.
