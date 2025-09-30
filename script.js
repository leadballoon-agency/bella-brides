// ====================================
// BELLA BRIDES ALTERATIONS - JAVASCRIPT
// ====================================

// Smooth scroll to form
function scrollToForm() {
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Select package and scroll to form
function selectPackage(packageName) {
    // Set the package in the form
    const packageSelect = document.getElementById('package');

    if (packageName === 'Bride Perfection') {
        packageSelect.value = 'bride-perfection';
    } else if (packageName === 'Heritage Restoration') {
        packageSelect.value = 'heritage-restoration';
    } else if (packageName === 'White Glove Experience') {
        packageSelect.value = 'white-glove';
    }

    // Scroll to form
    scrollToForm();

    // Highlight the package select briefly
    setTimeout(() => {
        packageSelect.style.borderColor = '#D4A574';
        packageSelect.style.boxShadow = '0 0 0 3px rgba(212, 165, 116, 0.2)';

        setTimeout(() => {
            packageSelect.style.borderColor = '';
            packageSelect.style.boxShadow = '';
        }, 2000);
    }, 500);
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData);

            // Log form data (in production, send to server)
            console.log('Form submitted:', data);

            // Show success message
            showSuccessMessage();

            // Reset form
            bookingForm.reset();
        });
    }

    // Form validation feedback
    const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value.trim() === '') {
                this.style.borderColor = '#ff4444';
            } else {
                this.style.borderColor = '#4CAF50';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#D4A574';
        });
    });
});

// Success message display
function showSuccessMessage() {
    const form = document.querySelector('.booking-form');

    // Create success message
    const successDiv = document.createElement('div');
    successDiv.style.cssText = `
        background: #4CAF50;
        color: white;
        padding: 30px;
        border-radius: 8px;
        text-align: center;
        margin-top: 20px;
        animation: slideIn 0.5s ease;
    `;
    successDiv.innerHTML = `
        <h3 style="margin-bottom: 15px; font-size: 24px;">✓ Consultation Request Received!</h3>
        <p style="font-size: 16px; line-height: 1.6;">
            Thank you for choosing Bella Brides Alterations.<br>
            We'll contact you within 2 hours to schedule your private consultation.
        </p>
    `;

    form.appendChild(successDiv);

    // Scroll to success message
    successDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Remove success message after 10 seconds
    setTimeout(() => {
        successDiv.style.animation = 'slideOut 0.5s ease';
        setTimeout(() => {
            successDiv.remove();
        }, 500);
    }, 10000);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to elements
    const animateElements = document.querySelectorAll('.value-card, .package-card, .process-step, .testimonial-card, .faq-item');

    animateElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
});

// Track scroll depth for analytics
let maxScroll = 0;

window.addEventListener('scroll', function() {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercent > maxScroll) {
        maxScroll = Math.round(scrollPercent);

        // Log milestone scrolls (25%, 50%, 75%, 100%)
        if (maxScroll === 25 || maxScroll === 50 || maxScroll === 75 || maxScroll === 100) {
            console.log(`Scroll depth: ${maxScroll}%`);
            // In production: send to analytics
            // ga('send', 'event', 'Scroll Depth', maxScroll + '%');
        }
    }
});

// Track CTA button clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('cta-button')) {
        const buttonText = e.target.textContent;
        const section = e.target.closest('section')?.id || 'unknown';

        console.log('CTA clicked:', {
            button: buttonText,
            section: section
        });
        // In production: send to analytics
        // ga('send', 'event', 'CTA Click', buttonText, section);
    }
});

// Track form field interactions
document.addEventListener('focus', function(e) {
    if (e.target.matches('#bookingForm input, #bookingForm select, #bookingForm textarea')) {
        const fieldName = e.target.name || e.target.id;
        console.log('Form field focused:', fieldName);
        // In production: send to analytics
        // ga('send', 'event', 'Form', 'Field Focus', fieldName);
    }
}, true);

// FAQ analytics
document.addEventListener('click', function(e) {
    if (e.target.matches('.faq-item summary')) {
        const question = e.target.textContent;
        console.log('FAQ clicked:', question);
        // In production: send to analytics
        // ga('send', 'event', 'FAQ', 'Question Opened', question);
    }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);