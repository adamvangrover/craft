from playwright.sync_api import sync_playwright, Page, expect
import os
import time

BASE_URL = "http://localhost:8000"

def verify_practice_center(page: Page):
    print(f"Verifying Practice Center at {BASE_URL}/practice_center.html...")
    page.goto(f"{BASE_URL}/practice_center.html")

    # 1. Wait for Dashboard to load and take a screenshot
    page.wait_for_selector("#wb-dashboard")
    expect(page.locator("#wb-dashboard")).to_be_visible()

    if not os.path.exists("verification"):
        os.makedirs("verification")

    page.screenshot(path="verification/practice_center_dashboard.png")
    print("Screenshot saved: practice_center_dashboard.png")

    # Dismiss Glossary Modal if it pops up
    if page.locator("#glossary-tutorial-modal").is_visible():
        page.click("#dismiss-glossary-modal")

    # 2. Verify Glossary Modal
    print("Verifying Glossary Tutorial Modal...")
    # Open the glossary tab
    page.click("button[data-target='wb-glossary']")
    expect(page.locator("#wb-glossary")).to_be_visible()

    # Open the modal
    page.click("#glossary-tutorial-btn")
    expect(page.locator("#glossary-tutorial-modal")).to_be_visible()

    page.screenshot(path="verification/practice_center_glossary_modal.png")
    print("Screenshot saved: practice_center_glossary_modal.png")

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        try:
            verify_practice_center(page)
            print("Verification Complete")
        except Exception as e:
            print(f"Error details: {e}")
            page.screenshot(path="verification/failure.png")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
