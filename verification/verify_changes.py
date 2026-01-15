
from playwright.sync_api import sync_playwright

def verify_showcase_and_workbench():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Showcase Page
        print("Navigating to Showcase...")
        page.goto("http://localhost:8000/showcase.html")
        page.wait_for_load_state("networkidle")

        # Check title
        assert "AI Knowledge Showcase" in page.title()

        # Check stats are populated (not dashes)
        page.wait_for_selector("#stat-nodes", state="visible")
        nodes_text = page.locator("#stat-nodes").inner_text()
        print(f"Graph Nodes found: {nodes_text}")
        assert nodes_text != "---"

        # Screenshot Showcase
        page.screenshot(path="verification/showcase_page.png")
        print("Showcase screenshot saved.")

        # 2. Verify Analyst Workbench (New Tools)
        print("Navigating to Analyst Workbench...")
        page.goto("http://localhost:8000/practice_center.html")
        page.wait_for_load_state("networkidle")

        # Open Toolkit Section
        page.click("button[data-target='wb-toolkit']")
        page.wait_for_selector("#wb-toolkit", state="visible")

        # Check EV Bridge
        page.wait_for_selector("#ev-calc-btn", state="visible")
        print("EV Bridge found.")

        # Test EV Calculation
        page.fill("#ev-equity", "100")
        page.fill("#ev-debt", "50")
        page.fill("#ev-cash", "10")
        page.click("#ev-calc-btn")

        # Result should be 140
        result = page.locator("#ev-result").inner_text()
        print(f"EV Calculation Result: {result}")
        assert "$140" in result

        # Screenshot Toolkit with EV
        page.screenshot(path="verification/workbench_toolkit.png")

        # 3. Verify Memo Builder
        # Open Synthesis Section
        page.click("button[data-target='wb-synthesis']")
        page.wait_for_selector("#wb-synthesis", state="visible")

        # Check Wizard Inputs
        page.wait_for_selector("#mb-borrower", state="visible")
        print("Memo Builder found.")

        # Fill Form
        page.fill("#mb-borrower", "Test Co")
        page.fill("#mb-facility", "Term Loan B")
        page.fill("#mb-amount", "500")
        page.fill("#mb-pricing", "S+400")
        page.fill("#mb-thesis", "- Market Leader\n- Strong Cash Flow")
        page.fill("#mb-risks", "- Competition\n- Cyclicality")

        # Click Generate
        page.click("#mb-generate-btn")

        # Check Output
        output_val = page.input_value("#cm-editor")
        print("Memo generated successfully.")
        assert "Test Co" in output_val
        assert "Market Leader" in output_val

        # Screenshot Memo Builder
        page.screenshot(path="verification/workbench_memo.png")

        browser.close()

if __name__ == "__main__":
    verify_showcase_and_workbench()
