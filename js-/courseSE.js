document.addEventListener('DOMContentLoaded', function () {
    // Implement the logic for returning to the home page
    document.getElementById('return-home').addEventListener('click', function() {
        window.location.href = '../index.html'; // Redirect to the main page or index page
    });
    
    // Add event listener to the "Learn More" button
    document.getElementById('learn-more').addEventListener('click', function() {
        // Redirect to the specified link
        window.location.href = 'https://www.canterbury.ac.uk/study-here/courses/software-engineering';
    });
});

