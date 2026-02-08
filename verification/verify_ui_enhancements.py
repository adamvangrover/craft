from playwright.sync_api import sync_playwright
import os

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.set_viewport_size({"width": 1280, "height": 800})

    print("Verifying Dashboard...")
    page.goto("http://localhost:8000/index.html")
    # Be specific: Look for the H3 inside the New Arrivals section
    page.wait_for_selector("h3:has-text('ESG Sentiment Analysis')")
    page.screenshot(path="verification/dashboard_new.png")
    print("Dashboard verified.")

    print("Verifying Showcase...")
    page.goto("http://localhost:8000/showcase.html")
    page.wait_for_selector("#search-input")
    page.screenshot(path="verification/showcase_new.png")
    print("Showcase verified.")

    print("Verifying Markdown Viewer & Nav...")
    page.goto("http://localhost:8000/global_markdown_viewer.html?mdfile=Risk_Management/Market_Risk/Deep_Dives/Advanced_Derivatives.md")
    page.wait_for_selector("#markdown-content")
    # Wait for the sidebar to populate active link
    page.wait_for_selector(".active-nav-link")
    page.screenshot(path="verification/viewer_new.png")
    print("Viewer verified.")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
