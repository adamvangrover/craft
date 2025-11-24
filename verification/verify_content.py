from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Sustainable Finance
        print("Verifying Sustainable Finance Hub...")
        page.goto("http://localhost:8000/Sustainable_Finance/index.html")
        # Expect "Transition Finance & SLBs" card title (heading)
        expect(page.get_by_role("heading", name="Transition Finance & SLBs")).to_be_visible()
        # Expect "Carbon Credit Quality" deep dive heading
        expect(page.get_by_role("heading", name="Carbon Credit Quality")).to_be_visible()
        page.screenshot(path="verification/sustainable_finance.png", full_page=True)

        # 2. Wealth Management
        print("Verifying Wealth Management Hub...")
        page.goto("http://localhost:8000/Wealth_Management/index.html")
        # Expect "Advanced Coaching" card title
        expect(page.get_by_role("heading", name="Advanced Coaching")).to_be_visible()
        page.screenshot(path="verification/wealth_management.png", full_page=True)

        # 3. Glossary
        print("Verifying Glossary...")
        page.goto("http://localhost:8000/global_markdown_viewer.html?mdfile=Global_Financial_Glossary.md")
        page.wait_for_selector("#markdown-content")
        # Look for Transition Finance. Markdown renders it as a list item or bold text.
        # We'll use text locator but with .first to avoid strict mode if multiple
        # Or specifically look for the definition line
        try:
            # "Transition Finance: Financing provided..."
            # It's inside a <ul> or <p> depending on marked.js
            # Let's check if we can find the bold term
            expect(page.get_by_text("Transition Finance:", exact=False).first).to_be_visible(timeout=5000)
            print("Transition Finance term found.")
        except Exception as e:
            print(f"Transition Finance term NOT found: {e}")

        page.screenshot(path="verification/glossary.png", full_page=True)

        browser.close()

if __name__ == "__main__":
    run()
