document.addEventListener('DOMContentLoaded', function() {
    const paymentForm = document.getElementById('paymentForm');
    const paymentOptions = document.querySelectorAll('.payment--options button');
    const paymentTypes = document.querySelectorAll('.payment-type');
    const successPopup = document.getElementById('successPopup');
    const closePopupBtn = document.getElementById('closePopup');

    // Payment option selection
    paymentOptions.forEach((option) => {
        option.addEventListener('click', () => {
            // Remove active class from all buttons
            paymentOptions.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            option.classList.add('active');
            
            // Hide all payment type sections
            paymentTypes.forEach((type) => {
                type.classList.remove('active');
            });
            // Show selected payment type section
            const selectedPayment = document.getElementById(option.dataset.type + 'Payment');
            if (selectedPayment) {
                selectedPayment.classList.add('active');
            }
        });
    });

    // Form submission
    if (paymentForm) {
        paymentForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent the default form submission
            // Check if at least one payment option is selected
            const activeOption = Array.from(paymentOptions).find(option => option.classList.contains('active'));
            if (!activeOption) {
                alert('Please select a payment option.');
                return;
            }
            showSuccessPopup();
        });
    }

    // Show success popup
    function showSuccessPopup() {
        successPopup.style.display = 'block';
        // Reset the animation
        const checkmark = successPopup.querySelector('.checkmark');
        checkmark.style.animation = 'none';
        checkmark.offsetHeight; // Trigger reflow
        checkmark.style.animation = null;
    }

    // Close popup
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            successPopup.style.display = 'none';
            // Optionally reset the form
            paymentForm.reset();
            paymentOptions.forEach(btn => btn.classList.remove('active'));
            paymentTypes.forEach((type) => {
                type.classList.remove('active');
            });
        });
    }

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === successPopup) {
            successPopup.style.display = 'none';
        }
    });
});