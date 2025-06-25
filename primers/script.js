document.addEventListener('DOMContentLoaded', () => {

    // 0. Update Current Year in Footer (Common to all pages)
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- MAIN INDEX PAGE (`primers/index.html`) SPECIFIC LOGIC ---
    const mainIndexSearch = document.getElementById('mainIndexSearch');
    const primerSummaryCards = document.querySelectorAll('.primer-summary-card');

    if (mainIndexSearch && primerSummaryCards.length > 0) {
        mainIndexSearch.addEventListener('input', () => {
            const searchTerm = mainIndexSearch.value.toLowerCase().trim();
            primerSummaryCards.forEach(card => {
                const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
                const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';
                const summaryTextElement = card.querySelector('.primer-initial-summary p');
                const summaryText = summaryTextElement ? summaryTextElement.textContent.toLowerCase() : '';

                if (title.includes(searchTerm) || keywords.includes(searchTerm) || summaryText.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // --- DETAIL PAGE (`primers/html/*.html`) SPECIFIC LOGIC ---
    // Check for a unique element on detail pages, e.g., the detail page's specific quick read button or header.
    const detailPageQuickReadBtn = document.getElementById('detailPageQuickReadBtn');

    if (detailPageQuickReadBtn) { // This indicates we are on a detail page
        const pageContainerForQuickRead = document.querySelector('.detail-page-container') || document.body; // Target for quick-read class
        const detailPageToggleAllBtn = document.querySelector('.detail-page-controls .toggle-all-sections-btn');
        const detailPageSections = document.querySelectorAll('.primer-detail-content .primer-section-accordion');

        // "Toggle All Sections" Button functionality for detail page
        if (detailPageToggleAllBtn && detailPageSections.length > 0) {
            detailPageToggleAllBtn.addEventListener('click', () => {
                let shouldOpenAll = Array.from(detailPageSections).some(section => !section.hasAttribute('open'));
                detailPageSections.forEach(section => {
                    shouldOpenAll ? section.setAttribute('open', '') : section.removeAttribute('open');
                });
                detailPageToggleAllBtn.textContent = shouldOpenAll ? 'Collapse All Sections' : 'Expand All Sections';
                detailPageToggleAllBtn.setAttribute('aria-expanded', shouldOpenAll.toString());
            });

            detailPageToggleAllBtn.textContent = 'Expand All Sections';
            detailPageToggleAllBtn.setAttribute('aria-expanded', 'false');

            detailPageSections.forEach(section => {
                section.addEventListener('toggle', () => {
                    const allAreOpen = Array.from(detailPageSections).every(s => s.hasAttribute('open'));
                    if (allAreOpen) {
                        detailPageToggleAllBtn.textContent = 'Collapse All Sections';
                        detailPageToggleAllBtn.setAttribute('aria-expanded', 'true');
                    } else {
                        detailPageToggleAllBtn.textContent = 'Expand All Sections';
                        detailPageToggleAllBtn.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }

        // "Quick Read" Mode Toggle Functionality for detail page
        if (pageContainerForQuickRead) { // detailPageQuickReadBtn is already confirmed
            detailPageQuickReadBtn.addEventListener('click', () => {
                pageContainerForQuickRead.classList.toggle('quick-read-active');
                const isActive = pageContainerForQuickRead.classList.contains('quick-read-active');
                detailPageQuickReadBtn.textContent = isActive ? 'Disable Quick Read' : 'Enable Quick Read';
                detailPageQuickReadBtn.setAttribute('aria-pressed', isActive.toString());

                if (isActive) {
                    detailPageSections.forEach(section => {
                        section.removeAttribute('open');
                    });
                    if (detailPageToggleAllBtn) {
                        detailPageToggleAllBtn.textContent = 'Expand All Sections';
                        detailPageToggleAllBtn.setAttribute('aria-expanded', 'false');
                    }
                }
            });
            detailPageQuickReadBtn.textContent = 'Enable Quick Read';
            detailPageQuickReadBtn.setAttribute('aria-pressed', 'false');
        }

        // Print Preparation for detail page
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
                        detailPageToggleAllBtn.textContent = 'Collapse All Sections';
                        detailPageToggleAllBtn.setAttribute('aria-expanded', 'true');
                    }
                }
            });
        }
    }
});
```
