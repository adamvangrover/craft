from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # We need to set the local storage BEFORE loading to prevent modal from blocking clicks
        page.goto("http://localhost:8000/practice_center.html")
        page.evaluate("localStorage.setItem('craft_wb_glossary_tutorial_seen', 'true')")
        page.reload()

        # Go to Valuation
        page.click("button[data-target='wb-valuation']")
        page.wait_for_selector("#wb-valuation")
        page.screenshot(path="verification/valuation_console.png")

        # Go to Coding
        page.click("button[data-target='wb-coding']")
        page.wait_for_selector("#wb-coding")
        page.screenshot(path="verification/coding_lab.png")

        # Go to Credit Scorer
        page.click("button[data-target='wb-creditscorer']")
        page.wait_for_selector("#wb-creditscorer")
        page.screenshot(path="verification/credit_scorer.png")

        # Go to AI command center (Prompt Library)
        page.click("button[data-target='wb-ai']")
        page.wait_for_selector("#wb-ai")
        # Change prompt sort to latest
        page.select_option("#prompt-sort", "latest")
        page.screenshot(path="verification/prompt_library.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
