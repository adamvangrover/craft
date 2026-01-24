from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()

    # 1. Verify Showcase
    print("Verifying Showcase...")
    page.goto("http://localhost:8000/showcase.html")
    page.wait_for_load_state("networkidle")

    # Check Header
    assert page.is_visible("text=AI Knowledge Showcase")

    # Check for Download Links (means KB generation worked)
    assert page.is_visible("text=Download JSONL")
    assert page.is_visible("text=Download Graph")

    # Take screenshot of showcase
    page.screenshot(path="verification/showcase.png")
    print("Showcase verified.")

    # 2. Verify Analyst Workbench
    print("Verifying Analyst Workbench...")
    page.goto("http://localhost:8000/practice_center.html")
    page.wait_for_load_state("networkidle")

    # Click Toolkit to see calculators
    page.click("button[data-target='wb-toolkit']")
    assert page.is_visible("text=Simplified DCF Valuator")
    assert page.is_visible("text=Covenant Clause Builder")

    # Check Covenant Builder Dropdown population (from broadly_syndicated_loan_clauses.json)
    # The data loading is async, might need to wait a bit
    page.wait_for_timeout(2000)

    # Select a clause
    dropdown = page.locator("#cov-clause-select")
    # Verify it has options.
    # Since we added "Affirmative Covenants", check for that optgroup label if possible, or just option count.
    # We can check if "Financial Reporting" is an option value or text.

    # Actually, the code creates optgroups.
    # Let's just check if there are options > 1
    count = dropdown.locator("option").count()
    print(f"Clause options found: {count}")
    assert count > 5

    # Click Synthesis to check Memo Builder
    page.click("button[data-target='wb-synthesis']")
    assert page.is_visible("text=Memo Builder Wizard")

    # Check Sector Dropdown
    sector_dropdown = page.locator("#mb-sector")
    sector_count = sector_dropdown.locator("option").count()
    print(f"Sector options found: {sector_count}")
    assert sector_count > 5 # Should include our new ones

    # Take screenshot of workbench
    page.screenshot(path="verification/workbench.png")
    print("Workbench verified.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
