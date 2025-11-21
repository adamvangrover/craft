/**
 * Generates a Table of Contents (TOC) from H2 and H3 headers in the content area.
 * Expects #markdown-content and #toc-container elements to exist.
 */
function generateToc() {
    const content = document.getElementById('markdown-content');
    const tocContainer = document.getElementById('toc-container');

    if (!content || !tocContainer) {
        // console.warn("TOC: Content or Container not found.");
        return;
    }

    const headers = content.querySelectorAll('h2, h3');
    if (headers.length === 0) {
        tocContainer.innerHTML = '<p class="text-sm text-slate-400">No subsections found.</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.className = 'space-y-3 text-sm border-l-2 border-slate-100 ml-2';

    headers.forEach(header => {
        // Generate ID if missing
        if (!header.id) {
            header.id = header.textContent
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
        }

        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `#${header.id}`;
        a.textContent = header.textContent;

        // Styling based on level
        if (header.tagName === 'H2') {
            a.className = 'block pl-4 -ml-[2px] border-l-2 border-transparent text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition-colors';
        } else {
            a.className = 'block pl-8 -ml-[2px] border-l-2 border-transparent text-slate-500 hover:border-indigo-600 hover:text-indigo-600 transition-colors text-xs';
        }

        // Active State Logic (Intersection Observer could be used here for better UX)
        a.addEventListener('click', (e) => {
            // Optional: smooth scroll is handled by CSS scroll-behavior usually
            // Just remove active class from others
            ul.querySelectorAll('a').forEach(link => link.classList.remove('border-indigo-600', 'text-indigo-600'));
            a.classList.add('border-indigo-600', 'text-indigo-600');
        });

        li.appendChild(a);
        ul.appendChild(li);
    });

    tocContainer.innerHTML = '';
    tocContainer.appendChild(ul);
}

// Highlight TOC items on scroll
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                const link = document.querySelector(`#toc-container a[href="#${id}"]`);
                if (link) {
                    document.querySelectorAll('#toc-container a').forEach(l => l.classList.remove('border-indigo-600', 'text-indigo-600'));
                    link.classList.add('border-indigo-600', 'text-indigo-600');
                }
            }
        });
    }, { rootMargin: '0px 0px -80% 0px' });

    // We need to wait for content to load before observing
    // This function is exposed to be called after markdown render
    window.initTocObserver = () => {
        document.querySelectorAll('#markdown-content h2, #markdown-content h3').forEach(section => {
            observer.observe(section);
        });
    };
});
