// Assuming navData is globally available from nav_data.js
// Determine the base path for link construction.
const repoName = "craft";
const isGitHubPages = window.location.hostname.includes('github.io');
const SITE_BASE_PATH = isGitHubPages ? `/${repoName}/` : '/';

/**
 * Creates an HTML element with specified attributes and children.
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

// --- State Management ---

function saveNavState(categoryId, isExpanded) {
    try {
        let state = JSON.parse(localStorage.getItem('nav_state') || '{}');
        state[categoryId] = isExpanded;
        localStorage.setItem('nav_state', JSON.stringify(state));
    } catch (e) {
        console.error("Error saving nav state:", e);
    }
}

function getNavState(categoryId) {
    try {
        let state = JSON.parse(localStorage.getItem('nav_state') || '{}');
        return state[categoryId];
    } catch (e) {
        return false;
    }
}

// --- Breadcrumbs ---

function generateBreadcrumbs() {
    // Try to find a suitable container
    const mainContent = document.querySelector('main') || document.querySelector('#content') || document.querySelector('.container') || document.body;
    if (!mainContent) return;

    const currentPath = window.location.pathname.split('/').pop();
    const searchParams = new URLSearchParams(window.location.search);
    const mdFile = searchParams.get('mdfile');

    // Helper to find path in tree
    function findPath(items, path = []) {
        for (const item of items) {
            let isMatch = false;

            // Check for match
            if (item.type === 'markdown_viewer' && mdFile) {
                 // Normalize paths for comparison
                 // mdFile might be "AI_and_Coding/file.md"
                 // item.href might be "AI_and_Coding/file.md"
                 if (item.href === mdFile) isMatch = true;
            } else if (item.href) {
                // Handle html pages
                if (item.href.endsWith(currentPath) && currentPath && currentPath !== 'index.html' && currentPath !== '') {
                     // Simple suffix match for now, could be improved
                     isMatch = true;
                } else if ((currentPath === 'index.html' || currentPath === '') && (item.href === 'index.html' || item.href === './')) {
                     // Home match
                     isMatch = true;
                }
            }

            if (isMatch) {
                return [...path, item];
            }

            if (item.children) {
                const result = findPath(item.children, [...path, item]);
                if (result) return result;
            }
        }
        return null;
    }

    const breadcrumbPath = findPath(navData);

    if (breadcrumbPath && breadcrumbPath.length > 0) {
        const nav = document.createElement('nav');
        nav.className = 'flex items-center space-x-2 text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap py-2';
        nav.setAttribute('aria-label', 'Breadcrumb');

        let html = `<a href="${SITE_BASE_PATH}index.html" class="hover:text-indigo-600 transition-colors">Home</a>`;

        breadcrumbPath.forEach((item, index) => {
            html += `<span class="text-slate-300">/</span>`;
            const isLast = index === breadcrumbPath.length - 1;
            if (isLast) {
                html += `<span class="font-medium text-slate-800">${item.text}</span>`;
            } else {
                html += `<span class="text-slate-500">${item.text}</span>`;
            }
        });

        nav.innerHTML = html;

        // Insert at the very top of the main content
        if (mainContent.firstChild) {
            mainContent.insertBefore(nav, mainContent.firstChild);
        } else {
            mainContent.appendChild(nav);
        }
    }
}


// --- Navigation Building ---

function buildNavMenu(items, level = 0) {
    if (!items || items.length === 0) {
        return null;
    }

    const ul = createElement('ul', { class: `nav-level-${level}` });

    items.forEach(item => {
        const li = createElement('li');
        let linkHref = item.href || '#';
        let target = null;
        let finalHref = '#';

        if (item.href) {
            let rawHref = item.href;
            if (item.type === 'markdown_viewer' && item.viewer === 'global') {
                finalHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
            } else if (item.type === 'section_viewer_item') {
                 const parts = rawHref.split('?');
                 finalHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `?${parts[1]}` : '');
            } else if (item.type === 'jupyter_guide') {
                finalHref = `${SITE_BASE_PATH}${rawHref}`;
                target = "_blank";
            } else if (item.type === 'html_hub_section') {
                const parts = rawHref.split('#');
                finalHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `#${parts[1]}` : '');
            } else if (item.type === 'learning_path_definition') {
                 finalHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
            } else if (['html', 'html_hub', 'craft_module_viewer', 'section_viewer'].includes(item.type)) {
                 finalHref = `${SITE_BASE_PATH}${rawHref}`;
            } else {
                finalHref = rawHref.startsWith('#') ? rawHref : `${SITE_BASE_PATH}${rawHref}`;
            }
        }

        const hasChildren = item.children && item.children.length > 0;

        if (item.type === 'category' || (item.type === 'section_viewer' && hasChildren)) {
            const categoryId = `category-${level}-${item.text.replace(/\s+/g, '-')}`;
            // Check localStorage for state
            const savedState = getNavState(categoryId);
            const isExpanded = savedState === true; // Default to collapsed if not found

            const titleElement = createElement('button', {
                class: 'nav-category-title collapsible flex items-center w-full justify-between text-left p-2 rounded hover:bg-slate-100',
                'aria-expanded': String(isExpanded),
                'aria-controls': categoryId
            });

            // Text and Icon
            const textSpan = createElement('span', {}, [item.text]);
            const iconSpan = createElement('span', {class: 'toggler-icon ml-2 text-slate-400'}, [isExpanded ? '-' : '+']);
            titleElement.appendChild(textSpan);
            titleElement.appendChild(iconSpan);

            titleElement.onclick = function() {
                const subMenu = this.nextElementSibling;
                if (subMenu) {
                    const currentlyExpanded = subMenu.style.display === 'block';
                    const newState = !currentlyExpanded;

                    subMenu.style.display = newState ? 'block' : 'none';
                    this.setAttribute('aria-expanded', String(newState));
                    this.querySelector('.toggler-icon').textContent = newState ? '-' : '+';

                    saveNavState(categoryId, newState);
                }
            };
            li.appendChild(titleElement);
        } else {
            const aAttributes = { href: finalHref, class: 'block p-2 rounded hover:bg-slate-50 text-slate-600 hover:text-indigo-600' };
            if (target) aAttributes.target = target;
            if (item.type === 'learning_path_definition') {
                aAttributes['data-path-id'] = item.path_id;
                aAttributes.class += ' learning-path-definition-link';
            }
            const link = createElement('a', aAttributes, [item.text]);

            // Tracking
            link.addEventListener('click', function() {
                try {
                    let completed = JSON.parse(localStorage.getItem('completed_pages') || '[]');
                    const trackingId = item.href;
                    if (trackingId && !completed.includes(trackingId)) {
                        completed.push(trackingId);
                        localStorage.setItem('completed_pages', JSON.stringify(completed));
                    }
                    // Also save last visited
                    localStorage.setItem('last_visited_url', window.location.href);
                    localStorage.setItem('last_visited_title', document.title);
                } catch (e) { console.error(e); }
            });

            li.appendChild(link);
        }

        if (hasChildren) {
            const subMenu = buildNavMenu(item.children, level + 1);
            if (subMenu) {
                const categoryId = `category-${level}-${item.text.replace(/\s+/g, '-')}`;
                subMenu.id = categoryId;
                // Set initial display based on saved state
                const savedState = getNavState(categoryId);
                subMenu.style.display = savedState ? 'block' : 'none';
                li.appendChild(subMenu);
            }
        }
        ul.appendChild(li);
    });

    return ul;
}

function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop();
    const searchParams = new URLSearchParams(window.location.search);
    const mdFileParam = searchParams.get('mdfile');

    document.querySelectorAll('#global-nav-placeholder a').forEach(link => {
        let linkPath = link.getAttribute('href');
        let isActive = false;

        try {
            // Robust matching
            if (mdFileParam && linkPath.includes('mdfile=')) {
                const url = new URL(link.href, window.location.origin);
                if (url.searchParams.get('mdfile') === mdFileParam) {
                    isActive = true;
                }
            } else if (currentPath && linkPath.endsWith(currentPath) && !linkPath.includes('?')) {
                 if (link.href === window.location.href) {
                     isActive = true;
                 }
            }
        } catch(e) {}

        if (isActive) {
            link.classList.add('active-nav-link', 'bg-indigo-50', 'text-indigo-700', 'font-semibold');
            expandParents(link);
        }
    });
}

function expandParents(element) {
    let parent = element.parentElement;
    while (parent) {
        if (parent.tagName === 'UL' && parent.style.display === 'none') {
            parent.style.display = 'block';
            // Find toggler
            if (parent.previousElementSibling && parent.previousElementSibling.classList.contains('nav-category-title')) {
                const toggler = parent.previousElementSibling;
                toggler.setAttribute('aria-expanded', 'true');
                const icon = toggler.querySelector('.toggler-icon');
                if (icon) icon.textContent = '-';

                // Save this expansion state too so it persists
                const categoryId = toggler.getAttribute('aria-controls');
                if (categoryId) saveNavState(categoryId, true);
            }
        }
        parent = parent.parentElement;
    }
}

function buildNavSearch() {
    const searchContainer = createElement('div', { class: 'nav-search-container mb-4 px-2' });
    const searchInput = createElement('input', {
        type: 'text',
        id: 'nav-search-input',
        placeholder: 'Search...',
        class: 'w-full px-3 py-2 rounded-md border border-slate-300 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
    });

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        filterNav(term);
    });

    searchContainer.appendChild(searchInput);
    return searchContainer;
}

function filterNav(term) {
    const nav = document.getElementById('global-nav-placeholder');
    if (!nav) return;
    const links = nav.querySelectorAll('li a');
    const lis = nav.querySelectorAll('li');

    if (term === '') {
        lis.forEach(li => li.classList.remove('hidden'));
        // We should probably restore the collapsed/expanded state from localStorage here?
        // Or just leave it as is (everything visible/collapsed as per current DOM state)
        // Actually, when filtering, we often show everything. When clearing, we want to go back to "normal".
        // For simplicity, let's just unhide everything.
        // The collapsed state is maintained by display:none on ULs, which we didn't touch, we touched LIs.
        return;
    }

    // Hide all LIs
    lis.forEach(li => li.classList.add('hidden'));

    links.forEach(link => {
        if (link.textContent.toLowerCase().includes(term)) {
            // Show this link's LI
            let li = link.parentElement;
            li.classList.remove('hidden');

            // Walk up
            let parent = li.parentElement;
            while (parent && parent.id !== 'global-nav-placeholder') {
                 if (parent.tagName === 'UL') {
                     parent.style.display = 'block'; // Ensure UL is expanded
                     if (parent.previousElementSibling && parent.previousElementSibling.classList.contains('nav-category-title')) {
                         // We could update icon here but maybe not save state for search expansions
                         parent.previousElementSibling.querySelector('.toggler-icon').textContent = '-';
                     }
                     if (parent.parentElement.tagName === 'LI') {
                         parent.parentElement.classList.remove('hidden');
                     }
                 }
                 parent = parent.parentElement;
            }
        }
    });
}

function createMobileToggle() {
    const btn = createElement('button', {
        id: 'mobile-nav-toggle',
        class: 'mobile-nav-toggle fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded shadow-lg md:hidden',
        'aria-label': 'Toggle Navigation'
    }, [
        createElement('i', { class: 'fas fa-bars' }) // FontAwesome assumption
    ]);

    btn.addEventListener('click', () => {
        const nav = document.getElementById('global-nav-placeholder');
        nav.classList.toggle('-translate-x-full'); // Tailwind toggle

        const icon = btn.querySelector('i');
        if (!nav.classList.contains('-translate-x-full')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            // Add backdrop if not exists
            let backdrop = document.getElementById('nav-backdrop');
            if (!backdrop) {
                backdrop = createElement('div', {
                    id: 'nav-backdrop',
                    class: 'fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden'
                });
                backdrop.onclick = () => btn.click(); // Close on click
                document.body.appendChild(backdrop);
            }
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            const backdrop = document.getElementById('nav-backdrop');
            if (backdrop) backdrop.remove();
        }
    });

    return btn;
}

function initGlobalNav() {
    const placeholder = document.getElementById('global-nav-placeholder');
    if (!placeholder) return;

    if (typeof navData === 'undefined' || navData === null) {
        console.error('navData missing');
        return;
    }

    // Mobile Toggle
    if (!document.getElementById('mobile-nav-toggle')) {
        document.body.appendChild(createMobileToggle());
    }

    placeholder.innerHTML = '';
    // Add Tailwind classes to placeholder if not present
    placeholder.classList.add(
        'fixed', 'top-0', 'left-0', 'h-full', 'w-64', 'bg-white/95',
        'backdrop-blur-md', 'border-r', 'border-slate-200', 'overflow-y-auto',
        'z-40', 'transition-transform', 'duration-300', 'ease-in-out',
        '-translate-x-full', 'md:translate-x-0' // Hidden on mobile by default
    );

    // Header / Title
    const header = createElement('div', {class: 'p-4 border-b border-slate-100'}, [
        createElement('h2', {class: 'text-lg font-bold text-slate-800'}, ['Learning Hub'])
    ]);
    placeholder.appendChild(header);

    placeholder.appendChild(buildNavSearch());
    const navMenuHtml = buildNavMenu(navData);
    if (navMenuHtml) placeholder.appendChild(navMenuHtml);

    highlightActiveLink();
    generateBreadcrumbs();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNav);
} else {
    initGlobalNav();
}
