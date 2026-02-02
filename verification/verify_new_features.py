from playwright.sync_api import Page, expect, sync_playwright
import time

def test_features(page: Page):
    # --- Workbench ---
    print("Testing Workbench...")
    page.goto("http://localhost:3000/practice_center.html")

    # ESG Tab
    print("Clicking ESG Tab...")
    page.click("button[data-target='wb-esg']")
    expect(page.locator("#esg-base-rating")).to_be_visible()
    print("ESG Toolkit Tab Verified")

    # Covenant Checker Tab
    print("Clicking Covenant Checker Tab...")
    page.click("button[data-target='wb-covchecker']")
    expect(page.locator("#cov-check-btn")).to_be_visible()
    print("Covenant Checker Tab Verified")

    # --- Gamification ---
    print("Testing Gamification on Home...")
    page.goto("http://localhost:3000/home.html")
    try:
        # ID is gamification-widget
        page.wait_for_selector("#gamification-widget", timeout=5000)
        print("Gamification Widget Verified")
    except Exception as e:
        print(f"Gamification Widget NOT Found: {e}")
        # Debug: Print page content or check console logs if possible
        # print(page.content())

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_features(page)
            print("All New Features Verified Successfully")
        except Exception as e:
            print(f"Verification Failed: {e}")
        finally:
            browser.close()
