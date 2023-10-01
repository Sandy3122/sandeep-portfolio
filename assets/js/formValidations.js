document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = document.getElementById('form_name').value.trim();
      const email = document.getElementById('form_email').value.trim();
      const message = document.getElementById('form_message').value.trim();
  
      if (name == '' || email == '' || message == '') {
        // Handle validation errors
        Swal.fire({
          icon: 'error',
          title: 'Validation Error',
          text: 'Please fill in all required fields.',
          confirmButtonText: 'OK',
        });
        return;
      }
  
      // Create an object to hold the form data
      const formData = {
        name: name,
        email: email,
        message: message,
      };
  
      // Show a loading dialog
      const loadingDialog = Swal.fire({
        title: 'Sending Email',
        html: 'Please wait...',
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
  
      fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Close the loading dialog
          loadingDialog.close();
  
          if (data.message === 'Email sent successfully') {
            // Display a success SweetAlert
            Swal.fire({
              icon: 'success',
              title: 'Message Sent',
              text: 'Thank you for getting in touch! Your message has been successfully sent.',
              confirmButtonText: 'OK',
            }).then((result) => {
              // Reset the form after the user clicks "OK"
              if (result.isConfirmed) {
                contactForm.reset();
              }
            });
          } else {
            // Display an error SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Sorry, there was an issue sending your message. Please try again later.',
              confirmButtonText: 'OK',
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          // Display a network error SweetAlert
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Sorry, there was a network error. Please check your internet connection and try again.',
            confirmButtonText: 'OK',
          });
        });
    });
  });
  