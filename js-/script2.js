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
    showAnswersButton.classList.remove('hidden');
    function containsWordsFromAnswer(userAnswer, correctAnswers) {
        userAnswer = userAnswer.toLowerCase();
        for (let i = 0; i < correctAnswers.length; i++) {
            const words = correctAnswers[i].toLowerCase().split(" ");
            for (let j = 0; j < words.length; j++) {
                if (userAnswer.includes(words[j])) {
                    return true;
                }
            }
        }
        return false;
    }
    
    submitButton.addEventListener('click', function() {
        const userAnswer = answerInput.value.trim();
        
        if (attempts < 3) {
            if (containsWordsFromAnswer(userAnswer, correctAnswers)) {
                feedbackText.textContent = 'Correct!';
                feedbackText.style.color = 'green';
            } else {
                attempts++;
                feedbackText.textContent = `Incorrect, try again. Attempts left: ${3 - attempts}`;
                feedbackText.style.color = 'red';
            }
            answerInput.value = ''; // Clear the input after submission
        } else {
            feedbackText.textContent = 'No more attempts left.';
            feedbackText.style.color = 'red';
        }
    });
    const quizImage = document.getElementById('quiz-image');
    const originalQuizSrc = quizImage.src; 
    const answerSrc = '../images/Q2.png'; 
    showAnswersButton.addEventListener('mouseover', function() {
        // Change the src to the answers image
       quizImage.style.width = quizImage.offsetWidth + 'px';
        quizImage.style.height = quizImage.offsetHeight + 'px';
        quizImage.src = answerSrc;
    });

    showAnswersButton.addEventListener('mouseout', function() {
        // Revert to the original quiz image
        quizImage.src = originalQuizSrc;
        quizImage.style.width = '';
        quizImage.style.height = '';
    });
    // Implement the logic for returning to the home page
    document.getElementById('return-home').addEventListener('click', function() {
        window.location.href = '../index.html'; // Redirect to the main page or index page
    });
});