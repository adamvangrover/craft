// Gamification Engine
// Tracks user XP, level, and badges based on page visits and interactions.

const GAMIFICATION_KEY = 'craft_user_progress';

// Defined Levels with specific titles (from UI/UX branch)
const LEVELS = [
    { level: 1, xp: 0, title: "Analyst I" },
    { level: 2, xp: 100, title: "Analyst II" },
    { level: 3, xp: 300, title: "Associate" },
    { level: 4, xp: 600, title: "VP" },
    { level: 5, xp: 1000, title: "Managing Director" }
];

// Merged Badge Definitions
const BADGES = {
    'first_step': { title: 'First Step', icon: 'fa-shoe-prints', desc: 'Started your journey.' },
    'scholar': { title: 'Scholar', icon: 'fa-book-reader', desc: 'Read 5 Deep Dives.' },
    'bookworm': { title: 'Bookworm', icon: 'fa-book', desc: 'Read 5 Deep Dives' }, // Kept for compatibility
    'toolmaster': { title: 'Toolmaster', icon: 'fa-tools', desc: 'Used 3 Workbench Tools.' },
    'quant_initiate': { title: 'Quant Initiate', icon: 'fa-calculator', desc: 'Explored Quantitative Finance.' },
    'esg_pioneer': { title: 'ESG Pioneer', icon: 'fa-leaf', desc: 'Explored Sustainable Finance.' },
    'wealth_architect': { title: 'Wealth Architect', icon: 'fa-city', desc: 'Explored Wealth Management.' },
    'risk_manager': { title: 'Risk Manager', icon: 'fa-shield-alt', desc: 'Explored Risk Management.' },
    'level_5': { title: 'High Flyer', icon: 'fa-crown', desc: 'Reached Level 5.' }
};

class GamificationManager {
    constructor() {
        this.STORAGE_KEY = GAMIFICATION_KEY;
        this.badges = BADGES;
        this.state = this.loadState();
        this.init();
    }

