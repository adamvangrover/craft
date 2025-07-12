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
            answer: "To identify, assess, and mitigate risks.",
            feedback: "Correct! The goal is to proactively manage risks."
        },
        {
            question: "What are the three main types of risk?",
            answer: "Financial, operational, and strategic.",
            feedback: "Correct! These are the three main categories of risk."
        },
        {
            question: "What is a risk register?",
            answer: "A tool for documenting risks, their severity, and the actions taken to mitigate them.",
            feedback: "Correct! A risk register is a key tool in risk management."
        }
    ],
    "Compliance": [
        {
            question: "True or False: Compliance is only about following laws.",
            answer: "False",
            feedback: "Correct! Compliance also includes following internal policies and industry standards."
        },
        {
            question: "What is the purpose of a compliance program?",
            answer: "To ensure that an organization adheres to all applicable laws, regulations, and internal policies.",
            feedback: "Correct! A compliance program helps to prevent and detect violations."
        },
        {
            question: "What is a whistleblower?",
            answer: "A person who exposes any kind of information or activity that is deemed illegal, unethical, or not correct within an organization.",
            feedback: "Correct! Whistleblowers play an important role in ensuring accountability."
        }
    ],
    "Safety": [
        {
            question: "What does the acronym 'OSHA' stand for?",
            answer: "Occupational Safety and Health Administration",
            feedback: "Correct! OSHA sets and enforces workplace safety standards."
        },
        {
            question: "What is a 'near miss'?",
            answer: "An unplanned event that did not result in injury, illness, or damage - but had the potential to do so.",
            feedback: "Correct! Reporting near misses can help to prevent future accidents."
        },
        {
            question: "What is the most common cause of workplace injuries?",
            answer: "Slips, trips, and falls.",
            feedback: "Correct! These are the most common, but also the most preventable, workplace injuries."
        }
    ],
    "Lightning Round": [
        {
            question: "What is the capital of France?",
            answer: "Paris",
            feedback: "Correct!"
        },
        {
            question: "What is the largest planet in our solar system?",
            answer: "Jupiter",
            feedback: "Correct!"
        },
        {
            question: "What is the chemical symbol for gold?",
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

const startGameBtn = document.getElementById('start-game');
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('personality-quiz-screen');
const gameScreen = document.getElementById('game-screen');
const resultsScreen = document.getElementById('results-screen');
const quizQuestionsDiv = document.getElementById('quiz-questions');
const submitQuizBtn = document.getElementById('submit-quiz');
const roundTitle = document.getElementById('round-title');
const question = document.getElementById('question');
const answerOptions = document.getElementById('answer-options');
const feedback = document.getElementById('feedback');
const nextQuestionBtn = document.getElementById('next-question');
const scoresDiv = document.getElementById('scores');
const winningPoemDiv = document.getElementById('winning-poem');

let currentRound = 0;
let currentQuestion = 0;
let scores = {
    "Team Logic": 0,
    "Team Harmony": 0,
    "Team Action": 0,
    "Team Imagination": 0
};
let teams = {};

function showPersonalityQuiz() {
    let output = '';
    personalityQuestions.forEach((q, i) => {
        output += `<p>${q.question}</p>`;
        for (const option in q.options) {
            output += `<input type="radio" name="q${i}" value="${option}"> ${q.options[option]}<br>`;
        }
    });
    quizQuestionsDiv.innerHTML = output;
}

function assignTeams() {
    // This is a simplified team assignment logic.
    // A real implementation would have a more robust algorithm.
    const answers = [];
    for (let i = 0; i < personalityQuestions.length; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            answers.push(answer.value);
        }
    }

    if (answers.length < personalityQuestions.length) {
        alert("Please answer all questions.");
        return;
    }

    // Assign teams based on the first answer
    const teamAssignments = {
        a: "Team Logic",
        b: "Team Harmony",
        c: "Team Action",
        d: "Team Imagination"
    };
    const team = teamAssignments[answers[0]];
    alert(`You have been assigned to ${team}`);
    teams["Player 1"] = team; // In a real game, you'd have multiple players

    quizScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const roundName = Object.keys(gameData)[currentRound];
    const questionData = gameData[roundName][currentQuestion];
    roundTitle.innerText = roundName;
    question.innerText = questionData.question;
    answerOptions.innerHTML = ''; // Clear previous options
    feedback.style.display = 'none';
    nextQuestionBtn.style.display = 'none';
}

function checkAnswer(selectedAnswer) {
    const roundName = Object.keys(gameData)[currentRound];
    const questionData = gameData[roundName][currentQuestion];
    if (selectedAnswer === questionData.answer) {
        scores[teams["Player 1"]]++;
    }
    feedback.innerText = questionData.feedback;
    feedback.style.display = 'block';
    nextQuestionBtn.style.display = 'block';
}

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

function showResults() {
    gameScreen.style.display = 'none';
    resultsScreen.style.display = 'block';

    let scoresOutput = '';
    for (const team in scores) {
        scoresOutput += `<p>${team}: ${scores[team]}</p>`;
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

    winningPoemDiv.innerText = winningPoems[winningTeam];
}

startGameBtn.addEventListener('click', () => {
    welcomeScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    showPersonalityQuiz();
});

submitQuizBtn.addEventListener('click', assignTeams);
nextQuestionBtn.addEventListener('click', nextQuestion);

// This is a simplified way to handle answers.
// A real implementation would create buttons for each answer option.
answerOptions.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        checkAnswer(e.target.innerText);
    }
});
