// Regular Expressions for validation
const patterns = {
    fullName: /^[a-zA-Z\s]+$/, // Only alphabets and spaces
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Valid email address
    phone: /^\d{10,15}$/, // Only digits, length 10-15
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, // Minimum 8 characters with lowercase, uppercase, and digit
};

// Form elements
const form = document.getElementById("validationForm");
const inputs = document.querySelectorAll("input");
const successMessage = document.getElementById("successMessage");

// Validate individual fields
function validateField(input, pattern) {
    const errorField = document.getElementById(`${input.id}Error`);
    if (!pattern.test(input.value)) {
        errorField.innerText = `Invalid ${input.placeholder.toLowerCase()}`;
        input.style.border = "2px solid red";
        return false;
    } else {
        errorField.innerText = "";
        input.style.border = "2px solid green";
        return true;
    }
}

// Real-time validation
inputs.forEach(input => {
    input.addEventListener("input", () => {
        validateField(input, patterns[input.id]);
    });
});

// On form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input, patterns[input.id])) {
            isValid = false;
        }
    });

    if (isValid) {
        successMessage.innerText = "Form submitted successfully!";
    } else {
        successMessage.innerText = "Please fix errors before submitting.";
    }
});
