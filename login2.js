var form = document.getElementById("myFormLogin");
var inputs = document.querySelectorAll(".inputValid");
var spans = [
    document.getElementById("errorUserNameLogin"),
    document.getElementById("errorPasswordLogin")
];

function showError(input, span, message) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    span.textContent = message;
    span.style.display = "block";
    input.style.border = "1px solid red";  
}

function hideError(input, span) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    span.style.display = "none";
    input.style.border = "1px solid green";  
}


inputs.forEach((input, index) => {
    input.addEventListener("focus", function () {
        this.style.border = "1px solid blue";
        spans[index].style.display = "none"; 
    });

    input.addEventListener("blur", function () {
        let value = this.value.trim();
        if (this.name === "userNameLogin" && !validateEmail(value)) {
            this.style.border = "1px solid red";  // Red border while typing if email is invalid
        } else if (this.name === "passwordLogin" && !validatePassword(value)) {
            this.style.border = "1px solid red";  // Red border while typing if password is invalid
        } else {
            this.style.border = "1px solid #ccc";  // Default border when not in error
        }
    });

    input.addEventListener("input", function () {
        let value = this.value.trim();
        if (this.name === "userNameLogin" && !validateEmail(value)) {
            this.style.border = "1px solid red";  // Red border while typing if email is invalid
        } else if (this.name === "passwordLogin" && !validatePassword(value)) {
            this.style.border = "1px solid red";  // Red border while typing if password is invalid
        } else {
            this.style.border = "1px solid green";  // Green border while typing if valid
        }
    });
});

form.addEventListener("submit", function (event) {
    let formValid = true;

    // Check inputs when submitting the form
    inputs.forEach((input, index) => {
        let value = input.value.trim();
        if (value === "") {
            showError(input, spans[index], "This field is required");
            formValid = false;
        } else {
            if (input.name === "userNameLogin" && !validateEmail(value)) {
                showError(input, spans[0], "Please enter a valid email address");
                formValid = false;
            } else if (input.name === "passwordLogin" && !validatePassword(value)) {
                showError(input, spans[1], "Password must be at least 8 characters, including a number and a special character");
                formValid = false;
            } else {
                hideError(input, spans[index]);
            }
        }
    });

    // Prevent form submission( errors)
    if (!formValid) {
        event.preventDefault(); 
    }
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("mouseover", function() {
    submitBtn.style.backgroundColor = "blue";
    submitBtn.style.color = "white";
});

submitBtn.addEventListener("mouseout", function() {
    submitBtn.style.backgroundColor = "";
    submitBtn.style.color = "";
});

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
}
