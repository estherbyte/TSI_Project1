const createBtn = document.querySelector(".create-btn");
const form = document.querySelector("form");
const warn = document.getElementById("warn");
let email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let passwordElement = document.getElementById("pword");
  let password = passwordElement.value;
  let conPasswordElement = document.getElementById("pword2");
  let conPassword = conPasswordElement.value;
  if (password === conPassword) {
    passwordElement.style.borderColor = "white";
    return console.log("password match correctly");
  } else {
    warn.textContent = "Password does not match!";
    warn.style.color = "red";
    conPasswordElement.style.borderColor = "red";
    return console.log("passwords do not match!");
  }
});

let emailPhone = document.getElementById("emailPhone");
emailPhone.addEventListener("input", (event) => {
  event.preventDefault();
  let emailPhoneValue = emailPhone.value;
  if (/[a-zA-Z]/.test(emailPhoneValue)) {
    // do email validation
    if (
      !emailPhoneValue.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      warn.textContent = "Invalid email address";
      warn.style.color = "red";
    } else {
      warn.textContent = "";
    }
  } else if (/[0-9]/.test(emailPhoneValue)) {
    // phone validation
    warn.style.color = "red";
    if (emailPhoneValue.length < 11) {
      warn.textContent = "Phone number cannot be less than 11";
    } else if (emailPhoneValue.length > 11) {
      warn.textContent = "Phone number cannot be greater than 11";
    } else {
      warn.textContent = "";
    }
  }
});
