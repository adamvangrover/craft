document.addEventListener("DOMContentLoaded", () => {
    // DEVELOPER NOTE: This script finds all elements with the `data-include` attribute
    // and fetches the HTML file specified in the attribute, then injects it into the element.
    // This is a simple way to create reusable components in a static site without a build step.
    const includeElements = document.querySelectorAll('[data-include]');
    includeElements.forEach(el => {
        const file = el.getAttribute('data-include');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            })
            .catch(err => console.error('Error including HTML:', err));
    });
});
