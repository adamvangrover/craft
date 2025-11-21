// Assuming navData is globally available from nav_data.js, loaded before this script.
// If not, we would need to fetch it or ensure proper script loading order.

// Determine the base path for link construction.
// This handles deployment in a subdirectory on GitHub Pages.
const repoName = "craft"; // CHANGE THIS TO YOUR REPO NAME
const isGitHubPages = window.location.hostname.includes('github.io');
const SITE_BASE_PATH = isGitHubPages ? `/${repoName}/` : '/';

/**
 * Creates an HTML element with specified attributes and children.
 * @param {string} tag - The HTML tag name.
 * @param {object} attributes - A key-value pair of attributes.
 * @param {Array<Node|string>} children - An array of child nodes or text.
 * @returns {HTMLElement} The created HTML element.
 */
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    children.forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else {
            element.appendChild(child);
        }
    });
    return element;
}

/**
 * Recursively builds the navigation HTML from the navData structure.
 * @param {Array<object>} items - An array of navigation item objects.
 * @param {number} level - The current nesting level (for potential styling/indentation).
 * @returns {HTMLUListElement} The generated <ul> element.
 */
function buildNavMenu(items, level = 0) {
    if (!items || items.length === 0) {
        return null;
    }

    const ul = createElement('ul', { class: `nav-level-${level}` });

    items.forEach(item => {
        const li = createElement('li');
        let linkHref = item.href || '#';
        let target = null;
        let finalHref = '#'; // Default for categories or unlinked items

        if (item.href) { // Only process href if it exists
            let rawHref = item.href;

            // Adjust href based on type FIRST
            if (item.type === 'markdown_viewer' && item.viewer === 'global') {
                // global_markdown_viewer.html is at root. mdfile param must be root-relative.
                finalHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
            } else if (item.type === 'section_viewer_item') {
                 // These are complex, e.g., "primers/index.html?load=file.md"
                 // The base (primers/index.html) needs to be root-relative.
                 const parts = rawHref.split('?');
                 finalHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `?${parts[1]}` : '');
            } else if (item.type === 'jupyter_guide') {
                finalHref = `${SITE_BASE_PATH}${rawHref}`;
                target = "_blank";
            } else if (item.type === 'html_hub_section') { // e.g. CFA/index.html#materials-library
                const parts = rawHref.split('#');
                finalHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `#${parts[1]}` : '');
            } else if (item.type === 'learning_path_definition') {
                 // Treat learning path definitions as markdown files to be viewed globally
                 finalHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
            } else if (item.type === 'html' || item.type === 'html_hub' || item.type === 'craft_module_viewer' || item.type === 'section_viewer') {
                 finalHref = `${SITE_BASE_PATH}${rawHref}`;
            } else {
                // Default for types not explicitly handled above, or if item.href is just an anchor
                if (rawHref.startsWith('#')) {
                    finalHref = rawHref;
                } else {
                    finalHref = `${SITE_BASE_PATH}${rawHref}`;
                }
            }
        }

        const hasChildren = item.children && item.children.length > 0;

        if (item.type === 'category' || (item.type === 'section_viewer' && hasChildren)) {
            // Make category titles clickable for expanding/collapsing
            const categoryId = `category-${level}-${item.text.replace(/\s+/g, '-')}`;
            const titleElement = createElement('button', {
                class: 'nav-category-title collapsible',
                'aria-expanded': 'false',
                'aria-controls': categoryId
            }, [item.text + ' ', createElement('span', {class: 'toggler-icon'}, ['+'])]);

            titleElement.onclick = function() {
                const subMenu = this.nextElementSibling;
                // Safety check if sibling exists
                if (subMenu) {
                    const isExpanded = subMenu.style.display === 'block';
                    subMenu.style.display = isExpanded ? 'none' : 'block';
                    this.setAttribute('aria-expanded', !isExpanded);
                    this.querySelector('.toggler-icon').textContent = isExpanded ? '+' : '-';
                }
            };
            li.appendChild(titleElement);
        } else {
            const aAttributes = { href: finalHref };
            if (target) {
                aAttributes.target = target;
            }
            if (item.type === 'learning_path_definition') {
                aAttributes['data-path-id'] = item.path_id;
                aAttributes.class = 'learning-path-definition-link';
            }
            const link = createElement('a', aAttributes, [item.text]);

            // Track clicks for learning progress
            link.addEventListener('click', function() {
                try {
                    let completed = JSON.parse(localStorage.getItem('completed_pages') || '[]');
                    // Store the raw href from navData if possible, but here we have finalHref.
                    // Let's store item.href (the raw one) to be consistent with navData.
                    const trackingId = item.href;
                    if (trackingId && !completed.includes(trackingId)) {
                        completed.push(trackingId);
                        localStorage.setItem('completed_pages', JSON.stringify(completed));
                    }
                } catch (e) {
                    console.error("Error tracking progress:", e);
                }
            });

            li.appendChild(link);
        }

        if (hasChildren) {
            const subMenu = buildNavMenu(item.children, level + 1);
            if (subMenu) {
                // Assign ID for aria-controls and initially hide if it's a collapsible section
                if (item.type === 'category' || (item.type === 'section_viewer' && hasChildren)) {
                    const categoryId = `category-${level}-${item.text.replace(/\s+/g, '-')}`;
                    subMenu.id = categoryId;
                    subMenu.style.display = 'none'; // Initially collapsed
                }
                li.appendChild(subMenu);
            }
        }
        ul.appendChild(li);
    });

    return ul;
}


