from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_viewport_size({"width": 1280, "height": 800})

    print("Verifying ESG Scorecard...")
    page.goto("http://localhost:8000/tools/esg_scorecard.html")
    page.wait_for_selector("text=ESG Credit Scorecard")
    # Verify calculation logic
    page.click("button:has-text('Update Score')")
    score = page.inner_text("#final-score")
    if score == "5.0":
        print("ESG Calc Logic verified (Default 5.0).")
    else:
        print(f"Error: Unexpected ESG Score {score}")
    page.screenshot(path="verification/esg_tool.png")

    print("Verifying Gamification Widget...")
    page.goto("http://localhost:8000/index.html")
    # Wait for the widget to be injected by JS
    page.wait_for_selector("#user-profile-widget", timeout=5000)
    # Check if text "Analyst I" appears
    content = page.inner_text("#user-profile-widget")
    if "Analyst I" in content:
        print("Gamification Widget verified.")
    else:
        print("Error: Widget content mismatch")

    page.screenshot(path="verification/gamification_verified.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
