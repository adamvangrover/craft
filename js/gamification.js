// Gamification Engine
// Tracks user XP, level, and badges based on page visits and interactions.

const GAMIFICATION_KEY = 'craft_user_progress';

const LEVELS = [
    { level: 1, xp: 0, title: "Analyst I" },
    { level: 2, xp: 100, title: "Analyst II" },
    { level: 3, xp: 300, title: "Associate" },
    { level: 4, xp: 600, title: "VP" },
    { level: 5, xp: 1000, title: "Managing Director" }
];

const BADGES = {
    'reader': { name: 'Bookworm', icon: 'fa-book', description: 'Read 5 Deep Dives' },
    'quant': { name: 'Quant', icon: 'fa-calculator', description: 'Used 3 Tools' },
    'esg': { name: 'Sustainable', icon: 'fa-leaf', description: 'Visited ESG Hub' }
};

class GamificationSystem {
    constructor() {
        this.state = this.loadState();
        this.init();
    }

    loadState() {
        try {
            const saved = localStorage.getItem(GAMIFICATION_KEY);
            return saved ? JSON.parse(saved) : { xp: 0, toolsUsed: [], pagesVisited: [], badges: [] };
        } catch (e) {
            return { xp: 0, toolsUsed: [], pagesVisited: [], badges: [] };
        }
    }

    saveState() {
        localStorage.setItem(GAMIFICATION_KEY, JSON.stringify(this.state));
    }

    getLevel() {
        let current = LEVELS[0];
        for (const lvl of LEVELS) {
            if (this.state.xp >= lvl.xp) current = lvl;
        }
        return current;
    }

    getNextLevel() {
        for (const lvl of LEVELS) {
            if (this.state.xp < lvl.xp) return lvl;
        }
        return null;
    }

    addXP(amount, reason) {
        this.state.xp += amount;
        this.saveState();
        this.updateUI();
        console.log(`+${amount} XP: ${reason}`);

        // Simple Toast
        this.showToast(`+${amount} XP: ${reason}`);
    }

    trackPageVisit(path) {
        if (!this.state.pagesVisited.includes(path)) {
            this.state.pagesVisited.push(path);
            this.addXP(10, 'New Topic Explored');

            // Badge Logic
            if (path.includes('Sustainable_Finance') && !this.state.badges.includes('esg')) {
                this.awardBadge('esg');
            }
        }
    }

    trackToolUsage(toolId) {
        if (!this.state.toolsUsed.includes(toolId)) {
            this.state.toolsUsed.push(toolId);
            this.addXP(25, 'Tool Mastered');

            if (this.state.toolsUsed.length >= 3 && !this.state.badges.includes('quant')) {
                this.awardBadge('quant');
            }
        }
    }

    awardBadge(badgeId) {
        if (!this.state.badges.includes(badgeId)) {
            this.state.badges.push(badgeId);
            this.saveState();
            this.showToast(`Badge Unlocked: ${BADGES[badgeId].name}!`, 'gold');
        }
    }

    showToast(msg, color = 'indigo') {
        const toast = document.createElement('div');
        toast.className = `fixed bottom-4 right-4 bg-${color}-600 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-bounce`;
        toast.innerHTML = `<i class="fas fa-star mr-2"></i> ${msg}`;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }

    updateUI() {
        const profileEl = document.getElementById('user-profile-widget');
        if (!profileEl) return;

        const level = this.getLevel();
        const next = this.getNextLevel();
        const progress = next ? ((this.state.xp - level.xp) / (next.xp - level.xp)) * 100 : 100;

        profileEl.innerHTML = `
            <div class="flex items-center gap-3 px-4 py-3 bg-slate-900 text-white rounded-lg mx-2 mt-2 shadow-lg">
                <div class="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center font-bold text-sm border-2 border-indigo-300">
                    LV${level.level}
                </div>
                <div class="flex-1">
                    <div class="text-xs font-bold text-indigo-300 uppercase tracking-wider">${level.title}</div>
                    <div class="w-full bg-slate-700 h-1.5 rounded-full mt-1">
                        <div class="bg-indigo-400 h-1.5 rounded-full transition-all duration-500" style="width: ${progress}%"></div>
                    </div>
                    <div class="text-[10px] text-slate-400 mt-0.5 text-right">${this.state.xp} XP</div>
                </div>
            </div>
        `;
    }

    init() {
        // Track current page on load
        this.trackPageVisit(window.location.pathname);
    }
}

// Initialize
window.gamification = new GamificationSystem();
