/* ============================================
   AG-EKSPERT - CONTACT FORM HANDLER
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    if (!contactForm) return;

    // Validation rules
    const validators = {
        ime: {
            validate: (value) => value.trim().length >= 2,
            message: 'Ime mora sadržavati najmanje 2 karaktera'
        },
        email: {
            validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(value);
            },
            message: 'Unesite validnu email adresu'
        },
        telefon: {
            validate: (value) => {
                if (!value) return true; // Optional field
                const phoneRegex = /^[\d\s\-\+\(\)]+$/;
                return phoneRegex.test(value) && value.replace(/\D/g, '').length >= 9;
            },
            message: 'Unesite validan telefonski broj'
        },
        poruka: {
            validate: (value) => value.trim().length >= 10,
            message: 'Poruka mora sadržavati najmanje 10 karaktera'
        },
        suglasnost: {
            validate: (value) => value,
            message: 'Morate se složiti sa obradom podataka'
        }
    };

    // Clear error messages on input
    contactForm.querySelectorAll('input, textarea').forEach(field => {
        field.addEventListener('input', () => {
            const errorElement = document.getElementById(`error-${field.id}`);
            if (errorElement) {
                errorElement.textContent = '';
            }
        });
    });

    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Clear previous errors
        contactForm.querySelectorAll('.error-message').forEach(el => {
            el.textContent = '';
        });

        // Validate all fields
        let isValid = true;
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        for (const [field, validator] of Object.entries(validators)) {
            const value = field === 'suglasnost'
                ? document.getElementById(field).checked
                : data[field] || '';

            if (!validator.validate(value)) {
                const errorElement = document.getElementById(`error-${field}`);
                if (errorElement) {
                    errorElement.textContent = validator.message;
                }
                isValid = false;
            }
        }

        if (!isValid) return;

        // Prepare data for submission
        const submitData = {
            ime: data.ime,
            email: data.email,
            telefon: data.telefon || '',
            usluga: data.usluga || '',
            poruka: data.poruka,
            timestamp: new Date().toISOString()
        };

        // Simulate form submission (in production, send to server)
        try {
            // Here you would normally send data to your backend
            console.log('Form data submitted:', submitData);

            // Show success message
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Optional: Hide success message and show form again after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
                contactForm.style.display = 'block';
            }, 5000);

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Došlo je do greške pri slanju poruke. Molimo pokušajte ponovno.');
        }
    });

    console.log('Contact form initialized');
});
