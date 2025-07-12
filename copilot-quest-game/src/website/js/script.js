// --- DATA --- //

const personalityQuestions = [
    {
        question: "When faced with a problem, you...",
        options: {
            a: "Analyze it logically.",
            b: "Consider everyone's feelings.",
            c: "Take immediate action.",
            d: "Brainstorm creative solutions."
        }
    },
    {
        question: "You are most comfortable when...",
        options: {
            a: "You have a clear plan.",
            b: "Everyone is getting along.",
            c: "You are making progress.",
            d: "You are exploring new ideas."
        }
    },
    {
        question: "Your ideal role in a team is...",
        options: {
            a: "The strategist.",
            b: "The mediator.",
            c: "The implementer.",
            d: "The visionary."
        }
    }
];

const gameData = {
    "Risk Management": [
        {
            question: "What is the primary goal of risk management?",
            options: ["To eliminate all risks", "To identify, assess, and mitigate risks.", "To transfer all risks to a third party", "To ignore risks"],
            answer: "To identify, assess, and mitigate risks.",
            feedback: "Correct! The goal is to proactively manage risks."
        },
        {
            question: "What are the three main types of risk?",
            options: ["Financial, operational, and strategic.", "Technical, legal, and reputational", "Market, credit, and liquidity", "Physical, social, and environmental"],
            answer: "Financial, operational, and strategic.",
            feedback: "Correct! These are the three main categories of risk."
        },
        {
            question: "What is a risk register?",
            options: ["A list of all employees", "A tool for documenting risks, their severity, and the actions taken to mitigate them.", "A financial statement", "A marketing plan"],
            answer: "A tool for documenting risks, their severity, and the actions taken to mitigate them.",
            feedback: "Correct! A risk register is a key tool in risk management."
        }
    ],
    "Compliance": [
        {
            question: "True or False: Compliance is only about following laws.",
            options: ["True", "False"],
            answer: "False",
            feedback: "Correct! Compliance also includes following internal policies and industry standards."
        },
        {
            question: "What is the purpose of a compliance program?",
            options: ["To punish employees", "To create unnecessary bureaucracy", "To ensure that an organization adheres to all applicable laws, regulations, and internal policies.", "To increase profits"],
            answer: "To ensure that an organization adheres to all applicable laws, regulations, and internal policies.",
            feedback: "Correct! A compliance program helps to prevent and detect violations."
        },
        {
            question: "What is a whistleblower?",
            options: ["A type of bird", "A person who exposes any kind of information or activity that is deemed illegal, unethical, or not correct within an organization.", "A security guard", "A professional athlete"],
            answer: "A person who exposes any kind of information or activity that is deemed illegal, unethical, or not correct within an organization.",
            feedback: "Correct! Whistleblowers play an important role in ensuring accountability."
        }
    ],
    "Safety": [
        {
            question: "What does the acronym 'OSHA' stand for?",
            options: ["Occupational Safety and Health Administration", "Office of Safe and Healthy Accommodations", "Organization for Safe and Healthy Alternatives", "Official Safety and Health Authority"],
            answer: "Occupational Safety and Health Administration",
            feedback: "Correct! OSHA sets and enforces workplace safety standards."
        },
        {
            question: "What is a 'near miss'?",
            options: ["A type of golf shot", "A close call in a sporting event", "An unplanned event that did not result in injury, illness, or damage - but had the potential to do so.", "A failed attempt to achieve a goal"],
            answer: "An unplanned event that did not result in injury, illness, or damage - but had the potential to do so.",
            feedback: "Correct! Reporting near misses can help to prevent future accidents."
        },
        {
            question: "What is the most common cause of workplace injuries?",
            options: ["Electrocution", "Burns", "Slips, trips, and falls.", "Chemical exposure"],
            answer: "Slips, trips, and falls.",
            feedback: "Correct! These are the most common, but also the most preventable, workplace injuries."
        }
    ],
    "Lightning Round": [
        {
            question: "What is the capital of France?",
            options: ["London", "Paris", "Berlin", "Rome"],
            answer: "Paris",
            feedback: "Correct!"
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Mars", "Jupiter", "Saturn", "Earth"],
            answer: "Jupiter",
            feedback: "Correct!"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Au", "G", "Go"],
            answer: "Au",
            feedback: "Correct!"
        }
    ],
    "Finals": [
        {
            question: "Discuss the potential risks and benefits of implementing AI in risk management.",
            answer: "Answers will vary, but should discuss both the pros (e.g., improved efficiency, better data analysis) and cons (e.g., model bias, implementation costs).",
            feedback: "This is a complex topic with many valid points."
        },
        {
            question: "How can an organization foster a strong risk culture?",
            answer: "Answers will vary, but should include things like leadership commitment, clear communication, and employee training.",
            feedback: "A strong risk culture is essential for effective risk management."
        }
    ]
};

const winningPoems = {
    "Team Logic": "With logic and reason, you've won the day,\nYour sharp minds have led you all the way!",
    "Team Harmony": "With teamwork and grace, you've won the prize,\nYour collaborative spirit reached the skies!",
    "Team Action": "With speed and with courage, you've claimed the top spot,\nYour decisive actions could not be stopped!",
    "Team Imagination": "With creativity and flair, you've won the game,\nYour innovative thinking has brought you to fame!"
};


// --- DOM ELEMENTS --- //

