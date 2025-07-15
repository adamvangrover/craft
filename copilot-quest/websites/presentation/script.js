const presentationContainer = document.getElementById('presentation-container');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');

const slides = [
    "<h1>Are You Smarter Than an AI Chatbot?</h1>",
    `
    <h2>Copilot Quest Menu</h2>
    <ul>
        <li><a href="teams.html">Teams</a></li>
        <li><a href="in_person_game.html">In-Person Game</a></li>
        <li><a href="open_ended_questions.html">Open-Ended Questions</a></li>
        <li><a href="winning_teams.html">Winning Teams</a></li>
        <li><a href="resources.html">Resources</a></li>
    </ul>
    `,
    "<h2>Game Overview</h2><p>Welcome to Copilot Quest! Today, you'll be working in teams to answer questions on a variety of topics. The goal is to see how well you can collaborate with your team and with an AI to get the right answers.</p>",
    "<h2>Team Sorting</h2><p>To start, we'll take a quick personality quiz to sort you into teams. Please navigate to the game website to begin.</p>",
    "<h2>Round 1: Risk Management - Question 1</h2><p><strong>Question:</strong> What is the primary goal of risk management?</p>",
    "<h2>Round 1: Risk Management - Answer 1</h2><p><strong>Answer:</strong> To identify, assess, and mitigate risks.</p>",
    "<h2>Round 1: Risk Management - Question 2</h2><p><strong>Question:</strong> What is a risk matrix?</p>",
    "<h2>Round 1: Risk Management - Answer 2</h2><p><strong>Answer:</strong> A tool for ranking and prioritizing risks.</p>",
    "<h2>Round 2: Compliance - Question 1</h2><p><strong>Question:</strong> What is the purpose of a compliance program?</p>",
    "<h2>Round 2: Compliance - Answer 1</h2><p><strong>Answer:</strong> To ensure that an organization follows all applicable laws and regulations.</p>",
    "<h2>Round 2: Compliance - Question 2</h2><p><strong>Question:</strong> What are some of the consequences of non-compliance?</p>",
    "<h2>Round 2: Compliance - Answer 2</h2><p><strong>Answer:</strong> Fines, penalties, and reputational damage.</p>",
    "<h2>Round 3: Safety - Question 1</h2><p><strong>Question:</strong> What is the most common cause of workplace accidents?</p>",
    "<h2>Round 3: Safety - Answer 1</h2><p><strong>Answer:</strong> Slips, trips, and falls.</p>",
    "<h2>Round 3: Safety - Question 2</h2><p><strong>Question:</strong> What is the purpose of a safety data sheet (SDS)?</p>",
    "<h2>Round 3: Safety - Answer 2</h2><p><strong>Answer:</strong> To provide information on the hazards of a chemical and how to handle it safely.</p>",
    "<h2>Lightning Round</h2><p>A series of quick-fire questions on a variety of topics.</p>",
    "<h2>Finals</h2><p>Complex bonus questions to determine the winner.</p>",
    "<h2>Open-Ended Question 1</h2><p>Describe a time when you had to work with a difficult team member. How did you handle the situation?</p>",
    "<h2>Open-Ended Question 2</h2><p>What are the biggest challenges facing our industry today? How can we overcome them?</p>",
    "<h2>Discussion</h2><p>Use this time to discuss the open-ended questions with your team. Brainstorm ideas, share your perspectives, and come up with a comprehensive answer.</p>",
    "<h2>Wrap-Up Discussion</h2><p>Let's discuss what we've learned today. What were some of the key takeaways from the game? How can you apply what you've learned to your work?</p>",
    "<h2>Copilot Tips and Tricks</h2><p>Here are a few tips and tricks to help you get the most out of your AI assistant:</p><ul><li>Be specific in your prompts.</li><li>Provide context.</li><li>Use keywords.</li><li>Experiment with different prompts.</li></ul>",
    "<h2>Prompting Guidelines</h2><p>When you're writing a prompt, keep the following guidelines in mind:</p><ul><li>Use clear and concise language.</li><li>Avoid jargon and slang.</li><li>Be polite and respectful.</li><li>Proofread your prompts before you send them.</li></ul>",
    "<h2>Prompt Library</h2><p>Here are a few examples of prompts that you can use to get started:</p><ul><li>'Write a short story about a robot who falls in love with a human.'</li><li>'Translate the following sentence into French: 'Hello, how are you?''</li><li>'Write a poem about the beauty of nature.'</li></ul>"
];

let currentSlide = 0;

function showSlide(slideIndex) {
    // Hide all slides
    const slideElements = document.querySelectorAll('.slide');
    slideElements.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the current slide
    const currentSlideElement = document.getElementById(`slide-${slideIndex + 1}`);
    if (currentSlideElement) {
        currentSlideElement.classList.add('active');
    }
}

function createSlides() {
    slides.forEach((slideContent, i) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.id = `slide-${i + 1}`;
        slide.innerHTML = slideContent;
        presentationContainer.appendChild(slide);
    });
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

createSlides();
showSlide(currentSlide);

const menuItems = document.querySelectorAll('#slide-2 li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const slideIndex = parseInt(item.dataset.slide);
        showSlide(slideIndex);
    });
});

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);
