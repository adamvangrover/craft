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
        loadLearningPaths();
        loadPrimers();
        initGlossarySearch();
        initFlashcards();
        initCovenantBuilder();
        initDealScreener();
        initCreditScorer();
        loadChecklists();
        initMemoBuilder();
        initCalculators();
        initESGToolkit();
        initCovenantChecker();
    } else {
        console.error("workbenchData not loaded");
    }

    // --- Search Logic ---
    setupSearch('notebook-search', 'notebook-grid', '.notebook-card');
    setupSearch('prompt-search', 'prompt-list', '.prompt-card');

    // --- Maturity Visualizer ---
    initMaturityVisualizer();
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
                </div>
            `;
            grid.appendChild(card);
        });
    });
}

// --- ESG Toolkit ---
function initESGToolkit() {
    const inputs = ['esg-base-rating', 'esg-input-e', 'esg-input-s', 'esg-input-g'];
    const container = document.getElementById('wb-esg');
    if (!container) return;

    function update() {
        const base = parseInt(document.getElementById('esg-base-rating').value);
        const e = parseFloat(document.getElementById('esg-input-e').value);
        const s = parseFloat(document.getElementById('esg-input-s').value);
        const g = parseFloat(document.getElementById('esg-input-g').value);

        document.getElementById('esg-val-e').textContent = e;
        document.getElementById('esg-val-s').textContent = s;
        document.getElementById('esg-val-g').textContent = g;

        // Simplified weighting
        const weightedScore = (e * 0.4) + (s * 0.3) + (g * 0.3);

        let notches = 0;
        let desc = "Neutral Impact";
        let color = "text-white";

        if (weightedScore <= 2.0) {
            notches = -1;
            desc = "Positive Upgrade (+1)";
            color = "text-emerald-400";
        } else if (weightedScore >= 4.0) {
            notches = 2;
            desc = "Negative Downgrade (-2)";
            color = "text-red-400";
        } else if (weightedScore >= 3.5) {
            notches = 1;
            desc = "Negative Downgrade (-1)";
            color = "text-orange-400";
        }

        const resEl = document.getElementById('esg-result-notch');
        resEl.textContent = notches === 0 ? "0" : (notches < 0 ? `+${Math.abs(notches)}` : `-${notches}`);
        resEl.className = `text-5xl font-black mb-4 ${color}`;
        document.getElementById('esg-result-desc').textContent = desc;
    }

    inputs.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('input', update);
    });
}

// --- Covenant Checker ---
function initCovenantChecker() {
    const btn = document.getElementById('cov-check-btn');
    if (!btn) return;

    btn.addEventListener('click', () => {
        const ebitda = parseFloat(document.getElementById('cov-ebitda').value) || 0;
        const debt = parseFloat(document.getElementById('cov-debt').value) || 0;
        const interest = parseFloat(document.getElementById('cov-interest').value) || 0;
        const maxLev = parseFloat(document.getElementById('cov-max-lev').value) || 0;
        const minIcr = parseFloat(document.getElementById('cov-min-icr').value) || 0;

        // Calc
        const lev = ebitda > 0 ? (debt / ebitda).toFixed(2) : "N/A";
        const icr = interest > 0 ? (ebitda / interest).toFixed(2) : "N/A";

        // Display Lev
        const levEl = document.getElementById('cov-res-lev');
        if (lev !== "N/A") {
            const isBreach = parseFloat(lev) > maxLev;
            levEl.querySelector('.text-2xl').textContent = `${lev}x`;
            levEl.className = `p-4 rounded-lg border ${isBreach ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`;
            levEl.querySelector('.text-2xl').className = `text-2xl font-bold ${isBreach ? 'text-red-600' : 'text-emerald-600'}`;
        }

        // Display ICR
        const icrEl = document.getElementById('cov-res-icr');
        if (icr !== "N/A") {
            const isBreach = parseFloat(icr) < minIcr;
            icrEl.querySelector('.text-2xl').textContent = `${icr}x`;
            icrEl.className = `p-4 rounded-lg border ${isBreach ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`;
            icrEl.querySelector('.text-2xl').className = `text-2xl font-bold ${isBreach ? 'text-red-600' : 'text-emerald-600'}`;
        }

        // Gamification Hook
        if(window.Gamification) window.Gamification.addXP(15, "Ran Covenant Check");
    });
}

// --- Learning Paths ---
function loadLearningPaths() {
    const grid = document.getElementById('paths-grid');
    if (!grid) return;

    workbenchData.learning_paths.forEach(lp => {
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-xl border-l-4 border-indigo-500 shadow-sm hover:shadow-md transition-all";
        card.innerHTML = `
            <h3 class="font-bold text-lg text-slate-800 mb-2">${lp.title}</h3>
            <p class="text-sm text-slate-500 mb-4">Structured curriculum for mastery.</p>
            <a href="global_markdown_viewer.html?mdfile=${lp.path}" class="inline-block text-indigo-600 font-bold text-sm hover:underline">Start Path &rarr;</a>
        `;
        grid.appendChild(card);
    });
}

// --- Primers ---
function loadPrimers() {
    const grid = document.getElementById('primers-grid');
    if (!grid) return;

    workbenchData.primers.forEach(p => {
        const card = document.createElement('div');
        card.className = "bg-white p-4 rounded-lg border border-slate-200 hover:border-slate-300 transition-all";
        card.innerHTML = `
            <div class="flex items-center gap-2 mb-2">
                <i class="fas fa-book-open text-slate-400"></i>
                <span class="text-xs font-bold text-slate-500 uppercase">Primer</span>
            </div>
            <h4 class="font-bold text-slate-800 mb-3">${p.title}</h4>
            <a href="global_markdown_viewer.html?mdfile=${p.path}" class="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-2 rounded hover:bg-slate-200 block text-center">Read Guide</a>
        `;
        grid.appendChild(card);
    });
}

// --- Glossary Search & Flashcards ---
function initGlossarySearch() {
    const input = document.getElementById('glossary-search');
    const results = document.getElementById('glossary-results');
    if (!input || !results) return;

    input.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        results.innerHTML = '';

        if (term.length < 2) return;

        const matches = workbenchData.glossary.filter(g => g.term.toLowerCase().includes(term) || g.definition.toLowerCase().includes(term));

        if (matches.length === 0) {
            results.innerHTML = '<div class="text-slate-400 text-center py-4">No terms found.</div>';
            return;
        }

        matches.forEach(m => {
            const item = document.createElement('div');
            item.className = "bg-white p-4 rounded-lg border border-slate-200 shadow-sm";
            // Highlight term
            const regex = new RegExp(`(${term})`, 'gi');
            const highlightedDef = m.definition.replace(regex, '<span class="bg-yellow-100 font-bold">$1</span>');

            item.innerHTML = `
                <div class="font-bold text-indigo-700 text-lg mb-1">${m.term}</div>
                <div class="text-slate-600 leading-relaxed">${highlightedDef}</div>
            `;
            results.appendChild(item);
        });
    });
}

function initFlashcards() {
    const toggleBtn = document.getElementById('fc-toggle-btn');
    const ui = document.getElementById('flashcard-ui');
    const results = document.getElementById('glossary-results');
    const search = document.getElementById('glossary-search');

    if(!toggleBtn || !ui) return;

    let currentIndex = 0;
    let isFlipped = false;
    // Shuffle glossary for randomness
    const deck = [...workbenchData.glossary].sort(() => 0.5 - Math.random());

    const front = document.getElementById('fc-content-front');
    const back = document.getElementById('fc-content-back');
    const termEl = document.getElementById('fc-term');
    const defEl = document.getElementById('fc-def');

    function updateCard() {
        if(deck.length === 0) return;
        const card = deck[currentIndex];
        termEl.textContent = card.term;
        defEl.textContent = card.definition;

        // Reset flip
        isFlipped = false;
        front.style.opacity = '1';
        back.style.opacity = '0';
    }

    function flip() {
        isFlipped = !isFlipped;
        if(isFlipped) {
            front.style.opacity = '0';
            back.style.opacity = '1';
        } else {
            front.style.opacity = '1';
            back.style.opacity = '0';
        }
    }

    toggleBtn.addEventListener('click', () => {
        if(ui.classList.contains('hidden')) {
            ui.classList.remove('hidden');
            results.classList.add('hidden');
            search.parentElement.classList.add('hidden'); // Hide search bar container
            toggleBtn.textContent = "Exit Flashcards";
            updateCard();
        } else {
            ui.classList.add('hidden');
            results.classList.remove('hidden');
            search.parentElement.classList.remove('hidden');
            toggleBtn.innerHTML = '<i class="fas fa-layer-group mr-2"></i> Flashcards';
        }
    });

    document.getElementById('fc-card').addEventListener('click', flip);
    document.getElementById('fc-flip').addEventListener('click', flip);

    document.getElementById('fc-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % deck.length;
        updateCard();
    });

    document.getElementById('fc-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + deck.length) % deck.length;
        updateCard();
    });
}

// --- Deal Screener ---
function initDealScreener() {
    if(!workbenchData.deals) return;

    const tableBody = document.getElementById('ds-table-body');
    const countEl = document.getElementById('ds-count');
    const sectorSel = document.getElementById('ds-sector');

    if(!tableBody) return;

    // Populate Sector Dropdown
    const sectors = [...new Set(workbenchData.deals.map(d => d.sector))];
    sectors.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s;
        opt.textContent = s;
        sectorSel.appendChild(opt);
    });

    function renderTable(deals) {
        tableBody.innerHTML = '';
        countEl.textContent = `${deals.length} Deals Found`;

        if(deals.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="6" class="p-8 text-center text-slate-400">No deals match your criteria.</td></tr>';
            return;
        }

        deals.forEach(d => {
            const tr = document.createElement('tr');
            tr.className = "hover:bg-indigo-50 transition-colors cursor-pointer group";
            tr.innerHTML = `
                <td class="p-4">
                    <div class="font-bold text-slate-800 group-hover:text-indigo-600">${d.name}</div>
                    <div class="text-xs text-slate-400">${d.description}</div>
                </td>
                <td class="p-4 text-slate-600">${d.sector} <span class="text-xs text-slate-400 block">${d.sub_sector}</span></td>
                <td class="p-4 text-right font-mono text-slate-600">$${d.revenue}</td>
                <td class="p-4 text-right font-mono text-slate-600">$${d.ebitda} <span class="text-xs text-emerald-500 block">(${d.ebitda_margin}%)</span></td>
                <td class="p-4 text-right font-bold ${d.leverage > 4 ? 'text-orange-500' : 'text-slate-600'}">${d.leverage}x</td>
                <td class="p-4 text-center"><span class="bg-slate-100 text-slate-600 font-bold px-2 py-1 rounded text-xs border border-slate-200">${d.rating || 'NR'}</span></td>
            `;
            tableBody.appendChild(tr);
        });
    }

    // Initial Render
    renderTable(workbenchData.deals);

    // Filter Logic
    document.getElementById('ds-apply-btn').addEventListener('click', () => {
        const sec = sectorSel.value;
        const minRev = parseFloat(document.getElementById('ds-min-rev').value) || 0;
        const maxLev = parseFloat(document.getElementById('ds-max-lev').value) || 999;
        const minMar = parseFloat(document.getElementById('ds-min-margin').value) || -999;

        const filtered = workbenchData.deals.filter(d => {
            if(sec !== 'all' && d.sector !== sec) return false;
            if(d.revenue < minRev) return false;
            if(d.leverage > maxLev) return false;
            if(d.ebitda_margin < minMar) return false;
            return true;
        });

        renderTable(filtered);
    });
}

// --- Credit Scorer ---
function initCreditScorer() {
    if(!workbenchData.scoring_model) return;
    const model = workbenchData.scoring_model;
    const finContainer = document.getElementById('cs-fin-inputs');
    const bizContainer = document.getElementById('cs-biz-inputs');

    if(!finContainer || !bizContainer) return;

    // Render Financial Inputs
    model.financial_risk_profile.metrics.forEach(m => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label class="block text-sm font-medium text-slate-700 mb-1">${m.name}</label>
            <input type="number" id="cs-in-${m.id}" class="w-full border-slate-300 rounded px-3 py-2 border text-sm" placeholder="Enter value...">
        `;
        finContainer.appendChild(div);
    });

    // Render Business Inputs
    model.business_risk_profile.questions.forEach(q => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label class="block text-sm font-medium text-slate-700 mb-1">${q.text}</label>
            <select id="cs-sel-${q.id}" class="w-full border-slate-300 rounded px-3 py-2 border text-sm">
                ${q.options.map(o => `<option value="${o.value}">${o.text}</option>`).join('')}
            </select>
        `;
        bizContainer.appendChild(div);
    });

    // Calculation Logic
    document.getElementById('cs-calc-btn').addEventListener('click', () => {
        let totalScore = 0;

        // Financial Score
        let finScore = 0;
        model.financial_risk_profile.metrics.forEach(m => {
            const val = parseFloat(document.getElementById(`cs-in-${m.id}`).value);
            if(isNaN(val)) return; // Skip or handle error

            // Find matching threshold
            let score = 1;
            if(m.thresholds[0].max !== undefined) {
                 // Ascending logic (Lower is better e.g. Leverage)
                 const match = m.thresholds.find(t => val <= t.max);
                 if(match) score = match.score;
            } else {
                 // Descending logic (Higher is better e.g. Coverage)
                 const match = m.thresholds.find(t => val >= t.min);
                 if(match) score = match.score;
            }
            finScore += score * m.weight;
        });

        // Business Score
        let bizScore = 0;
        model.business_risk_profile.questions.forEach(q => {
             const val = parseInt(document.getElementById(`cs-sel-${q.id}`).value);
             bizScore += val; // Simple sum then average?
        });
        bizScore = bizScore / model.business_risk_profile.questions.length;

        // Total
        totalScore = (finScore * model.financial_risk_profile.weight) + (bizScore * model.business_risk_profile.weight);

        // Map to Rating
        const ratingObj = model.rating_scale.find(r => totalScore >= r.min_score);
        const rating = ratingObj ? ratingObj.rating : "D";

        document.getElementById('cs-result-score').textContent = `Score: ${totalScore.toFixed(2)}`;
        document.getElementById('cs-result-rating').textContent = rating;

        // Color code
        const rEl = document.getElementById('cs-result-rating');
        if(['AAA','AA','A'].includes(rating)) rEl.className = "text-6xl font-black mb-2 text-emerald-400";
        else if(['BBB','BB'].includes(rating)) rEl.className = "text-6xl font-black mb-2 text-yellow-400";
        else rEl.className = "text-6xl font-black mb-2 text-red-400";
    });
}


// --- Maturity Visualizer ---
function initMaturityVisualizer() {
    const btn = document.getElementById('mat-visualize-btn');
    const addBtn = document.querySelector('.mat-add-btn');
    const inputsContainer = document.getElementById('maturity-inputs');
    const chart = document.getElementById('maturity-chart');

    if(!btn) return;

    addBtn.addEventListener('click', () => {
        const div = document.createElement('div');
        div.className = "flex gap-2";
        div.innerHTML = `
            <input type="number" class="mat-year w-1/3 border-slate-300 rounded px-2 py-1 text-sm border" placeholder="Year">
            <input type="number" class="mat-amount w-1/3 border-slate-300 rounded px-2 py-1 text-sm border" placeholder="Amount">
            <button class="text-red-500 hover:text-red-700 px-2" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
        `;
        inputsContainer.appendChild(div);
    });

    btn.addEventListener('click', () => {
        const years = [];
        const amounts = [];

        document.querySelectorAll('.mat-year').forEach((el, i) => {
            const yr = parseInt(el.value);
            const amt = parseFloat(document.querySelectorAll('.mat-amount')[i].value);
            if(!isNaN(yr) && !isNaN(amt)) {
                years.push(yr);
                amounts.push(amt);
            }
        });

        if(amounts.length === 0) return;

        // Render Bars
        chart.innerHTML = '';
        const maxAmt = Math.max(...amounts);

        // Sort by year
        const data = years.map((y, i) => ({ y, a: amounts[i] })).sort((a,b) => a.y - b.y);

        data.forEach(d => {
            const heightPct = (d.a / maxAmt) * 100;
            const bar = document.createElement('div');
            bar.className = "flex flex-col items-center group relative w-12";
            // Bar visual
            const barVisual = document.createElement('div');
            barVisual.className = "w-full bg-orange-400 rounded-t hover:bg-orange-500 transition-all relative";
            barVisual.style.height = `${heightPct}%`;
            barVisual.innerHTML = `<div class="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">$${d.a}M</div>`;

            // Year label
            const yearLabel = document.createElement('div');
            yearLabel.className = "text-xs text-slate-500 mt-1 font-bold h-4";
            yearLabel.textContent = d.y;

            bar.appendChild(barVisual);
            bar.appendChild(yearLabel);

            // Container for proper alignment
            const wrapper = document.createElement('div');
            wrapper.className = "h-full flex flex-col justify-end items-center w-12";
            wrapper.style.height = "100%";
            wrapper.appendChild(barVisual);
            wrapper.appendChild(yearLabel);

            // Actually, the previous logic was appending bar directly to chart, which is a flex row.
            // chart class: items-end gap-4
            // So bar just needs to be h-full? No, bar height is %.
            // Let's stick to simple structure.
            const container = document.createElement('div');
            container.className = "h-full flex flex-col justify-end items-center w-12 group";

            const visual = document.createElement('div');
            visual.className = "w-full bg-orange-400 rounded-t hover:bg-orange-500 transition-all relative";
            visual.style.height = `${heightPct}%`;
            visual.innerHTML = `<div class="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">$${d.a}M</div>`;

            const lbl = document.createElement('div');
            lbl.className = "text-xs text-slate-500 mt-1 font-bold";
            lbl.textContent = d.y;

            container.appendChild(visual);
            container.appendChild(lbl);
            chart.appendChild(container);
        });
    });
}

// --- Checklists ---
function loadChecklists() {
    const select = document.getElementById('checklist-select');
    const output = document.getElementById('checklist-output');
    const btn = document.getElementById('generate-checklist-btn');

    if(!select || !workbenchData.checklists) return;

    // Clear existing options except first
    select.innerHTML = '<option value="">Choose checklist...</option>';

    // Populate
    Object.keys(workbenchData.checklists).forEach(key => {
        const item = workbenchData.checklists[key];
        const opt = document.createElement('option');
        opt.value = key;
        opt.textContent = item.title;
        select.appendChild(opt);
    });

    btn.addEventListener('click', () => {
        const key = select.value;
        if(workbenchData.checklists[key]) {
            output.value = workbenchData.checklists[key].content;
        }
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
            <div class="bg-white p-3 rounded border border-slate-200 text-slate-600 text-sm font-mono whitespace-pre-wrap">${p.prompt_text || p.prompt}</div>
        `;

        // Copy Logic
        card.querySelector('.copy-btn').addEventListener('click', () => {
            navigator.clipboard.writeText(p.prompt_text || p.prompt);
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

    const select = document.getElementById('cov-clause-select');
    const output = document.getElementById('cov-output');

    // Helper to populate select
    function populate(clausesData) {
        select.innerHTML = '<option value="">Select a standard clause...</option>';
        if (Array.isArray(clausesData)) {
            // Check if it's the categorized array style (from legal_clauses.json)
            if(clausesData.length > 0 && clausesData[0].category) {
                 clausesData.forEach(cat => {
                     const group = document.createElement('optgroup');
                     group.label = cat.category;
                     if(cat.clauses) {
                         cat.clauses.forEach(c => {
                             const opt = document.createElement('option');
                             opt.value = c.standard_text || c.standard_clause || c.text;
                             opt.textContent = c.title || c.name;
                             group.appendChild(opt);
                         });
                     }
                     select.appendChild(group);
                 });
            } else {
                 // Simple list
                 clausesData.forEach(c => {
                    const opt = document.createElement('option');
                    opt.value = c.text || c.clause;
                    opt.textContent = c.title || c.name || "Clause";
                    select.appendChild(opt);
                 });
            }
        }
    }

    // Try to load from embedded workbenchData first
    if (workbenchData.clauses && workbenchData.clauses.length > 0) {
        populate(workbenchData.clauses);
    } else {
        // Fallback to fetch
        const clausesFile = workbenchData.datasets.find(d => d.title.includes("Clauses") || d.path.includes("clauses.json"));
        if (clausesFile) {
            try {
                const response = await fetch(clausesFile.path);
                const data = await response.json();
                populate(data.clauses || data);
            } catch (e) {
                console.error("Error loading clauses", e);
            }
        }
    }

    // Event Listener
    document.getElementById('cov-add-btn').addEventListener('click', () => {
        const text = select.value;
        if(text) {
            output.value += text + "\n\n";
        }
    });
}

// --- Memo Builder ---
function initMemoBuilder() {
    const mbBtn = document.getElementById('mb-generate-btn');
    const sectorSel = document.getElementById('mb-sector');

    if(!mbBtn) return;

    // Populate Sector Dropdown if data exists
    if(workbenchData.memo_narratives) {
        Object.keys(workbenchData.memo_narratives).forEach(sec => {
            const opt = document.createElement('option');
            opt.value = sec;
            opt.textContent = sec;
            sectorSel.appendChild(opt);
        });

        // Listener for auto-fill
        sectorSel.addEventListener('change', () => {
             const sec = sectorSel.value;
             const data = workbenchData.memo_narratives[sec];
             if(data) {
                 document.getElementById('mb-thesis').value = "- " + data.thesis + "\n\n**Key Drivers:** " + data.drivers;
                 document.getElementById('mb-risks').value = data.risks + "\n\n**Outlook:** " + data.outlook;
             }
        });
    }

    mbBtn.addEventListener('click', () => {
        const b = document.getElementById('mb-borrower').value || "[Borrower]";
        const f = document.getElementById('mb-facility').value || "[Facility]";
        const a = document.getElementById('mb-amount').value || "[Amount]";
        const p = document.getElementById('mb-pricing').value || "[Pricing]";
        const t = document.getElementById('mb-thesis').value || "- [Enter Thesis]";
        const r = document.getElementById('mb-risks').value || "- [Enter Risks]";
        const date = new Date().toLocaleDateString();

        const template = `# Credit Memorandum
**Date:** ${date}
**Borrower:** ${b}
**Facility:** ${f} | **Amount:** ${a} | **Pricing:** ${p}

## Executive Summary
We recommend approval of the proposed ${f} for ${b}. The transaction supports...

## Investment Thesis
${t}

## Key Risks & Mitigants
${r}

## Financial Analysis
[Insert historical and projected financial tables here]

## Recommendation
**APPROVE**
`;
        document.getElementById('cm-editor').value = template;
    });

    // Credit Memo Export
    const btn = document.getElementById('cm-export-btn');
    if(btn) {
        btn.addEventListener('click', () => {
            const text = document.getElementById('cm-editor').value;
            const blob = new Blob([text], { type: 'text/markdown' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'credit_memo_draft.md';
            a.click();
        });
    }
}

// --- Calculators ---
function initCalculators() {
    // Ratio Calculator
    const btn = document.getElementById('calc-btn');
    if(btn) {
        btn.addEventListener('click', () => {
            const ca = parseFloat(document.getElementById('calc-ca').value) || 0;
            const cl = parseFloat(document.getElementById('calc-cl').value) || 0;
            const inv = parseFloat(document.getElementById('calc-inv').value) || 0;
            if (cl === 0) return;
            document.getElementById('res-current').textContent = (ca / cl).toFixed(2);
            document.getElementById('res-quick').textContent = ((ca - inv) / cl).toFixed(2);
            document.getElementById('calc-feedback').textContent = "Calculation complete.";
        });
    }

    // DCF Calculator
    const dcfBtn = document.getElementById('dcf-calc-btn');
    if(dcfBtn) {
        dcfBtn.addEventListener('click', () => {
            const fcf1 = parseFloat(document.getElementById('dcf-fcf').value) || 0;
            const growth = (parseFloat(document.getElementById('dcf-growth').value) || 0) / 100;
            const wacc = (parseFloat(document.getElementById('dcf-wacc').value) || 0) / 100;

            if (wacc <= growth) {
                alert("WACC must be greater than growth rate for simplified Terminal Value calculation.");
                return;
            }

            // 5 Year Projection
            let totalPV = 0;
            let currentFCF = fcf1; // Year 1
            totalPV += currentFCF / Math.pow(1 + wacc, 1);

            for(let i=2; i<=5; i++) {
                currentFCF = currentFCF * (1 + growth);
                totalPV += currentFCF / Math.pow(1 + wacc, i);
            }

            // Terminal Value (Gordon Growth) at Year 5
            const tv = (currentFCF * (1 + growth)) / (wacc - growth);
            const tvPV = tv / Math.pow(1 + wacc, 5);

            const ev = totalPV + tvPV;
            document.getElementById('dcf-result').textContent = '$' + ev.toFixed(2);
        });
    }

    // EV Calculator
    const evBtn = document.getElementById('ev-calc-btn');
    if(evBtn) {
        evBtn.addEventListener('click', () => {
             const eq = parseFloat(document.getElementById('ev-equity').value) || 0;
             const debt = parseFloat(document.getElementById('ev-debt').value) || 0;
             const pref = parseFloat(document.getElementById('ev-pref').value) || 0;
             const min = parseFloat(document.getElementById('ev-minority').value) || 0;
             const cash = parseFloat(document.getElementById('ev-cash').value) || 0;
             const res = eq + debt + pref + min - cash;
             document.getElementById('ev-result').textContent = '$' + res.toLocaleString();
        });
    }
}

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
