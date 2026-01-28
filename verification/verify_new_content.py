from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # 1. Verify Sustainable Finance Hub
    print("Verifying Sustainable Finance Hub...")
    page.goto("http://localhost:8000/Sustainable_Finance/index.html")
    # Wait for the H2 specifically
    page.wait_for_selector("h2:has-text('Interactive Case Studies')")
    page.screenshot(path="verification/sustainable_finance_hub.png")
    print("Sustainable Finance Hub verified.")

    # 2. Verify Wealth Management Hub
    print("Verifying Wealth Management Hub...")
    page.goto("http://localhost:8000/Wealth_Management/index.html")
    # Wait for the H3 specifically inside the new card
    page.wait_for_selector("h3:has-text('Family Office Structures')")
    page.screenshot(path="verification/wealth_management_hub.png")
    print("Wealth Management Hub verified.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
