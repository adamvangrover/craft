document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Element Selection ---
    const screens = {
        welcome: document.getElementById('welcome-screen'),
        questionnaire: document.getElementById('questionnaire-screen'),
        game: document.getElementById('game-screen'),
        results: document.getElementById('results-screen')
    };

    const buttons = {
        startGame: document.getElementById('start-game-btn'),
        submitQuestionnaire: null, // Will be created dynamically
        nextQuestion: document.getElementById('next-question-btn'),
        playAgain: document.getElementById('play-again-btn')
    };

    const containers = {
        questionnaireForm: document.getElementById('questionnaire-form-container'),
        questionText: document.getElementById('question-text'),
        answerOptions: document.getElementById('answer-options'),
        feedback: document.getElementById('feedback-container'),
        feedbackText: document.getElementById('feedback-text'),
        finalScores: document.getElementById('final-scores-container'),
        winnerAnnouncement: document.getElementById('winner-announcement'),
        winningTeamName: document.getElementById('winning-team-name'),
        winningPoem: document.getElementById('winning-poem')
    };

    const hud = {
        teamName: document.getElementById('team-name-hud'),
        score: document.getElementById('score-hud'),
        roundTitle: document.getElementById('round-title'),
        hudTeamDiv: document.getElementById('hud-team')
    };

    // --- Game Data ---
    const gameData = {
        teams: {
            'Team Logic': {
                poem: "With minds so sharp and reason's light, you solved the puzzles, clear and bright. For every challenge, every test, your logic proved to be the best."
            },
            'Team Harmony': {
                poem: "With balance, grace, and thoughtful plea, you found the path for all to see. In collaboration, you excelled, a story of teamwork, masterfully told."
            },
            'Team Action': {
                poem: "With bold decisions, swift and fast, you built a lead that's meant to last. No hesitation, no delay, you bravely seized and won the day."
            },
            'Team Imagination': {
                poem: "With novel thoughts and creative flair, you found solutions beyond compare. Where others saw but simple facts, you built new worlds and covered tracks."
            }
        },
        personalityQuestions: [
            {
                question: "When faced with a new, complex project, what is your first instinct?",
                answers: {
                    a: { text: "Break it down into a logical, step-by-step plan.", type: "logic" },
                    b: { text: "Consider how it will impact everyone on the team and seek consensus.", type: "harmony" },
                    c: { text: "Jump in and start experimenting with the most immediate tasks.", type: "action" },
                    d: { text: "Brainstorm all the wild and unconventional possibilities.", type: "imagination" }
                }
            },
            {
                question: "A team you are on is stuck. You are most likely to...",
                answers: {
                    a: { text: "Suggest analyzing the data to find the root cause.", type: "logic" },
                    b: { text: "Facilitate a discussion to ensure everyone's voice is heard.", type: "harmony" },
                    c: { text: "Propose a quick experiment to test a new approach.", type: "action" },
                    d: { text: "Tell a story or use an analogy to reframe the problem.", type: "imagination" }
                }
            },
            {
                question: "When making a decision, you primarily rely on...",
                answers: {
                    a: { text: "Data, facts, and evidence.", type: "logic" },
                    b: { text: "Intuition and the group's feelings.", type: "harmony" },
                    c: { text: "Past experiences and what has worked before.", type: "action" },
                    d: { text: "Future possibilities and innovative ideas.", type: "imagination" }
                }
            }
        ],
        mainRounds: [
            {
                title: "Round 1: Risk Management",
                questions: [
                    {
                        type: 'mcq',
                        question: "What is the primary purpose of risk management?",
                        options: {
                            a: "To eliminate all uncertainties",
                            b: "To increase project costs",
                            c: "To identify and manage potential threats and opportunities",
                            d: "To delay decision making"
                        },
                        correctAnswer: 'c',
                        feedback: "Correct! Effective risk management is a proactive process focused on identifying, assessing, and controlling uncertainties to help an organization achieve its objectives. It's about balancing risk and reward, not just eliminating risk entirely."
                    },
                    {
                        type: 'true_false',
                        question: "True or False: Risk retention is a strategy where an organization decides to bear the financial responsibility for a potential loss.",
                        correctAnswer: true,
                        feedback: "True. Risk retention, often used for high-frequency, low-severity risks, is a form of self-insurance where a company sets aside funds to cover potential losses rather than transferring the risk to an insurer."
                    },
                    {
                        type: 'open',
                        question: "Describe one key difference between Qualitative and Quantitative Risk Analysis.",
                        feedback: "A great answer distinguishes between the two methods. Qualitative analysis is subjective, using scales like 'low-medium-high' to prioritize risks based on expert opinion. Quantitative analysis is objective, using numerical data and statistical models to assign a monetary value or specific probability to risks."
                    }
                ]
            },
            {
                title: "Round 2: Compliance",
                questions: [
                    {
                        type: 'true_false',
                        question: "True or False: A conflict of interest only occurs if an employee gains a direct financial benefit.",
                        correctAnswer: false,
                        feedback: "False. A conflict of interest can be any situation where personal interests—financial, social, or otherwise—could potentially interfere with an employee's professional judgment or duties to the company."
                    },
                    {
                        type: 'mcq',
                        question: "Which of the following is a key goal of a corporate compliance program?",
                        options: {
                            a: "To increase company profits at all costs",
                            b: "To detect and prevent misconduct and illegal activity",
                            c: "To shift all responsibility for errors to employees",
                            d: "To create more rules for the sake of bureaucracy"
                        },
                        correctAnswer: 'b',
                        feedback: "Correct. A robust compliance program aims to establish a culture of integrity, ensure adherence to laws and regulations, and provide clear channels for reporting and addressing potential violations."
                    }
                ]
            },
            {
                title: "Round 3: Safety",
                questions: [
                     {
                        type: 'mcq',
                        question: "In workplace safety, what does the acronym 'HAZOP' stand for?",
                        options: {
                            a: "Hazardous Operations",
                            b: "Hazard and Operability Study",
                            c: "Health and Occupational Procedures",
                            d: "Hazardous Operator Protocol"
                        },
                        correctAnswer: 'b',
                        feedback: "Correct! A HAZOP study is a structured and systematic examination of a planned or existing process or operation in order to identify and evaluate problems that may represent risks to personnel or equipment."
                    }
                ]
            }
        ],
        lightningRound: {
            title: "Lightning Round",
            questions: [
                { question: "How many stripes are there on the US flag?", answer: "13" },
                { question: "What is the national animal of Australia?", answer: "Kangaroo" },
                { question: "What does 'www' stand for in a website address?", answer: "World Wide Web" },
                { question: "How many keys does a classic piano have?", answer: "88" }
            ]
        },
        finals: {
            title: "Finals",
            questions: [
                {
                    question: "If an autonomous AI system makes a mistake that causes financial loss, who should be held accountable: the user, the developer, or the company that deployed it? Justify your answer."
                },
                {
                    question: "Discuss how the concept of 'value alignment' in AI presents a significant risk for global corporations. Provide one example."
                },
                {
                    question: "Beyond automation, what is the single greatest opportunity generative AI offers to a modern business, and what is the greatest risk it introduces?"
                }
            ]
        }
    };

    // --- Game State Management ---
    let gameState = {};

    function resetGameState() {
        gameState = {
            currentScreen: 'welcome',
            currentRoundIndex: 0,
            currentQuestionIndex: 0,
            scores: {
                'Team Logic': 0,
                'Team Harmony': 0,
                'Team Action': 0,
                'Team Imagination': 0
            },
            playerTeam: null,
            isLightningRound: false,
            isFinals: false
        };
    }

    // --- Core Functions ---
    function showScreen(screenId) {
        Object.values(screens).forEach(screen => screen.classList.add('hidden'));
        screens[screenId].classList.remove('hidden');
        gameState.currentScreen = screenId;
    }

    function startQuestionnaire() {
        let formHTML = '<form id="personality-quiz">';
        gameData.personalityQuestions.forEach((q, index) => {
            formHTML += `<div class="question-group"><h3>${q.question}</h3>`;
            for (const [key, answer] of Object.entries(q.answers)) {
                formHTML += `
                    <label>
                        <input type="radio" name="question${index}" value="${answer.type}" required>
                        ${answer.text}
                    </label>
                `;
            }
            formHTML += `</div>`;
        });
        formHTML += `<button type="submit" id="submit-questionnaire-btn" class="btn">Find My Team</button></form>`;
        containers.questionnaireForm.innerHTML = formHTML;

        buttons.submitQuestionnaire = document.getElementById('submit-questionnaire-btn');
        document.getElementById('personality-quiz').addEventListener('submit', handleQuestionnaireSubmit);

        showScreen('questionnaire');
    }

    function handleQuestionnaireSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const scores = { logic: 0, harmony: 0, action: 0, imagination: 0 };
        for (const value of formData.values()) {
            scores[value]++;
        }

        const playerTeamType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

        switch(playerTeamType) {
            case 'logic': gameState.playerTeam = 'Team Logic'; break;
            case 'harmony': gameState.playerTeam = 'Team Harmony'; break;
            case 'action': gameState.playerTeam = 'Team Action'; break;
            case 'imagination': gameState.playerTeam = 'Team Imagination'; break;
        }

        startGame();
    }

    function startGame() {
        hud.teamName.textContent = gameState.playerTeam;
        hud.hudTeamDiv.className = 'hud-item ' + gameState.playerTeam.toLowerCase().replace(' ', '-');
        updateScoreboard();
        displayQuestion();
        showScreen('game');
    }

    function updateScoreboard() {
        hud.score.textContent = gameState.scores[gameState.playerTeam];
    }

    function displayQuestion() {
        containers.feedback.classList.add('hidden');
        containers.answerOptions.innerHTML = ''; // Clear previous options

        let currentQuestionData;

        if (gameState.isLightningRound) {
            hud.roundTitle.textContent = gameData.lightningRound.title;
            currentQuestionData = gameData.lightningRound.questions[gameState.currentQuestionIndex];
            containers.questionText.textContent = currentQuestionData.question;
            containers.answerOptions.innerHTML = `
                <input type="text" id="lightning-answer" class="text-input" placeholder="Type your answer...">
                <button id="submit-answer-btn" class="btn">Submit</button>
            `;
            document.getElementById('submit-answer-btn').addEventListener('click', () => handleAnswerSubmission(document.getElementById('lightning-answer').value));

        } else if (gameState.isFinals) {
            hud.roundTitle.textContent = gameData.finals.title;
            currentQuestionData = gameData.finals.questions[gameState.currentQuestionIndex];
            containers.questionText.textContent = currentQuestionData.question;
            containers.answerOptions.innerHTML = `
                <textarea id="final-answer" class="text-input" rows="5" placeholder="Type your detailed answer..."></textarea>
                <div class="points-selector">Points:
                    <button class="point-btn" data-points="1">1</button>
                    <button class="point-btn" data-points="2">2</button>
                    <button class="point-btn" data-points="3">3</button>
                </div>
            `;
            document.querySelectorAll('.point-btn').forEach(btn => {
                btn.addEventListener('click', (e) => handleAnswerSubmission(parseInt(e.target.dataset.points)));
            });

        } else { // Main Rounds
            const round = gameData.mainRounds[gameState.currentRoundIndex];
            hud.roundTitle.textContent = round.title;
            currentQuestionData = round.questions[gameState.currentQuestionIndex];
            containers.questionText.textContent = currentQuestionData.question;

            if (currentQuestionData.type === 'mcq') {
                for (const [key, text] of Object.entries(currentQuestionData.options)) {
                    const button = document.createElement('button');
                    button.textContent = `${key.toUpperCase()}. ${text}`;
                    button.classList.add('btn', 'answer-btn');
                    button.dataset.answer = key;
                    button.addEventListener('click', () => handleAnswerSubmission(key));
                    containers.answerOptions.appendChild(button);
                }
            } else if (currentQuestionData.type === 'true_false') {
                ['True', 'False'].forEach(val => {
                    const button = document.createElement('button');
                    button.textContent = val;
                    button.classList.add('btn', 'answer-btn');
                    button.dataset.answer = val.toLowerCase();
                    button.addEventListener('click', () => handleAnswerSubmission(val.toLowerCase() === 'true'));
                    containers.answerOptions.appendChild(button);
                });
            } else if (currentQuestionData.type === 'open') {
                 containers.answerOptions.innerHTML = `
                    <textarea id="open-answer" class="text-input" rows="4" placeholder="Type your team's answer..."></textarea>
                    <div class="points-selector">Points:
                        <button class="point-btn" data-points="1">1</button>
                        <button class="point-btn" data-points="2">2</button>
                        <button class="point-btn" data-points="3">3</button>
                    </div>
                `;
                document.querySelectorAll('.point-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => handleAnswerSubmission(parseInt(e.target.dataset.points)));
                });
            }
        }
    }

    function handleAnswerSubmission(submittedAnswer) {
        let points = 0;
        let feedback = "Let's see...";

        document.querySelectorAll('#answer-options button, #answer-options input, #answer-options textarea').forEach(el => el.disabled = true);

        if (gameState.isLightningRound) {
            const currentQuestionData = gameData.lightningRound.questions[gameState.currentQuestionIndex];
            if (submittedAnswer.toLowerCase().trim() === currentQuestionData.answer.toLowerCase()) {
                points = 1;
                feedback = "Correct and quick!";
            } else {
                feedback = `The correct answer was: ${currentQuestionData.answer}`;
            }
        } else if (gameState.isFinals || (gameData.mainRounds[gameState.currentRoundIndex].questions[gameState.currentQuestionIndex].type === 'open')) {
            points = submittedAnswer;
            feedback = `The facilitator has awarded ${points} point(s) for your detailed response. A thoughtful approach is key when dealing with complex AI topics.`;
        } else {
            const round = gameData.mainRounds[gameState.currentRoundIndex];
            const currentQuestionData = round.questions[gameState.currentQuestionIndex];
            if (submittedAnswer === currentQuestionData.correctAnswer) {
                points = 1;
            }
            feedback = currentQuestionData.feedback;
        }

        gameState.scores[gameState.playerTeam] += points;
        updateScoreboard();

        containers.feedbackText.textContent = feedback;
        containers.feedback.classList.remove('hidden');
    }

    function next() {
        gameState.currentQuestionIndex++;

        if (gameState.isLightningRound) {
            if (gameState.currentQuestionIndex >= gameData.lightningRound.questions.length) {
                gameState.isLightningRound = false;
                gameState.isFinals = true;
                gameState.currentQuestionIndex = 0;
            }
        } else if (gameState.isFinals) {
            if (gameState.currentQuestionIndex >= gameData.finals.questions.length) {
                showResults();
                return;
            }
        } else { // Main Rounds
            const round = gameData.mainRounds[gameState.currentRoundIndex];
            if (gameState.currentQuestionIndex >= round.questions.length) {
                gameState.currentRoundIndex++;
                gameState.currentQuestionIndex = 0;
                if (gameState.currentRoundIndex >= gameData.mainRounds.length) {
                    gameState.isLightningRound = true;
                }
            }
        }

        displayQuestion();
    }

    function showResults() {
        containers.finalScores.innerHTML = '';
        const sortedScores = Object.entries(gameState.scores).sort(([,a],[,b]) => b-a);

        sortedScores.forEach(([team, score]) => {
            const scoreDiv = document.createElement('div');
            scoreDiv.innerHTML = `<h3>${team}</h3><p>${score} Points</p>`;
            containers.finalScores.appendChild(scoreDiv);
        });

        const [winningTeamName, ] = sortedScores[0];
        containers.winningTeamName.textContent = winningTeamName;
        containers.winningPoem.textContent = gameData.teams[winningTeamName].poem;

        showScreen('results');
    }

    // --- Event Listeners ---
    buttons.startGame.addEventListener('click', startQuestionnaire);
    buttons.nextQuestion.addEventListener('click', next);
    buttons.playAgain.addEventListener('click', () => {
        resetGameState();
        showScreen('welcome');
    });

    // --- Initializer ---
    resetGameState();
    showScreen('welcome');
});
