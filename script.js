// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Get form and input elements
    const form = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorMessages = document.querySelectorAll(".error-message");

    // Regular expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email pattern
    const phoneRegex = /^[0-9]{10,15}$/; // Digits only, 10-15 characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, letters & numbers

    // Show an error message
    function showError(input, message) {
        const errorElement = input.nextElementSibling; // Get the next sibling element
        errorElement.textContent = message; // Set error message
        input.classList.add("error"); // Add error class for styling
    }

    // Clear an error message
    function clearError(input) {
        const errorElement = input.nextElementSibling; // Get the next sibling element
        errorElement.textContent = ""; // Clear error message
        input.classList.remove("error"); // Remove error class
    }

    // Validate input using regex
    function validateInput(input, regex, message) {
        if (!regex.test(input.value.trim())) { // If value doesn't match regex
            showError(input, message); // Show error message
            return false;
        } else {
            clearError(input); // Clear error message
            return true;
        }
    }

    // Check if password and confirm password match
    function validatePasswordMatch() {
        if (password.value !== confirmPassword.value) { // If passwords don't match
            showError(confirmPassword, "Passwords do not match");
            return false;
        } else {
            clearError(confirmPassword); // Clear error message
            return true;
        }
    }

    // Validate fields while typing
    fullName.addEventListener("input", function () {
        validateInput(fullName, nameRegex, "Only letters allowed");
    });
    email.addEventListener("input", function () {
        validateInput(email, emailRegex, "Enter a valid email");
    });
    phone.addEventListener("input", function () {
        validateInput(phone, phoneRegex, "Enter a valid phone number (10-15 digits)");
    });
    password.addEventListener("input", function () {
        validateInput(password, passwordRegex, "Password must be 6+ characters, include letters & numbers");
    });
    confirmPassword.addEventListener("input", validatePasswordMatch);

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        // Validate all inputs
        let isFullNameValid = validateInput(fullName, nameRegex, "Only letters allowed");
        let isEmailValid = validateInput(email, emailRegex, "Enter a valid email");
        let isPhoneValid = validateInput(phone, phoneRegex, "Enter a valid phone number (10-15 digits)");
        let isPasswordValid = validateInput(password, passwordRegex, "Password must be 6+ characters, include letters & numbers");
        let isConfirmPasswordValid = validatePasswordMatch();

        // Check if all fields are valid
        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            alert("✅ Details saved successfully!");
            form.reset(); // Clear form fields after submission
            errorMessages.forEach(function (error) {
                error.textContent = ""; // Clear all error messages
            });
        }
    });
});
