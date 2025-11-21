class ProgressManager {
    constructor() {
        this.storageKey = 'craft_progress';
        this.historyKey = 'craft_history';
        this.favoritesKey = 'craft_favorites';
        this.progress = this.loadProgress();
        this.history = this.loadHistory();
        this.favorites = this.loadFavorites();

        // Check for Firebase availability (placeholder for future integration)
        // Currently strictly using LocalStorage as requested for robust fallback
        console.log("ProgressManager initialized with LocalStorage");
    }

    loadProgress() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : {};
        } catch (e) {
            console.error("Error loading progress:", e);
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        } catch (e) {
            console.error("Error saving progress:", e);
        }
    }

    loadHistory() {
        try {
            const stored = localStorage.getItem(this.historyKey);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error("Error loading history:", e);
            return [];
        }
    }

    saveHistory() {
        try {
            localStorage.setItem(this.historyKey, JSON.stringify(this.history));
        } catch (e) {
            console.error("Error saving history:", e);
        }
    }

    loadFavorites() {
        try {
            const stored = localStorage.getItem(this.favoritesKey);
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error("Error loading favorites:", e);
            return [];
        }
    }

    saveFavorites() {
        try {
            localStorage.setItem(this.favoritesKey, JSON.stringify(this.favorites));
        } catch (e) {
            console.error("Error saving favorites:", e);
        }
    }

    /**
     * Mark a specific path as completed/read.
     * @param {string} path - The relative path or unique ID of the content.
     * @param {boolean} completed - Status (default true).
     */
    markAsComplete(path, completed = true) {
        if (!path) return;

        if (completed) {
            this.progress[path] = {
                completed: true,
                timestamp: new Date().toISOString()
            };
        } else {
            delete this.progress[path];
        }

        this.saveProgress();

        // Dispatch event for UI updates
        window.dispatchEvent(new CustomEvent('progressUpdated', { detail: { path, completed } }));
    }

    /**
     * Check if a path is completed.
     * @param {string} path
     * @returns {boolean}
     */
    isCompleted(path) {
        return !!(this.progress[path] && this.progress[path].completed);
    }

    /**
     * Log a visit to a page.
     * @param {string} path
     * @param {string} title
     */
    updateLastVisited(path, title = null) {
        if (!path) return;

        // Remove if exists to push to top
        this.history = this.history.filter(item => item.path !== path);

        this.history.unshift({
            path: path,
            title: title || this.guessTitle(path),
            timestamp: new Date().toISOString()
        });

        // Keep history size manageable (last 20 items)
        if (this.history.length > 20) this.history.pop();

        this.saveHistory();
    }

    /**
     * Get the most recently visited item.
     * @returns {object|null}
     */
    getLastVisited() {
        return this.history.length > 0 ? this.history[0] : null;
    }

    /**
     * Toggle favorite status for a page.
     * @param {string} path
     * @param {string} title
     */
    toggleFavorite(path, title = null) {
        if (!path) return;

        const index = this.favorites.findIndex(f => f.path === path);
        if (index >= 0) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push({
                path: path,
                title: title || this.guessTitle(path),
                timestamp: new Date().toISOString()
            });
        }
        this.saveFavorites();
        window.dispatchEvent(new CustomEvent('favoritesUpdated'));
    }

    isFavorite(path) {
        return this.favorites.some(f => f.path === path);
    }

    getFavorites() {
        return this.favorites;
    }

    guessTitle(path) {
        if (!path) return "Untitled";
        const parts = path.split('/');
        let name = parts[parts.length - 1];
        // Remove extension and query params
        name = name.split('?')[0].replace('.html', '').replace('.md', '').replace(/_/g, ' ');
        // Capitalize words
        return name.replace(/\b\w/g, l => l.toUpperCase());
    }

    /**
     * Calculate completion percentage based on navData tree.
     * @param {Array} navData - The navigation data structure.
     * @returns {object} { completed, total, percent }
     */
    getCompletionStats(navData) {
        if (!navData) return { completed: 0, total: 0, percent: 0 };

        let total = 0;
        let completed = 0;

        // Helper set to avoid double counting if nav structure has duplicates (rare but possible)
        const seenPaths = new Set();

        const traverse = (items) => {
            items.forEach(item => {
                // Only count actionable items (files/html), not categories unless they are also pages
                if (item.href && (item.type !== 'category' || item.type === 'html_hub')) {
                    // Normalize check: strip query params if needed, or strictly match href
                    // NavData hrefs usually don't have params unless specific
                    // But progress tracking might track with params for specific viewers.
                    // For general stats, we assume href is unique key.

                    if (!seenPaths.has(item.href)) {
                        seenPaths.add(item.href);
                        total++;

                        // Check both exact match and potential relative match issues
                        if (this.isCompleted(item.href)) {
                            completed++;
                        }
                    }
                }
                if (item.children) {
                    traverse(item.children);
                }
            });
        };

        traverse(navData);

        return {
            completed,
            total,
            percent: total > 0 ? Math.round((completed / total) * 100) : 0
        };
    }
}

// Expose globally
window.progressManager = new ProgressManager();