    loadState() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            return stored ? JSON.parse(stored) : { 
                xp: 0, 
                level: 1, 
                badges: [], 
                history: [], 
                visits: {}, 
                toolsUsed: [], 
                pagesVisited: [] 
            };
        } catch (e) {
            return { xp: 0, level: 1, badges: [], history: [], visits: {}, toolsUsed: [], pagesVisited: [] };
        }
    }

    saveState() {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
        this.updateWidget();
    }

    init() {
        // Award 'first_step' if new user
        if (this.state.xp === 0 && !this.hasBadge('first_step')) {
            this.unlockBadge('first_step');
            this.addXP(50, 'Welcome Bonus');
        }

        // Track current page on load
        this.trackPageVisit(window.location.pathname);

        // Verify level status on load
        this.checkLevelStatus();
    }

    getLevelDetails() {
        // Find current level based on XP thresholds
        let current = LEVELS[0];
        let next = null;
        for (let i = 0; i < LEVELS.length; i++) {
            if (this.state.xp >= LEVELS[i].xp) {
                current = LEVELS[i];
                next = LEVELS[i+1] || null;
            }
        }
        return { current, next };
    }

    checkLevelStatus() {
        const { current } = this.getLevelDetails();
        
        // If calculated level is higher than stored level
        if (current.level > this.state.level) {
            this.state.level = current.level;
            this.showNotification(`Level Up! You are now ${current.title} (Level ${current.level})`, 'success');
            
            // Check for Level 5 badge
            if (this.state.level >= 5 && !this.hasBadge('level_5')) {
                this.unlockBadge('level_5');
            }
            this.saveState();
        }
    }

    addXP(amount, reason) {
        this.state.xp += amount;
        this.state.history.push({ date: new Date().toISOString(), amount, reason });
        
        console.log(`+${amount} XP: ${reason}`);
        this.checkLevelStatus();
        this.saveState();
        
        // Optional: Show toast for large XP gains
        if (amount >= 20) {
            this.showNotification(`+${amount} XP: ${reason}`, 'info');
        }
    }

    /**
     * Tracks page visits and assigns category-specific badges
     */
    trackPageVisit(path) {
        // Deduplicate generic page visits
        if (!this.state.pagesVisited.includes(path)) {
            this.state.pagesVisited.push(path);
            this.addXP(10, 'New Topic Explored');
        }

        // Determine category based on path
        let category = null;
        if (path.includes('Quantitative_Finance') || path.includes('Data_Science')) category = 'quantitative_finance';
        else if (path.includes('Risk_Management')) category = 'risk_management';
        else if (path.includes('Sustainable_Finance') || path.includes('ESG')) category = 'sustainable_finance';
        else if (path.includes('Wealth_Management')) category = 'wealth_management';
        else if (path.includes('tools/')) category = 'tools';

        if (category) {
            this.handleCategoryVisit(category);
        }
    }

    handleCategoryVisit(category) {
        if (!this.state.visits) this.state.visits = {};
        if (!this.state.visits[category]) this.state.visits[category] = 0;
        this.state.visits[category]++;

        // Badge Logic for Categories
        if (category === 'quantitative_finance' && !this.hasBadge('quant_initiate')) this.unlockBadge('quant_initiate');
        if (category === 'risk_management' && !this.hasBadge('risk_manager')) this.unlockBadge('risk_manager');
        if (category === 'sustainable_finance' && !this.hasBadge('esg_pioneer')) this.unlockBadge('esg_pioneer');
        if (category === 'wealth_management' && !this.hasBadge('wealth_architect')) this.unlockBadge('wealth_architect');
        
        // Toolmaster Logic
        if (category === 'tools' && this.state.visits['tools'] >= 3 && !this.hasBadge('toolmaster')) {
            this.unlockBadge('toolmaster');
        }
        
        this.saveState();
    }

    trackToolUsage(toolId) {
        if (!this.state.toolsUsed.includes(toolId)) {
            this.state.toolsUsed.push(toolId);
            this.addXP(25, `Tool Mastered: ${toolId}`);

            if (this.state.toolsUsed.length >= 3 && !this.hasBadge('toolmaster')) {
                this.unlockBadge('toolmaster');
            }
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

    // UI Rendering Logic
    
    renderWidget() {
        let container = document.getElementById('gamification-widget');
        if (!container) {
            container = document.createElement('div');
            container.id = "gamification-widget";
            container.className = "p-4 border-t border-slate-200 bg-slate-50 mt-4 rounded-lg shadow-inner";
        }
        this.widgetEl = container;
        this.updateWidget();
        return container;
    }

    updateWidget() {
        const { current, next } = this.getLevelDetails();
        const currentLevelBaseXP = current.xp;
        
        // Progress Bar Calculation
        let pct = 100;
        if (next) {
            const levelProgress = this.state.xp - currentLevelBaseXP;
            const levelTotal = next.xp - currentLevelBaseXP;
            pct = Math.min(100, Math.max(0, (levelProgress / levelTotal) * 100));
        }

        // 1. Update Profile Widget (Sidebar/Header style)
        const profileEl = document.getElementById('user-profile-widget');
        if (profileEl) {
            profileEl.innerHTML = `
                <div class="flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-lg mx-2 mt-2 shadow-lg">
                    <div class="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-sm border-2 border-indigo-300">
                        LV${current.level}
                    </div>
                    <div class="flex-1">
                        <div class="text-xs font-bold text-indigo-300 uppercase tracking-wider">${current.title}</div>
                        <div class="w-full bg-slate-700 h-1.5 rounded-full mt-1">
                            <div class="bg-indigo-400 h-1.5 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
                        </div>
                        <div class="text-[10px] text-slate-400 mt-0.5 text-right">${this.state.xp} / ${next ? next.xp : 'Max'} XP</div>
                    </div>
                </div>
            `;
        }

        // 2. Update Detailed Widget (Footer/Dashboard style)
        const widgetEl = document.getElementById('gamification-widget') || this.widgetEl;
        if (widgetEl) {
             widgetEl.innerHTML = `
                <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                        ${current.level}
                    </div>
                    <div class="flex-1">
                        <div class="flex justify-between text-xs font-bold text-slate-500 mb-1">
                            <span>${current.title}</span>
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
                        if (!badge) return '';
                        return `<div class="w-8 h-8 rounded bg-yellow-100 text-yellow-600 flex items-center justify-center text-xs shadow-sm flex-shrink-0 relative group cursor-help">
                            <i class="fas ${badge.icon}"></i>
                            <span class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none">${badge.title}</span>
                        </div>`;
                    }).join('')}
                    ${this.state.badges.length === 0 ? '<span class="text-xs text-slate-400 italic">No badges yet. Start exploring!</span>' : ''}
                </div>
            `;
        }
    }

    showNotification(msg, type = 'info') {
        const notif = document.createElement('div');
        // Tailwind styling for notifications
        const colorClass = type === 'success' ? 'bg-emerald-600' : (type === 'warning' ? 'bg-amber-500' : 'bg-indigo-600');
        
        notif.className = `fixed bottom-4 right-4 ${colorClass} text-white px-6 py-3 rounded-lg shadow-lg transform translate-y-20 opacity-0 transition-all duration-300 z-50 font-bold flex items-center gap-3`;
        notif.innerHTML = `<i class="fas fa-trophy"></i> ${msg}`;

        document.body.appendChild(notif);

        // Animate in
        requestAnimationFrame(() => {
            notif.classList.remove('translate-y-20', 'opacity-0');
        });

        // Remove after delay
        setTimeout(() => {
            notif.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => notif.remove(), 300);
        }, 4000);
    }
}

// Initialize Global Instance
window.Gamification = new GamificationManager();
console.log("Gamification Engine Loaded (Merged v2.1)");