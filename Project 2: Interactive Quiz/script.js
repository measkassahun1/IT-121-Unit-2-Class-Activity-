// Quiz data - Array of objects
const quizData = [
    {
        question: "What is the capital city of Washington state?",
        answers: {
            a: "Tukwilla",
            b: "Olympia",
            c: "Seattle",
            d: "Renton"
        },
        correctAnswer: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Jupiter",
            b: "Mars",
            c: "Saturn",
            d: "Neptune"
        },
        correctAnswer: "b"
    },
    {
        question: "Who wrote 'A Tale of Two Cities'?",
        answers: {
            a: "Charles Dickens",
            b: "William Shakespeare",
            c: "Jane Austen",
            d: "Mark Twain"
        },
        correctAnswer: "a"
    }
];

// Function to display quiz questions
function displayQuizQuestions() {
    const questionContainer = document.getElementById('question-container');
    let quizHTML = '';

    quizData.forEach((quizItem, index) => {
        quizHTML += `<div class="question">${index + 1}. ${quizItem.question}</div>`;
        
        for (const option in quizItem.answers) {
            quizHTML += `<label>
                            <input type="radio" name="question${index}" value="${option}">
                            ${quizItem.answers[option]}
                         </label><br>`;
        }
    });

    questionContainer.innerHTML = quizHTML;
}

// Function to calculate and display quiz score
function calculateScore() {
    const scoreContainer = document.getElementById('score');
    let score = 0;

    quizData.forEach((quizItem, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === quizItem.correctAnswer) {
                score++;
            }
        }
    });

    scoreContainer.textContent = score;
}

// Event listener for submit button
document.getElementById('submit').addEventListener('click', () => {
    calculateScore();
});

// Initialize quiz when the page loads
displayQuizQuestions();
