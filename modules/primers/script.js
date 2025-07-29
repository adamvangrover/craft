// DEVELOPER NOTE: This script handles functionality for:
// 1. The main `primers/index.html` page: search functionality.
// 2. Individual primer detail pages (`primers/html/*.html`): "Quick Read", "Toggle All Sections", print preparation.

document.addEventListener('DOMContentLoaded', () => {
    // 0. Update Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Attempt to initialize features for the main primers index page
    if (document.getElementById('mainIndexSearch')) {
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
 */
function initPrimersIndexPageFeatures() {
    const mainIndexSearch = document.getElementById('mainIndexSearch');
    const primerSummaryCards = document.querySelectorAll('.main-index-container .primer-summary-card');

    if (!mainIndexSearch || primerSummaryCards.length === 0) {
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

        mediaQueryList.addListener((mql) => {.
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
