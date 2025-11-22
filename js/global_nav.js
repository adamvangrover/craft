// Global Navigation Engine
// Handles sidebar generation, state persistence, breadcrumbs, and active link highlighting.
// Dependencies: nav_data.js, progress_manager.js

const repoName = "craft";
const isGitHubPages = window.location.hostname.includes('github.io');
const SITE_BASE_PATH = isGitHubPages ? `/${repoName}/` : '/';

// State Management
const NAV_STATE_KEY = 'craft_nav_state';

function loadNavState() {
    try {
        const state = localStorage.getItem(NAV_STATE_KEY);
        return state ? JSON.parse(state) : {};
    } catch (e) { return {}; }
}

function saveNavState(id, isExpanded) {
    const state = loadNavState();
    if (isExpanded) state[id] = true;
    else delete state[id];
    localStorage.setItem(NAV_STATE_KEY, JSON.stringify(state));
}

function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);
    for (const key in attributes) {
        if (key === 'class') element.className = attributes[key];
        else element.setAttribute(key, attributes[key]);
    }
    children.forEach(child => {
        if (typeof child === 'string') element.appendChild(document.createTextNode(child));
        else element.appendChild(child);
    });
    return element;
}

/**
 * Recursively builds the navigation HTML.
 */
function buildNavMenu(items, level = 0) {
    if (!items || items.length === 0) return null;

    // Visual indentation for nested levels
    const ulClass = level === 0 ? 'space-y-1' : 'space-y-1 mt-1 ml-3 border-l border-slate-200 pl-2';
    const ul = createElement('ul', { class: ulClass });
    const navState = loadNavState();

    items.forEach((item, index) => {
        const li = createElement('li', { class: 'nav-item' });
        const itemId = `nav-item-${level}-${index}-${item.text.replace(/\s+/g, '-').toLowerCase()}`;

        // Resolve HREF
        let linkHref = '#';
        let target = null;
        if (item.href) {
             if (item.type === 'markdown_viewer' && item.viewer === 'global') {
                linkHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(item.href)}`;
            } else if (item.type === 'learning_path_definition') {
                 linkHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(item.href)}`;
            } else if (item.type === 'jupyter_guide') {
                linkHref = `${SITE_BASE_PATH}${item.href}`;
                target = "_blank";
            } else if (item.type === 'html_hub_section') {
                linkHref = `${SITE_BASE_PATH}${item.href}`;
            } else {
                linkHref = item.href.startsWith('http') || item.href.startsWith('#') ? item.href : `${SITE_BASE_PATH}${item.href}`;
            }
        }

        const hasChildren = item.children && item.children.length > 0;
        const isCategory = item.type === 'category'; // Categories might have hrefs too (e.g. index pages) but usually act as folders

        // Render
        if (hasChildren) {
            const isExpanded = navState[itemId];

            const btnContent = [
                createElement('span', { class: 'flex-1 truncate font-medium' }, [item.text]),
                createElement('i', { class: `fas fa-chevron-down text-xs transition-transform duration-200 text-slate-400 ${isExpanded ? 'rotate-180' : ''}` })
            ];

            const toggleBtn = createElement('button', {
                class: 'nav-category-title w-full text-left flex items-center justify-between px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-indigo-600 rounded-md transition-colors text-sm group',
                'aria-expanded': isExpanded ? 'true' : 'false',
                'data-search-term': item.text.toLowerCase()
            }, btnContent);

            toggleBtn.onclick = function() {
                const sub = this.nextElementSibling;
                if (sub) {
                    const expand = sub.style.display === 'none';
                    sub.style.display = expand ? 'block' : 'none';
                    this.setAttribute('aria-expanded', expand);
                    this.querySelector('.fa-chevron-down').classList.toggle('rotate-180', expand);
                    saveNavState(itemId, expand);
                }
            };

            li.appendChild(toggleBtn);

            const subMenu = buildNavMenu(item.children, level + 1);
            if (subMenu) {
                subMenu.style.display = isExpanded ? 'block' : 'none';
                li.appendChild(subMenu);
            }
        } else {
            const link = createElement('a', {
                href: linkHref,
                class: 'nav-link block px-3 py-2 text-slate-600 hover:bg-slate-100 hover:text-indigo-600 rounded-md transition-colors text-sm truncate',
                'data-original-href': item.href, // For active matching
                'data-search-term': item.text.toLowerCase()
            }, [item.text]);

            if (target) link.target = target;

            link.addEventListener('click', () => {
                 if (window.progressManager && item.href) {
                    window.progressManager.updateLastVisited(linkHref, item.text);
                }
                // Mobile: close nav on click
                if (window.innerWidth < 1024) {
                     document.getElementById('global-nav-placeholder')?.classList.add('-translate-x-full');
                     document.getElementById('sidebar-backdrop')?.classList.add('hidden');
                }
            });

            li.appendChild(link);
        }

        ul.appendChild(li);
    });

    return ul;
}