/**
 * Applies active class to the link matching the current page.
 */
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop(); // Get the current file name
    const searchParams = window.location.search; // Get query parameters

    document.querySelectorAll('#global-nav-placeholder a').forEach(link => {
        let linkPath = link.getAttribute('href');

        // Normalize link for comparison
        if (linkPath.includes('?mdfile=')) {
            // For global_markdown_viewer, compare the mdfile parameter
            try {
                const linkUrl = new URL(link.href, window.location.origin); // Use full URL to parse correctly
                const mdFileParam = linkUrl.searchParams.get('mdfile');
                if (currentPath === 'global_markdown_viewer.html' && searchParams.includes(encodeURIComponent(mdFileParam))) {
                    link.classList.add('active-nav-link');
                    expandParents(link);
                }
            } catch (e) {
                // console.error("Error parsing link for active state:", link.href, e);
            }
        } else if (linkPath.endsWith(currentPath) && currentPath !== '') {
            if (link.href === window.location.href || (link.pathname === window.location.pathname && !searchParams && !link.search)) {
                 link.classList.add('active-nav-link');
                 expandParents(link);
            } else if (link.href.split('#')[0] === window.location.href.split('#')[0] && link.href.includes('#') && window.location.href.includes('#')) {
                // Handle html_hub_section links with anchors
                if (link.hash === window.location.hash) {
                    link.classList.add('active-nav-link');
                    expandParents(link);
                }
            }
        } else if (linkPath === currentPath && currentPath === 'home.html' && window.location.pathname.endsWith('/home.html')) {
            link.classList.add('active-nav-link');
        } else if (linkPath === './' && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html'))) {
             link.classList.add('active-nav-link');
        }
    });
}

/**
 * Helper to expand parent categories of the active link.
 */
function expandParents(element) {
    let parent = element.parentElement;
    while (parent) {
        if (parent.tagName === 'UL' && parent.style.display === 'none') {
            parent.style.display = 'block';
            // Find the toggler button
            if (parent.previousElementSibling && parent.previousElementSibling.classList.contains('nav-category-title')) {
                parent.previousElementSibling.setAttribute('aria-expanded', 'true');
                const icon = parent.previousElementSibling.querySelector('.toggler-icon');
                if (icon) icon.textContent = '-';
            }
        }
        parent = parent.parentElement;
    }
}

/**
 * Builds the search input element.
 */
function buildNavSearch() {
    const searchContainer = createElement('div', { class: 'nav-search-container' });
    const searchInput = createElement('input', {
        type: 'text',
        id: 'nav-search-input',
        placeholder: 'Search navigation...',
        class: 'nav-search-input'
    });

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        filterNav(term);
    });

    searchContainer.appendChild(searchInput);
    return searchContainer;
}

