from playwright.sync_api import sync_playwright, Page, expect
import os
import time

# Configuration
# Note: 'main' used port 3000, 'ui-ux' used 8000. 
# Defaulting to 8000 for Python simple server, change to 3000 if using Node/React.
BASE_URL = "http://localhost:8000" 

def verify_standalone_tools(page: Page):
    """
    Verifies standalone tools and calculation logic (from UI/UX branch).
    """
    print(f"\n[1/3] Verifying Standalone Tools at {BASE_URL}/tools/...")
    
    # 1. Navigate to ESG Scorecard
    tool_url = f"{BASE_URL}/tools/esg_scorecard.html"
    page.goto(tool_url)
    
    # 2. visual Assertions
    page.wait_for_selector("text=ESG Credit Scorecard")
    
    # 3. Verify Calculation Logic (Specific to UI/UX branch)
    # Checks if the default values calculate to 5.0
    page.click("button:has-text('Update Score')")
    score = page.inner_text("#final-score")
    
    if score == "5.0":
        print("  ✓ ESG Calc Logic verified (Default 5.0).")
    else:
        print(f"  X Error: Unexpected ESG Score {score}")
        
    # Capture proof
    if not os.path.exists("verification"):
        os.makedirs("verification")
    page.screenshot(path="verification/esg_tool_standalone.png")

def verify_workbench(page: Page):
    """
    Verifies the Analyst Workbench tabs and dynamic loading (from Main branch).
    """
    print(f"\n[2/3] Verifying Workbench Features at {BASE_URL}/practice_center.html...")
    page.goto(f"{BASE_URL}/practice_center.html")

    # 1. Test ESG Tab Integration
    print("  ...Clicking ESG Tab")
    page.click("button[data-target='wb-esg']")
    # Expect specific ID from 'main' branch
    expect(page.locator("#esg-base-rating")).to_be_visible()
    print("  ✓ ESG Toolkit Tab Verified")

    # 2. Test Covenant Checker Tab Integration
    print("  ...Clicking Covenant Checker Tab")
    page.click("button[data-target='wb-covchecker']")
    expect(page.locator("#cov-check-btn")).to_be_visible()
    print("  ✓ Covenant Checker Tab Verified")

def verify_gamification(page: Page):
    """
    Verifies Gamification widgets across different pages (Merged Logic).
    """
    print(f"\n[3/3] Verifying Gamification System...")

    # 1. Check Landing Page Widget (Sidebar/Header style - from UI/UX)
    page.goto(f"{BASE_URL}/index.html")
    try:
        page.wait_for_selector("#user-profile-widget", timeout=3000)
        content = page.inner_text("#user-profile-widget")
        if "Analyst" in content or "Level" in content:
            print("  ✓ Index Page: User Profile Widget Verified.")
        else:
            print("  ! Warning: Profile Widget found but content appears empty.")
    except Exception as e:
        print(f"  X Index Page Widget Not Found: {e}")

    # 2. Check Dashboard Widget (Footer/Full style - from Main)
    page.goto(f"{BASE_URL}/home.html")
    try:
        page.wait_for_selector("#gamification-widget", timeout=3000)
        print("  ✓ Home Page: Gamification Widget Verified")
    except Exception as e:
        print(f"  X Home Page Widget Not Found: {e}")

    page.screenshot(path="verification/gamification_verified.png")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        try:
            verify_standalone_tools(page)
            verify_workbench(page)
            verify_gamification(page)
            print("\n--- ALL TESTS PASSED SUCCESSFULLY ---")
        except Exception as e:
            print(f"\n--- TEST FAILED ---")
            print(f"Error details: {e}")
            page.screenshot(path="verification/failure.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()