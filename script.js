document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("validationForm");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const successMessage = document.getElementById("successMessage");

    function validateName() {
        const namePattern = /^[A-Za-z\s]+$/;
        if (!fullName.value.match(namePattern)) {
            nameError.textContent = "Only letters and spaces allowed.";
            fullName.classList.add("invalid");
            fullName.classList.remove("valid");
            return false;
        }
        nameError.textContent = "";
        fullName.classList.remove("invalid");
        fullName.classList.add("valid");
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.value.match(emailPattern)) {
            emailError.textContent = "Enter a valid email address.";
            email.classList.add("invalid");
            email.classList.remove("valid");
            return false;
        }
        emailError.textContent = "";
        email.classList.remove("invalid");
        email.classList.add("valid");
        return true;
    }

    function validatePhone() {
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phone.value.match(phonePattern)) {
            phoneError.textContent = "Phone number must be 10-15 digits.";
            phone.classList.add("invalid");
            phone.classList.remove("valid");
            return false;
        }
        phoneError.textContent = "";
        phone.classList.remove("invalid");
        phone.classList.add("valid");
        return true;
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password.value.match(passwordPattern)) {
            passwordError.textContent = "At least 8 chars, 1 uppercase, 1 lowercase, 1 number.";
            password.classList.add("invalid");
            password.classList.remove("valid");
            return false;
        }
        passwordError.textContent = "";
        password.classList.remove("invalid");
        password.classList.add("valid");
        return true;
    }

    // Real-time validation
    fullName.addEventListener("input", validateName);
    email.addEventListener("input", validateEmail);
    phone.addEventListener("input", validatePhone);
    password.addEventListener("input", validatePassword);

    // Form submission event
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateName() & validateEmail() & validatePhone() & validatePassword()) {
            successMessage.textContent = "✅ Form submitted successfully!";
            successMessage.style.opacity = "1";

            // Reset form after 2 seconds
            setTimeout(() => {
                successMessage.style.opacity = "0";
                form.reset();
                fullName.classList.remove("valid");
                email.classList.remove("valid");
                phone.classList.remove("valid");
                password.classList.remove("valid");
            }, 2000);
        } else {
            successMessage.textContent = "";
        }
    });
});
