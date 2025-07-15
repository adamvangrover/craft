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
    "<h2>Welcome, Adventurers!</h2><p>Today, you embark on a quest to prove your knowledge, teamwork, and problem-solving skills. You will face a series of challenges designed to test your mettle. But fear not, for you will not be alone. You will have your fellow team members and a powerful AI assistant to help you on your journey.</p>",
    "<h2>The Sorting Ceremony</h2><p>Before we begin, you must be sorted into your teams. Please navigate to the game website and complete the personality quiz. The quiz will determine which team you belong to. Will you be a member of Team Logic, Team Harmony, Team Action, or Team Imagination?</p>",
    "<h2>Meet the Teams</h2><p>Now that you have been sorted, it's time to meet your fellow team members. Take a few minutes to get to know each other. Come up with a team name and a team cheer. Remember, you are a team, and you will need to work together to succeed.</p>",
    "<h2>Round 1: The Gauntlet of Risk</h2><p>Your first challenge is the Gauntlet of Risk. In this round, you will be tested on your knowledge of risk management. You will face a series of questions that will require you to think critically and strategically. Are you ready to face the gauntlet?</p>",
    "<h2>Round 1: Question 1</h2><p><strong>Question:</strong> What is the primary goal of risk management?</p>",
    "<h2>Round 1: Answer 1</h2><p><strong>Answer:</strong> To identify, assess, and mitigate risks.</p><p><strong>Discussion:</strong> Why is it important to identify, assess, and mitigate risks? What are some examples of risks that businesses face? How can businesses mitigate these risks?</p>",
    "<h2>Round 1: Question 2</h2><p><strong>Question:</strong> What is a risk matrix?</p>",
    "<h2>Round 1: Answer 2</h2><p><strong>Answer:</strong> A tool for ranking and prioritizing risks.</p><p><strong>Discussion:</strong> How does a risk matrix work? What are the benefits of using a risk matrix? What are some of the limitations of a risk matrix?</p>",
    "<h2>Round 2: The Compliance Conundrum</h2><p>Your next challenge is the Compliance Conundrum. In this round, you will be tested on your knowledge of compliance. You will face a series of questions that will require you to think ethically and legally. Are you ready to solve the conundrum?</p>",
    "<h2>Round 2: Question 1</h2><p><strong>Question:</strong> What is the purpose of a compliance program?</p>",
    "<h2>Round 2: Answer 1</h2><p><strong>Answer:</strong> To ensure that an organization follows all applicable laws and regulations.</p><p><strong>Discussion:</strong> Why is it important for organizations to have a compliance program? What are some of the key elements of a compliance program? How can organizations ensure that their compliance program is effective?</p>",
    "<h2>Round 2: Question 2</h2><p><strong>Question:</strong> What are some of the consequences of non-compliance?</p>",
    "<h2>Round 2: Answer 2</h2><p><strong>Answer:</strong> Fines, penalties, and reputational damage.</p><p><strong>Discussion:</strong> What are some other consequences of non-compliance? How can organizations avoid these consequences? What are some examples of companies that have suffered from non-compliance?</p>",
    "<h2>Round 3: The Safety Scramble</h2><p>Your final challenge is the Safety Scramble. In this round, you will be tested on your knowledge of safety. You will face a series of questions that will require you to think practically and proactively. Are you ready to scramble for safety?</p>",
    "<h2>Round 3: Question 1</h2><p><strong>Question:</strong> What is the most common cause of workplace accidents?</p>",
    "<h2>Round 3: Answer 1</h2><p><strong>Answer:</strong> Slips, trips, and falls.</p><p><strong>Discussion:</strong> Why are slips, trips, and falls so common in the workplace? What are some of the hazards that can cause slips, trips, and falls? How can organizations prevent slips, trips, and falls?</p>",
    "<h2>Round 3: Question 2</h2><p><strong>Question:</strong> What is the purpose of a safety data sheet (SDS)?</p>",
    "<h2>Round 3: Answer 2</h2><p><strong>Answer:</strong> To provide information on the hazards of a chemical and how to handle it safely.</p><p><strong>Discussion:</strong> What information is included in an SDS? Why is it important for workers to have access to SDSs? How can organizations ensure that their workers understand the information in an SDS?</p>",
    "<h2>The Lightning Round</h2><p>Get ready for the Lightning Round! In this round, you will face a series of quick-fire questions on a variety of topics. The team with the most correct answers at the end of the round will win a special prize.</p>",
    "<h2>The Finals</h2><p>The moment of truth has arrived. In the finals, you will face a series of complex bonus questions that will determine the winner of the Copilot Quest. This is where the true champions are made. Are you ready to prove your worth?</p>",
    "<h2>Open-Ended Questions</h2><p>Now it's time for the open-ended questions. This is your chance to show off your critical thinking and problem-solving skills. There are no right or wrong answers, but the best answers will be well-reasoned and well-supported.</p>",
    "<h2>Discussion</h2><p>Use this time to discuss the open-ended questions with your team. Brainstorm ideas, share your perspectives, and come up with a comprehensive answer. Remember to listen to each other and build on each other's ideas.</p>",
    "<h2>Wrap-Up Discussion</h2><p>Let's discuss what we've learned today. What were some of the key takeaways from the game? How can you apply what you've learned to your work? What was your favorite part of the game?</p>",
    "<h2>Copilot Tips and Tricks</h2><p>Here are a few tips and tricks to help you get the most out of your AI assistant:</p><ul><li>Be specific in your prompts.</li><li>Provide context.</li><li>Use keywords.</li><li>Experiment with different prompts.</li></ul>",
    "<h2>Prompting Guidelines</h2><p>When you're writing a prompt, keep the following guidelines in mind:</p><ul><li>Use clear and concise language.</li><li>Avoid jargon and slang.</li><li>Be polite and respectful.</li><li>Proofread your prompts before you send them.</li></ul>",
    "<h2>Prompt Library</h2><p>Here are a few examples of prompts that you can use to get started:</p><ul><li>'Write a short story about a robot who falls in love with a human.'</li><li>'Translate the following sentence into French: 'Hello, how are you?''</li><li>'Write a poem about the beauty of nature.'</li></ul>",
    "<h2>Congratulations!</h2><p>You have completed the Copilot Quest! We hope you had fun and learned a lot. Thank you for participating, and we hope to see you again soon.</p>"
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