/**
 * Search Functionality
 */
function buildNavSearch() {
    const container = createElement('div', { class: 'px-4 py-4 border-b border-slate-200 sticky top-0 bg-white/95 backdrop-blur z-10' });
    const wrapper = createElement('div', { class: 'relative' });

    const icon = createElement('i', { class: 'fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' });
    const input = createElement('input', {
        type: 'text',
        placeholder: 'Filter navigation...',
        class: 'w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all'
    });

    input.addEventListener('input', (e) => filterNav(e.target.value.toLowerCase()));

    wrapper.appendChild(icon);
    wrapper.appendChild(input);
    container.appendChild(wrapper);
    return container;
}

function filterNav(term) {
    const nav = document.getElementById('global-nav-placeholder');
    // Select all searchable items (buttons and links)
    const items = nav.querySelectorAll('[data-search-term]');

    items.forEach(el => {
        // We need to hide the LI that contains this element
        const li = el.closest('li');
        if (!li) return;

        if (term === '') {
            li.style.display = '';
            // Restore indent/border if needed?
            // Actually, we just unhide everything.
            // We might want to re-collapse things that were collapsed, but simpler to leave state.

             // Clean up forced display block from parents
             // This is tricky. Let's just reset display to default (empty string)
             // But parents need to be visible if they were expanded.
             // The state logic handles initial load, but dynamic filter messes with it.
             // Simple approach: unhide all LIs.
        } else {
            if (el.getAttribute('data-search-term').includes(term)) {
                li.style.display = 'block';
                // Show parents
                let parent = li.parentElement;
                while(parent && parent.id !== 'global-nav-placeholder') {
                    if (parent.tagName === 'UL') parent.style.display = 'block';
                    if (parent.tagName === 'LI') parent.style.display = 'block';
                    parent = parent.parentElement;
                }
            } else {
                li.style.display = 'none';
            }
        }
    });

    // If term is cleared, we might want to restore the collapsed state from navState
    if (term === '') {
        const state = loadNavState();
        // Re-apply display none to submenus that are not expanded in state
        // This is hard because we don't have IDs on ULs easily mapable here unless we regenerated.
        // Just reloading the menu is easier.
        const newMenu = buildNavMenu(window.navData);
        const oldMenu = nav.querySelector('ul');
        if (oldMenu) oldMenu.replaceWith(newMenu);
        highlightActiveLink(); // Re-highlight
    }
}

/**
 * Breadcrumbs & Active State
 */
function findCurrentNavPath(items, currentPath = []) {
    const params = new URLSearchParams(window.location.search);
    const mdFile = params.get('mdfile');
    const pathname = window.location.pathname;

    for (const item of items) {
        let match = false;
        if (item.href) {
            if (mdFile && item.href === mdFile) match = true;
            else if (!mdFile) {
                if (pathname.endsWith(item.href)) match = true;
                if ((item.href === 'index.html' || item.href === './index.html') &&
                    (pathname.endsWith('/') || pathname.endsWith('/index.html'))) match = true;
            }
        }

        if (match) return [...currentPath, item];

        if (item.children) {
            const childResult = findCurrentNavPath(item.children, [...currentPath, item]);
            if (childResult) return childResult;
        }
    }
    return null;
}

