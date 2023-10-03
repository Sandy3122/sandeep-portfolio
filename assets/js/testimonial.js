// Function to add a testimonial to the carousel
function addTestimonialToCarousel(testimonial, isFirst) {
    const testimonialContainer = document.querySelector("#testimonial-container .carousel-inner");

    const testimonialItem = document.createElement("div");
    testimonialItem.classList.add("carousel-item");
    if (isFirst) {
        testimonialItem.classList.add("active");
    }

    testimonialItem.innerHTML = `
      <!-- Testimonial Content -->
      <div class="testimonial-content">
        <div class="testimonial-text">
          <p>"${testimonial.text}"</p>
        </div>
      </div>
      <!-- /Testimonial Content -->
      <!-- Testimonial Author -->
      <div class="testimonial-credits">
        <!-- Picture -->
        <div class="testimonial-picture">
          <img src="${testimonial.imageUrl}" alt="Testimonial Author">
        </div>
        <!-- /Picture -->
        <!-- Testimonial author information -->
        <div class="testimonial-author-info">
          <p class="testimonial-author">${testimonial.author}</p>
          <p class="testimonial-firm">${testimonial.firm}</p>
        </div>
      </div>
      <!-- /Testimonial author information -->
    `;

    testimonialContainer.appendChild(testimonialItem);
}

// Function to fetch and display testimonials
async function fetchAndDisplayTestimonials() {
    try {
        const response = await fetch('/get-testimonials');

        if (!response.ok) {
            console.error('Failed to fetch testimonials:', response.status, response.statusText);
            console.log('Failed to fetch testimonials. Please try again later.')
            return;
        }

        const testimonials = await response.json();

        // Clear the existing testimonials
        const testimonialContainer = document.querySelector("#testimonial-container .carousel-inner");
        testimonialContainer.innerHTML = "";

        // Add testimonials to the carousel
        testimonials.forEach((testimonial, index) => {
            addTestimonialToCarousel(testimonial, index === 0);
        });
    } catch (error) {
        console.error(error);
        console.log('An error occurred while fetching testimonials. Please try again later.')
    }
}

fetchAndDisplayTestimonials();

// Call the function to fetch and display testimonials when the page loads
//   window.addEventListener('load', fetchAndDisplayTestimonials);

// Function to handle file upload
async function handleFileUpload(file) {
    try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('/upload-image', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const result = await response.json();
            // Display a success message
            Swal.fire('Success', 'Image uploaded successfully', 'success');
            return result;
        } else {
            const errorMessage = await response.text();
            console.error('Failed to upload image:', response.status, response.statusText);
            console.error('Error details:', errorMessage);
            // Display an error message
            Swal.fire('Error', 'Image upload failed', 'error');
            return null;
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        // Display an error message
        Swal.fire('Error', 'Image upload failed', 'error');
        return null;
    }
}



// Handle form submission
const testimonialForm = document.getElementById("testimonial-form");

// Handle form submission
testimonialForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const testimonialText = document.getElementById("testimonial-text").value;
    const testimonialAuthor = document.getElementById("testimonial-author").value;
    const testimonialFirm = document.getElementById("testimonial-firm").value;
    const testimonialImageInput = document.getElementById("testimonial-image-input");

    const selectedFile = testimonialImageInput.files[0];

    if (!testimonialText || !testimonialAuthor || !testimonialFirm) {
        Swal.fire("Submission Error", "Please fill in all the required fields.", "error");
        return;
    }
    else if (!selectedFile) {
        Swal.fire("Image Upload Error", "Please upload the image.", "error");
        return;
    }

    try {
        const { imageUrl } = await handleFileUpload(selectedFile);

        if (!imageUrl) {
            // Handle error
            Swal.fire("Error", "Image upload failed.", "error");
            return;
        }

        const newTestimonial = {
            text: testimonialText,
            author: testimonialAuthor,
            firm: testimonialFirm,
            imageUrl: imageUrl,
        };

        const response = await fetch('/submit-testimonial', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTestimonial),
        });

        if (response.ok) {
            Swal.fire("Submission Success", "Testimonial submitted successfully!", "success");
            testimonialForm.reset();
            fetchAndDisplayTestimonials();
        } else {
            console.error('Failed to submit testimonial:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error submitting testimonial:', error);
    }
});



// Add an event listener to the file input element
const fileInput = document.getElementById('testimonial-image-input');
const fileInputLabel = document.getElementById('file-label');

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        // Get the selected file name and display it in the label
        const fileName = fileInput.files[0].name;
        fileInputLabel.textContent = fileName;
    } else {
        // If no file is selected, reset the label text
        fileInputLabel.textContent = 'Choose File';
    }
});



// Word Count in Testinomial
// Function to update the word count and apply color based on conditions
function updateWordCount() {
    const textarea = document.getElementById("testimonial-text");
    const wordCount = textarea.value.split(/\s+/).filter(word => word !== "").length;
    const wordCountElement = document.getElementById("word-count");
    wordCountElement.style.fontSize = "12px";
    wordCountElement.style.color = 'green';

    // Update the word count text
    wordCountElement.textContent = `${wordCount} Words`;

    // Apply color based on word count
    if (wordCount < 20) {
        wordCountElement.style.color = 'red';
    } else if (wordCount >= 20 && wordCount <= 50) {
        wordCountElement.style.color = 'green';
    } else {
        wordCountElement.style.color = 'red';
    }
}

// Add event listeners to the textarea for input and focusout events
const textarea = document.getElementById("testimonial-text");
textarea.addEventListener("input", updateWordCount);
textarea.addEventListener("focusout", function () {
    const wordCount = textarea.value.split(/\s+/).filter(word => word !== "").length;
    const wordCountElement = document.getElementById("word-count");


    if (wordCount < 20) {
        wordCountElement.style.color = "red",
        wordCountElement.innerHTML = "Testimonial should have a minimum of 20 words."
        // Swal.fire("Error", "Testimonial should have a minimum of 20 words.", "error");
    } else if (wordCount > 50) {
        wordCountElement.style.color = "red",
        wordCountElement.innerHTML = "Testimonial should not exceed 50 words."
        // Swal.fire("Error", "Testimonial should not exceed 50 words.", "error");
    }
});

// Call updateWordCount initially to show the initial word count
updateWordCount();