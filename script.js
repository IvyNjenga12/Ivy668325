document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorMessages = document.querySelectorAll(".error-message");

    // Function to show error message
    function showError(input, message) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = message;
        input.classList.add("error");
    }

    // Function to remove error message
    function clearError(input) {
        const errorElement = input.nextElementSibling;
        errorElement.textContent = "";
        input.classList.remove("error");
    }

    // Regular Expressions for validation
    const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email pattern
    const phoneRegex = /^[0-9]{10,15}$/; // Only digits, 10-15 characters
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, with letters & numbers

    // Function to validate each input
    function validateInput(input, regex, message) {
        if (!regex.test(input.value.trim())) {
            showError(input, message);
            return false;
        } else {
            clearError(input);
            return true;
        }
    }

    // Function to validate password match
    function validatePasswordMatch() {
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Passwords do not match");
            return false;
        } else {
            clearError(confirmPassword);
            return true;
        }
    }

    // Real-time validation while typing
    fullName.addEventListener("input", () => validateInput(fullName, nameRegex, "Only letters allowed"));
    email.addEventListener("input", () => validateInput(email, emailRegex, "Enter a valid email"));
    phone.addEventListener("input", () => validateInput(phone, phoneRegex, "Enter a valid phone number (10-15 digits)"));
    password.addEventListener("input", () => validateInput(password, passwordRegex, "Password must be 6+ characters, include letters & numbers"));
    confirmPassword.addEventListener("input", validatePasswordMatch);

    // Form submission validation
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting if invalid

        let isFullNameValid = validateInput(fullName, nameRegex, "Only letters allowed");
        let isEmailValid = validateInput(email, emailRegex, "Enter a valid email");
        let isPhoneValid = validateInput(phone, phoneRegex, "Enter a valid phone number (10-15 digits)");
        let isPasswordValid = validateInput(password, passwordRegex, "Password must be 6+ characters, include letters & numbers");
        let isConfirmPasswordValid = validatePasswordMatch();

        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            alert("✅ Details saved successfully!");
            form.reset(); // Clear form after successful submission
            errorMessages.forEach(error => (error.textContent = "")); // Remove all error messages
        }
    });
});
