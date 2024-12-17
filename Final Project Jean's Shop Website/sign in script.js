// Function to validate the form before submission
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert("Please fill in all fields.");
        return false;
    }

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Optionally, add password validation criteria (length, special characters, etc.)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If everything is fine, allow form submission
    return true;
}

// Function to toggle the password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    const toggleButton = document.getElementById('passwordToggle');
    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleButton.innerHTML = "Hide";
    } else {
        passwordField.type = "password";
        toggleButton.innerHTML = "Show";
    }
}
