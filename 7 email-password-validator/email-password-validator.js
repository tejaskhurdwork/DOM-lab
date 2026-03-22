const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailRegex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

  let emailCheck = emailRegex.test(email.value);
  let passwordCheck = passwordRegex.test(password.value);
  let isValid = true;

  emailError.style.display = "none";
  passwordError.style.display = "none";

  if(!emailCheck) {
    emailError.textContent = "email is incorrect";
    emailError.style.display = "block";
    isValid = false;
  }

  if(!passwordCheck) {
    passwordError.textContent = "password is incorrect";
    passwordError.style.display = "block";
    isValid = false;
  }

  if(isValid){
    document.querySelector(".valid").textContent = "Form is submitted";
    document.querySelector(".valid").style.display = "block";
    email.value="";
    password.value="";
  }
});