const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");
const Admin = require("./../models/adminModel");
const Dean = require("./../models/deanModel");
const DVC = require("../models/dvcModel");
const Exam = require("./../models/specialModel");

exports.adminComments = catchAsync(async (req, res, next) => {
  await Exam.findOneAndUpdate(
    { matter: "Special Exam Request" },

    { $set: { matter: req.body.matter } }
  );

  res.status(201).json({
    status: "success",
    data: {},
  });
});

exports.deanComments = catchAsync(async (req, res, next) => {
  await Exam.findOneAndUpdate(
    { status: "pending" },
    { $set: { status: req.body.status } }
  );
  res.status(201).json({
    status: "success",
    data: {},
  });
});

exports.dvcComments = catchAsync(async (req, res, next) => {
  await Exam.findOneAndUpdate(
    { comments: "Approved" },
    { $set: { comments: req.body.comments } }
  );
  res.status(201).json({
    status: "success",
    data: {},
  });
});
