const User = require("../models/userModel");
const AppError = require("../utils/catchAsync");
const Booking = require("../models/statusModel");
const Exam = require("../models/specialModel");

exports.getOverview = catchAsync(async (req, res, next) => {
  res.status(200).render("overview", { title: "Home" });
  next();
});

exports.getLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getStaffLoginForm = (req, res) => {
  res.status(200).render("staffLogin", {
    title: "Log into your Staff account",
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

exports.getMyTours = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ user: req.user.id });

  // 2) Find tours with the returned IDs
  const examIDs = bookings.map((el) => el.special);
  const exams = await Exam.find({ _id: { $in: examIDs } });

  res.status(200).render("overview", {
    title: "My Specials",
    specials,
  });
});
