// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.createElement('div');
    navOverlay.className = 'nav-overlay';
    document.body.appendChild(navOverlay);

    function toggleMenu() {
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    }

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking overlay
    navOverlay.addEventListener('click', function() {
        hamburger.setAttribute('aria-expanded', 'false');
        navLinks.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close menu when clicking a link
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// // Contact form handling
// const contactForm = document.getElementById('contactForm');
// if (contactForm) {
//     contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         // Get form data
//         const formData = new FormData(this);
//         const data = {
//             name: formData.get('name'),
//             email: formData.get('email'),
//             phone: formData.get('phone'),
//             message: formData.get('message')
//         };
        
//         // Here you would typically send this to your backend
//         // For now, we'll just show a success message
//         console.log('Form submission:', data);
        
//         // Show success message
//         const successMessage = document.createElement('div');
//         successMessage.className = 'form-success';
//         successMessage.style.cssText = `
//             background-color: #10b981;
//             color: white;
//             padding: 1rem;
//             border-radius: 8px;
//             margin-top: 1rem;
//             text-align: center;
//         `;
//         successMessage.textContent = 'Thank you! We\'ll get back to you soon.';
        
//         // Remove any existing success message
//         const existing = this.querySelector('.form-success');
//         if (existing) {
//             existing.remove();
//         }
        
//         this.appendChild(successMessage);
//         this.reset();
        
//         // Scroll to success message
//         successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
//         // Remove success message after 5 seconds
//         setTimeout(() => {
//             successMessage.remove();
//         }, 5000);
//     });
// }

// Add subtle scroll animations (optional, can be removed if too flashy)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in effect (optional)
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});


