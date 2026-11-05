#!/usr/bin/env python3
"""Bounded local Chromium smoke for an existing public Eleusis experience.

No personal test data, production writes, site deployment, telemetry or
external requests. This is not source-history/asset-rights/privacy clearance.
"""
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
URI = (ROOT / "index.html").as_uri()

VIEWPORTS = (
    ("desktop", {"width": 1366, "height": 850}),
    ("mobile", {"width": 375, "height": 812}),
)
RETURN_PROBE = '<img src=x onerror="window.__eleusisProbe=1">'
TITLE_PROBE = '<svg onload="window.__eleusisProbe=1">'

def demand(value, stage):
    if not value:
        raise AssertionError(stage)

def examine(page, label):
    errors, external = [], []
    page.on("pageerror", lambda _error: errors.append("javascript-error"))
    page.on("request", lambda req: external.append("external-request")
            if req.url.startswith(("http://", "https://")) else None)
    page.goto(URI, wait_until="load", timeout=25000)
    demand(page.title() == "The Mysteries of Eleusis", label + ":title")
    demand(page.locator("main").count() == 1, label + ":main")
    demand(page.locator("#customWord").count() == 1, label + ":return-ui")
    demand(page.locator("#mysteryForm input[name=title]").count() == 1, label + ":builder")
    page.evaluate("window.__eleusisProbe=0")
    button = page.locator('button[data-mode="lowSensory"]')
    button.click()
    demand(button.get_attribute("aria-pressed") == "true", label + ":low-sensory")
    page.locator("#resetModes").click()
    demand(button.get_attribute("aria-pressed") == "false", label + ":reset")

    page.locator("#customWord").fill(RETURN_PROBE)
    page.locator("#customWordButton").click()
    return_panel = page.locator("#returnPanel")
    demand(RETURN_PROBE in return_panel.inner_text(), label + ":literal-return-text")
    demand(return_panel.locator("img").count() == 0, label + ":return-injection")
    demand(page.evaluate("window.__eleusisProbe") == 0, label + ":return-onerror")

    page.locator('#mysteryForm input[name="title"]').fill(TITLE_PROBE)
    blueprint = page.locator("#blueprint")
    demand(TITLE_PROBE in blueprint.inner_text(), label + ":literal-title-text")
    demand(blueprint.locator("svg").count() == 0, label + ":builder-injection")
    demand(page.evaluate("window.__eleusisProbe") == 0, label + ":builder-onload")
    demand(not page.evaluate(
        "document.documentElement.scrollWidth > window.innerWidth + 2"),
        label + ":horizontal-overflow")
    demand(not external, label + ":unexpected-network")
    demand(not errors, label + ":javascript-exception")

def main():
    try:
        from playwright.sync_api import sync_playwright
    except ImportError:
        raise AssertionError("browser-test-dependency-unavailable") from None
    with sync_playwright() as runtime:
        browser = runtime.chromium.launch(headless=True)
        try:
            for label, viewport in VIEWPORTS:
                context = browser.new_context(viewport=viewport)
                try:
                    page = context.new_page()
                    examine(page, label)
                    print(f"PASS: {label} local controls, escaped inputs, no external network", flush=True)
                finally:
                    context.close()
        finally:
            browser.close()
    print("BROWSER SMOKE PASS: 2/2 viewports; not a publication or rights certificate")

if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        # Tests use only invented data; never emit raw user or environment data.
        print("BROWSER SMOKE NOT VERIFIED: " + (str(error) if isinstance(error, AssertionError) else "runtime-error"),
              file=sys.stderr)
        sys.exit(1)