const startGameBtn = document.getElementById('start-game');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('personality-quiz-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const quizQuestionsDiv = document.getElementById('quiz-questions');
const submitQuizBtn = document.getElementById('submit-quiz');
const roundTitle = document.getElementById('round-title');
const question = document.getElementById('question');
const answerOptionsDiv = document.getElementById('answer-options');
const feedbackDiv = document.getElementById('feedback');
const nextQuestionBtn = document.getElementById('next-question');
const scoresDiv = document.getElementById('scores');
const winningPoemDiv = document.getElementById('winning-poem');


// --- GAME STATE --- //

let currentRound = 0;
let currentQuestion = 0;
let scores = {
    "Team Logic": 0,
    "Team Harmony": 0,
    "Team Action": 0,
    "Team Imagination": 0
};
let teams = {};


// --- FUNCTIONS --- //

/**
 * Displays the personality quiz questions.
 */
function showPersonalityQuiz() {
    let output = '';
    personalityQuestions.forEach((q, i) => {
        output += `<div class="question">`;
        output += `<p>${i + 1}. ${q.question}</p>`;
        for (const option in q.options) {
            output += `
                <label>
                    <input type="radio" name="q${i}" value="${option}">
                    ${q.options[option]}
                </label><br>
            `;
        }
        output += `</div>`;
    });
    quizQuestionsDiv.innerHTML = output;
}

/**
 * Assigns players to teams based on their quiz answers.
 * This is a simplified version. A more complex version could
 * weigh the answers to provide a more accurate team assignment.
 */
function assignTeams() {
    const answers = [];
    for (let i = 0; i < personalityQuestions.length; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            answers.push(answer.value);
        } else {
            alert("Please answer all questions.");
            return;
        }
    }

    // Simplified team assignment logic
    const teamAssignments = {
        a: "Team Logic",
        b: "Team Harmony",
        c: "Team Action",
        d: "Team Imagination"
    };

    // Count the number of answers for each option
    const answerCounts = { a: 0, b: 0, c: 0, d: 0 };
    answers.forEach(answer => {
        answerCounts[answer]++;
    });

    // Find the option with the most answers
    let maxCount = 0;
    let teamLetter = '';
    for (const option in answerCounts) {
        if (answerCounts[option] > maxCount) {
            maxCount = answerCounts[option];
            teamLetter = option;
        }
    }

    const team = teamAssignments[teamLetter];
    alert(`You have been assigned to ${team}`);
    teams["Player 1"] = team; // In a real game, you'd have multiple players

    // Transition to the game screen
    quizScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    showQuestion();
}

/**
 * Displays the current question and answer options.
 */
function showQuestion() {
    const roundName = Object.keys(gameData)[currentRound];
    const questionData = gameData[roundName][currentQuestion];

    roundTitle.innerText = roundName;
    question.innerText = questionData.question;
    answerOptionsDiv.innerHTML = '';
    feedbackDiv.style.display = 'none';
    nextQuestionBtn.style.display = 'none';

    if (questionData.options) {
        questionData.options.forEach(option => {
            const button = document.createElement('button');
            button.innerText = option;
            button.classList.add('answer-option');
            answerOptionsDiv.appendChild(button);
        });
    } else {
        // For open-ended questions
        const textarea = document.createElement('textarea');
        textarea.id = 'open-ended-answer';
        const button = document.createElement('button');
        button.innerText = 'Submit';
        button.id = 'submit-open-ended';
        answerOptionsDiv.appendChild(textarea);
        answerOptionsDiv.appendChild(button);
    }
}

/**
 * Checks the selected answer and updates the score.
 * @param {string} selectedAnswer - The answer selected by the player.
 */
function checkAnswer(selectedAnswer) {
    const roundName = Object.keys(gameData)[currentRound];
    const questionData = gameData[roundName][currentQuestion];

    if (selectedAnswer === questionData.answer) {
        scores[teams["Player 1"]]++;
        feedbackDiv.innerText = "Correct! " + questionData.feedback;
    } else {
        feedbackDiv.innerText = "Incorrect. " + questionData.feedback;
    }

    feedbackDiv.style.display = 'block';
    nextQuestionBtn.style.display = 'block';

    // Disable answer buttons after an answer is selected
    const answerButtons = document.querySelectorAll('.answer-option');
    answerButtons.forEach(button => {
        button.disabled = true;
    });
}

/**
 * Moves to the next question or ends the game if all questions have been answered.
 */
function nextQuestion() {
    currentQuestion++;
    const roundName = Object.keys(gameData)[currentRound];
    if (currentQuestion >= gameData[roundName].length) {
        currentQuestion = 0;
        currentRound++;
    }

    if (currentRound >= Object.keys(gameData).length) {
        showResults();
    } else {
        showQuestion();
    }
}

/**
 * Displays the final scores and winning team's poem.
 */
function showResults() {
    gameScreen.style.display = 'none';
    resultsScreen.style.display = 'block';

    let scoresOutput = '<h3>Final Scores</h3>';
    for (const team in scores) {
        scoresOutput += `<p class="${team.replace(' ', '-').toLowerCase()}">${team}: ${scores[team]}</p>`;
    }
    scoresDiv.innerHTML = scoresOutput;

    let winningTeam = "";
    let maxScore = -1;
    for (const team in scores) {
        if (scores[team] > maxScore) {
            maxScore = scores[team];
            winningTeam = team;
        }
    }

    winningPoemDiv.innerHTML = `
        <h3>Congratulations, ${winningTeam}!</h3>
        <p>${winningPoems[winningTeam]}</p>
    `;
}


// --- EVENT LISTENERS --- //

startGameBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    showPersonalityQuiz();
});

submitQuizBtn.addEventListener('click', assignTeams);

nextQuestionBtn.addEventListener('click', nextQuestion);

answerOptionsDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer-option')) {
        checkAnswer(e.target.innerText);
    } else if (e.target.id === 'submit-open-ended') {
        const answer = document.getElementById('open-ended-answer').value;
        checkAnswer(answer); // Note: Open-ended questions are not auto-graded in this version.
    }
});
