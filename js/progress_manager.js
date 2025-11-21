class ProgressManager {
    constructor() {
        this.storageKey = 'craft_progress';
        this.historyKey = 'craft_history';
        this.navData = (typeof navData !== 'undefined') ? navData : [];
        this.init();
    }

    init() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify([]));
        }
        if (!localStorage.getItem(this.historyKey)) {
            localStorage.setItem(this.historyKey, JSON.stringify(null));
        }

        // Migrate from global_nav.js old key if it exists
        const oldKey = 'completed_pages';
        const oldData = localStorage.getItem(oldKey);
        if (oldData) {
            const currentData = this.getCompletedPages();
            const merged = [...new Set([...currentData, ...JSON.parse(oldData)])];
            localStorage.setItem(this.storageKey, JSON.stringify(merged));
            localStorage.removeItem(oldKey);
        }
    }

    trackPageVisit(url, title) {
        if (!url) return;
        const history = {
            url: url,
            title: title || document.title || 'Untitled Page',
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(this.historyKey, JSON.stringify(history));
    }

    markAsComplete(url) {
        if (!url) return;
        let completed = this.getCompletedPages();
        if (!completed.includes(url)) {
            completed.push(url);
            localStorage.setItem(this.storageKey, JSON.stringify(completed));
        }
    }

    unmarkComplete(url) {
        if (!url) return;
        let completed = this.getCompletedPages();
        completed = completed.filter(u => u !== url);
        localStorage.setItem(this.storageKey, JSON.stringify(completed));
    }

    toggleComplete(url) {
        if (this.isComplete(url)) {
            this.unmarkComplete(url);
            return false;
        } else {
            this.markAsComplete(url);
            return true;
        }
    }

    isComplete(url) {
        return this.getCompletedPages().includes(url);
    }

    getCompletedPages() {
        try {
            return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
        } catch (e) {
            return [];
        }
    }

    getLastVisited() {
        try {
            return JSON.parse(localStorage.getItem(this.historyKey));
        } catch (e) {
            return null;
        }
    }

    togglePin(url, title) {
        let pins = this.getPinnedItems();
        const existingIndex = pins.findIndex(p => p.url === url);
        if (existingIndex >= 0) {
            pins.splice(existingIndex, 1);
        } else {
            pins.push({ url, title: title || 'Untitled' });
        }
        localStorage.setItem('craft_pins', JSON.stringify(pins));
        return existingIndex === -1; // Returns true if added, false if removed
    }

    isPinned(url) {
        return this.getPinnedItems().some(p => p.url === url);
    }

    getPinnedItems() {
        try {
            return JSON.parse(localStorage.getItem('craft_pins') || '[]');
        } catch (e) {
            return [];
        }
    }

    calculateCompletionStats() {
        const totalItems = this.countTrackableItems(this.navData);
        const completedItems = this.getCompletedPages().length;

        // Cap at 100%
        const percentage = totalItems > 0 ? Math.min(100, Math.round((completedItems / totalItems) * 100)) : 0;

        return {
            total: totalItems,
            completed: completedItems,
            percentage: percentage
        };
    }

    // Recursive count of items with an href (excluding categories without href)
    countTrackableItems(items) {
        let count = 0;
        if (!items) return 0;
        items.forEach(item => {
            if (item.href && !item.href.startsWith('#')) {
                count++;
            }
            if (item.children) {
                count += this.countTrackableItems(item.children);
            }
        });
        return count;
    }
}

// Global instance
const progressManager = new ProgressManager();
