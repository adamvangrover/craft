document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');
    const navLinks = document.querySelectorAll('#learning-path a');

    const sections = {
        'section-1': 'pd1.md',
        'section-2': 'pd3.md',
        'section-3': 'pd4.md',
        'section-4': 'pd0.md',
        'section-5': 'pd5.md',
    };

    const loadContent = async (section) => {
        const markdownFile = sections[section];
        if (!markdownFile) return;

        try {
            const response = await fetch(markdownFile);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const markdown = await response.text();
            
            // A simple markdown to HTML converter
            let html = markdown
                .split('\n')
                .map(line => {
                    if (line.startsWith('# ')) {
                        return `<h2>${line.substring(2)}</h2>`;
                    }
                    if (line.startsWith('## ')) {
                        return `<h3>${line.substring(3)}</h3>`;
                    }
                    if (line.startsWith('*   ')) {
                        return `<ul><li>${line.substring(4)}</li></ul>`;
                    }
                     if (line.startsWith('> ')) {
                        return `<blockquote>${line.substring(2)}</blockquote>`;
                    }
                    return `<p>${line}</p>`;
                })
                .join('');
            
            contentDiv.innerHTML = `<div class="content-section" id="${section}">${html}</div>`;

        } catch (error) {
            console.error('Error loading content:', error);
            contentDiv.innerHTML = `<p class="text-red-500">Error loading content. Please try again later.</p>`;
        }
    };

    const updateActiveLink = (hash) => {
        navLinks.forEach(link => {
            if (link.getAttribute('href') === hash) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        });
    };

    const handleNavigation = () => {
        let hash = window.location.hash || '#section-1';
        loadContent(hash.substring(1));
        updateActiveLink(hash);
    };

    window.addEventListener('hashchange', handleNavigation);

    // Initial load
    handleNavigation();
});
