
import asyncio
from playwright.async_api import async_playwright
import os

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Base URL - assuming running on localhost:3000 as per previous context
        base_url = "http://localhost:3000"

        print("Capturing Quantitative Finance Hub...")
        await page.goto(f"{base_url}/Quantitative_Finance/index.html")
        await page.screenshot(path="verification_quant_hub.png", full_page=True)

        print("Capturing Option Pricer Tool...")
        await page.goto(f"{base_url}/tools/option_pricer.html")
        await page.screenshot(path="verification_option_pricer.png", full_page=True)

        print("Capturing Risk Management Hub (with new Tools section)...")
        await page.goto(f"{base_url}/Risk_Management/index.html")
        await page.screenshot(path="verification_risk_hub.png", full_page=True)

        print("Capturing VaR Calculator...")
        await page.goto(f"{base_url}/tools/var_calculator.html")
        await page.screenshot(path="verification_var_calc.png", full_page=True)

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