function generateBreadcrumbs() {
    if (!window.navData) return;
    const path = findCurrentNavPath(window.navData);
    const container = document.getElementById('breadcrumb-container');
    if (!container || !path) return;

    container.innerHTML = '';

    const ol = createElement('ol', { class: 'flex items-center space-x-2 text-sm text-slate-500' });

    // Home
    const homeLi = createElement('li');
    const homeLink = createElement('a', { href: `${SITE_BASE_PATH}index.html`, class: 'hover:text-indigo-600 transition-colors' }, [
        createElement('i', { class: 'fas fa-home' })
    ]);
    homeLi.appendChild(homeLink);
    ol.appendChild(homeLi);

    path.forEach((item, idx) => {
        ol.appendChild(createElement('li', { class: 'text-slate-300 text-xs' }, ['/']));
        const li = createElement('li');
        if (idx === path.length - 1) {
            li.className = "font-semibold text-slate-800 truncate max-w-[150px] md:max-w-xs";
            li.textContent = item.text;
        } else {
             // Only link if valid href and not just a category folder
             // Most categories don't have valid landing pages in this structure unless type is html_hub
             if (item.href && item.type !== 'category') {
                  // Need to construct link again... logic duplication.
                  // Ideally resolveLink function shared.
                  // For now, just text.
                  li.textContent = item.text;
             } else {
                  li.textContent = item.text;
             }
        }
        ol.appendChild(li);
    });
    container.appendChild(ol);
}

function highlightActiveLink() {
    if (!window.navData) return;
    const path = findCurrentNavPath(window.navData);
    if (!path) return;

    const activeItem = path[path.length - 1];
    const nav = document.getElementById('global-nav-placeholder');

    // Find link by data-original-href
    // CSS query might be complex with characters, so iterate
    const links = nav.querySelectorAll('a.nav-link');
    links.forEach(link => {
        if (link.getAttribute('data-original-href') === activeItem.href) {
            link.classList.add('bg-indigo-50', 'text-indigo-600', 'font-semibold', 'border-r-2', 'border-indigo-600');

            // Expand parents
            let parent = link.parentElement; // li
            while(parent && parent.id !== 'global-nav-placeholder') {
                if (parent.tagName === 'UL') {
                    parent.style.display = 'block';
                    // Flip chevron
                    const prevBtn = parent.previousElementSibling;
                    if (prevBtn && prevBtn.classList.contains('nav-category-title')) {
                        prevBtn.setAttribute('aria-expanded', 'true');
                        prevBtn.querySelector('.fa-chevron-down').classList.add('rotate-180');
                    }
                }
                parent = parent.parentElement;
            }
        }
    });
}

/**
 * Init
 */
function initGlobalNav() {
    const placeholder = document.getElementById('global-nav-placeholder');
    if (!placeholder) return;

    // Sidebar Container Styles
    placeholder.className = "sidebar fixed inset-y-0 left-0 w-72 bg-white border-r border-slate-200 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out z-40 flex flex-col shadow-2xl lg:shadow-none";

    if (typeof navData === 'undefined') {
        placeholder.innerHTML = '<div class="p-4 text-red-500">Error: navData.js not loaded.</div>';
        return;
    }

    // 1. Search
    placeholder.appendChild(buildNavSearch());

    // 2. Menu (Scrollable area)
    const menuContainer = createElement('div', { class: 'flex-1 overflow-y-auto px-3 py-4' });
    const menu = buildNavMenu(navData);
    if (menu) menuContainer.appendChild(menu);
    placeholder.appendChild(menuContainer);

    // 3. Footer / Branding
    const footer = createElement('div', { class: 'p-4 border-t border-slate-200 text-xs text-center text-slate-400 bg-slate-50' }, ["© 2025 Craft Financial"]);
    placeholder.appendChild(footer);

    // Post-render
    highlightActiveLink();
    generateBreadcrumbs();

    // Mobile Toggle
    const toggleBtn = document.getElementById('mobile-nav-toggle');
    const backdropId = 'sidebar-backdrop';
    let backdrop = document.getElementById(backdropId);

    if (!backdrop) {
        backdrop = createElement('div', {
            id: backdropId,
            class: 'fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 hidden transition-opacity'
        });
        backdrop.onclick = () => {
            placeholder.classList.add('-translate-x-full');
            backdrop.classList.add('hidden');
        };
        document.body.appendChild(backdrop);
    }

    if (toggleBtn) {
        toggleBtn.onclick = () => {
            const isClosed = placeholder.classList.contains('-translate-x-full');
            if (isClosed) {
                placeholder.classList.remove('-translate-x-full');
                backdrop.classList.remove('hidden');
            } else {
                placeholder.classList.add('-translate-x-full');
                backdrop.classList.add('hidden');
            }
        };
    }
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initGlobalNav);
else initGlobalNav();

console.log("Refined Navigation Engine Loaded");
