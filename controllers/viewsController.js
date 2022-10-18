const User = require("../models/userModel");
const AppError = require("../utils/catchAsync");

exports.getOverview = catchAsync(async (req, res, next) => {
  res.status(200).render("overview", { title: "Home" });
  next();
});

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getSignUpForm = (req, res) => {
  res.status(200).render("signup", {
    title: "Create New Account",
  });
};

exports.getActivities = (req, res) => {
  res.status(200).render("activities", {
    title: "Activities",
  });
};

exports.getSpecial = (req, res) => {
  res.status(200).render("special", {
    title: "Special Examinations",
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your account",
  });
};