from playwright.sync_api import sync_playwright

def verify_workbench():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:8000/practice_center.html")

        # Verify Deal Screener
        page.click("button[data-target='wb-dealscreener']")
        page.wait_for_selector("#ds-table-body tr")
        print("Deal Screener loaded.")

        # Verify Credit Scorer
        page.click("button[data-target='wb-creditscorer']")
        page.wait_for_selector("#cs-fin-inputs input")
        print("Credit Scorer loaded.")

        # Verify Toolkit
        page.click("button[data-target='wb-toolkit']")
        page.wait_for_selector("#maturity-chart")
        print("Toolkit & Maturity Visualizer loaded.")

        # Verify Glossary & Flashcards
        page.click("button[data-target='wb-glossary']")
        page.click("#fc-toggle-btn")
        page.wait_for_selector("#flashcard-ui:not(.hidden)")
        print("Flashcard UI loaded.")

        # Take screenshot of Flashcard UI
        page.screenshot(path="verification/workbench_features.png")

        browser.close()

if __name__ == "__main__":
    verify_workbench()
