from playwright.sync_api import sync_playwright

def capture_screenshots():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.set_viewport_size({"width": 1280, "height": 800})

        # 1. Home - Gamification
        print("Capturing Home...")
        page.goto("http://localhost:3000/home.html")
        try:
            page.wait_for_selector("#gamification-widget", timeout=5000)
        except:
            print("Widget not found immediately")
        page.screenshot(path="verification/home_gamified.png")

        # 2. Workbench - ESG
        print("Capturing Workbench ESG...")
        page.goto("http://localhost:3000/practice_center.html")
        page.click("button[data-target='wb-esg']")
        page.wait_for_timeout(500)
        page.screenshot(path="verification/workbench_esg.png")

        # 3. Workbench - Covenant
        print("Capturing Workbench Covenant...")
        page.click("button[data-target='wb-covchecker']")
        page.wait_for_timeout(500)
        page.screenshot(path="verification/workbench_covenant.png")

        # 4. Sustainable Hub
        print("Capturing Sustainable Hub...")
        page.goto("http://localhost:3000/Sustainable_Finance/index.html")
        page.screenshot(path="verification/sustainable_hub.png")

        # 5. Wealth Hub
        print("Capturing Wealth Hub...")
        page.goto("http://localhost:3000/Wealth_Management/index.html")
        page.screenshot(path="verification/wealth_hub.png")

        browser.close()

if __name__ == "__main__":
    capture_screenshots()
