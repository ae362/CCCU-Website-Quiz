document.getElementById("instagrambutton").addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/canterburyccuni?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});

document.getElementById("AnswersDayButton").addEventListener("click", function() {
    window.location.href = "https://www.canterbury.ac.uk/campaign/answers-day";
});
document.getElementById('proceed-to-quiz').addEventListener('click', function() {
    const quizSection = document.querySelector('#part2');
    const quizSectionPosition = quizSection.offsetTop;

    const scrollDuration = 900; // Duration of the scroll animation in milliseconds

    const startTime = performance.now();
    const endTime = startTime + scrollDuration;

    function scrollToQuizSection(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / scrollDuration, 1);
        const ease = easeInOutQuad(progress);

        window.scrollTo(0, interpolate(window.pageYOffset, quizSectionPosition, ease));

        if (elapsedTime < scrollDuration) {
            requestAnimationFrame(scrollToQuizSection);
        } else {
            window.removeEventListener('wheel', preventManualScroll);
        }
    }

    function interpolate(start, end, progress) {
        return start + (end - start) * progress;
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function preventManualScroll(event) {
        event.preventDefault();
    }

    window.addEventListener('wheel', preventManualScroll);

    requestAnimationFrame(scrollToQuizSection);
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    const formData = new FormData(this);

    // Send form data to Formspree API
    fetch('https://formspree.io/f/xayrvkqy', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        alert('An error occurred. Please try again later.');
        console.error(error);
    });
});