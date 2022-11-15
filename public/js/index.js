import "@babel/polyfill";
import { login, logout } from "./login";
import { signup } from "./signup";
import { special } from "./special";
import { updateSettings } from "./updateSettings";

//DOM ELEMENTS
const loginForm = document.querySelector(".login-form");
const staffLoginForm = document.querySelector(".staffLogin-form");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");
const signupForm = document.querySelector(".form--signup");
const submit = document.querySelector(".btn--green");
const specialForm = document.querySelector(".form--special");

// //DELEGATION
if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const regNo = document.getElementById("regNo").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

// if (staffLoginForm)
//   loginForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;
//     login(email, password);
//   });

if (logOutBtn) logOutBtn.addEventListener("click", logout);

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const regNo = document.getElementById("regNo").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("password-confirm").value;
    signup(name, email, password, confirmPassword);
  });
}

if (specialForm) {
  specialForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const regNo = document.getElementById("regNo").value;
    const department = document.getElementById("department").value;
    const programme = document.getElementById("programme").value;
    const year = document.getElementById("year").value;
    const grounds = document.getElementById("grounds").value;
    const yearSemExamTime = document.getElementById("yearSemExamTime").value;
    const monthYearOfExam = document.getElementById("monthYearOfExam").value;
    const unitCode = document.getElementById("unitCode").value;
    const unitName = document.getElementById("unitName").value;
    const catsAssgnDone = document.getElementById("catsAssgnDone").value;
    special(
      regNo,
      department,
      programme,
      year,
      grounds,
      yearSemExamTime,
      monthYearOfExam,
      unitCode,
      unitName,
      catsAssgnDone
    );
  });
}

if (userDataForm)
  userDataForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", document.getElementById("name").value);
    form.append("email", document.getElementById("email").value);
    form.append("photo", document.getElementById("photo").files[0]);
    console.log(form);

    updateSettings(form, "data");
  });

if (userPasswordForm)
  userPasswordForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    document.querySelector(".btn--save-password").textContent = "Updating...";

    const passwordCurrent = document.getElementById("password-current").value;
    const password = document.getElementById("password").value;
    const passwordConfirm = document.getElementById("password-confirm").value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      "password"
    );

    document.querySelector(".btn--save-password").textContent = "Save password";
    document.getElementById("password-current").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password-confirm").value = "";
  });
