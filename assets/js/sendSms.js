  // Handle form submission
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
  
    const name = document.getElementById('form_name').value.trim();
    const message = document.getElementById('form_message').value.trim();
  
    // Create a JSON object with form data
    const formData = {
      name: name,
      message: message,
    };
  
    try {
      const response = await fetch('/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Handle success (e.g., show a success message to the user)
        console.log('SMS sent successfully');
      } else {
        // Handle error (e.g., show an error message to the user)
        console.error('Failed to send SMS');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
    }
  });
  