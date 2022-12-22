import "@babel/polyfill";
import { login, logout } from "./login";
import { signup } from "./signup";
import { addRow, myFunction, special } from "./special";
import { updateSettings } from "./updateSettings";
import { approve } from "./approve";
import { leave } from "./leave";
import { admin, dean, dvc } from "./zote";
// const special1 = require("special1");

//DOM ELEMENTS
const loginForm = document.querySelector(".login-form");
const staffLoginForm = document.querySelector(".staffLogin-form");
const logOutBtn = document.querySelector(".nav__el--logout");
const userDataForm = document.querySelector(".form-user-data");
const userPasswordForm = document.querySelector(".form-user-password");
const signupForm = document.querySelector(".form--signup");
const submit = document.querySelector(".btn--green");
const specialForm = document.querySelector(".form--special");
const leaveForm = document.querySelector(".form--leave");
const approveBtn = document.querySelector(".button4");
const loginStudent = document.querySelector(".button1");
const loginStaff = document.querySelector(".button2");
const adminForm = document.querySelector(".form--admin");
const deanForm = document.querySelector(".form--dean");
const dvcForm = document.querySelector(".form--dvc");
const addRowBtn = document.getElementById("addRowBtn");
const table = document.getElementById("myTable");

// //DELEGATION
if (loginForm)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const regNo = document.getElementById("regNo").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (loginStudent)
  loginStudent.addEventListener("submit", (e) => {
    e.preventDefault();
    // const regNo = document.getElementById("regNo").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

if (loginStaff)
  loginStaff.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

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
    const name = document.getElementById("name").value;
    const regNo = document.getElementById("regNo").value;
    const session = document.getElementById("session").value;
    const sponsorship = document.getElementById("sponsorship").value;
    const phone = document.getElementById("phone").value;
    const grounds = document.getElementById("grounds").value;
    const yearSem = document.getElementById("yearSem").value;
    const monthYear = document.getElementById("monthYear").value;
    const unitCode = document.getElementById("unitCode").value;
    const unitName = document.getElementById("unitName").value;
    const catsAssgnDone = document.getElementById("catsAssgnDone").value;
    const inputs = table.querySelectorAll("input");
    const data = {};
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    special(
      name,
      regNo,
      session,
      sponsorship,
      phone,
      grounds,
      yearSem,
      monthYear,
      unitCode,
      unitName,
      catsAssgnDone,
      inputs,
      data
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

if (leaveForm) {
  leaveForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const regNo = document.getElementById("regNo").value;
    const session = document.getElementById("session").value;
    const sponsorship = document.getElementById("sponsorship").value;
    const phone = document.getElementById("phone").value;
    const leaveDuration = document.getElementById("leaveDuration").value;
    const leavePeriod = document.getElementById("leavePeriod").value;
    const resumption = document.getElementById("resumption").value;
    const catsDone = document.getElementById("catsDone").value;
    const assignDone = document.getElementById("assignDone").value;
    leave(
      name,
      regNo,
      session,
      sponsorship,
      phone,
      leaveDuration,
      leavePeriod,
      resumption,
      catsDone,
      assignDone
    );
  });
}
// if (approveBtn) approveBtn.addEventListener("click", approve);

if (addRowBtn) {
  addRowBtn.addEventListener("click", addRow);
}

// document.getElementById("addRowBtn").onclick = addRow;

// if (addRowBtn) addRowBtn.addEventListener("click", addRow);

if (adminForm) {
  adminForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const matter = document.getElementById("matter").value;
    admin(matter);
  });
}

if (deanForm) {
  deanForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const status = document.getElementById("status").value;
    dean(status);
  });
}

if (dvcForm) {
  dvcForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const comments = document.getElementById("comments").value;
    dvc(comments);
  });
}
