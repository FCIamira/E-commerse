
// document.getElementById("myFormRegister").addEventListener("submit", function(event) {
//     let formValid = true;


//     const inputs = document.querySelectorAll(".inputValid");
//     const spans = document.querySelectorAll(".error");

//     inputs.forEach((input, index) => {
//         let value = input.value.trim();

//         if (value === "") {
//             showError(input, spans[index], `${input.name} is required`);
//             formValid = false;
//         } else {
//             if (input.name === "firstName" || input.name === "lastName") {
//                 if (value.length < 2) {
//                     showError(input, spans[index], `${input.name} must be at least 2 characters`);
//                     formValid = false;
//                 } else {
//                     hideError(input, spans[index]);
//                 }
//             } else if (input.name === "userName" && !validateEmail(value)) {
//                 showError(input, spans[2], "Please enter a valid email address");
//                 formValid = false;
//             } else if (input.name === "password" && !validatePassword(value)) {
//                 showError(input, spans[3], "Password must be at least 8 characters, including a number and a special character");
//                 formValid = false;
//             } else if (input.name === "confirmPassword" && value !== document.getElementById("password").value) {
//                 showError(input, spans[4], "Passwords do not match");
//                 formValid = false;
//             } else {
//                 hideError(input, spans[index]);
//             }
//         }
//     });

//     if (!formValid) {
//         event.preventDefault(); 
//         console.log("Form is not valid.");
//     }
// });

// function showError(input, span, message) {
//     input.classList.remove("valid");
//     input.classList.add("invalid");
//     span.textContent = message;
//     span.style.display = "block"; 
// }

// function hideError(input, span) {
//     input.classList.remove("invalid");
//     input.classList.add("valid");
//     span.style.display = "none"; 
// }

// function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     return re.test(String(email).toLowerCase());
// }

// function validatePassword(password) {
//     const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
//     return re.test(password);
// }

// document.querySelectorAll(".inputValid").forEach(input => {
//     input.addEventListener("input", function() {
//         let value = input.value.trim();
//         let span = input.nextElementSibling;
//         if (value === "") {
//             hideError(input, span);
//         } else if (input.name === "firstName" || input.name === "lastName") {
//             if (value.length >= 2) {
//                 hideError(input, span);
//             } else {
//                 showError(input, span, `${input.name} must be at least 2 characters`);
//             }
//         } else if (input.name === "userName" && validateEmail(value)) {
//             hideError(input, span);
//         } else if (input.name === "password" && validatePassword(value)) {
//             hideError(input, span);
//         } else if (input.name === "confirmPassword" && value === document.getElementById("password").value) {
//             hideError(input, span);
//         } else {
//             hideError(input, span);
//         }
//     });
// });

let usersArray = []; 

document.getElementById("myFormRegister").addEventListener("submit", function(event) {
    event.preventDefault();  

    let formValid = true;

    let user = {
        id: usersArray.length + 1 
    };

    const inputs = document.querySelectorAll(".inputValid");
    const spans = document.querySelectorAll(".error");

    inputs.forEach((input, index) => {
        let value = input.value.trim();

        if (value === "") {
            showError(input, spans[index], `${input.name} is required`);
            formValid = false;
        } else {
            if (input.name === "firstName" || input.name === "lastName") {
                if (value.length < 2) {
                    showError(input, spans[index], `${input.name} must be at least 2 characters`);
                    formValid = false;
                } else {
                    hideError(input, spans[index]);
                    user[input.name] = value; 
                }
            } else if (input.name === "userName" && !validateEmail(value)) {
                showError(input, spans[2], "Please enter a valid email address");
                formValid = false;
            } else if (input.name === "password" && !validatePassword(value)) {
                showError(input, spans[3], "Password must be at least 8 characters, including a number and a special character");
                formValid = false;
            } else if (input.name === "confirmPassword" && value !== document.getElementById("password").value) {
                showError(input, spans[4], "Passwords do not match");
                formValid = false;
            } else {
                hideError(input, spans[index]);
                user[input.name] = value; 
            }
        }
    });

    if (formValid) {
        usersArray.push(user); 
        // localStorage.getItem(,user)
                console.log("Users array:", usersArray);
         clearForm();
    } else {
        console.log("Form is not valid.");
    }

   
});

function showError(input, span, message) {
    input.classList.remove("valid");
    input.classList.add("invalid");
    span.textContent = message;
    span.style.display = "block"; 
}

function hideError(input, span) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    span.style.display = "none"; 
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return re.test(password);
}


document.querySelectorAll(".inputValid").forEach(input => {
    input.addEventListener("input", function() {
        let value = input.value.trim();
        let span = input.nextElementSibling;
        if (value === "") {
            hideError(input, span);
        } else if (input.name === "firstName" || input.name === "lastName") {
            if (value.length >= 2) {
                hideError(input, span);
            } else {
                showError(input, span, `${input.name} must be at least 2 characters`);
            }
        } else if (input.name === "userName" && validateEmail(value)) {
            hideError(input, span);
        } else if (input.name === "password" && validatePassword(value)) {
            hideError(input, span);
        } else if (input.name === "confirmPassword" && value === document.getElementById("password").value) {
            hideError(input, span);
        } else {
            hideError(input, span);
        }
    });
});

function clearForm() {
    // الحصول على جميع المدخلات في النموذج
    const inputs = document.querySelectorAll(".inputValid");

    // إعادة تعيين القيم لجميع المدخلات إلى فارغ
    inputs.forEach(input => {
        input.value = "";  // مسح القيمة
        input.classList.remove("valid", "invalid"); // إعادة تعيين التنسيق
    });

    // إعادة تعيين الرسائل الخاصة بالأخطاء
    const spans = document.querySelectorAll(".error");
    spans.forEach(span => {
        span.style.display = "none"; // إخفاء جميع الرسائل
    });
}