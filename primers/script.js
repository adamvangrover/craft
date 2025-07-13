// DEVELOPER NOTE: This script handles functionality for:
// 1. The main `primers/index.html` page: search, dynamic Markdown loading, and top navigation.
// 2. Individual primer detail pages (`primers/html/*.html`): "Quick Read", "Toggle All Sections", print preparation.

document.addEventListener('DOMContentLoaded', () => {
    // 0. Update Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Attempt to initialize features for the main primers index page
    if (document.getElementById('mainIndexSearch') && document.getElementById('primer-content-display')) {
        initPrimersIndexPageFeatures();
    }

    // Attempt to initialize features for primer detail pages
    if (document.querySelector('.detail-page-header')) {
        initPrimerDetailPageFeatures();
    }
});

/**
 * Initializes features specific to the main `primers/index.html` page.
 * - Search functionality for primer cards.
 * - Dynamic loading of Markdown content into a display pane.
 * - Populates the top navigation bar.
 */
function initPrimersIndexPageFeatures() {
    const mainIndexSearch = document.getElementById('mainIndexSearch');
    const primerSummaryCards = document.querySelectorAll('.primers-list-container .primer-summary-card');
    const primerContentDisplay = document.getElementById('primer-content-display');
    const topNavList = document.getElementById('top-nav-list');

    if (!mainIndexSearch || primerSummaryCards.length === 0 || !primerContentDisplay || !topNavList) {
        // console.warn("Required elements for Primers Index Page not found. Skipping initialization.");
        return;
    }

    // Populate top navigation
    primerSummaryCards.forEach(card => {
        const title = card.dataset.title;
        const mdFile = card.dataset.mdSrc;
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${mdFile}`;
        link.textContent = title;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            loadAndDisplayMarkdown(mdFile, primerContentDisplay, card);
        });
        listItem.appendChild(link);
        topNavList.appendChild(listItem);
    });

    // Search functionality
    mainIndexSearch.addEventListener('input', () => {
        const searchTerm = mainIndexSearch.value.toLowerCase().trim();
        primerSummaryCards.forEach(card => {
            const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
            const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';
            const summaryTextElement = card.querySelector('.primer-initial-summary');
            const summaryText = summaryTextElement ? summaryTextElement.textContent.toLowerCase() : '';

            if (title.includes(searchTerm) || keywords.includes(searchTerm) || summaryText.includes(searchTerm)) {
                card.style.display = 'flex'; // Assuming cards are flex containers
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Function to load and display Markdown content
    async function loadAndDisplayMarkdown(mdSrcFile, displayElement, clickedCard) {
        if (!mdSrcFile || !displayElement) {
            console.error("Markdown source file or display element not provided.");
            if(displayElement) displayElement.innerHTML = "<p>Error: Content source not specified.</p>";
            return;
        }

        displayElement.innerHTML = "<p>Loading primer content...</p>";

        primerSummaryCards.forEach(card => card.classList.remove('active-primer'));
        if(clickedCard) clickedCard.classList.add('active-primer');

        try {
            const response = await fetch(mdSrcFile); // Assumes mdSrcFile is relative to primers/
            if (!response.ok) {
                throw new Error(`Failed to fetch ${mdSrcFile}: ${response.status} ${response.statusText}`);
            }
            const markdownText = await response.text();
            if (typeof marked !== 'undefined') {
                displayElement.innerHTML = marked.parse(markdownText);
            } else {
                console.error("marked.js library not found. Displaying raw Markdown.");
                // Basic escaping for raw display as a fallback
                displayElement.innerHTML = `<pre>${markdownText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`;
            }
        } catch (error) {
            console.error("Error loading or parsing Markdown:", error);
            displayElement.innerHTML = `<p>Error loading content for ${mdSrcFile}.</p><p><small>${error.message}</small></p>`;
        }
    }

    // Add event listeners to primer cards/links
    primerSummaryCards.forEach(card => {
        const link = card.querySelector('.view-details-link');
        const mdSrc = card.dataset.mdSrc;

        if (link && mdSrc) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                loadAndDisplayMarkdown(mdSrc, primerContentDisplay, card);
            });
        } else if (mdSrc) { // Fallback if no specific link
             card.addEventListener('click', function(event) {
                if (event.target.tagName === 'A' && !event.target.classList.contains('view-details-link')) {
                    // If it's another link (like view-markdown-link-alt or view-html-link), let it behave normally
                    return;
                }
                event.preventDefault();
                loadAndDisplayMarkdown(mdSrc, primerContentDisplay, card);
            });
        }
    });

    // Set initial message for content display area
    if (primerSummaryCards.length > 0) {
        primerContentDisplay.innerHTML = "<p>Select a primer from the list to view its content.</p>";
    } else {
        primerContentDisplay.innerHTML = "<p>No primers available or an error occurred.</p>";
    }
}

/**
 * Initializes features specific to individual primer detail pages (`primers/html/*.html`).
 * - "Quick Read" functionality.
 * - "Toggle All Sections" for accordions.
 * - Print preparation to expand all accordions.
 */
function initPrimerDetailPageFeatures() {
    const detailPageQuickReadBtn = document.getElementById('detailPageQuickReadBtn');
    const pageContainerForQuickRead = document.querySelector('.detail-page-container') || document.body;
    const detailPageToggleAllBtn = document.querySelector('.detail-page-controls .toggle-all-sections-btn');
    const detailPageSections = document.querySelectorAll('.primer-detail-content .primer-section-accordion'); // These are <details> elements

    if (detailPageToggleAllBtn && detailPageSections.length > 0) {
        let allInitiallyOpen = Array.from(detailPageSections).every(section => section.hasAttribute('open'));
        detailPageToggleAllBtn.textContent = allInitiallyOpen ? 'Collapse All Sections' : 'Expand All Sections';
        detailPageToggleAllBtn.setAttribute('aria-expanded', allInitiallyOpen.toString());

        detailPageToggleAllBtn.addEventListener('click', () => {
            let shouldOpenAll = Array.from(detailPageSections).some(section => !section.hasAttribute('open'));
            detailPageSections.forEach(section => {
                shouldOpenAll ? section.setAttribute('open', '') : section.removeAttribute('open');
            });
            detailPageToggleAllBtn.textContent = shouldOpenAll ? 'Collapse All Sections' : 'Expand All Sections';
            detailPageToggleAllBtn.setAttribute('aria-expanded', shouldOpenAll.toString());
        });

        detailPageSections.forEach(section => {
            section.addEventListener('toggle', () => {
                const allAreOpen = Array.from(detailPageSections).every(s => s.hasAttribute('open'));
                detailPageToggleAllBtn.textContent = allAreOpen ? 'Collapse All Sections' : 'Expand All Sections';
                detailPageToggleAllBtn.setAttribute('aria-expanded', allAreOpen.toString());
            });
        });
    }

    if (detailPageQuickReadBtn && pageContainerForQuickRead) {
        detailPageQuickReadBtn.textContent = 'Enable Quick Read';
        detailPageQuickReadBtn.setAttribute('aria-pressed', 'false');

        detailPageQuickReadBtn.addEventListener('click', () => {
            pageContainerForQuickRead.classList.toggle('quick-read-active');
            const isActive = pageContainerForQuickRead.classList.contains('quick-read-active');
            detailPageQuickReadBtn.textContent = isActive ? 'Disable Quick Read' : 'Enable Quick Read';
            detailPageQuickReadBtn.setAttribute('aria-pressed', isActive.toString());

            if (isActive && detailPageSections.length > 0) {
                detailPageSections.forEach(section => {
                    section.removeAttribute('open');
                });
                if (detailPageToggleAllBtn) {
                    detailPageToggleAllBtn.textContent = 'Expand All Sections';
                    detailPageToggleAllBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    }

    // Print Preparation
    if (typeof window.matchMedia === 'function' && detailPageSections.length > 0) {
        let wasQuickReadActiveBeforePrint = false;
        const mediaQueryList = window.matchMedia('print');

        mediaQueryList.addListener((mql) => {
            if (mql.matches) { // Before print
                if (pageContainerForQuickRead) {
                    wasQuickReadActiveBeforePrint = pageContainerForQuickRead.classList.contains('quick-read-active');
                    if (wasQuickReadActiveBeforePrint) {
                        pageContainerForQuickRead.classList.remove('quick-read-active');
                    }
                }
                detailPageSections.forEach(detailsEl => {
                    detailsEl.setAttribute('open', '');
                });
            } else { // After print
                if (pageContainerForQuickRead && wasQuickReadActiveBeforePrint) {
                    pageContainerForQuickRead.classList.add('quick-read-active');
                    if(detailPageQuickReadBtn) {
                         detailPageQuickReadBtn.textContent = 'Disable Quick Read';
                         detailPageQuickReadBtn.setAttribute('aria-pressed', 'true');
                    }
                }
                if (detailPageToggleAllBtn) {
                   const allAreOpen = Array.from(detailPageSections).every(s => s.hasAttribute('open'));
                   detailPageToggleAllBtn.textContent = allAreOpen ? 'Collapse All Sections' : 'Expand All Sections';
                   detailPageToggleAllBtn.setAttribute('aria-expanded', allAreOpen.toString());
                }
            }
        });
    }
});
