document.addEventListener('DOMContentLoaded', function () {
    const imageContainers = document.querySelectorAll('.image-container');

    imageContainers.forEach(container => {
        const img = container.querySelector('img');
        const correctAnswers = JSON.parse(container.getAttribute('data-answer'));

        img.addEventListener('click', () => {
            // Remove textbox, button, and feedback from all image containers
            document.querySelectorAll('.image-container input[type="text"]').forEach(input => input.remove());
            document.querySelectorAll('.image-container button').forEach(button => button.remove());
            document.querySelectorAll('.image-container .feedback').forEach(feedback => feedback.remove());

            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Your answer...';

            const button = document.createElement('button');
            button.textContent = 'Submit';

            const feedback = document.createElement('p');
            feedback.className = 'feedback';

            container.appendChild(input);
            container.appendChild(button);
            container.appendChild(feedback);

            button.addEventListener('click', () => {
                const userAnswer = input.value.trim();
                const normalizedUserAnswer = userAnswer.toLowerCase();
                const match = correctAnswers.some(answer => normalizedUserAnswer === answer.toLowerCase());

                if (match) {
                    feedback.textContent = 'Correct answer!';
                    feedback.classList.add('correct');
                } else {
                    feedback.textContent = 'Incorrect answer. Try again!';
                    feedback.classList.remove('correct');
                }
            });
        });
    });
});
