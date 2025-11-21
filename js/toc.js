/**
 * Table of Contents Generator
 * Generates a sticky TOC for the Markdown viewer.
 */
(function() {
    function generateTOC() {
        const content = document.getElementById('markdown-content');
        const tocContainer = document.getElementById('toc-sidebar-content');

        if (!content || !tocContainer) return;

        // Reset
        tocContainer.innerHTML = '';

        const headers = content.querySelectorAll('h2, h3');
        if (headers.length === 0) {
            tocContainer.innerHTML = '<p class="text-sm text-slate-400 italic">No sections found.</p>';
            return;
        }

        const ul = document.createElement('ul');
        ul.className = 'space-y-2 text-sm border-l-2 border-slate-100';

        headers.forEach((header, index) => {
            // Ensure ID
            if (!header.id) {
                header.id = 'section-' + index;
            }

            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${header.id}`;
            a.textContent = header.textContent;
            a.className = header.tagName === 'H2'
                ? 'block pl-3 text-slate-700 hover:text-indigo-600 hover:border-l-2 hover:border-indigo-600 -ml-[2px] transition-all py-1'
                : 'block pl-6 text-slate-500 hover:text-indigo-600 transition-colors py-1';

            // Smooth scroll
            a.onclick = (e) => {
                e.preventDefault();
                document.getElementById(header.id).scrollIntoView({ behavior: 'smooth' });
                // Update active state manually or let scroll observer handle it
            };

            li.appendChild(a);
            ul.appendChild(li);
        });

        tocContainer.appendChild(ul);

        // Setup Scroll Observer for Active State
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const activeLink = tocContainer.querySelector(`a[href="#${id}"]`);
                    if (activeLink) {
                        tocContainer.querySelectorAll('a').forEach(l => l.classList.remove('text-indigo-600', 'font-medium', 'border-l-2', 'border-indigo-600', '-ml-[2px]'));
                        activeLink.classList.add('text-indigo-600', 'font-medium');
                        if (entry.target.tagName === 'H2') {
                            activeLink.classList.add('border-l-2', 'border-indigo-600', '-ml-[2px]');
                        }
                    }
                }
            });
        }, { rootMargin: '-100px 0px -66%' });

        headers.forEach(h => observer.observe(h));
    }

    // Expose
    window.generateTOC = generateTOC;
})();
