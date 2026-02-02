class GamificationManager {
    constructor() {
        this.STORAGE_KEY = 'craft_user_progress';
        this.state = this.loadState();

        // Define all available badges
        this.badges = {
            'first_step': { title: 'First Step', icon: 'fa-shoe-prints', desc: 'Started your journey.' },
            'scholar': { title: 'Scholar', icon: 'fa-book-reader', desc: 'Read 5 Deep Dives.' },
            'toolmaster': { title: 'Toolmaster', icon: 'fa-tools', desc: 'Used 3 Workbench Tools.' },
            'esg_pioneer': { title: 'ESG Pioneer', icon: 'fa-leaf', desc: 'Explored Sustainable Finance.' },
            'wealth_architect': { title: 'Wealth Architect', icon: 'fa-city', desc: 'Explored Wealth Management.' },
            'quant_initiate': { title: 'Quant Initiate', icon: 'fa-calculator', desc: 'Explored Quantitative Finance.' },
            'risk_manager': { title: 'Risk Manager', icon: 'fa-shield-alt', desc: 'Explored Risk Management.' },
            'level_5': { title: 'High Flyer', icon: 'fa-crown', desc: 'Reached Level 5.' }
        };

        this.init();
    }

    loadState() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : { xp: 0, level: 1, badges: [], history: [], visits: {} };
        } catch (e) {
            return { xp: 0, level: 1, badges: [], history: [], visits: {} };
        }
    }

    saveState() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
        this.updateWidget();
    }

    init() {
        // Award 'first_step' if new
        if (this.state.xp === 0 && !this.hasBadge('first_step')) {
            this.unlockBadge('first_step');
            this.addXP(50, 'Welcome Bonus');
        }

        // Check level badges
        this.checkLevelBadges();
    }

    /**
     * Call this when a user visits a specific section or uses a tool
     * @param {string} category - e.g., 'quantitative_finance', 'esg', 'tools'
     */
    checkPageVisit(category) {
        // Track visit count for this category
        if (!this.state.visits) this.state.visits = {};
        if (!this.state.visits[category]) this.state.visits[category] = 0;
        this.state.visits[category]++;

        // Award XP for visiting (capped daily or just small amount)
        // Simple implementation: 10 XP per unique section visit per session (approximated by just adding it)
        this.addXP(10, `Visited ${category}`);

        // Badge Logic
        if (category === 'quantitative_finance' && !this.hasBadge('quant_initiate')) {
            this.unlockBadge('quant_initiate');
        }
        if (category === 'risk_management' && !this.hasBadge('risk_manager')) {
            this.unlockBadge('risk_manager');
        }
        if (category === 'sustainable_finance' && !this.hasBadge('esg_pioneer')) {
            this.unlockBadge('esg_pioneer');
        }
        if (category === 'wealth_management' && !this.hasBadge('wealth_architect')) {
            this.unlockBadge('wealth_architect');
        }

        // Generic counters
        if (category === 'tools') {
            if (this.state.visits['tools'] >= 3 && !this.hasBadge('toolmaster')) {
                this.unlockBadge('toolmaster');
            }
        }

        this.saveState();
    }

    addXP(amount, reason) {
        this.state.xp += amount;
        this.state.history.push({ date: new Date().toISOString(), amount, reason });

        // Level Calc: Level = floor(sqrt(XP / 100)) + 1
        const newLevel = Math.floor(Math.sqrt(this.state.xp / 100)) + 1;
        if (newLevel > this.state.level) {
            this.state.level = newLevel;
            this.showNotification(`Level Up! You are now Level ${newLevel}`, 'success');
            this.checkLevelBadges();
        }

        this.saveState();
    }

    checkLevelBadges() {
        if (this.state.level >= 5 && !this.hasBadge('level_5')) {
            this.unlockBadge('level_5');
        }
    }

    hasBadge(id) {
        return this.state.badges.includes(id);
    }

    unlockBadge(id) {
        if (!this.hasBadge(id) && this.badges[id]) {
            this.state.badges.push(id);
            this.addXP(100, `Badge: ${this.badges[id].title}`);
            this.showNotification(`Badge Unlocked: ${this.badges[id].title}`, 'warning');
            this.saveState();
        }
    }

    renderWidget() {
        const container = document.createElement('div');
        container.className = "p-4 border-t border-slate-200 bg-slate-50";
        container.id = "gamification-widget";

        this.widgetEl = container;
        this.updateWidget();

        return container;
    }

    updateWidget() {
        if (!this.widgetEl) return;

        // Calculate progress to next level
        const currentLevelBaseXP = Math.pow(this.state.level - 1, 2) * 100;
        const nextLevelXP = Math.pow(this.state.level, 2) * 100;
        const levelProgress = this.state.xp - currentLevelBaseXP;
        const levelTotal = nextLevelXP - currentLevelBaseXP;
        const pct = Math.min(100, Math.max(0, (levelProgress / levelTotal) * 100));

        this.widgetEl.innerHTML = `
            <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                    ${this.state.level}
                </div>
                <div class="flex-1">
                    <div class="flex justify-between text-xs font-bold text-slate-500 mb-1">
                        <span>Analyst Level</span>
                        <span>${Math.floor(this.state.xp)} XP</span>
                    </div>
                    <div class="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div class="h-full bg-indigo-500 transition-all duration-500" style="width: ${pct}%"></div>
                    </div>
                </div>
            </div>
            <div class="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                ${this.state.badges.map(b => {
                    const badge = this.badges[b];
                    return `<div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs shadow-sm flex-shrink-0 relative group cursor-help">
                        <i class="fas ${badge.icon}"></i>
                        <span class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">${badge.title}</span>
                    </div>`;
                }).join('')}
                ${this.state.badges.length === 0 ? '<span class="text-xs text-slate-400 italic">No badges yet. Start learning!</span>' : ''}
            </div>
        `;
    }

    showNotification(msg, type = 'info') {
        const notif = document.createElement('div');
        const colorClass = type === 'success' ? 'bg-emerald-500' : (type === 'warning' ? 'bg-amber-500' : 'bg-indigo-500');
        notif.className = `fixed bottom-4 right-4 ${colorClass} text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 z-50 font-bold flex items-center gap-3`;
        notif.innerHTML = `<i class="fas fa-trophy"></i> ${msg}`;

        document.body.appendChild(notif);

        // Animate in
        requestAnimationFrame(() => {
            notif.classList.remove('translate-y-20', 'opacity-0');
        });

        // Remove
        setTimeout(() => {
            notif.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => notif.remove(), 300);
        }, 4000);
    }
}

// Global Instance
window.Gamification = new GamificationManager();
console.log("Gamification Engine Loaded (v2)");
