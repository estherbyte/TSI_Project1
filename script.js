const createBtn = document.querySelector(".create-btn");
const form = document.querySelector("form");
const alert = document.getElementById("alert");
const email = document.getElementById("email");


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
    alert.textContent = "Password does not match!"
    alert.style.color = "red"
    conPasswordElement.style.borderColor = "red";
    return console.log("passwords do not match!");
  }

 
});


