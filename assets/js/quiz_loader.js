// assets/js/quiz_loader.js

document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const quizTitleElement = document.getElementById('quiz-title');
    const submitButton = document.getElementById('submit-quiz-button');
    const resultsContainer = document.getElementById('quiz-results-container');
    const scoreElement = document.getElementById('quiz-score');
    const feedbackContainer = document.getElementById('quiz-feedback');
    const retryButton = document.getElementById('retry-quiz-button');
    const showAnswersButton = document.getElementById('show-answers-button');
    const answersDisplay = document.getElementById('quiz-answers-display');

    let quizData = [];
    let userAnswers = {}; // To store user's answers for short answer questions

    // --- 1. Fetch and Parse Quiz Data ---
    async function loadQuiz() {
        const params = new URLSearchParams(window.location.search);
        const quizFile = params.get('quizfile');
        const answerFile = params.get('answerfile');

        if (!quizFile) {
            quizContainer.innerHTML = '<p>Error: No quiz file specified. Please add ?quizfile=path/to/yourquiz.md to the URL.</p>';
            return;
        }

        try {
            const response = await fetch(quizFile);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText} for ${quizFile}`);
            }
            const markdown = await response.text();
            parseQuizMarkdown(markdown);
            if (quizData.length > 0) {
                renderQuiz();
                submitButton.style.display = 'block';
                if (answerFile) {
                    showAnswersButton.style.display = 'block';
                    showAnswersButton.dataset.answerfile = answerFile;
                } else {
                    // If no answer file, the "Show Answers" button can show the correct options from quizData itself
                    showAnswersButton.style.display = 'block';
                }
            } else {
                quizContainer.innerHTML = '<p>Error: Could not parse quiz data or quiz is empty.</p>';
            }
        } catch (error) {
            quizContainer.innerHTML = `<p>Error loading quiz: ${error.message}. Please check the file path and format.</p>`;
            console.error('Error loading quiz:', error);
        }
    }

    function parseQuizMarkdown(markdown) {
        const titleMatch = markdown.match(/^#\s*(.*)/m);
        if (titleMatch && titleMatch[1]) {
            quizTitleElement.textContent = titleMatch[1];
        } else {
            quizTitleElement.textContent = "Interactive Quiz";
        }

        const questionsRaw = markdown.split(/\n---\s*\n/); // Split by horizontal rule for questions
        quizData = questionsRaw.map((qBlock, index) => {
            const lines = qBlock.trim().split('\n');
            if (lines.length === 0) return null;

            let questionTitle = `Question ${index + 1}`;
            let questionTextLines = [];
            let options = [];
            let type = 'multiple_choice'; // Default type

            let lineIndex = 0;
            if (lines[lineIndex] && lines[lineIndex].startsWith('## ')) {
                questionTitle = lines[lineIndex].substring(3).trim();
                lineIndex++;
            }

            // Collect question text lines
            while(lineIndex < lines.length && !lines[lineIndex].startsWith('- [') && !lines[lineIndex].toLowerCase().startsWith('type:')) {
                if(lines[lineIndex].trim()) questionTextLines.push(lines[lineIndex].trim());
                lineIndex++;
            }
            const questionText = questionTextLines.join(' ');

            // Collect options or type
            while(lineIndex < lines.length) {
                const line = lines[lineIndex].trim();
                if (line.startsWith('- [')) {
                    const isCorrect = line.startsWith('- [x]');
                    let optionText = line.substring(line.indexOf(']') + 1).trim();
                    optionText = optionText.replace(/\s*\(Correct Answer\)/i, '').trim();
                    options.push({ text: optionText, correct: isCorrect });
                } else if (line.toLowerCase().startsWith('type:')) {
                    type = line.substring(5).trim().toLowerCase();
                }
                lineIndex++;
            }

            if (!questionText || (type !== 'shortanswer' && options.length === 0)) return null;
             // For shortanswer, options array will be empty, which is fine.
            if (type === 'shortanswer' && !questionText) return null;


            return { title: questionTitle, question: questionText, options: options, type: type };
        }).filter(q => q !== null);
    }

    // --- 2. Render Quiz ---
    function renderQuiz() {
        quizContainer.innerHTML = '';
        userAnswers = {}; // Reset user answers

        quizData.forEach((qItem, qIndex) => {
            const questionBlock = document.createElement('div');
            questionBlock.className = 'question-block';
            questionBlock.innerHTML = `<h3>${qItem.title}: ${qItem.question}</h3>`;

            if (qItem.type === 'shortanswer') {
                const textarea = document.createElement('textarea');
                textarea.name = `question-${qIndex}`;
                textarea.id = `q${qIndex}-ans`;
                textarea.rows = 3;
                textarea.style.width = '90%';
                questionBlock.appendChild(textarea);
            } else { // Multiple choice or True/False (radio/checkbox)
                const optionsList = document.createElement('ul');
                const questionInputType = qItem.options.filter(opt => opt.correct).length > 1 ? 'checkbox' : 'radio';

                qItem.options.forEach((option, oIndex) => {
                    const listItem = document.createElement('li');
                    const label = document.createElement('label');
                    const input = document.createElement('input');
                    input.type = questionInputType;
                    input.name = `question-${qIndex}`;
                    input.value = oIndex;
                    input.id = `q${qIndex}-o${oIndex}`;

                    label.appendChild(input);
                    label.appendChild(document.createTextNode(` ${option.text}`));
                    listItem.appendChild(label);
                    optionsList.appendChild(listItem);
                });
                questionBlock.appendChild(optionsList);
            }
            quizContainer.appendChild(questionBlock);
        });
        resultsContainer.style.display = 'none';
        feedbackContainer.innerHTML = '';
        answersDisplay.style.display = 'none';
    }

    // --- 3. Handle Submission and Results ---
    submitButton.addEventListener('click', () => {
        let score = 0;
        let gradableQuestions = 0;
        feedbackContainer.innerHTML = '';
        userAnswers = {}; // Clear previous short answers

        quizData.forEach((qItem, qIndex) => {
            const feedbackItem = document.createElement('div');
            feedbackItem.className = 'feedback-item';

            if (qItem.type === 'shortanswer') {
                const textarea = document.getElementById(`q${qIndex}-ans`);
                userAnswers[qIndex] = textarea.value; // Store user's short answer
                feedbackItem.innerHTML = `<p><strong>${qItem.title} (Your Answer):</strong></p><p>${textarea.value || "No answer provided."}</p>`;
                // Short answers are not auto-graded for correctness here
            } else {
                gradableQuestions++;
                const questionInputType = qItem.options.filter(opt => opt.correct).length > 1 ? 'checkbox' : 'radio';
                const selectedInputs = quizContainer.querySelectorAll(`input[name="question-${qIndex}"]:checked`);

                let isQuestionCorrect = true;
                let selectedOptionIndices = [];
                selectedInputs.forEach(input => selectedOptionIndices.push(parseInt(input.value)));

                if (selectedInputs.length === 0 && qItem.options.some(opt => opt.correct)) { // If there's a correct answer and none selected
                    isQuestionCorrect = false;
                } else {
                    for(let i=0; i < qItem.options.length; i++) {
                        const optionIsCorrect = qItem.options[i].correct;
                        const optionIsSelected = selectedOptionIndices.includes(i);
                        if (optionIsCorrect !== optionIsSelected) {
                            isQuestionCorrect = false;
                            break;
                        }
                    }
                }

                if (isQuestionCorrect) {
                    score++;
                    feedbackItem.classList.add('correct');
                    feedbackItem.innerHTML = `<p><strong>${qItem.title}: Correct!</strong></p>`;
                } else {
                    feedbackItem.classList.add('incorrect');
                    let correctText = qItem.options.filter(opt => opt.correct).map(opt => opt.text).join('; ');
                    feedbackItem.innerHTML = `<p><strong>${qItem.title}: Incorrect.</strong></p> <p>Correct answer(s): ${correctText}</p>`;
                }
            }
            feedbackContainer.appendChild(feedbackItem);
        });

        if (gradableQuestions > 0) {
            scoreElement.textContent = `Your score (auto-graded questions): ${score} out of ${gradableQuestions}`;
        } else {
            scoreElement.textContent = `No auto-gradable questions in this quiz. Please review answers.`;
        }
        resultsContainer.style.display = 'block';
        submitButton.style.display = 'none';
        window.scrollTo(0, resultsContainer.offsetTop);
    });

    // --- 4. Retry Quiz ---
    retryButton.addEventListener('click', () => {
        renderQuiz(); // Re-render the quiz
        submitButton.style.display = 'block';
        // resultsContainer.style.display = 'none'; // This is handled by renderQuiz
        // feedbackContainer.innerHTML = ''; // This is handled by renderQuiz
        // answersDisplay.innerHTML = ''; // This is handled by renderQuiz
        // answersDisplay.style.display = 'none'; // This is handled by renderQuiz
        quizContainer.scrollIntoView({behavior: "smooth"});
    });

    // --- 5. Show Answers (from separate file or generated) ---
    showAnswersButton.addEventListener('click', async () => {
        const answerFile = showAnswersButton.dataset.answerfile;
        answersDisplay.innerHTML = '<h3>Official Answers / Explanations:</h3>';

        if (answerFile) {
            try {
                const response = await fetch(answerFile);
                if (!response.ok) throw new Error(`Answer file not found: ${answerFile}`);
                const answerMarkdown = await response.text();
                // Sanitize before parsing if needed, though marked.js is generally safe for trusted content
                answersDisplay.innerHTML += marked.parse(answerMarkdown);
            } catch (error) {
                answersDisplay.innerHTML += `<p>Could not load detailed answers from file: ${error.message}</p><p>Please refer to the feedback provided above for auto-graded questions.</p>`;
                console.error("Error fetching answer file:", error);
            }
        } else {
            // Fallback: Construct answers from quizData for multiple choice if no separate answer file
            let builtAnswers = "";
            quizData.forEach(qItem => {
                if (qItem.type !== 'shortanswer') {
                    let correctOpts = qItem.options.filter(opt => opt.correct).map(opt => opt.text).join('; ');
                    builtAnswers += `<p><strong>${qItem.title}:</strong> ${correctOpts || "No correct option marked in quiz data."}</p>`;
                } else {
                     builtAnswers += `<p><strong>${qItem.title}:</strong> (See official answer key for short answer guidance)</p>`;
                }
            });
            answersDisplay.innerHTML += builtAnswers || "<p>No answer key file specified and no answers extractable from quiz data.</p>";
        }
        answersDisplay.style.display = 'block';
        answersDisplay.scrollIntoView({behavior: "smooth"});
    });

    // --- Initial Load ---
    loadQuiz();
});
