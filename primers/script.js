// DEVELOPER NOTE: This script handles functionality for:
// 1. The main `primers/index.html` page: search, dynamic Markdown loading.
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
 */
function initPrimersIndexPageFeatures() {
    const mainIndexSearch = document.getElementById('mainIndexSearch');
    const primerSummaryCards = document.querySelectorAll('.primers-list-container .primer-summary-card');
    const primerContentDisplay = document.getElementById('primer-content-display');

    if (!mainIndexSearch || primerSummaryCards.length === 0 || !primerContentDisplay) {
        // console.warn("Required elements for Primers Index Page not found. Skipping initialization.");
        return;
    }

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

/*
// DEVELOPER NOTE: The following JavaScript block was part of a merge conflict.
// It appears to be for an alternative HTML structure (primers-grid, different searchBar ID,
// and accordions embedded directly in the index page cards, plus a simpler .primer-entry toggle).
// It has been commented out to preserve the code, as per user request, while the version above is active.
// ```
//    // 1. Search Functionality
//    const searchBar = document.getElementById('searchBar');
//    const primerCards = document.querySelectorAll('.primer-card');

//    if (searchBar && primerCards.length > 0) {
//        searchBar.addEventListener('input', () => {
//            const searchTerm = searchBar.value.toLowerCase().trim();
//            filterPrimerCards(searchTerm);
//        });
//    }

//    function filterPrimerCards(searchTerm) {
//        primerCards.forEach(card => {
//            const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
//            const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';

//            // Check if search term is in title OR keywords
//            if (title.includes(searchTerm) || keywords.includes(searchTerm)) {
//                card.style.display = 'flex';
//            } else {
//                card.style.display = 'none';
//            }
//        });
//    }

//    // 2. "Toggle All Sections" Button per Primer Card
//    primerCards.forEach(card => {
//        const toggleAllBtn = card.querySelector('.toggle-all-sections-btn');
//        const sections = card.querySelectorAll('.primer-section-accordion'); // These are <details> elements

//        if (toggleAllBtn && sections.length > 0) {
//            toggleAllBtn.addEventListener('click', () => {
//                // Determine if the primary action should be to open or close sections.
//                // If even one section is closed, the button's action will be to open all.
//                // Otherwise (if all are open), its action will be to close all.
//                let shouldOpenAll = Array.from(sections).some(section => !section.hasAttribute('open'));

//                sections.forEach(section => {
//                    if (shouldOpenAll) {
//                        section.setAttribute('open', '');
//                    } else {
//                        section.removeAttribute('open');
//                    }
//                });
//                // Update button text and ARIA attribute based on the action just performed.
//                toggleAllBtn.textContent = shouldOpenAll ? 'Collapse All' : 'Expand All';
//                toggleAllBtn.setAttribute('aria-expanded', shouldOpenAll.toString());
//            });

//            // Set initial button text and ARIA attribute.
//            // Assumes sections are closed by default. If any are open by default in HTML, this might need adjustment.
//            toggleAllBtn.textContent = 'Expand All';
//            toggleAllBtn.setAttribute('aria-expanded', 'false');

//            // Add event listeners to individual sections to update the "Toggle All" button state
//            // if the user manually opens/closes individual accordions.
//            sections.forEach(section => {
//                section.addEventListener('toggle', () => {
//                    const allAreOpen = Array.from(sections).every(s => s.hasAttribute('open'));

//                    if (allAreOpen) {
//                        toggleAllBtn.textContent = 'Collapse All';
//                        toggleAllBtn.setAttribute('aria-expanded', 'true');
//                    } else {
//                        // If any section is closed (even if others are open),
//                        // the button should offer to "Expand All".
//                        toggleAllBtn.textContent = 'Expand All';
//                        toggleAllBtn.setAttribute('aria-expanded', 'false');
//                    }
//                });
//            });
//        }
//    });
//});
//```
//    const searchBar = document.getElementById('searchBar');
//    const primerEntries = document.querySelectorAll('.primer-entry');

//    // Search functionality
//    searchBar.addEventListener('keyup', (e) => {
//        const searchTerm = e.target.value.toLowerCase();

//        primerEntries.forEach(entry => {
//            const title = entry.dataset.title.toLowerCase();
//            if (title.includes(searchTerm)) {
//                entry.style.display = '';
//            } else {
//                entry.style.display = 'none';
//            }
//        });
//    });

//    // Collapsible section functionality
//    primerEntries.forEach(entry => {
//        const titleElement = entry.querySelector('.primer-title');
//        const summaryElement = entry.querySelector('.primer-summary');

//        if (titleElement && summaryElement) {
//            titleElement.addEventListener('click', (event) => {
//                // Prevent link navigation if the click is not directly on the <a> tag,
//                // or allow navigation if it is. For simplicity, let's toggle summary visibility.
//                // The link will work independently.
//                summaryElement.classList.toggle('active');
//            });
//        }
//    });
//});

