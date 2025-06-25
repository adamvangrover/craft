document.addEventListener('DOMContentLoaded', () => {
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
