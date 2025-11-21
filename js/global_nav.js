// Global Navigation Engine
// Handles sidebar generation, state persistence, breadcrumbs, and active link highlighting.
// Dependencies: nav_data.js, progress_manager.js (optional but recommended)

const repoName = "craft";
const isGitHubPages = window.location.hostname.includes('github.io');
const SITE_BASE_PATH = isGitHubPages ? `/${repoName}/` : '/';

// State Management for Navigation
const NAV_STATE_KEY = 'craft_nav_state';

/**
 * Load saved navigation state (expanded categories).
 */
function loadNavState() {
    try {
        const state = localStorage.getItem(NAV_STATE_KEY);
        return state ? JSON.parse(state) : {};
    } catch (e) {
        return {};
    }
}

/**
 * Save navigation state.
 */
function saveNavState(id, isExpanded) {
    const state = loadNavState();
    if (isExpanded) {
        state[id] = true;
    } else {
        delete state[id];
    }
    localStorage.setItem(NAV_STATE_KEY, JSON.stringify(state));
}

/**
 * Creates an HTML element with specified attributes and children.
 */
function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        if (key === 'class') {
            element.className = attributes[key];
        } else {
            element.setAttribute(key, attributes[key]);
        }
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
 */
function buildNavMenu(items, level = 0) {
    if (!items || items.length === 0) return null;

    const ul = createElement('ul', { class: `nav-level-${level} space-y-1` });
    const navState = loadNavState();

    items.forEach(item => {
        const li = createElement('li', { class: 'nav-item' });
        let linkHref = '#';
        let target = null;

        // URL Construction Logic
        if (item.href) {
            let rawHref = item.href;

            if (item.type === 'markdown_viewer' && item.viewer === 'global') {
                linkHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
            } else if (item.type === 'section_viewer_item') {
                 const parts = rawHref.split('?');
                 linkHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `?${parts[1]}` : '');
            } else if (item.type === 'jupyter_guide') {
                linkHref = `${SITE_BASE_PATH}${rawHref}`;
                target = "_blank";
            } else if (item.type === 'html_hub_section') {
                const parts = rawHref.split('#');
                linkHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `#${parts[1]}` : '');
            } else if (item.type === 'learning_path_definition') {
                 linkHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
            } else {
                if (rawHref.startsWith('#') || rawHref.startsWith('http')) {
                    linkHref = rawHref;
                } else {
                    linkHref = `${SITE_BASE_PATH}${rawHref}`;
                }
            }
        }

        const hasChildren = item.children && item.children.length > 0;
        const isCategory = item.type === 'category' || (item.type === 'section_viewer' && hasChildren);
        const categoryId = `cat-${level}-${item.text.replace(/[^a-zA-Z0-9]/g, '-')}`;

        // Render Item
        if (isCategory) {
            // Collapsible Category
            const isExpanded = navState[categoryId];
            const titleBtn = createElement('button', {
                class: 'nav-category-title w-full text-left flex items-center justify-between px-4 py-2 text-slate-700 hover:bg-slate-100 hover:text-indigo-600 rounded-lg transition-colors duration-200 font-medium text-sm',
                'aria-expanded': isExpanded ? 'true' : 'false',
                'aria-controls': categoryId
            }, [
                createElement('span', {}, [item.text]),
                createElement('i', { class: `fas fa-chevron-down transition-transform duration-200 text-xs ${isExpanded ? 'rotate-180' : ''}` })
            ]);

            titleBtn.onclick = function() {
                const subMenu = this.nextElementSibling;
                if (subMenu) {
                    const currentlyExpanded = subMenu.style.display !== 'none';
                    if (currentlyExpanded) {
                        subMenu.style.display = 'none';
                        this.setAttribute('aria-expanded', 'false');
                        this.querySelector('.fa-chevron-down').classList.remove('rotate-180');
                        saveNavState(categoryId, false);
                    } else {
                        subMenu.style.display = 'block';
                        this.setAttribute('aria-expanded', 'true');
                        this.querySelector('.fa-chevron-down').classList.add('rotate-180');
                        saveNavState(categoryId, true);
                    }
                }
            };
            li.appendChild(titleBtn);
        } else {
            // Standard Link
            const aAttributes = {
                href: linkHref,
                class: 'nav-link block px-4 py-2 text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-lg transition-colors duration-200 text-sm'
            };
            if (target) aAttributes.target = target;
            if (item.type === 'learning_path_definition') aAttributes['data-path-id'] = item.path_id;

            const link = createElement('a', aAttributes, [item.text]);

            // Click tracking via ProgressManager
            link.addEventListener('click', () => {
                if (window.progressManager && item.href) {
                    window.progressManager.updateLastVisited(item.href, item.text);
                    // We don't auto-complete on click, usually that's for "Read" buttons,
                    // but we could track "visited" separately.
                }
            });

            li.appendChild(link);
        }

        // Render Children
        if (hasChildren) {
            const subMenu = buildNavMenu(item.children, level + 1);
            if (subMenu) {
                subMenu.id = categoryId;
                // Indentation via padding in CSS or here
                subMenu.classList.add('pl-4', 'mt-1');
                subMenu.style.display = navState[categoryId] ? 'block' : 'none';
                li.appendChild(subMenu);
            }
        }
        ul.appendChild(li);
    });

    return ul;
}

