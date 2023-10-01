document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.querySelector('.messages');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        fetch('/send-email', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === 'Email sent successfully') {
                    formMessages.innerHTML = '<div class="alert alert-success">Your message has been sent. Thank you!</div>';
                    contactForm.reset();
                } else {
                    formMessages.innerHTML = '<div class="alert alert-danger">Sorry, there was an error. Please try again later.</div>';
                }
            })
            .catch(error => {
                console.error('Error:', error);
                formMessages.innerHTML = '<div class="alert alert-danger">Sorry, there was an error. Please try again later.</div>';
            });
    });
});
