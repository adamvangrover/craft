// Assuming navData is globally available from nav_data.js, loaded before this script.
// If not, we would need to fetch it or ensure proper script loading order.

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

        // Adjust href based on type
        if (item.type === 'markdown_viewer' && item.viewer === 'global') {
            linkHref = `global_markdown_viewer.html?mdfile=${encodeURIComponent(item.href)}`;
        } else if (item.type === 'section_viewer_item' && item.href) {
            // Assuming href is already formatted correctly for section viewers (e.g., primers/index.html?load=file.md)
            linkHref = item.href;
        } else if (item.type === 'jupyter_guide') {
            // Links directly to the README.md, which users will view on GitHub or locally.
            // Or, if a jupyter_guide_viewer.html is developed later, this can be updated.
            linkHref = item.href;
            target = "_blank"; // Open Jupyter guides (READMEs on GitHub) in new tab
        } else if (item.type === 'html_hub_section' && item.href) {
            linkHref = item.href; // These links might have #anchors
        } else if (item.type === 'craft_module_viewer' && item.href) {
            // For now, direct link. Integration with CRAFT hub's iframe needs specific handling.
            // This might be handled by CRAFT hub itself if global nav is inside it,
            // or global nav might need to message the CRAFT hub.
            // For a standalone link, it would go to the module's own page.
            linkHref = item.href;
        }


        // Ensure all paths are relative to the root if they don't start with http/https or #
        // This logic assumes that if a link starts with 'http' or '#', it's either external or an anchor.
        // Otherwise, it's treated as a relative path from the root.
        // The `nav_data.js` should use paths relative from root e.g. "CFA/index.html" not "./CFA/index.html" from current dir
        if (linkHref && !linkHref.startsWith('http') && !linkHref.startsWith('#') && !linkHref.startsWith('/')) {
            // Assuming paths in nav_data.js are from repo root.
            // For GitHub pages, if the site is at username.github.io/repo/, paths like 'CFA/index.html' work.
            // If the site is at username.github.io/, then paths might need to be '/repo/CFA/index.html'.
            // For now, assuming paths are correct for deployment context.
            // No change needed if nav_data.js provides paths like "CFA/index.html"
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
                const isExpanded = subMenu.style.display === 'block';
                subMenu.style.display = isExpanded ? 'none' : 'block';
                this.setAttribute('aria-expanded', !isExpanded);
                this.querySelector('.toggler-icon').textContent = isExpanded ? '+' : '-';
            };
            li.appendChild(titleElement);
        } else {
            const aAttributes = { href: linkHref };
            if (target) {
                aAttributes.target = target;
            }
            if (item.type === 'learning_path_definition') {
                aAttributes['data-path-id'] = item.path_id;
                aAttributes.class = 'learning-path-definition-link';
            }
            const link = createElement('a', aAttributes, [item.text]);
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
                }
            } catch (e) {
                // console.error("Error parsing link for active state:", link.href, e);
            }
        } else if (linkPath.endsWith(currentPath) && currentPath !== '') {
             // Simple check for HTML pages (e.g. home.html, CFA/index.html)
             // This might need refinement for nested paths if currentPath is just 'index.html'
             // A more robust check would compare the full relative path.
            if (link.href === window.location.href || (link.pathname === window.location.pathname && !searchParams && !link.search)) {
                 link.classList.add('active-nav-link');
            } else if (link.href.split('#')[0] === window.location.href.split('#')[0] && link.href.includes('#') && window.location.href.includes('#')) {
                // Handle html_hub_section links with anchors
                if (link.hash === window.location.hash) {
                    link.classList.add('active-nav-link');
                }
            }
        } else if (linkPath === currentPath && currentPath === 'home.html' && window.location.pathname.endsWith('/home.html')) {
            // Explicitly for home.html if it's the direct target
            link.classList.add('active-nav-link');
        } else if (linkPath === './' && (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('/index.html'))) {
            // Handle root index.html as home
             link.classList.add('active-nav-link');
        }
    });
}


/**
 * Initializes the global navigation.
 * Finds the placeholder element and injects the generated navigation menu.
 * Sets up event listeners for collapsible sections and active link highlighting.
 */
function initGlobalNav() {
    const placeholder = document.getElementById('global-nav-placeholder');
    if (!placeholder) {
        console.warn('Global navigation placeholder "global-nav-placeholder" not found.');
        return;
    }

    if (typeof navData === 'undefined' || navData === null) {
        console.error('Navigation data (navData) is not available. Ensure nav_data.js is loaded before global_nav.js.');
        placeholder.innerHTML = '<p style="color:red;">Error: Navigation data not found.</p>';
        return;
    }

    const navMenuHtml = buildNavMenu(navData);
    if (navMenuHtml) {
        placeholder.innerHTML = ''; // Clear placeholder content
        placeholder.appendChild(navMenuHtml);
        highlightActiveLink(); // Highlight after menu is built
    } else {
        placeholder.innerHTML = '<p>Navigation menu is empty.</p>';
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

// Future enhancements:
// - More sophisticated handling for CRAFT module links (e.g., using postMessage if nav is outside iframe or specific JS hooks).
// - More robust active link highlighting, especially for section_viewer_item and complex paths.
// - Integration with learning path display logic.
// - Error handling for missing md files in global_markdown_viewer.
// - Option to fetch navData if not globally available.
// - Base URL configuration for GitHub pages if deployed in a subfolder of a custom domain, etc.
//   (e.g. const BASE_URL = '/my-repo/'; if deployed to example.com/my-repo/)
//   Then prepend BASE_URL to hrefs that are relative from root. For now, assuming direct deployment or paths handled by server.
//   For typical GitHub Pages (username.github.io/repo-name/), root-relative paths like "CFA/index.html" work fine.
//   If it's a project page for an organization, it's the same.
//   If it's a user/org page (username.github.io or orgname.github.io) *without* a repo name, then paths like "/CFA/index.html" *might* be needed if nav_data uses "CFA/index.html".
//   The current code assumes paths in nav_data.js are already correct for the deployment environment.
//   For example, if the site is at `https://user.github.io/financial-learning-hub/`, then `home.html` in navData
//   will correctly resolve to `https://user.github.io/financial-learning-hub/home.html`.
//   And `CFA/index.html` will resolve to `https://user.github.io/financial-learning-hub/CFA/index.html`.
//   This seems robust for standard GitHub Pages deployment.
console.log("global_nav.js loaded.");