/**
 * Generates and injects breadcrumbs based on current URL and navData.
 */
function generateBreadcrumbs() {
    // Find path in navData
    const currentPath = findCurrentNavPath(navData);

    if (!currentPath || currentPath.length === 0) return;

    // Remove "Index" or "Home" if it's the last item (redundant) unless it's the only item
    if (currentPath.length > 1 && (currentPath[currentPath.length-1].text === 'Index' || currentPath[currentPath.length-1].text === 'README')) {
        // Keep it for now, usually nice to have
    }

    const breadcrumbContainer = createElement('nav', {
        class: 'flex mb-4 text-sm text-slate-500',
        'aria-label': 'Breadcrumb'
    });

    const ol = createElement('ol', { class: 'inline-flex items-center space-x-1 md:space-x-3' });

    // Add Home
    const homeLi = createElement('li', { class: 'inline-flex items-center' });
    const homeLink = createElement('a', {
        href: `${SITE_BASE_PATH}index.html`,
        class: 'inline-flex items-center hover:text-indigo-600 transition-colors'
    }, [
        createElement('i', { class: 'fas fa-home mr-2' }),
        'Home'
    ]);
    homeLi.appendChild(homeLink);
    ol.appendChild(homeLi);

    currentPath.forEach((item, index) => {
        // Separator
        const separator = createElement('li', {}, [
            createElement('i', { class: 'fas fa-chevron-right text-slate-400 text-xs mx-2' })
        ]);
        ol.appendChild(separator);

        const li = createElement('li');
        const isLast = index === currentPath.length - 1;

        if (isLast) {
            const span = createElement('span', { class: 'font-medium text-slate-800' }, [item.text]);
            li.appendChild(span);
        } else {
            // We need to resolve the href for parent categories if they are clickable
            // In our nav structure, categories don't always have hrefs.
            // If item has href, make it a link.
            if (item.href && item.type !== 'category') {
                 // Reconstruct link logic (simplified)
                 let href = item.href;
                 if (item.type === 'markdown_viewer' && item.viewer === 'global') {
                     href = `global_markdown_viewer.html?mdfile=${encodeURIComponent(item.href)}`;
                 }
                 // ... other types
                 // For simplicity, if no href, just text.
                 const a = createElement('a', {
                     href: `${SITE_BASE_PATH}${href}`,
                     class: 'hover:text-indigo-600 transition-colors'
                 }, [item.text]);
                 li.appendChild(a);
            } else {
                const span = createElement('span', { class: 'text-slate-500' }, [item.text]);
                li.appendChild(span);
            }
        }
        ol.appendChild(li);
    });

    breadcrumbContainer.appendChild(ol);

    // Inject into page
    // Try to find a good spot: top of #mainContent or body
    const mainContent = document.getElementById('mainContent') || document.querySelector('main') || document.querySelector('.content-card')?.parentElement;

    if (mainContent) {
        mainContent.insertBefore(breadcrumbContainer, mainContent.firstChild);
    } else {
        // Fallback: insert after nav toggle if exists
        const toggle = document.getElementById('mobile-nav-toggle');
        if (toggle) {
             toggle.insertAdjacentElement('afterend', breadcrumbContainer);
        }
    }
}

/**
 * Helper to traverse navData and find the path to the current page.
 */
function findCurrentNavPath(items, currentPath = []) {
    const params = new URLSearchParams(window.location.search);
    const mdFile = params.get('mdfile');
    const currentPathname = window.location.pathname;

    for (const item of items) {
        let match = false;

        if (item.href) {
            // Check mdfile parameter match
            if (mdFile && item.href === mdFile) {
                match = true;
            }
            // Check standard path match (ignoring mdfile param if not present)
            else if (!mdFile) {
                // Normalize item.href to absolute or relative comparison
                // Simple check: if pathname ends with item.href
                if (currentPathname.endsWith(item.href)) {
                     match = true;
                }
                // Handle root index
                if ((item.href === 'index.html' || item.href === './index.html') &&
                    (currentPathname.endsWith('/') || currentPathname.endsWith('/index.html'))) {
                    match = true;
                }
            }
        }

        if (match) {
            return [...currentPath, item];
        }

        if (item.children) {
            const childResult = findCurrentNavPath(item.children, [...currentPath, item]);
            if (childResult) return childResult;
        }
    }
    return null;
}

/**
 * Highlights the active link and expands its parents.
 */
function highlightActiveLink() {
    const currentPath = findCurrentNavPath(navData);
    if (!currentPath || currentPath.length === 0) return;

    // The last item is the active one
    const activeItem = currentPath[currentPath.length - 1];

    // Find the link in the DOM
    const links = document.querySelectorAll('#global-nav-placeholder a');
    links.forEach(link => {
        // Check text matching as a fallback or data-path-id if we added it
        if (link.textContent === activeItem.text) {
            link.classList.add('active-nav-link', 'bg-indigo-50', 'text-indigo-700', 'font-semibold', 'border-r-4', 'border-indigo-600');
            expandParents(link);
        }
    });
}

