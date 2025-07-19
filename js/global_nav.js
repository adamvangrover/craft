document.addEventListener('DOMContentLoaded', () => {
    function getBasePath() {
        const pathname = window.location.pathname;
        const parts = pathname.split('/');
        if (parts.length > 1 && parts[1] !== "") {
            const potentialRepoName = parts[1];
            if (potentialRepoName === "craft") {
                return `/${potentialRepoName}/`;
            }
        }
        return "/";
    }

    const SITE_BASE_PATH = getBasePath();

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

    function buildNavMenu(items, level = 0) {
        if (!items || items.length === 0) {
            return null;
        }

        const ul = createElement('ul', { class: `nav-level-${level}` });

        items.forEach(item => {
            const li = createElement('li');
            let finalHref = '#';

            if (item.href) {
                let rawHref = item.href;
                if (item.type === 'markdown_viewer' && item.viewer === 'global') {
                    finalHref = `${SITE_BASE_PATH}global_markdown_viewer.html?mdfile=${encodeURIComponent(rawHref)}`;
                } else if (item.type === 'section_viewer_item') {
                    const parts = rawHref.split('?');
                    finalHref = `${SITE_BASE_PATH}${parts[0]}` + (parts.length > 1 ? `?${parts[1]}` : '');
                } else {
                    finalHref = rawHref.startsWith('#') ? rawHref : `${SITE_BASE_PATH}${rawHref}`;
                }
            }

            const hasChildren = item.children && item.children.length > 0;

            if (item.type === 'category' || (item.type === 'section_viewer' && hasChildren)) {
                const categoryId = `category-${level}-${item.text.replace(/\s+/g, '-')}`;
                const titleElement = createElement('button', {
                    class: 'nav-category-title collapsible',
                    'aria-expanded': 'false',
                    'aria-controls': categoryId
                });

                titleElement.innerHTML = `<i class="fas fa-folder"></i> ${item.text} <span class="toggler-icon"><i class="fas fa-chevron-right"></i></span>`;

                titleElement.onclick = function() {
                    const subMenu = this.nextElementSibling;
                    const isExpanded = subMenu.style.display === 'block';
                    subMenu.style.display = isExpanded ? 'none' : 'block';
                    this.setAttribute('aria-expanded', !isExpanded);
                    this.querySelector('.toggler-icon').innerHTML = isExpanded ? '<i class="fas fa-chevron-right"></i>' : '<i class="fas fa-chevron-down"></i>';
                };
                li.appendChild(titleElement);
            } else {
                const aAttributes = { href: finalHref };
                if (item.type === 'jupyter_guide') {
                    aAttributes.target = "_blank";
                }
                const link = createElement('a', aAttributes, [`<i class="fas fa-file-alt"></i> ${item.text}`]);
                link.innerHTML = `<i class="fas fa-file-alt"></i> ${item.text}`;
                li.appendChild(link);
            }

            if (hasChildren) {
                const subMenu = buildNavMenu(item.children, level + 1);
                if (subMenu) {
                    if (item.type === 'category' || (item.type === 'section_viewer' && hasChildren)) {
                        const categoryId = `category-${level}-${item.text.replace(/\s+/g, '-')}`;
                        subMenu.id = categoryId;
                        subMenu.style.display = 'none';
                    }
                    li.appendChild(subMenu);
                }
            }
            ul.appendChild(li);
        });

        return ul;
    }

    function highlightActiveLink() {
        const currentPath = window.location.pathname;
        document.querySelectorAll('#global-nav-placeholder a').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active-nav-link');
            }
        });
    }

    function initGlobalNav() {
        const placeholder = document.getElementById('global-nav-placeholder');
        if (!placeholder) {
            console.warn('Global navigation placeholder not found.');
            return;
        }

        if (typeof navData === 'undefined' || navData === null) {
            setTimeout(initGlobalNav, 50);
            return;
        }

        const navMenuHtml = buildNavMenu(navData);
        if (navMenuHtml) {
            placeholder.innerHTML = '';
            placeholder.appendChild(navMenuHtml);
            highlightActiveLink();
        } else {
            placeholder.innerHTML = '<p>Navigation menu is empty.</p>';
        }
    }

    initGlobalNav();

    // Sidebar toggle for mobile
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('global-nav-placeholder');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (menuToggle && sidebar && sidebarBackdrop) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
            sidebarBackdrop.classList.toggle('hidden');
        });
        sidebarBackdrop.addEventListener('click', () => {
            sidebar.classList.remove('open');
            sidebarBackdrop.classList.add('hidden');
        });
    }
});
