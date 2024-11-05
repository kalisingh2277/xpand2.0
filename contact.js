document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS if it's being used
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically handle the form submission to your server
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
            if(contactForm) {
                contactForm.reset();
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

    // Optional: Form input animation
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