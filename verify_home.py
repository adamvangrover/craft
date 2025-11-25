from playwright.sync_api import sync_playwright

def verify_home():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})

        # 1. Visit Home
        page.goto("http://localhost:8000/home.html")
        page.wait_for_load_state("networkidle")

        # Screenshot Hero
        page.screenshot(path="verification_home_hero.png")

        # Scroll to Featured Content
        page.locator("#featured-content").scroll_into_view_if_needed()
        page.wait_for_timeout(500) # Wait for potential animations
        page.screenshot(path="verification_home_featured.png")

        # 2. Visit Pedagogy
        page.goto("http://localhost:8000/global_markdown_viewer.html?mdfile=PEDAGOGY.md")
        page.wait_for_load_state("networkidle")
        # Wait for content to render (marked.js)
        page.wait_for_selector("#markdown-content h1")

        page.screenshot(path="verification_pedagogy.png")

        browser.close()

if __name__ == "__main__":
    verify_home()
