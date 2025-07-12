const presentationContainer = document.getElementById('presentation-container');
const prevSlideBtn = document.getElementById('prev-slide');
const nextSlideBtn = document.getElementById('next-slide');

const slides = [
    "<h1>Are You Smarter Than an AI Chatbot?</h1>",
    "<h2>Game Overview</h2><p>Welcome to Copilot Quest! Today, you'll be working in teams to answer questions on a variety of topics. The goal is to see how well you can collaborate with your team and with an AI to get the right answers.</p>",
    "<h2>Team Sorting</h2><p>To start, we'll take a quick personality quiz to sort you into teams. Please navigate to the game website to begin.</p>",
    // ... more slides based on presentation_script.md
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

nextSlideBtn.addEventListener('click', nextSlide);
prevSlideBtn.addEventListener('click', prevSlide);
