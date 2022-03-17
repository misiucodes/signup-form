const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorMsg = document.getElementsByClassName("error-message");
const failureIcon = document.getElementsByClassName("invalid-icon");
const form = document.querySelector("form");

let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (email.value === "") {
        errorMsg[2].innerHTML = "Email cannot be empty";
        failureIcon[2].style.opacity = "1";
    } else if (!email.value.match(emailFormat)) {
        e.preventDefault();
        errorMsg[2].innerHTML = "Looks like this isn't a valid email"
        email.placeholder = "email@example.com";
        failureIcon[2].style.opacity = "1";
    } 

    engine(firstName, 0, "First name cannot be empty");
    engine(lastName, 1, "Last name cannot be empty");
    engine(password, 3, "Password cannot be empty");
});

let engine = (id, serial, message) => {
    if(id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity = "1";
    } else {
        errorMsg[serial].innerHTML = "";
        failureIcon[serial].style.opacity = "0";
    }
};


