from playwright.sync_api import sync_playwright, Page, expect
import os

BASE_URL = "http://localhost:8000"

def verify_tools(page: Page):
    print(f"Verifying Tools at {BASE_URL}/practice_center.html...")
    page.goto(f"{BASE_URL}/practice_center.html")

    # Dismiss Glossary Modal if it pops up
    if page.locator("#glossary-tutorial-modal").is_visible():
        page.click("#dismiss-glossary-modal")

    # 1. Open Valuation Console
    print("Navigating to Valuation Console...")
    page.click("button[data-target='wb-valuation']")
    expect(page.locator("#wb-valuation")).to_be_visible()

    # 2. Fill DCF inputs
    print("Running DCF Calculation...")
    page.fill("#dcf-fcf", "150")
    page.fill("#dcf-growth", "3")
    page.fill("#dcf-wacc", "10")

    # 3. Calculate DCF
    page.click("#dcf-calc-btn")

    # Expect the DCF Result to be formatted correctly and the link button to show up
    dcf_res = page.locator("#dcf-result").inner_text()
    print(f"DCF Result Output: {dcf_res}")
    expect(page.locator("#dcf-to-waterfall-btn")).to_be_visible()

    # 4. Transfer to Waterfall
    print("Transferring to Waterfall...")
    page.click("#dcf-to-waterfall-btn")

    # Check if value was populated
    wf_ev_val = page.locator("#wf-ev").input_value()
    print(f"Waterfall EV Output: {wf_ev_val}")

    # 5. Calculate Waterfall
    print("Running Waterfall Tool...")
    page.fill("#wf-senior", "200")
    page.fill("#wf-mezz", "100")
    page.fill("#wf-equity", "50")
    page.fill("#wf-mip", "10")
    page.click("#wf-calc-btn")

    # Check for text update
    expect(page.locator("#wf-results >> text='Common Equity Proceeds'")).to_be_visible()

    # Capture state
    if not os.path.exists("verification"):
        os.makedirs("verification")
    page.screenshot(path="verification/valuation_console_verified.png")
    print("Screenshot saved: valuation_console_verified.png")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})
        try:
            verify_tools(page)
            print("Verification Complete")
        except Exception as e:
            print(f"Error details: {e}")
            page.screenshot(path="verification/failure.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
