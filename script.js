document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');

    if(mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Active link highlighting
    const currentLocation = location.href;
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if(link.href === currentLocation) {
            link.classList.add('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hide mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav') && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });

    // Hide mobile menu when window is resized
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
            navMenu.classList.remove('show');
        }
    });

    // Navbar scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const navbar = document.querySelector('nav');

        if (currentScroll <= 0) {
            navbar.style.backgroundColor = 'rgba(22, 33, 62, 0.9)';
            return;
        }

        if (currentScroll > lastScroll) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
            navbar.style.backgroundColor = 'rgba(22, 33, 62, 0.95)';
        }
        lastScroll = currentScroll;
    });
});