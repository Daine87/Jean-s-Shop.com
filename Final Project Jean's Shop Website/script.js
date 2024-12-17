// Global variable to hold the selected image
let selectedImage = null;

// Function to display clicked image in the image displayer
function showImage(imageSrc) {
    selectedImage = imageSrc; // Set the global variable to the clicked image
    const imageDisplayer = document.getElementById('imageDisplayer');
    imageDisplayer.innerHTML = `<img src="${imageSrc}" alt="Selected Item">`;

    // Scroll to the Contact section
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Function to validate form and check if an image and details are provided
function validateForm() {
    const details = document.getElementById('details').value;
    if (!selectedImage) {
        alert('Please select an image first.');
        return false;
    }
    if (details.trim() === '') {
        alert('Please provide details for the item.');
        return false;
    }
    // If both conditions are met, navigate to page3.html
    window.location.href = 'page3.html';
    return false; // Prevent form submission for demonstration purposes
    function showImage(imageSrc) {
        // Redirect to the appointment details page with the image source as a query parameter
        window.location.href = `appointment-details.html?image=${encodeURIComponent(imageSrc)}`;
    }    
}