function expandParents(element) {
    let parent = element.parentElement;
    while (parent && parent.id !== 'global-nav-placeholder') {
        if (parent.tagName === 'UL') {
            parent.style.display = 'block';
            // Update toggler
            const toggler = parent.previousElementSibling;
            if (toggler && toggler.classList.contains('nav-category-title')) {
                toggler.setAttribute('aria-expanded', 'true');
                const icon = toggler.querySelector('.fa-chevron-down');
                if (icon) icon.classList.add('rotate-180');

                // Save state
                const catId = toggler.getAttribute('aria-controls');
                if (catId) saveNavState(catId, true);
            }
        }
        parent = parent.parentElement;
    }
}

/**
 * Search Functionality
 */
function buildNavSearch() {
    const container = createElement('div', { class: 'px-4 py-3 border-b border-slate-200 sticky top-0 bg-white z-10' });
    const wrapper = createElement('div', { class: 'relative' });

    const icon = createElement('i', { class: 'fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' });
    const input = createElement('input', {
        type: 'text',
        placeholder: 'Search modules...',
        class: 'w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow'
    });

    input.addEventListener('input', (e) => filterNav(e.target.value.toLowerCase()));

    wrapper.appendChild(icon);
    wrapper.appendChild(input);
    container.appendChild(wrapper);
    return container;
}

function filterNav(term) {
    const nav = document.getElementById('global-nav-placeholder');
    const items = nav.querySelectorAll('li.nav-item');

    if (term === '') {
        items.forEach(li => li.style.display = '');
        // Restore collapsed state? Ideally yes, but complicated.
        // For now, user might need to re-collapse or we just leave expanded.
        return;
    }

    items.forEach(li => {
        const text = li.textContent.toLowerCase();
        // Simple text match
        if (text.includes(term)) {
            li.style.display = 'block';
            // Walk up and show parents
            let parent = li.parentElement;
            while(parent && parent.id !== 'global-nav-placeholder') {
                if(parent.tagName === 'UL') parent.style.display = 'block';
                if(parent.tagName === 'LI') parent.style.display = 'block';
                parent = parent.parentElement;
            }
        } else {
            li.style.display = 'none';
        }
    });
}

/**
 * Initialization
 */
function initGlobalNav() {
    const placeholder = document.getElementById('global-nav-placeholder');
    if (!placeholder) return;

    // Ensure Tailwind classes on placeholder for mobile glassmorphism and layout
    placeholder.className = "sidebar fixed top-0 left-0 h-full w-72 bg-white/95 backdrop-blur-md border-r border-slate-200 z-50 transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static shadow-xl lg:shadow-none overflow-y-auto";
    // Note: lg:static might conflict if the page layout expects a fixed sidebar.
    // But based on index.html refactor, flex layout is used.

    if (typeof navData === 'undefined') {
        placeholder.innerHTML = '<div class="p-4 text-red-500">Error: navData not found.</div>';
        return;
    }

    placeholder.innerHTML = '';
    placeholder.appendChild(buildNavSearch());

    const navMenu = buildNavMenu(navData);
    placeholder.appendChild(navMenu);

    highlightActiveLink();
    generateBreadcrumbs();

    // Mobile Toggle Logic
    let toggleBtn = document.getElementById('mobile-nav-toggle');
    if (!toggleBtn) {
        toggleBtn = createElement('button', {
            id: 'mobile-nav-toggle',
            class: 'fixed bottom-6 right-6 lg:hidden z-50 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
            'aria-label': 'Toggle Navigation'
        }, [createElement('i', { class: 'fas fa-bars text-xl' })]);
        document.body.appendChild(toggleBtn);
    }

    // Create backdrop if not exists
    let backdrop = document.getElementById('sidebar-backdrop');
    if (!backdrop) {
        backdrop = createElement('div', {
            id: 'sidebar-backdrop',
            class: 'fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 hidden transition-opacity duration-300'
        });
        backdrop.onclick = () => toggleNav(false);
        document.body.appendChild(backdrop);
    }

    function toggleNav(forceState) {
        const isOpen = typeof forceState === 'boolean' ? forceState : placeholder.classList.contains('-translate-x-full');

        if (isOpen) { // Open
            placeholder.classList.remove('-translate-x-full');
            backdrop.classList.remove('hidden');
            toggleBtn.querySelector('i').classList.remove('fa-bars');
            toggleBtn.querySelector('i').classList.add('fa-times');
        } else { // Close
            placeholder.classList.add('-translate-x-full');
            backdrop.classList.add('hidden');
            toggleBtn.querySelector('i').classList.add('fa-bars');
            toggleBtn.querySelector('i').classList.remove('fa-times');
        }
    }

    toggleBtn.onclick = () => toggleNav();
}

// Initialize
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGlobalNav);
} else {
    initGlobalNav();
}

console.log("Smart Navigation Engine Loaded");
