document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageTextarea = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', function(event) {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';

        let formIsValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            formIsValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Please enter your email.';
            formIsValid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address.';
            formIsValid = false;
        }

        if (messageTextarea.value.trim() === '') {
            messageError.textContent = 'Please enter your message.';
            formIsValid = false;
        } else if (messageTextarea.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters long.';
            formIsValid = false;
        }

        if (!formIsValid) {
            event.preventDefault();
        }
    });
});
