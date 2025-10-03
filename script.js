// ====================================
// LUXURY ALTERATIONS - JAVASCRIPT
// ====================================

// Smooth scroll to form
function scrollToForm() {
    document.getElementById('booking').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Multi-Step Form Logic
document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const formSteps = document.querySelectorAll('.form-step');
    const progressSteps = document.querySelectorAll('.progress-step');
    let currentStep = 1;

    // Make date input open on click anywhere
    const dateInput = document.getElementById('weddingDate');
    if (dateInput) {
        dateInput.addEventListener('click', function() {
            this.showPicker();
        });
    }

    // Navigation functions
    function showStep(stepNumber) {
        // Hide all steps
        formSteps.forEach(step => {
            step.classList.remove('active');
        });

        // Show current step
        const currentStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        if (currentStepElement) {
            currentStepElement.classList.add('active');
        }

        // Update progress indicator
        progressSteps.forEach((step, index) => {
            const stepNum = index + 1;
            step.classList.remove('active', 'completed');

            if (stepNum === stepNumber) {
                step.classList.add('active');
            } else if (stepNum < stepNumber) {
                step.classList.add('completed');
            }
        });

        // Scroll to form
        document.getElementById('booking').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    function validateStep(stepNumber) {
        const currentStepElement = document.querySelector(`.form-step[data-step="${stepNumber}"]`);
        const requiredInputs = currentStepElement.querySelectorAll('[required]');
        let isValid = true;

        requiredInputs.forEach(input => {
            if (input.type === 'checkbox') {
                // For checkbox groups, check if at least one is checked
                const checkboxGroup = currentStepElement.querySelectorAll('input[type="checkbox"][name="alterations"]');
                const anyChecked = Array.from(checkboxGroup).some(cb => cb.checked);
                if (!anyChecked && stepNumber === 2) {
                    isValid = false;
                    // Show error message
                    let errorMsg = currentStepElement.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        errorMsg.style.cssText = 'color: #ff4444; margin-top: 10px; font-size: 14px;';
                        errorMsg.textContent = 'Please select at least one alteration';
                        currentStepElement.querySelector('.alteration-checkboxes').parentNode.appendChild(errorMsg);
                    }
                }
            } else if (input.type === 'radio') {
                // For radio groups, check if at least one is checked
                const radioGroup = currentStepElement.querySelectorAll(`input[type="radio"][name="${input.name}"]`);
                const anyChecked = Array.from(radioGroup).some(rb => rb.checked);
                if (!anyChecked && stepNumber === 3) {
                    isValid = false;
                }
            } else if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ff4444';
            } else {
                input.style.borderColor = '';
            }
        });

        return isValid;
    }

    // Next button click
    document.querySelectorAll('.step-next').forEach(button => {
        button.addEventListener('click', function() {
            if (validateStep(currentStep)) {
                // Track assessment start when user completes Step 1
                if (currentStep === 1) {
                    trackFBEvent('InitiateCheckout', {
                        content_name: 'Assessment Started',
                        content_category: 'Booking Form'
                    });
                }

                if (currentStep < 4) {
                    currentStep++;
                    showStep(currentStep);
                }
            }
        });
    });

    // Previous button click
    document.querySelectorAll('.step-prev').forEach(button => {
        button.addEventListener('click', function() {
            if (currentStep > 1) {
                currentStep--;
                showStep(currentStep);
            }
        });
    });

    // Form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!validateStep(currentStep)) {
                return;
            }

            // Get form data
            const formData = new FormData(bookingForm);

            // Get selected alterations
            const alterations = [];
            formData.getAll('alterations').forEach(alt => {
                alterations.push(alt);
            });

            // Build data object
            const data = {
                weddingDate: formData.get('weddingDate'),
                timeline: formData.get('timeline'),
                dressDesigner: formData.get('dressDesigner'),
                alterations: alterations,
                additionalInfo: formData.get('additionalInfo'),
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                postcode: formData.get('postcode')
            };

            // Log form data (in production, send to server)
            console.log('Form submitted:', data);

            // Show success message
            showSuccessMessage();

            // Reset form
            bookingForm.reset();
            currentStep = 1;
            showStep(1);
        });
    }

    // Form validation feedback
    const inputs = document.querySelectorAll('input, select, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && this.value.trim() === '') {
                this.style.borderColor = '#ff4444';
            }
        });

        input.addEventListener('focus', function() {
            this.style.borderColor = '#D4A574';
            // Remove error message if exists
            const errorMsg = this.closest('.form-group')?.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
        });
    });

    // Clear error on checkbox selection
    document.querySelectorAll('input[type="checkbox"][name="alterations"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const errorMsg = document.querySelector('.alteration-checkboxes').parentNode.querySelector('.error-message');
            if (errorMsg) {
                errorMsg.remove();
            }
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
            Thank you for choosing Luxury Alterations.<br>
            We'll contact you within 24 hours to schedule your free consultation.
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

// Facebook Pixel Tracking
// Make sure fbq is available (loaded via pixel in HTML head)
function trackFBEvent(eventName, params = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', eventName, params);
    }
}

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