// DEVELOPER NOTE: Merge conflict resolved.
// The JavaScript code below is the primary version, supporting:
// 1. Search functionality on `primers/index.html` (for `mainIndexSearch` and `primer-summary-card`s).
// 2. "Quick Read" and "Toggle All Sections" functionality on separate detail pages (`primers/html/*.html`).
// 3. Print preparation for detail pages.
// MODIFIED: Added logic for dynamic Markdown loading on `primers/index.html`.

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
    const primerSummaryCards = document.querySelectorAll('.primers-list-container .primer-summary-card'); // Updated selector
    const primerContentDisplay = document.getElementById('primer-content-display');

    if (mainIndexSearch && primerSummaryCards.length > 0 && primerContentDisplay) {
        // Search functionality for the primer navigator page.
        mainIndexSearch.addEventListener('input', () => {
            const searchTerm = mainIndexSearch.value.toLowerCase().trim();
            primerSummaryCards.forEach(card => {
                const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
                const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';
                const summaryTextElement = card.querySelector('.primer-initial-summary');
                const summaryText = summaryTextElement ? summaryTextElement.textContent.toLowerCase() : '';


                if (title.includes(searchTerm) || keywords.includes(searchTerm) || summaryText.includes(searchTerm)) {
                    card.style.display = 'flex'; // Assuming cards are flex containers, or adjust as per your CSS
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
                // Construct the path relative to the `primers` directory
                // This assumes `script.js` is in `primers/` and `.md` files are also in `primers/`
                const response = await fetch(mdSrcFile);
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${mdSrcFile}: ${response.status} ${response.statusText}`);
                }
                const markdownText = await response.text();
                if (typeof marked !== 'undefined') {
                    displayElement.innerHTML = marked.parse(markdownText);
                } else {
                    console.error("marked.js library not found. Displaying raw Markdown.");
                    displayElement.innerHTML = `<pre>${markdownText.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</pre>`; // Basic escaping for raw display
                    // displayElement.innerHTML = "<p>Error: Markdown renderer not available. Cannot display content.</p>";
                }
            } catch (error) {
                console.error("Error loading or parsing Markdown:", error);
                displayElement.innerHTML = `<p>Error loading content for ${mdSrcFile}. Please ensure the file exists at the correct path relative to the 'primers' directory.</p><p><small>${error.message}</small></p>`;
            }
        }

        // Add event listeners to primer cards/links
        primerSummaryCards.forEach(card => {
            const link = card.querySelector('.view-details-link'); // The <a> tag
            const mdSrc = card.dataset.mdSrc; // e.g., "aerospace_defense.md"

            if (link && mdSrc) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    loadAndDisplayMarkdown(mdSrc, primerContentDisplay, card);
                });
            } else if (mdSrc) {
                 // Fallback: if no specific link, make the card itself clickable
                 card.addEventListener('click', function(event) {
                    // Prevent default if card itself is an anchor or part of one
                    if (event.target.tagName === 'A' && event.target.classList.contains('view-details-link')) {
                        // Already handled by the specific link listener
                        return;
                    }
                    event.preventDefault();
                    loadAndDisplayMarkdown(mdSrc, primerContentDisplay, card);
                });
            }
        });

        // Optionally load the first primer by default or a welcome message
        if (primerContentDisplay) {
             if (primerCards.length > 0 && primerCards[0].dataset.mdSrc) {
                // loadAndDisplayMarkdown(primerCards[0].dataset.mdSrc, primerContentDisplay, primerCards[0]); // Uncomment to load first primer
                primerContentDisplay.innerHTML = "<p>Select a primer from the list to view its content.</p>"; // Default message
             } else {
                primerContentDisplay.innerHTML = "<p>No primers available or an error occurred.</p>";
             }
        }

    }


    // --- DETAIL PAGE (`primers/html/*.html`) SPECIFIC LOGIC ---
    // This logic should only run if elements specific to detail pages are present.
    const detailPageQuickReadBtn = document.getElementById('detailPageQuickReadBtn');
    const isDetailPage = document.querySelector('.detail-page-header') !== null;

    // Check if we are on a detail page by looking for a unique element, like the quick read button or specific header structure.
    // For example, we can check if '.detail-page-header' exists.

    if (isDetailPage) {
        const pageContainerForQuickRead = document.querySelector('.detail-page-container') || document.body;
        const detailPageToggleAllBtn = document.querySelector('.detail-page-controls .toggle-all-sections-btn');
        const detailPageSections = document.querySelectorAll('.primer-detail-content .primer-section-accordion'); // These are <details> elements

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

        if (detailPageQuickReadBtn && pageContainerForQuickRead) {
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
                if (mql.matches) {
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
                } else {
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
