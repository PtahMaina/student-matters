import "@babel/polyfill";
import { login, logout } from "./login";
import { signup } from "./signup";
import { special } from "./special";

//DOM ELEMENTS
const loginForm = document.querySelector(".login-form");
const logOutBtn = document.querySelector(".nav__el--logout");
// const userDataForm = document.querySelector(".form-user-data");
// const userPasswordForm = document.querySelector(".form-user-password");
const signupForm = document.querySelector(".form--signup");
const submit = document.querySelector(".btn--green");
const specialForm = document.querySelector(".special");

// //DELEGATION
if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener("click", logout);

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password-confirm").value;
    signup(name, email, password, confirmPassword);
  });
}

if (submit) {
  submit.addEventListener("click");
}

if (specialForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password-confirm").value;
    signup(name, email, password, confirmPassword);
  });
}
