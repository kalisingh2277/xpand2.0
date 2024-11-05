document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if it's being used
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // Feedback Form Submission
    const feedbackForm = document.getElementById('feedback-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');
    const stars = document.querySelectorAll('.stars i');
    const ratingInput = document.getElementById('rating');

    // Star rating functionality
    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            const rating = this.getAttribute('data-rating');
            highlightStars(rating);
        });

        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingInput.value = rating;
            highlightStars(rating);
            stars.forEach(s => s.classList.add('selected'));
        });

        star.addEventListener('mouseout', function() {
            if (!ratingInput.value) {
                stars.forEach(s => s.classList.remove('active'));
            } else {
                highlightStars(ratingInput.value);
            }
        });
    });

    function highlightStars(rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= rating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }

    if(feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server
            // For now, we'll just show the success modal
            showSuccessModal();
        });
    }

    function showSuccessModal() {
        if(successModal) {
            successModal.style.display = 'block';
        }
    }

    // Close modal when clicking the close button
    if(closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
            // Optionally reset the form
            if(feedbackForm) {
                feedbackForm.reset();
                // Reset stars
                stars.forEach(star => {
                    star.classList.remove('active', 'selected');
                });
                ratingInput.value = '0';
            }
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });

    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if(mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // Optional: Close mobile menu when a link is clicked
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if(navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
            }
        });
    });

    // Form input animation
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focus');
        });
        input.addEventListener('blur', function() {
            if(this.value === '') {
                this.parentElement.classList.remove('focus');
            }
        });
    });
});