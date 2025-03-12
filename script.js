document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("validationForm");
    const successContainer = document.getElementById("successContainer");
    const newFormBtn = document.getElementById("newFormBtn");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");

    function validateName() {
        const namePattern = /^[A-Za-z\s]+$/;
        if (!fullName.value.match(namePattern)) {
            nameError.textContent = "Only letters and spaces allowed.";
            return false;
        }
        nameError.textContent = "";
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.value.match(emailPattern)) {
            emailError.textContent = "Enter a valid email address.";
            return false;
        }
        emailError.textContent = "";
        return true;
    }

    function validatePhone() {
        const phonePattern = /^[0-9]{10,15}$/;
        if (!phone.value.match(phonePattern)) {
            phoneError.textContent = "Phone number must be 10-15 digits.";
            return false;
        }
        phoneError.textContent = "";
        return true;
    }

    function validatePassword() {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!password.value.match(passwordPattern)) {
            passwordError.textContent = "At least 8 chars, 1 uppercase, 1 lowercase, 1 number.";
            return false;
        }
        passwordError.textContent = "";
        return true;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (validateName() & validateEmail() & validatePhone() & validatePassword()) {
            form.style.display = "none";
            successContainer.classList.remove("hidden");
        }
    });

    newFormBtn.addEventListener("click", () => {
        form.reset();
        form.style.display = "block";
        successContainer.classList.add("hidden");
    });
});
