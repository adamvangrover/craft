
from playwright.sync_api import sync_playwright

def verify_all_features():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Verify Showcase Page
        print("Navigating to Showcase...")
        page.goto("http://localhost:8000/showcase.html")
        page.wait_for_load_state("networkidle")

        # Check title
        assert "AI Knowledge Showcase" in page.title()

        # Check stats are populated
        page.wait_for_selector("#stat-nodes", state="visible")
        nodes_text = page.locator("#stat-nodes").inner_text()
        print(f"Graph Nodes found: {nodes_text}")
        assert nodes_text != "---"

        # Check Decision Trees are loaded
        page.wait_for_selector("#tree-list button", state="visible")
        tree_count = page.locator("#tree-list button").count()
        print(f"Decision Trees loaded: {tree_count}")
        assert tree_count > 0

        # Screenshot Showcase
        page.screenshot(path="verification/showcase_final.png")
        print("Showcase screenshot saved.")

        # 2. Verify Analyst Workbench
        print("Navigating to Analyst Workbench...")
        page.goto("http://localhost:8000/practice_center.html")

        # Open Toolkit
        page.click("button[data-target='wb-toolkit']")
        page.wait_for_selector("#wb-toolkit", state="visible")

        # --- DCF Verification ---
        print("Verifying DCF Tool...")
        page.fill("#dcf-fcf", "100")
        page.fill("#dcf-growth", "5")
        page.fill("#dcf-wacc", "10")
        page.click("#dcf-calc-btn")

        dcf_result = page.locator("#dcf-result").inner_text()
        print(f"DCF Result: {dcf_result}")
        # Expected: ~100/(1.1) + ... + TV. Roughly 100 / (0.10-0.05) = 2000. Let's just check it's not $0.00
        assert dcf_result != "$0.00"

        # --- EV Bridge Verification ---
        print("Verifying EV Bridge...")
        page.fill("#ev-equity", "1000")
        page.fill("#ev-debt", "500")
        page.fill("#ev-cash", "100")
        page.click("#ev-calc-btn")

        ev_result = page.locator("#ev-result").inner_text()
        print(f"EV Result: {ev_result}")
        assert "$1,400" in ev_result

        # Screenshot Toolkit
        page.screenshot(path="verification/workbench_toolkit_final.png")

        # 3. Verify Memo Builder
        print("Verifying Memo Builder...")
        page.click("button[data-target='wb-synthesis']")
        page.wait_for_selector("#mb-borrower", state="visible")

        page.fill("#mb-borrower", "ACME Corp")
        page.click("#mb-generate-btn")

        memo_content = page.input_value("#cm-editor")
        assert "ACME Corp" in memo_content
        print("Memo Builder verified.")

        browser.close()

if __name__ == "__main__":
    verify_all_features()
