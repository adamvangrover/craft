document.addEventListener('DOMContentLoaded', () => {
    const appData = {
        productivityChart: {
            labels: ['Manual Tasking', 'AI-Assisted Tasking'],
            data: [100, 140]
        },
        quiz: [
            {
                question: "Which AI technology is best for analyzing vast amounts of text to understand sentiment and trends?",
                options: ["Computer Vision", "Natural Language Processing (NLP)", "Robotics"],
                answer: "Natural Language Processing (NLP)"
            },
            {
                question: "You want to create a realistic but entirely fake image for a marketing campaign. Which AI technology would you use?",
                options: ["Predictive Analytics", "Generative Adversarial Networks (GANs)", "Speech Recognition"],
                answer: "Generative Adversarial Networks (GANs)"
            }
        ],
        chatbot: {
            start: {
                text: "You are a project manager. A new AI tool promises to automate 50% of your team's tasks, but it requires a significant upfront investment and retraining. What do you do?",
                options: [
                    { text: "Invest in the tool immediately.", next: "invest" },
                    { text: "Ignore the tool and continue with current methods.", next: "ignore" },
                    { text: "Run a small pilot program with a few team members.", next: "pilot" }
                ]
            },
            invest: { text: "You go all-in. The tool is powerful, but the steep learning curve and lack of preparation lead to a chaotic implementation, initially lowering productivity.", options: [{ text: "Start Over", next: "start" }] },
            ignore: { text: "You stick with the status quo. Your team's productivity remains stable, but a competitor who adopted the tool gains a significant market advantage within a year.", options: [{ text: "Start Over", next: "start" }] },
            pilot: { text: "You run a successful pilot. The team provides valuable feedback, allowing for a smoother, more effective company-wide rollout. This balanced approach mitigates risk while capturing the benefits of innovation.", options: [{ text: "Start Over", next: "start" }] }
        },
        badges: [
            { id: 'explorer', name: 'Curious Explorer', desc: 'Completed the narrative journey.', unlocked: false, icon: '🚀' },
            { id: 'quiz_master', name: 'Quiz Master', desc: 'Aced the AI Use-Case Quiz.', unlocked: false, icon: '🧠' },
            { id: 'ethical_leader', name: 'Ethical Leader', desc: 'Navigated the chatbot dilemma.', unlocked: false, icon: '⚖️' },
            { id: 'creative_mind', name: 'Creative Mind', desc: 'Generated AI art.', unlocked: false, icon: '🎨' }
        ],
        levels: [
            { name: 'Curious Explorer', xp: 0 },
            { name: 'AI Enthusiast', xp: 1000 },
            { name: 'Future Shaper', xp: 2500 }
        ]
    };

    let charts = {};
    let userXP = 0;
    const xpForAction = 250;

    function addXP(amount) {
        userXP += amount;
        updateGamificationBar();
    }

    function updateGamificationBar() {
        const currentLevel = appData.levels.slice().reverse().find(l => userXP >= l.xp);
        const nextLevel = appData.levels.find(l => userXP < l.xp);

        document.getElementById('user-level').textContent = `Level ${appData.levels.indexOf(currentLevel) + 1}: ${currentLevel.name}`;
        document.getElementById('xp-counter').textContent = userXP;

        if (nextLevel) {
            const xpForNext = nextLevel.xp - currentLevel.xp;
            const xpProgress = userXP - currentLevel.xp;
            const progressPercent = (xpProgress / xpForNext) * 100;
            document.getElementById('xp-bar').style.width = `${progressPercent}%`;
            document.getElementById('xp-next-level').textContent = nextLevel.xp;
        } else {
            document.getElementById('xp-bar').style.width = '100%';
            document.getElementById('xp-next-level').textContent = 'MAX';
        }
    }

    function unlockBadge(badgeId) {
        const badge = appData.badges.find(b => b.id === badgeId);
        if (badge && !badge.unlocked) {
            badge.unlocked = true;
            addXP(500);
            renderBadges();
        }
    }

    function renderBadges() {
        const container = document.getElementById('badges-container');
        container.innerHTML = appData.badges.map(badge => `
            <div class="text-center ${badge.unlocked ? '' : 'opacity-40'}" title="${badge.desc}">
                <div class="text-6xl">${badge.icon}</div>
                <p class="font-semibold mt-2">${badge.name}</p>
            </div>
        `).join('');
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                if(entry.target.id && !entry.target.dataset.xp) {
                    addXP(xpForAction);
                    entry.target.dataset.xp = 'true';
                    if (entry.target.id === 'chapter3') {
                        unlockBadge('explorer');
                    }
                }
                if (entry.target.querySelector('canvas')) {
                    const chartId = entry.target.querySelector('canvas').id;
                    if (!charts[chartId]) {
                       createChart(chartId);
                    }
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));

    function createChart(chartId) {
        const ctx = document.getElementById(chartId).getContext('2d');
        let config;
        switch(chartId) {
            case 'productivityChart':
                config = {
                    type: 'bar',
                    data: {
                        labels: appData.productivityChart.labels,
                        datasets: [{
                            label: 'Productivity Units',
                            data: appData.productivityChart.data,
                            backgroundColor: ['#374151', '#00d1ff'],
                        }]
                    },
                    options: chartOptions('AI Impact on Productivity')
                };
                break;
        }
        if(config) charts[chartId] = new Chart(ctx, config);
    }

    function chartOptions(title) {
        return {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: title, color: '#e2e8f0', font: { size: 16 } }
            },
            scales: {
                y: { ticks: { color: '#e2e8f0' }, grid: { color: 'rgba(226, 232, 240, 0.1)' } },
                x: { ticks: { color: '#e2e8f0' }, grid: { color: 'rgba(226, 232, 240, 0.1)' } }
            }
        };
    }

    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = document.getElementById(button.dataset.modalTarget);
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            if (button.dataset.modalTarget === 'quiz-modal') initQuiz();
            if (button.dataset.modalTarget === 'chatbot-modal') initChatbot();
            if (button.dataset.modalTarget === 'art-modal') initArtGenerator();
        });
    });
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal-backdrop');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        });
    });

    // Quiz Logic
    const quizContent = document.getElementById('quiz-content');
    const quizResult = document.getElementById('quiz-result');
    let currentQuestionIndex = 0;
    let score = 0;

    function initQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResult.classList.add('hidden');
        showQuestion();
    }

    function showQuestion() {
        const questionData = appData.quiz[currentQuestionIndex];
        quizContent.innerHTML = `
            <p class="text-lg text-gray-300 mb-4">${questionData.question}</p>
            <div class="space-y-3">
                ${questionData.options.map(option => `<button class="w-full text-left p-3 bg-gray-700 rounded-lg hover:bg-cyan-600 transition-colors quiz-option">${option}</button>`).join('')}
            </div>`;
        document.querySelectorAll('.quiz-option').forEach(button => button.addEventListener('click', selectAnswer));
    }

    function selectAnswer(e) {
        const selectedOption = e.target.textContent;
        const questionData = appData.quiz[currentQuestionIndex];
        if (selectedOption === questionData.answer) score++;

        currentQuestionIndex++;
        if (currentQuestionIndex < appData.quiz.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizContent.innerHTML = '';
        quizResult.classList.remove('hidden');
        let resultMessage = `You scored ${score} out of ${appData.quiz.length}!`;
        if (score === appData.quiz.length) {
            resultMessage += " Excellent work!";
            unlockBadge('quiz_master');
        }
        quizResult.innerHTML = `
            <p class="text-2xl font-bold text-white">${resultMessage}</p>
            <button id="restart-quiz-btn" class="btn-primary font-bold py-2 px-6 rounded-full mt-4">Try Again</button>`;
        document.getElementById('restart-quiz-btn').addEventListener('click', initQuiz);
    }

    // Chatbot Logic
    const messagesContainer = document.getElementById('chatbot-messages');
    const optionsContainer = document.getElementById('chatbot-options');

    function initChatbot() {
        advanceChat('start');
    }

    function addMessage(text, sender) {
        const bubble = document.createElement('div');
        bubble.textContent = text;
        bubble.className = sender === 'user' ? 'chat-bubble-user self-end max-w-xs md:max-w-md p-3 rounded-lg' : 'chat-bubble-bot self-start max-w-xs md:max-w-md p-3 rounded-lg';
        messagesContainer.appendChild(bubble);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function showOptions(options) {
        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option.text;
            button.className = 'w-full text-left p-3 bg-gray-700 rounded-lg hover:bg-cyan-600 transition-colors text-sm';
            button.onclick = () => {
                addMessage(option.text, 'user');
                setTimeout(() => advanceChat(option.next), 500);
            };
            optionsContainer.appendChild(button);
        });
    }

    function advanceChat(stageKey) {
        const stage = appData.chatbot[stageKey];
        if (stageKey === 'start') messagesContainer.innerHTML = '';
        if (stageKey === 'pilot') unlockBadge('ethical_leader');
        addMessage(stage.text, 'bot');
        showOptions(stage.options);
    }

    // Art Generator Logic
    function initArtGenerator() {
        const generateBtn = document.getElementById('generate-art-btn');
        const artPromptInput = document.getElementById('art-prompt');
        const artPlaceholder = document.getElementById('art-placeholder');
        const artLoader = document.getElementById('art-loader');
        const artImage = document.getElementById('art-image');

        generateBtn.addEventListener('click', () => {
            artPlaceholder.classList.add('hidden');
            artImage.classList.add('hidden');
            artLoader.classList.remove('hidden');
            generateBtn.disabled = true;

            setTimeout(() => {
                artImage.src = 'assets/ai_art_placeholder.png'; // Placeholder image
                artImage.classList.remove('hidden');
                artLoader.classList.add('hidden');
                generateBtn.disabled = false;
                unlockBadge('creative_mind');
            }, 2000);
        });
    }

    renderBadges();
    updateGamificationBar();
});
