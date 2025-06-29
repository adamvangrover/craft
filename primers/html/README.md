# Industry Primers - Static HTML Versions

## Overview

This directory stores static HTML versions of the industry primers. The source content for these primers is authored in Markdown (`.md`) files located in the parent `primers/` directory.

## Purpose

These HTML files provide an alternative, pre-rendered format for viewing the industry primers. They are typically linked from the main [Industry Primers Interactive Hub](../../index.html) as "View Enhanced HTML" options.

The primary method for browsing primer content is intended to be the interactive hub, which dynamically loads and renders the source Markdown files. These static HTML versions offer:

*   A fallback or alternative view.
*   Potentially different styling or a more "article-like" presentation if their CSS differs from the dynamic Markdown rendering.
*   A version that does not require JavaScript for content rendering (though overall site navigation might still use JS).

## Contents

This directory contains one `.html` file for each corresponding `.md` primer in the parent directory (e.g., `aerospace_defense.html` corresponds to `../../aerospace_defense.md`).

## Generation Process

These HTML files are typically generated from their Markdown source files. This process might be:

*   **Manual:** Using a Markdown-to-HTML converter tool (e.g., Pandoc, or an online converter).
*   **Scripted:** Using a build script within the repository (if one exists) that automates the conversion.

**Important:** When a source `.md` primer in the parent `primers/` directory is updated, the corresponding `.html` file in this directory **must also be regenerated or updated** to reflect the changes.

For agent instructions on managing these files, refer to `primers/html/AGENTS.MD`.
