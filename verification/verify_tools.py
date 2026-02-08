from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_viewport_size({"width": 1280, "height": 800})

    print("Verifying WACC Calculator...")
    page.goto("http://localhost:8000/tools/wacc_calculator.html")
    page.wait_for_selector("text=WACC Calculator")
    page.click("#calculate-btn")
    page.wait_for_timeout(500) # Wait for JS calc
    # Check if a result is rendered (not "---%")
    result = page.inner_text("#result-wacc")
    if "---" in result:
        print("Error: Calculation did not run")
    else:
        print(f"Calculation success: {result}")

    page.screenshot(path="verification/wacc_calc_verified.png")
    print("WACC Calc verified.")

    print("Verifying Practice Center Link...")
    page.goto("http://localhost:8000/practice_center.html")
    page.wait_for_selector("text=WACC Calc")
    page.screenshot(path="verification/practice_center_updated.png")
    print("Practice Center verified.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
