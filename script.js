
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const errorMessages = document.querySelectorAll(".error-message");

   
    const nameRegex = /^[A-Za-z\s]+$/; 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const phoneRegex = /^[0-9]{10,15}$/; 
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 

    
    function showError(input, message) {
        const errorElement = input.nextElementSibling; 
        errorElement.textContent = message; 
        input.classList.add("error"); 
    }

    
    function clearError(input) {
        const errorElement = input.nextElementSibling; 
        errorElement.textContent = ""; 
        input.classList.remove("error"); 
    }

    
    function validateInput(input, regex, message) {
        if (!regex.test(input.value.trim())) { 
            showError(input, message); 
            return false;
        } else {
            clearError(input); 
            return true;
        }
    }

   
    function validatePasswordMatch() {
        if (password.value !== confirmPassword.value) { 
            showError(confirmPassword, "Passwords do not match");
            return false;
        } else {
            clearError(confirmPassword); 
            return true;
        }
    }

   
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

    
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        
        let isFullNameValid = validateInput(fullName, nameRegex, "Only letters allowed");
        let isEmailValid = validateInput(email, emailRegex, "Enter a valid email");
        let isPhoneValid = validateInput(phone, phoneRegex, "Enter a valid phone number (10-15 digits)");
        let isPasswordValid = validateInput(password, passwordRegex, "Password must be 6+ characters, include letters & numbers");
        let isConfirmPasswordValid = validatePasswordMatch();

        
        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid && isConfirmPasswordValid) {
            alert("✅ Details saved successfully!");
            form.reset(); 
            errorMessages.forEach(function (error) {
                error.textContent = ""; 
            });
        }
    });
});
