document.addEventListener('DOMContentLoaded', () => {

    // 0. Update Current Year in Footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 1. Search Functionality
    const searchBar = document.getElementById('searchBar');
    const primerCards = document.querySelectorAll('.primer-card');

    if (searchBar && primerCards.length > 0) {
        searchBar.addEventListener('input', () => {
            const searchTerm = searchBar.value.toLowerCase().trim();
            filterPrimerCards(searchTerm);
        });
    }

    function filterPrimerCards(searchTerm) {
        primerCards.forEach(card => {
            const title = card.dataset.title ? card.dataset.title.toLowerCase() : '';
            const keywords = card.dataset.keywords ? card.dataset.keywords.toLowerCase() : '';

            // Check if search term is in title OR keywords
            if (title.includes(searchTerm) || keywords.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // 2. "Toggle All Sections" Button per Primer Card
    primerCards.forEach(card => {
        const toggleAllBtn = card.querySelector('.toggle-all-sections-btn');
        const sections = card.querySelectorAll('.primer-section-accordion'); // These are <details> elements

        if (toggleAllBtn && sections.length > 0) {
            toggleAllBtn.addEventListener('click', () => {
                // Determine if the primary action should be to open or close sections.
                // If even one section is closed, the button's action will be to open all.
                // Otherwise (if all are open), its action will be to close all.
                let shouldOpenAll = Array.from(sections).some(section => !section.hasAttribute('open'));

                sections.forEach(section => {
                    if (shouldOpenAll) {
                        section.setAttribute('open', '');
                    } else {
                        section.removeAttribute('open');
                    }
                });
                // Update button text and ARIA attribute based on the action just performed.
                toggleAllBtn.textContent = shouldOpenAll ? 'Collapse All' : 'Expand All';
                toggleAllBtn.setAttribute('aria-expanded', shouldOpenAll.toString());
            });

            // Set initial button text and ARIA attribute.
            // Assumes sections are closed by default. If any are open by default in HTML, this might need adjustment.
            toggleAllBtn.textContent = 'Expand All';
            toggleAllBtn.setAttribute('aria-expanded', 'false');

            // Add event listeners to individual sections to update the "Toggle All" button state
            // if the user manually opens/closes individual accordions.
            sections.forEach(section => {
                section.addEventListener('toggle', () => {
                    const allAreOpen = Array.from(sections).every(s => s.hasAttribute('open'));

                    if (allAreOpen) {
                        toggleAllBtn.textContent = 'Collapse All';
                        toggleAllBtn.setAttribute('aria-expanded', 'true');
                    } else {
                        // If any section is closed (even if others are open),
                        // the button should offer to "Expand All".
                        toggleAllBtn.textContent = 'Expand All';
                        toggleAllBtn.setAttribute('aria-expanded', 'false');
                    }
                });
            });
        }
    });
});
```
=======
    const searchBar = document.getElementById('searchBar');
    const primerEntries = document.querySelectorAll('.primer-entry');

    // Search functionality
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        primerEntries.forEach(entry => {
            const title = entry.dataset.title.toLowerCase();
            if (title.includes(searchTerm)) {
                entry.style.display = '';
            } else {
                entry.style.display = 'none';
            }
        });
    });

    // Collapsible section functionality
    primerEntries.forEach(entry => {
        const titleElement = entry.querySelector('.primer-title');
        const summaryElement = entry.querySelector('.primer-summary');

        if (titleElement && summaryElement) {
            titleElement.addEventListener('click', (event) => {
                // Prevent link navigation if the click is not directly on the <a> tag,
                // or allow navigation if it is. For simplicity, let's toggle summary visibility.
                // The link will work independently.
                summaryElement.classList.toggle('active');
            });
        }
    });
});
