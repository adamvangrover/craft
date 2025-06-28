// DEVELOPER NOTE: Merge conflict resolved.
// The JavaScript code below is the primary version, supporting:
// 1. Search functionality on `primers/index.html` (for `mainIndexSearch` and `primer-summary-card`s).
// 2. "Quick Read" and "Toggle All Sections" functionality on separate detail pages (`primers/html/*.html`).
// 3. Print preparation for detail pages.
// The conflicting secondary JavaScript block (which handled different element IDs and logic for embedded accordions on the index page)
// has been commented out at the end of this file to preserve it.

document.addEventListener('DOMContentLoaded', () => {

    // 0. Update Current Year in Footer (Common to all pages that include this script and have the #currentYear span)
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- MAIN INDEX PAGE (`primers/index.html`) SPECIFIC LOGIC ---
    // Handles search functionality for the primer navigator page.
    const mainIndexSearch = document.getElementById('mainIndexSearch');
    const primerSummaryCards = document.querySelectorAll('.main-index-container .primer-summary-card'); // More specific selector

    if (mainIndexSearch && primerSummaryCards.length > 0) {
        mainIndexSearch.addEventListener('input', () => {
            const searchTerm = mainIndexSearch.value.toLowerCase().trim();
            primerSummaryCards.forEach(card => {
                const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
                const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';
                const summaryTextElement = card.querySelector('.primer-initial-summary'); // Target the div
                const summaryText = summaryTextElement ? summaryTextElement.textContent.toLowerCase() : '';


                if (title.includes(searchTerm) || keywords.includes(searchTerm) || summaryText.includes(searchTerm)) {
                    card.style.display = 'flex'; // Assuming cards are flex containers
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // --- DETAIL PAGE (`primers/html/*.html`) SPECIFIC LOGIC ---
    // This logic should only run if elements specific to detail pages are present.
    const detailPageQuickReadBtn = document.getElementById('detailPageQuickReadBtn');
    // Check if we are on a detail page by looking for a unique element, like the quick read button or specific header structure.
    // For example, we can check if '.detail-page-header' exists.
    const isDetailPage = document.querySelector('.detail-page-header') !== null;


    if (isDetailPage) {
        const pageContainerForQuickRead = document.querySelector('.detail-page-container') || document.body;
        const detailPageToggleAllBtn = document.querySelector('.detail-page-controls .toggle-all-sections-btn');
        const detailPageSections = document.querySelectorAll('.primer-detail-content .primer-section-accordion'); // These are <details> elements

        // "Toggle All Sections" Button functionality for detail page
        if (detailPageToggleAllBtn && detailPageSections.length > 0) {
            // Initial state setup
            let allInitiallyOpen = Array.from(detailPageSections).every(section => section.hasAttribute('open'));
            detailPageToggleAllBtn.textContent = allInitiallyOpen ? 'Collapse All Sections' : 'Expand All Sections';
            detailPageToggleAllBtn.setAttribute('aria-expanded', allInitiallyOpen.toString());

            detailPageToggleAllBtn.addEventListener('click', () => {
                // Check current state: if any are closed, open all. Otherwise, close all.
                let shouldOpenAll = Array.from(detailPageSections).some(section => !section.hasAttribute('open'));
                detailPageSections.forEach(section => {
                    shouldOpenAll ? section.setAttribute('open', '') : section.removeAttribute('open');
                });
                detailPageToggleAllBtn.textContent = shouldOpenAll ? 'Collapse All Sections' : 'Expand All Sections';
                detailPageToggleAllBtn.setAttribute('aria-expanded', shouldOpenAll.toString());
            });

            // Update button if individual sections are toggled
            detailPageSections.forEach(section => {
                section.addEventListener('toggle', () => {
                    const allAreOpen = Array.from(detailPageSections).every(s => s.hasAttribute('open'));
                    detailPageToggleAllBtn.textContent = allAreOpen ? 'Collapse All Sections' : 'Expand All Sections';
                    detailPageToggleAllBtn.setAttribute('aria-expanded', allAreOpen.toString());
                });
            });
        }

        // "Quick Read" Mode Toggle Functionality for detail page
        if (detailPageQuickReadBtn && pageContainerForQuickRead) {
            // Initial state setup
            detailPageQuickReadBtn.textContent = 'Enable Quick Read';
            detailPageQuickReadBtn.setAttribute('aria-pressed', 'false');

            detailPageQuickReadBtn.addEventListener('click', () => {
                pageContainerForQuickRead.classList.toggle('quick-read-active');
                const isActive = pageContainerForQuickRead.classList.contains('quick-read-active');
                detailPageQuickReadBtn.textContent = isActive ? 'Disable Quick Read' : 'Enable Quick Read';
                detailPageQuickReadBtn.setAttribute('aria-pressed', isActive.toString());

                if (isActive) { // When Quick Read is activated
                    detailPageSections.forEach(section => {
                        section.removeAttribute('open'); // Close all sections
                    });
                    // Ensure the "Toggle All" button reflects this state if it exists
                    if (detailPageToggleAllBtn) {
                        detailPageToggleAllBtn.textContent = 'Expand All Sections';
                        detailPageToggleAllBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
        }

        // Print Preparation for detail page: Open all accordions before printing
        if (typeof window.matchMedia === 'function' && detailPageSections.length > 0) {
            let wasQuickReadActiveBeforePrint = false;
            const mediaQueryList = window.matchMedia('print');

            mediaQueryList.addListener((mql) => {
                if (mql.matches) { // Before print
                    // Temporarily disable quick read mode if active
                    if (pageContainerForQuickRead) {
                        wasQuickReadActiveBeforePrint = pageContainerForQuickRead.classList.contains('quick-read-active');
                        if (wasQuickReadActiveBeforePrint) {
                            pageContainerForQuickRead.classList.remove('quick-read-active');
                        }
                    }
                    // Open all <details> elements
                    detailPageSections.forEach(detailsEl => {
                        detailsEl.setAttribute('open', '');
                    });
                } else { // After print
                    // Restore quick read mode if it was active
                    if (pageContainerForQuickRead && wasQuickReadActiveBeforePrint) {
                        pageContainerForQuickRead.classList.add('quick-read-active');
                        if(detailPageQuickReadBtn) { // Also restore button text
                             detailPageQuickReadBtn.textContent = 'Disable Quick Read';
                             detailPageQuickReadBtn.setAttribute('aria-pressed', 'true');
                        }
                    }
                    // Optional: Restore "Toggle All" button state if needed, though opening all for print is usually fine.
                    // Current behavior: after print, all sections remain open, and toggle button says "Collapse All". This is acceptable.
                    if (detailPageToggleAllBtn) {
                       const allAreOpen = Array.from(detailPageSections).every(s => s.hasAttribute('open'));
                       detailPageToggleAllBtn.textContent = allAreOpen ? 'Collapse All Sections' : 'Expand All Sections';
                       detailPageToggleAllBtn.setAttribute('aria-expanded', allAreOpen.toString());
                    }
                }
            });
        }
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
*/
