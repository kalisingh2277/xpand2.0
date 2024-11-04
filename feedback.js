// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission for Contact Us and Feedback forms
    const contactForm = document.getElementById('contact-form');
    const feedbackForm = document.getElementById('feedback-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // AJAX request (if needed)
            // You can uncomment the AJAX part if you want to use it
            /*
            $.ajax({
                type: "POST",
                url: "send_message.php", // Your PHP script
                data: { name: name, email: email, message: message },
                success: function(response) {
                    alert(response); // Show success message
                    contactForm.reset(); // Clear the form
                },
                error: function() {
                    alert("There was an error sending your message. Please try again.");
                }
            });
            */

            // For demonstration, just show an alert
            alert(`Message sent!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
            contactForm.reset(); // Clear the form
        });
    }

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const feedback = document.getElementById('feedback').value;

            // AJAX request (if needed)
            // You can uncomment the AJAX part if you want to use it
            /*
            $.ajax({
                type: "POST",
                url: "send_feedback.php", // Your PHP script
                data: { name: name, email: email, feedback: feedback },
                success: function(response) {
                    alert(response); // Show success message
                    feedbackForm.reset(); // Clear the form
                },
                error: function() {
                    alert("There was an error sending your feedback. Please try again.");
                }
            });
            */

            // For demonstration, just show an alert
            alert(`Feedback submitted!\nName: ${name}\nEmail: ${email}\nFeedback: ${feedback}`);
            feedbackForm.reset(); // Clear the form
        });
    }
});