/**
 * Filters the navigation menu based on search term.
 */
function filterNav(term) {
    const nav = document.getElementById('global-nav-placeholder');
    const links = nav.querySelectorAll('li a');

    // First, hide all LIs that contain links, show all if term is empty
    if (term === '') {
        nav.querySelectorAll('li').forEach(li => {
            li.classList.remove('nav-item-hidden');
            // Reset display for ULs? Maybe better to collapse all or leave as is.
            // Let's leave them as they were (user expanded/collapsed).
            // But we need to make sure if we hid them, we show them.
            // Actually, just removing nav-item-hidden restores visibility.
        });
        // We might want to re-collapse everything except active?
        // For simplicity, leave user state or reset to initial.
        return;
    }

    // Hide all by default
    nav.querySelectorAll('li').forEach(li => li.classList.add('nav-item-hidden'));

    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        if (text.includes(term)) {
            // Show this link's LI
            let li = link.parentElement;
            li.classList.remove('nav-item-hidden');

            // Walk up and show all parents
            let parent = li.parentElement; // This is a UL
            while (parent && parent.id !== 'global-nav-placeholder') {
                 if (parent.tagName === 'UL') {
                     // Ensure the UL is visible
                     parent.style.display = 'block';

                     // If this UL has a toggler, update it
                     if(parent.previousElementSibling && parent.previousElementSibling.classList.contains('nav-category-title')) {
                         parent.previousElementSibling.setAttribute('aria-expanded', 'true');
                         const icon = parent.previousElementSibling.querySelector('.toggler-icon');
                         if (icon) icon.textContent = '-';
                     }

                     // Show the parent LI of this UL (the category LI)
                     if (parent.parentElement.tagName === 'LI') {
                         parent.parentElement.classList.remove('nav-item-hidden');
                     }
                 }
                 parent = parent.parentElement;
            }
        }
    });
}

/**
 * Creates the mobile toggle button.
 */
function createMobileToggle() {
    const btn = createElement('button', {
        id: 'mobile-nav-toggle',
        class: 'mobile-nav-toggle',
        'aria-label': 'Toggle Navigation'
    }, [
        createElement('i', { class: 'fas fa-bars' })
    ]);

    btn.addEventListener('click', () => {
        const nav = document.getElementById('global-nav-placeholder');
        nav.classList.toggle('active');
        const icon = btn.querySelector('i');
        if (nav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    return btn;
}


/**
 * Initializes the global navigation.
 * Finds the placeholder element and injects the generated navigation menu.
 * Sets up event listeners for collapsible sections and active link highlighting.
 */
function initGlobalNav() {
    const placeholder = document.getElementById('global-nav-placeholder');
    // If placeholder is missing, we can't do anything.
    if (!placeholder) return;

    if (typeof navData === 'undefined' || navData === null) {
        console.error('Navigation data (navData) is not available. Ensure nav_data.js is loaded before global_nav.js.');
        placeholder.innerHTML = '<p style="color:red;">Error: Navigation data not found.</p>';
        return;
    }

    // Create and inject Mobile Toggle Button (append to body)
    // Check if it already exists to avoid duplicates
    if (!document.getElementById('mobile-nav-toggle')) {
        const toggleBtn = createMobileToggle();
        document.body.appendChild(toggleBtn);
    }

    placeholder.innerHTML = ''; // Clear placeholder content

    // Add Search Bar
    placeholder.appendChild(buildNavSearch());

    // Build Menu
    const navMenuHtml = buildNavMenu(navData);
    if (navMenuHtml) {
        placeholder.appendChild(navMenuHtml);
        highlightActiveLink(); // Highlight after menu is built
    } else {
        placeholder.appendChild(createElement('p', {}, ['Navigation menu is empty.']));
    }
}

// Initialize the navigation when the DOM is ready.
// Using a simple DOMContentLoaded listener for broad compatibility.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNav);
} else {
    // DOMContentLoaded has already fired
    initGlobalNav();
}

console.log("global_nav.js loaded with search and mobile toggle.");
