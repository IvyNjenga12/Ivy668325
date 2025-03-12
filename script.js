document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");
    const resetButton = document.getElementById("resetForm");

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");

    const patterns = {
        fullName: /^[A-Za-z\s]+$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^\d{10,15}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    };

    function validateInput(input, pattern) {
        const errorMessage = input.nextElementSibling;
        if (pattern.test(input.value.trim())) {
            input.classList.remove("invalid");
            errorMessage.style.display = "none";
            return true;
        } else {
            input.classList.add("invalid");
            errorMessage.style.display = "block";
            return false;
        }
    }

    fullName.addEventListener("input", () => validateInput(fullName, patterns.fullName));
    email.addEventListener("input", () => validateInput(email, patterns.email));
    phone.addEventListener("input", () => validateInput(phone, patterns.phone));
    password.addEventListener("input", () => validateInput(password, patterns.password));

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let valid =
            validateInput(fullName, patterns.fullName) &&
            validateInput(email, patterns.email) &&
            validateInput(phone, patterns.phone) &&
            validateInput(password, patterns.password);

        if (valid) {
            form.classList.add("hidden");
            successMessage.classList.remove("hidden");
        }
    });

    resetButton.addEventListener("click", function() {
        successMessage.classList.add("hidden");
        form.classList.remove("hidden");
        form.reset();
    });
});
