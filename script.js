const createBtn = document.querySelector(".create-btn");
const form = document.querySelector("form");
const warn = document.getElementById("warn");
let email = document.getElementById("email");

//password validation
let passwordElement = document.getElementById("pword");
passwordElement.addEventListener("input", (event) => {
  event.preventDefault();

  passwordElement.style.borderColor = "red";
  if (!passwordElement.value.match(/[A-Z]/g)) {
    warn.textContent = "Password must contain one Upper case!";
  } else if (!passwordElement.value.match(/[0-9]/g)) {
    warn.textContent = "Password must contain one number!";
  } else if (!(passwordElement.value.length >= 8)) {
    warn.textContent = "Password must be less than 8 characters!";
  } else {
    passwordElement.style.borderColor = "#d1d0d0db";
    warn.textContent = "";
  }
});

//confirmPassword validation
let conPasswordElement = document.getElementById("pword2");
conPasswordElement.addEventListener("input", (event) => {
  event.preventDefault();

  if (passwordElement.value === conPasswordElement.value) {
    conPasswordElement.style.borderColor = "#d1d0d0db";
    warn.textContent = "";
  } else {
    warn.textContent = "Password does not match!";
    conPasswordElement.style.borderColor = "red";
  }
});

//emailPhone validation
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
    } else {
      warn.textContent = "";
    }
  } else if (/[0-9]/.test(emailPhoneValue)) {
    // phone validation
    if (emailPhoneValue.length < 11) {
      warn.textContent = "Phone number cannot be less than 11";
    } else if (emailPhoneValue.length > 11) {
      warn.textContent = "Phone number cannot be greater than 11";
    } else {
      warn.textContent = "";
    }
  }
});
