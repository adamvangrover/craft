/**
 * Credit Copilot Engine
 * A client-side agent for glossary lookup, term highlighting, and interactive chat.
 */

const COPILOT_CONFIG = {
    glossaryPath: 'modules/Credit_Analysis/GLOSSARY.md',
    fallbackGlossary: {
        "EBITDA": "Earnings Before Interest, Taxes, Depreciation, and Amortization. A proxy for operating cash flow.",
        "CAGR": "Compound Annual Growth Rate. The mean annual growth rate of an investment over a specified period of time longer than one year.",
        "LBO": "Leveraged Buyout. The acquisition of another company using a significant amount of borrowed money to meet the cost of acquisition.",
        "WACC": "Weighted Average Cost of Capital. A calculation of a firm's cost of capital in which each category of capital is proportionately weighted.",
        "Derivative": "A financial security with a value that is reliant upon or derived from an underlying asset or group of assets."
    }
};

class CreditCopilot {
    constructor() {
        this.glossary = {};
        this.isLoaded = false;
    }

    /**
     * Initializes the Copilot: fetches data and sets up UI.
     */
    async init() {
        await this.fetchGlossary();
        this.setupChatUI();
        console.log("Credit Copilot initialized.");
    }

    /**
     * Fetches and parses the glossary Markdown.
     */
    async fetchGlossary() {
        try {
            const response = await fetch(COPILOT_CONFIG.glossaryPath);
            if (!response.ok) throw new Error(`Failed to load glossary: ${response.statusText}`);
            const text = await response.text();
            this.parseGlossary(text);
            this.isLoaded = true;
        } catch (error) {
            console.warn("Credit Copilot: Using fallback glossary due to load error.", error);
            this.glossary = COPILOT_CONFIG.fallbackGlossary;
            this.isLoaded = true;
        }
    }

    /**
     * Parses Markdown format `* **Term:** Definition` into an object.
     */
    parseGlossary(markdown) {
        const lines = markdown.split('\n');
        // Regex to match "* **Term:** Definition" or "* **Term:** Definition"
        // allowing for variations in whitespace
        const entryRegex = /^\s*\*\s*\*\*(.*?):\*\*\s*(.*)/;

        lines.forEach(line => {
            const match = line.match(entryRegex);
            if (match) {
                const term = match[1].trim();
                const definition = match[2].trim();
                // Store lowercase key for easy lookup, but keep original term in value if needed
                // Actually, we just need term -> definition mapping.
                // We can store multiple keys if there are synonyms (e.g. "Term / Synonym")
                // But for now, let's stick to the main term.

                // Handle "Term (Abbr)" cases
                // We might want to index both "Term" and "Abbr" if possible, but let's keep it simple first.
                this.glossary[term.toLowerCase()] = definition;

                // Also handle slashed terms e.g. "Term / Synonym"
                if (term.includes('/')) {
                    const parts = term.split('/');
                    parts.forEach(p => this.glossary[p.trim().toLowerCase()] = definition);
                }
            }
        });
    }

    /**
     * Scans the container and highlights known terms.
     */
    highlightTerms(containerId) {
        if (!this.isLoaded) return;

        const container = document.getElementById(containerId);
        if (!container) return;

        // Sort terms by length (descending) to avoid partial matches inside longer terms
        const terms = Object.keys(this.glossary).sort((a, b) => b.length - a.length);

        // We need a more efficient way than iterating all terms against all text.
        // However, for a client-side static site, this might be heavy if glossary is huge.
        // Optimization: Only highlight terms that are actually in the text.

        // Using TreeWalker to find text nodes
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while (node = walker.nextNode()) {
            // Skip if parent is already a highlighted term or a link or script/style
            const parentTag = node.parentElement.tagName.toLowerCase();
            if (parentTag === 'span' && node.parentElement.classList.contains('term-highlight')) continue;
            if (['a', 'script', 'style', 'code', 'pre'].includes(parentTag)) continue;
            textNodes.push(node);
        }

        // We will create a regex from the terms.
        // To avoid performance issues with huge regex, let's filter terms present in the content textContent first.
        const contentText = container.textContent.toLowerCase();
        const presentTerms = terms.filter(term => term.length > 3 && contentText.includes(term)); // Only terms > 3 chars to avoid noise

        if (presentTerms.length === 0) return;

        // Batch terms for regex? Or just one big regex?
        // One big regex for all present terms might be okay if not too many.
        // Let's limit to top 50 longest present terms to stay sane? Or just try.
        // Regex needs to match whole words.

        const regexStr = `\\b(${presentTerms.map(t => this.escapeRegex(t)).join('|')})\\b`;
        const regex = new RegExp(regexStr, 'gi');

        textNodes.forEach(textNode => {
            const text = textNode.nodeValue;
            if (!regex.test(text)) return;

            // Reset regex lastIndex
            regex.lastIndex = 0;

            const fragment = document.createDocumentFragment();
            let lastIdx = 0;
            let match;

            // We need to loop through matches
            // Note: 'gi' regex with exec() requires loop
            // But simpler is split.
            // Actually, split captures the separator if wrapped in parenthesis.
            const parts = text.split(regex);

            // If parts length is 1, no match (should have been caught by test check above but just in case)
            if (parts.length === 1) return;

            parts.forEach((part, index) => {
                // Even indices are non-matches, odd are matches (because of capturing group)
                if (index % 2 === 0) {
                    fragment.appendChild(document.createTextNode(part));
                } else {
                    // Match
                    const span = document.createElement('span');
                    span.className = 'term-highlight bg-indigo-50 text-indigo-700 border-b border-indigo-300 cursor-help transition-colors hover:bg-indigo-100 px-0.5 rounded-sm';
                    span.textContent = part;
                    span.dataset.term = part.toLowerCase();
                    span.onclick = (e) => {
                        e.stopPropagation();
                        this.showDefinition(part.toLowerCase());
                    };
                    fragment.appendChild(span);
                }
            });

            textNode.parentNode.replaceChild(fragment, textNode);
        });
    }

    escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    showDefinition(termKey) {
        // Try exact match
        let def = this.glossary[termKey];
        // If not found, try to find a key that contains this term (fuzzy-ish)
        if (!def) {
            const key = Object.keys(this.glossary).find(k => k === termKey || k.split('/').map(s=>s.trim()).includes(termKey));
            if (key) def = this.glossary[key];
        }

        if (def) {
            this.openChatWithResponse(termKey, def);
        }
    }

    setupChatUI() {
        // Floating Action Button
        const fab = document.createElement('button');
        fab.id = 'copilot-fab';
        fab.className = 'fixed bottom-6 right-6 w-14 h-14 bg-indigo-600 text-white rounded-full shadow-xl hover:bg-indigo-700 hover:scale-105 transition-all z-50 flex items-center justify-center focus:outline-none ring-2 ring-offset-2 ring-indigo-500';
        fab.innerHTML = '<i class="fas fa-robot text-2xl"></i>';
        fab.title = "Ask Credit Copilot";
        fab.onclick = () => this.toggleChat();
        document.body.appendChild(fab);

        // Chat Window
        const chatWindow = document.createElement('div');
        chatWindow.id = 'copilot-window';
        chatWindow.className = 'fixed bottom-24 right-6 w-80 md:w-96 h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 z-50 transform transition-transform duration-300 translate-y-[150%] opacity-0 pointer-events-none';

        chatWindow.innerHTML = `
            <div class="p-4 bg-indigo-600 text-white rounded-t-2xl flex justify-between items-center shrink-0">
                <div class="flex items-center gap-2">
                    <i class="fas fa-robot"></i>
                    <span class="font-bold">Credit Copilot</span>
                </div>
                <button id="copilot-close" class="text-white/80 hover:text-white"><i class="fas fa-times"></i></button>
            </div>
            <div id="copilot-messages" class="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                <div class="bg-white p-3 rounded-lg rounded-tl-none shadow-sm text-sm text-slate-700 border border-slate-100">
                    Hello! I'm your Credit Copilot. Highlight terms in the text or ask me a definition here.
                </div>
            </div>
            <div class="p-3 border-t border-slate-200 bg-white rounded-b-2xl shrink-0">
                <div class="flex items-center gap-2">
                    <input type="text" id="copilot-input" class="flex-1 text-sm border border-slate-300 rounded-full px-4 py-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Define 'EBITDA'...">
                    <button id="copilot-send" class="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors"><i class="fas fa-arrow-up text-xs"></i></button>
                </div>
            </div>
        `;
        document.body.appendChild(chatWindow);

        // Event Listeners
        document.getElementById('copilot-close').onclick = () => this.toggleChat(false);
        document.getElementById('copilot-send').onclick = () => this.handleUserMessage();
        document.getElementById('copilot-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.handleUserMessage();
        });
    }

    toggleChat(show) {
        const win = document.getElementById('copilot-window');
        const fab = document.getElementById('copilot-fab');

        // If show is undefined, toggle
        const isHidden = win.classList.contains('translate-y-[150%]');
        const shouldShow = show === undefined ? isHidden : show;

        if (shouldShow) {
            win.classList.remove('translate-y-[150%]', 'opacity-0', 'pointer-events-none');
            document.getElementById('copilot-input').focus();
            fab.classList.add('rotate-90', 'opacity-0'); // Hide FAB smoothly
        } else {
            win.classList.add('translate-y-[150%]', 'opacity-0', 'pointer-events-none');
            fab.classList.remove('rotate-90', 'opacity-0');
        }
    }

    handleUserMessage() {
        const input = document.getElementById('copilot-input');
        const text = input.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        input.value = '';

        // Process
        this.processQuery(text);
    }

    addMessage(text, sender) {
        const container = document.getElementById('copilot-messages');
        const div = document.createElement('div');
        const isUser = sender === 'user';

        div.className = `max-w-[85%] p-3 rounded-lg text-sm shadow-sm border ${isUser
            ? 'bg-indigo-600 text-white rounded-tr-none ml-auto border-indigo-700'
            : 'bg-white text-slate-700 rounded-tl-none border-slate-100'}`;

        // Allow basic HTML in bot messages
        if (isUser) div.textContent = text;
        else div.innerHTML = text;

        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    processQuery(query) {
        // Simple fuzzy search
        const q = query.toLowerCase();
        let match = this.glossary[q];

        if (!match) {
            // Try finding partial matches
            const keys = Object.keys(this.glossary);
            const partials = keys.filter(k => k.includes(q) || q.includes(k));

            if (partials.length > 0) {
                // Pick the best one (shortest or most relevant)
                // Let's just pick the first for now
                match = this.glossary[partials[0]];
                if (partials.length > 1) {
                    // Maybe mention others?
                }
            }
        }

        if (match) {
             this.addMessage(`<strong>${q.toUpperCase()}:</strong> ${match}`, 'bot');
        } else {
            this.addMessage(`I couldn't find a definition for "${query}". Try checking the spelling or browsing the Glossary.`, 'bot');
        }
    }

    openChatWithResponse(term, definition) {
        this.toggleChat(true);
        this.addMessage(`Defining <strong>${term.toUpperCase()}</strong>...`, 'bot');
        setTimeout(() => {
             this.addMessage(definition, 'bot');
        }, 300);
    }
}

// Export singleton
window.creditCopilot = new CreditCopilot();
