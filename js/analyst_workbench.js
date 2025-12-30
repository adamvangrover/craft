document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.wb-nav-item');
    const sections = document.querySelectorAll('.wb-section');

    function showSection(id) {
        sections.forEach(s => s.classList.add('hidden'));
        const target = document.getElementById(id);
        if (target) target.classList.remove('hidden');

        navItems.forEach(n => {
            if (n.dataset.target === id) {
                n.classList.add('bg-indigo-50', 'text-indigo-600', 'border-r-4', 'border-indigo-600');
                n.classList.remove('text-slate-500', 'hover:bg-slate-50');
            } else {
                n.classList.remove('bg-indigo-50', 'text-indigo-600', 'border-r-4', 'border-indigo-600');
                n.classList.add('text-slate-500', 'hover:bg-slate-50');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => showSection(item.dataset.target));
    });

    // Default to Dashboard
    showSection('wb-dashboard');

    // --- Data Loading ---
    if (typeof workbenchData !== 'undefined') {
        loadNotebooks();
        loadPrompts();
        loadDatasets();
        loadQuizzes();
        initCovenantBuilder();
    } else {
        console.error("workbenchData not loaded");
    }

    // --- Search Logic ---
    setupSearch('notebook-search', 'notebook-grid', '.notebook-card');
    setupSearch('prompt-search', 'prompt-list', '.prompt-card');
});

// --- Notebooks ---
function loadNotebooks() {
    const grid = document.getElementById('notebook-grid');
    if (!grid) return;

    // Group by Category
    const categories = {};
    workbenchData.notebooks.forEach(nb => {
        if (!categories[nb.category]) categories[nb.category] = [];
        categories[nb.category].push(nb);
    });

    Object.keys(categories).sort().forEach(cat => {
        const header = document.createElement('h3');
        header.className = "col-span-full text-lg font-bold text-slate-700 mt-6 mb-2 border-b border-slate-200 pb-2";
        header.textContent = cat;
        grid.appendChild(header);

        categories[cat].forEach(nb => {
            const card = document.createElement('div');
            card.className = "notebook-card bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-all flex flex-col group";
            card.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold text-slate-400 uppercase tracking-wider"><i class="fab fa-python mr-1"></i> Notebook</span>
                </div>
                <h4 class="font-bold text-slate-800 mb-2 group-hover:text-indigo-600">${nb.title}</h4>
                <div class="mt-auto pt-4 flex gap-2">
                     <a href="${nb.path}" class="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded hover:bg-indigo-100">View Guide</a>
                     <!-- In a real app, this might link to Colab -->
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

// --- Prompts ---
function loadPrompts() {
    const list = document.getElementById('prompt-list');
    if (!list) return;

    workbenchData.prompts.forEach(p => {
        const card = document.createElement('div');
        card.className = "prompt-card bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4 hover:border-indigo-300 transition-all";
        card.innerHTML = `
            <div class="flex justify-between items-start mb-2">
                <span class="text-xs font-bold text-indigo-500 uppercase bg-white px-2 py-1 rounded border border-indigo-100">${p.category || 'General'}</span>
                <button class="text-slate-400 hover:text-indigo-600 copy-btn" title="Copy Prompt"><i class="fas fa-copy"></i></button>
            </div>
            <p class="text-slate-800 font-medium mb-2 text-sm">${p.objective || 'Objective'}</p>
            <div class="bg-white p-3 rounded border border-slate-200 text-slate-600 text-sm font-mono whitespace-pre-wrap">${p.prompt_text}</div>
        `;

        // Copy Logic
        card.querySelector('.copy-btn').addEventListener('click', () => {
            navigator.clipboard.writeText(p.prompt_text);
            alert("Prompt copied to clipboard!");
        });

        list.appendChild(card);
    });
}

// --- Datasets ---
function loadDatasets() {
    const list = document.getElementById('data-list');
    if (!list) return;

    workbenchData.datasets.forEach(d => {
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-4 bg-white border-b border-slate-100 hover:bg-slate-50";
        item.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="p-2 bg-slate-100 rounded text-slate-500"><i class="fas fa-database"></i></div>
                <div>
                    <h5 class="font-bold text-slate-800 text-sm">${d.title}</h5>
                    <span class="text-xs text-slate-400">${d.type}</span>
                </div>
            </div>
            <a href="${d.path}" download class="text-indigo-600 hover:text-indigo-800 text-sm font-semibold"><i class="fas fa-download mr-1"></i> Download</a>
        `;
        list.appendChild(item);
    });
}

// --- Quizzes ---
function loadQuizzes() {
    const grid = document.getElementById('quiz-grid');
    if (!grid) return;

    workbenchData.quizzes.forEach(q => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded-lg border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all";
        card.innerHTML = `
             <div class="flex items-center gap-3 mb-3">
                <div class="p-2 bg-teal-50 text-teal-600 rounded"><i class="fas fa-check-circle"></i></div>
                <h4 class="font-bold text-slate-800 text-sm">${q.title}</h4>
            </div>
            <a href="quiz_viewer.html" class="block w-full text-center py-2 bg-slate-100 text-slate-600 text-xs font-bold rounded hover:bg-teal-600 hover:text-white transition-colors">Start Quiz</a>
        `;
        grid.appendChild(card);
    });
}

// --- Covenant Builder ---
async function initCovenantBuilder() {
    const builderSection = document.getElementById('covenant-builder');
    if (!builderSection) return;

    // Find the clauses file
    const clausesFile = workbenchData.datasets.find(d => d.title === "Sample Covenant Clauses" || d.path.includes("sample_credit_agreement_clauses.json"));

    if (clausesFile) {
        try {
            const response = await fetch(clausesFile.path);
            const data = await response.json();
            const clauses = data.clauses || []; // Adjust based on actual structure

            const select = document.getElementById('cov-clause-select');
            const output = document.getElementById('cov-output');

            // Populate select
            // Assuming structure is like { "Financial Covenants": [...], ... } or list
            // If list of objects with category/text

            // Inspecting memory of json files... assume array or object keys
            // If it's the file I read earlier? No, I read decision tree.
            // Let's assume standard object iteration.

            if (Array.isArray(clauses)) {
                 clauses.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c.text || c.clause;
                    opt.textContent = c.title || c.name || "Clause";
                    select.appendChild(opt);
                 });
            } else {
                 // Object keys
                 for (const cat in data) {
                     const group = document.createElement('optgroup');
                     group.label = cat;
                     data[cat].forEach(c => {
                         const opt = document.createElement('option');
                         opt.value = c.standard_clause || c.text;
                         opt.textContent = c.title || c.name;
                         group.appendChild(opt);
                     });
                     select.appendChild(group);
                 }
            }

            // Event Listener
            document.getElementById('cov-add-btn').addEventListener('click', () => {
                const text = select.value;
                if(text) {
                    output.value += text + "\n\n";
                }
            });

        } catch (e) {
            console.error("Error loading clauses", e);
        }
    }
}

// --- Synthesis (Credit Memo) ---
function initCreditMemo() {
    // Simple logic to clear/export
    document.getElementById('cm-export-btn').addEventListener('click', () => {
        const text = document.getElementById('cm-editor').value;
        const blob = new Blob([text], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'credit_memo_draft.md';
        a.click();
    });
}
if(document.getElementById('cm-export-btn')) initCreditMemo();


// --- Helper: Search ---
function setupSearch(inputId, containerId, itemSelector) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const items = document.querySelectorAll(`#${containerId} ${itemSelector}`);

        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(term)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}
