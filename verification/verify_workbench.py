from playwright.sync_api import Page, expect, sync_playwright
import time
import re

def test_workbench(page: Page):
    # 1. Go to Workbench
    page.goto("http://localhost:3000/practice_center.html")

    # 2. Click Synthesis (Memo Builder)
    page.click("button[data-target='wb-synthesis']")

    # 3. Verify Sector Dropdown exists
    dropdown = page.locator("#mb-sector")
    expect(dropdown).to_be_visible()

    page.wait_for_timeout(1000)

    # 4. Select index 1
    dropdown.select_option(index=1)
    dropdown.dispatch_event("change")

    # 5. Verify Thesis area
    thesis = page.locator("#mb-thesis")

    page.wait_for_timeout(500)

    # Use to_have_value with regex
    expect(thesis).to_have_value(re.compile("recurring revenue"))

    print("Memo Builder Verified")

    # Take screenshot of Memo Builder
    page.screenshot(path="verification/memo_builder.png")

    # 6. Click Toolkit (for Covenant Builder)
    page.click("button[data-target='wb-toolkit']")

    # 7. Check Covenant Builder Dropdown
    cov_select = page.locator("#cov-clause-select")

    # Wait for optgroups
    page.wait_for_timeout(500)
    expect(cov_select.locator("optgroup")).not_to_have_count(0)

    # Select a clause
    cov_select.select_option(label="Limitation on Indebtedness")

    # Click Add
    page.click("#cov-add-btn")

    # Verify Output
    output = page.locator("#cov-output")
    # Output is a textarea too? Yes.
    expect(output).to_have_value(re.compile("The Borrower shall not"))

    print("Covenant Builder Verified")

    # Take screenshot of Covenant Builder
    page.screenshot(path="verification/covenant_builder.png")

if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            test_workbench(page)
            print("Verification Successful")
        except Exception as e:
            print(f"Verification Failed: {e}")
        finally:
            browser.close()
