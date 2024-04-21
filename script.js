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

// Function to fetch the current visitor count from the server
async function fetchVisitorCount() {
    try {
        const response = await fetch('counter.txt');
        const count = await response.text();
        return parseInt(count) || 0;
    } catch (error) {
        console.error('Error fetching visitor count:', error);
        return 0;
    }
}

// Function to update the visitor count and save it to the server
async function updateVisitorCount(count) {
    try {
        await fetch('counter.txt', {
            method: 'PUT', // Use PUT method to update the file
            headers: {
                'Content-Type': 'text/plain'
            },
            body: count.toString()
        });
    } catch (error) {
        console.error('Error updating visitor count:', error);
    }
}

// Function to initialize the visitor count when the page loads
async function init() {
    let visitorCount = await fetchVisitorCount();
    document.getElementById('visitorCount').textContent = visitorCount;

    // Increment the visitor count and update the display
    visitorCount++;
    document.getElementById('visitorCount').textContent = visitorCount;

    // Update the count in the file
    updateVisitorCount(visitorCount);
}

// Call the init function when the page loads
window.onload = init;

