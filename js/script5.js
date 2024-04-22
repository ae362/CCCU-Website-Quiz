document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-answer');
    const answerInput = document.getElementById('quiz-answer');
    const feedbackText = document.getElementById('quiz-feedback');
    const showAnswersButton = document.getElementById('show-answers');
    let attempts = 0;
    let correctAnswers = []; // This will hold the correct answers

    // This assumes that your quiz container has the ID 'quiz-content'.
    // It retrieves the correct answers from the data-answer attribute.
    const quizContainer = document.getElementById('quiz-content');
    if (quizContainer) {
        correctAnswers = JSON.parse(quizContainer.getAttribute('data-answer'));
    }

    submitButton.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const normalizedAnswers = correctAnswers.map(answer => answer.toLowerCase());
        
        if (normalizedAnswers.includes(userAnswer)) {
            feedbackText.textContent = 'Correct!';
            feedbackText.style.color = 'green'; // Optional: style the feedback
        } else {
            attempts++;
            feedbackText.textContent = `Incorrect, try again. Attempts left: ${3 - attempts}`;
            feedbackText.style.color = 'red'; // Optional: style the feedback
            if (attempts >= 3) {
                showAnswersButton.classList.remove('hidden');
            }
        }
        answerInput.value = ''; // Clear the input after submission
    });
    showAnswersButton.addEventListener('mouseover', function() {
        // Change the src to the answers image
        document.getElementById('quiz-image').src = '/images/Q5.png'; 
    });

    showAnswersButton.addEventListener('mouseout', function() {
        // Revert to the original quiz image
        document.getElementById('quiz-image').src = '/images/Quiz5.png';
    });

    // Implement the logic for returning to the home page
    document.getElementById('return-home').addEventListener('click', function() {
        window.location.href = 'index.html'; // Redirect to the main page or index page
    });
});
