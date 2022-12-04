const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");
const Exam = require("./../models/specialModel");
const Leave = require("../models/leaveModel");

exports.leave = catchAsync(async (req, res, next) => {
  const newLeave = await Leave.create({
    name: req.body.name,
    regNo: req.body.regNo,
    session: req.body.session,
    sponsorship: req.body.sponsorship,
    phone: req.body.phone,
    leaveDuration: req.body.leaveDuration,
    leavePeriod: req.body.leavePeriod,
    resumption: req.body.resumption,
    catsDone: req.body.catsDone,
    assignDone: req.body.assignDone,
  });
  res.status(201).json({
    status: "success",
    data: {
      newLeave,
    },
  });
});
