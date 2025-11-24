from playwright.sync_api import sync_playwright

def verify_hubs():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify Sustainable Finance
        print("Checking Sustainable Finance...")
        page.goto("http://localhost:8000/Sustainable_Finance/index.html")
        page.wait_for_selector("h1") # Wait for header
        page.screenshot(path="/home/jules/verification/sustainable_finance.png", full_page=True)
        print("Screenshot saved: sustainable_finance.png")

        # Verify Wealth Management
        print("Checking Wealth Management...")
        page.goto("http://localhost:8000/Wealth_Management/index.html")
        page.wait_for_selector("h1")
        page.screenshot(path="/home/jules/verification/wealth_management.png", full_page=True)
        print("Screenshot saved: wealth_management.png")

        browser.close()

if __name__ == "__main__":
    verify_hubs()
