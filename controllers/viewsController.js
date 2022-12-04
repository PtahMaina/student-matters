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

exports.getStudentLoginForm = (req, res) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};

exports.getStaffLoginForm = (req, res) => {
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

exports.getLeave = (req, res) => {
  res.status(200).render("leave", {
    title: "Leave Request",
  });
};

exports.getAccount = (req, res) => {
  res.status(200).render("account", {
    title: "Your account",
  });
};

exports.getStaff = (req, res) => {
  res.status(200).render("staff", {
    title: "Your account",
  });
};

exports.getMyBookings = catchAsync(async (req, res, next) => {
  // 1) Find all bookings
  const bookings = await Booking.find({ _id: req.params.id });

  // 2) Find specials with the returned IDs
  const examIDs = bookings.map((el) => el.exam);
  const specials = await Exam.find({ _id: { $in: examIDs } });

  res.status(200).render("specialList", {
    title: "My Specials",
    specials,
  });
});

// const getMyBookings = catchAsync(async (req, res, next) => {
//   Topic.find({ _id: req.params._id })
//     .then((data) => {
//       var message = "";
//       if (data === undefined || data.length == 0) message = "No Topic found!";
//       else message = "Topics successfully retrieved";
//       res.status(200).send(data);
//     })
//     });

// exports.bookings = catchAsync(async (req, res, next) => {
//   const allBookings = await Booking.find();
//   // res.status(200).json({ status: "success", results: data.length, data });
//   res.status(200).JSON.stringify({
//     status: "success",
//     data: {
//       allBookings,
//     },
//   });
// });

exports.getUnit = catchAsync(async (req, res, next) => {
  // 1) Get the data, for the requested tour (including reviews and guides)
  const unit = await Exam.findOne({ slug: req.params.slug }).populate({
    path: "regNo",
    path: "status",
    fields: "status",
  });

  if (!unit) {
    return next(new AppError("There is no unit with that name.", 404));
  }

  // 2) Build template
  // 3) Render template using data from 1)
  res.status(200).render("specialList", {
    title: `${unitName.name} Exam`,
    tour,
  });
});
