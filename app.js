// Life in the UK Test - Quiz Application
class QuizApp {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timer = null;
        this.timeRemaining = 45 * 60; // 45 minutes in seconds
        this.TOTAL_QUESTIONS = 24;
        this.PASS_MARK = 18;

        this.initializeElements();
        this.attachEventListeners();
        this.showScreen('startScreen');
    }

    initializeElements() {
        // Screens
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');

        // Start screen
        this.startBtn = document.getElementById('startBtn');

        // Quiz screen
        this.progressFill = document.getElementById('progressFill');
        this.questionCounter = document.getElementById('questionCounter');
        this.timerDisplay = document.getElementById('timer');
        this.questionText = document.getElementById('questionText');
        this.answersContainer = document.getElementById('answersContainer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.navigationDots = document.getElementById('navigationDots');

        // Results screen
        this.resultTitle = document.getElementById('resultTitle');
        this.scoreNumber = document.getElementById('scoreNumber');
        this.resultMessage = document.getElementById('resultMessage');
        this.correctCount = document.getElementById('correctCount');
        this.incorrectCount = document.getElementById('incorrectCount');
        this.percentageScore = document.getElementById('percentageScore');
        this.reviewContainer = document.getElementById('reviewContainer');
        this.retryBtn = document.getElementById('retryBtn');
    }

    attachEventListeners() {
        this.startBtn.addEventListener('click', () => this.startQuiz());
        this.prevBtn.addEventListener('click', () => this.navigateQuestion(-1));
        this.nextBtn.addEventListener('click', () => this.navigateQuestion(1));
        this.retryBtn.addEventListener('click', () => this.resetQuiz());
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    startQuiz() {
        // Select 24 random questions
        this.questions = this.getRandomQuestions(this.TOTAL_QUESTIONS);
        this.userAnswers = new Array(this.TOTAL_QUESTIONS).fill(null);
        this.currentQuestionIndex = 0;
        this.timeRemaining = 45 * 60;

        this.showScreen('quizScreen');
        this.createNavigationDots();
        this.displayQuestion();
        this.startTimer();
    }

    getRandomQuestions(count) {
        // Shuffle and select random questions
        const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, count);
    }

    createNavigationDots() {
        this.navigationDots.innerHTML = '';
        for (let i = 0; i < this.TOTAL_QUESTIONS; i++) {
            const dot = document.createElement('button');
            dot.className = 'nav-dot';
            dot.textContent = i + 1;
            dot.addEventListener('click', () => this.jumpToQuestion(i));
            this.navigationDots.appendChild(dot);
        }
    }

    updateNavigationDots() {
        const dots = this.navigationDots.querySelectorAll('.nav-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active', 'answered');
            if (index === this.currentQuestionIndex) {
                dot.classList.add('active');
            } else if (this.userAnswers[index] !== null) {
                dot.classList.add('answered');
            }
        });
    }

    displayQuestion() {
        const question = this.questions[this.currentQuestionIndex];

        // Update question counter and progress
        this.questionCounter.textContent = `Question ${this.currentQuestionIndex + 1} of ${this.TOTAL_QUESTIONS}`;
        const progress = ((this.currentQuestionIndex + 1) / this.TOTAL_QUESTIONS) * 100;
        this.progressFill.style.width = `${progress}%`;

        // Display question text
        this.questionText.textContent = question.question;

        // Display answers
        this.answersContainer.innerHTML = '';
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-option';
            button.textContent = answer;

            // Check if this answer was previously selected
            const userAnswer = this.userAnswers[this.currentQuestionIndex];
            if (Array.isArray(userAnswer) && userAnswer.includes(index)) {
                button.classList.add('selected');
            } else if (userAnswer === index) {
                button.classList.add('selected');
            }

            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });

        // Update navigation buttons
        this.prevBtn.disabled = this.currentQuestionIndex === 0;
        this.nextBtn.textContent = this.currentQuestionIndex === this.TOTAL_QUESTIONS - 1 ? 'Finish' : 'Next';

        // Update navigation dots
        this.updateNavigationDots();
    }

    selectAnswer(answerIndex) {
        const question = this.questions[this.currentQuestionIndex];

        // Check if this is a multi-answer question
        if (Array.isArray(question.correctAnswer)) {
            // Multi-answer question
            let currentAnswers = this.userAnswers[this.currentQuestionIndex];
            if (!Array.isArray(currentAnswers)) {
                currentAnswers = [];
            }

            // Toggle the answer
            const index = currentAnswers.indexOf(answerIndex);
            if (index > -1) {
                currentAnswers.splice(index, 1);
            } else {
                currentAnswers.push(answerIndex);
            }

            this.userAnswers[this.currentQuestionIndex] = currentAnswers.length > 0 ? currentAnswers : null;
        } else {
            // Single answer question
            this.userAnswers[this.currentQuestionIndex] = answerIndex;
        }

        // Update the display
        this.displayQuestion();
    }

    navigateQuestion(direction) {
        if (this.currentQuestionIndex === this.TOTAL_QUESTIONS - 1 && direction === 1) {
            // Finish the quiz
            this.finishQuiz();
        } else {
            this.currentQuestionIndex += direction;
            this.currentQuestionIndex = Math.max(0, Math.min(this.TOTAL_QUESTIONS - 1, this.currentQuestionIndex));
            this.displayQuestion();
        }
    }

    jumpToQuestion(index) {
        this.currentQuestionIndex = index;
        this.displayQuestion();
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            if (this.timeRemaining <= 0) {
                clearInterval(this.timer);
                alert('Time is up! The quiz will now be submitted.');
                this.finishQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Add warning class when less than 5 minutes remaining
        if (this.timeRemaining < 300) {
            this.timerDisplay.classList.add('warning');
        } else {
            this.timerDisplay.classList.remove('warning');
        }
    }

    finishQuiz() {
        clearInterval(this.timer);

        // Calculate score
        let correctAnswers = 0;
        this.questions.forEach((question, index) => {
            if (this.isAnswerCorrect(question, this.userAnswers[index])) {
                correctAnswers++;
            }
        });

        const passed = correctAnswers >= this.PASS_MARK;
        const percentage = Math.round((correctAnswers / this.TOTAL_QUESTIONS) * 100);

        // Display results
        this.showScreen('resultsScreen');

        // Set result title and styling
        this.resultTitle.textContent = passed ? 'Congratulations! You Passed!' : 'Unfortunately, You Did Not Pass';

        const scoreCircle = document.querySelector('.score-circle');
        scoreCircle.classList.remove('pass', 'fail');
        scoreCircle.classList.add(passed ? 'pass' : 'fail');

        // Set score
        this.scoreNumber.textContent = correctAnswers;

        // Set message
        this.resultMessage.classList.remove('pass', 'fail');
        this.resultMessage.classList.add(passed ? 'pass' : 'fail');

        if (passed) {
            this.resultMessage.innerHTML = `
                <p><strong>Well done!</strong> You achieved ${percentage}% and met the pass mark of 75% (${this.PASS_MARK}/${this.TOTAL_QUESTIONS}).</p>
                <p>In the real test, you would now be eligible to continue with your application for British citizenship or settlement.</p>
            `;
        } else {
            this.resultMessage.innerHTML = `
                <p>You scored ${percentage}%, but you need 75% (${this.PASS_MARK}/${this.TOTAL_QUESTIONS}) to pass.</p>
                <p>Review the questions below to see where you went wrong, then try again!</p>
            `;
        }

        // Set stats
        this.correctCount.textContent = correctAnswers;
        this.incorrectCount.textContent = this.TOTAL_QUESTIONS - correctAnswers;
        this.percentageScore.textContent = `${percentage}%`;

        // Show detailed review
        this.displayReview();
    }

    isAnswerCorrect(question, userAnswer) {
        if (userAnswer === null) return false;

        if (Array.isArray(question.correctAnswer)) {
            // Multi-answer question
            if (!Array.isArray(userAnswer)) return false;
            if (userAnswer.length !== question.correctAnswer.length) return false;

            const sortedUser = [...userAnswer].sort();
            const sortedCorrect = [...question.correctAnswer].sort();
            return sortedUser.every((val, idx) => val === sortedCorrect[idx]);
        } else {
            // Single answer question
            return userAnswer === question.correctAnswer;
        }
    }

    displayReview() {
        this.reviewContainer.innerHTML = '<h2 style="margin-bottom: 1.5rem;">Review Your Answers</h2>';

        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = this.isAnswerCorrect(question, userAnswer);

            const reviewDiv = document.createElement('div');
            reviewDiv.className = `review-question ${isCorrect ? 'correct' : 'incorrect'}`;

            let html = `
                <div class="review-question-text">
                    ${index + 1}. ${question.question}
                </div>
            `;

            if (isCorrect) {
                html += '<div class="review-answer both">✓ Your answer was correct</div>';
                if (Array.isArray(question.correctAnswer)) {
                    question.correctAnswer.forEach(idx => {
                        html += `<div class="review-answer correct-answer">${question.answers[idx]}</div>`;
                    });
                } else {
                    html += `<div class="review-answer correct-answer">${question.answers[question.correctAnswer]}</div>`;
                }
            } else {
                if (userAnswer !== null) {
                    html += '<div style="margin-top: 0.5rem;"><strong>✗ Your answer:</strong></div>';
                    if (Array.isArray(userAnswer)) {
                        userAnswer.forEach(idx => {
                            html += `<div class="review-answer user-answer">${question.answers[idx]}</div>`;
                        });
                    } else {
                        html += `<div class="review-answer user-answer">${question.answers[userAnswer]}</div>`;
                    }
                } else {
                    html += '<div class="review-answer user-answer">No answer given</div>';
                }

                html += '<div style="margin-top: 0.5rem;"><strong>✓ Correct answer:</strong></div>';
                if (Array.isArray(question.correctAnswer)) {
                    question.correctAnswer.forEach(idx => {
                        html += `<div class="review-answer correct-answer">${question.answers[idx]}</div>`;
                    });
                } else {
                    html += `<div class="review-answer correct-answer">${question.answers[question.correctAnswer]}</div>`;
                }
            }

            reviewDiv.innerHTML = html;
            this.reviewContainer.appendChild(reviewDiv);
        });
    }

    resetQuiz() {
        this.showScreen('startScreen');
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        this.timeRemaining = 45 * 60;
        if (this.timer) {
            clearInterval(this.timer);
        }
    }
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
