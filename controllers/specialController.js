const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");
const Exam = require("./../models/specialModel");
const Booking = require("../models/statusModel");

exports.special = catchAsync(async (req, res, next) => {
  const newExam = await Exam.create({
    name: req.body.name,
    regNo: req.body.regNo,
    session: req.body.session,
    sponsorship: req.body.sponsorship,
    phone: req.body.phone,
    grounds: req.body.grounds,
    yearSem: req.body.yearSem,
    monthYear: req.body.monthYear,
    unitCode: req.body.unitCode,
    unitName: req.body.unitName,
    catsAssgnDone: req.body.catsAssgnDone,
  });
  res.status(201).json({
    status: "success",
    data: {
      newExam,
    },
  });
});

exports.special1 = catchAsync(async (req, res, next) => {
  const newExam = await Exam.create({
    unitCode: req.body.unitCode,
    unitName: req.body.unitName,
    catsAssgnDone: req.body.catsAssgnDone,
  });
  res.status(201).json({
    status: "success",
    data: {
      newExam,
    },
  });
});

exports.getForAdmin = catchAsync(async (req, res, next) => {
  const specials = await Exam.aggregate([
    { $match: { matter: "Special Exam Request" } },
    { $limit: 1 },
    {
      $project: {
        _id: 1,
        name: 1,
        regNo: 1,
        matter: 1,
        grounds: 1,
        status: 1,
      },
    },
  ]);
  // res.status(200).json({ special :specials });
  res.status(200).render("specialList", { x: specials });
});
exports.getForDean = catchAsync(async (req, res, next) => {
  const specials = await Exam.aggregate([
    { $match: { status: "pending" } },
    { $limit: 1 },
    { $sort: { regNo: -1 } },
    {
      $project: {
        _id: 1,
        name: 1,
        regNo: 1,
        matter: 1,
        grounds: 1,
        status: 1,
      },
    },
  ]);
  // res.status(200).json({ special :specials });
  res.status(200).render("dean", { x: specials });
});
exports.getForDvc = catchAsync(async (req, res, next) => {
  const specials = await Exam.aggregate([
    { $match: { comments: "Approved" } },
    { $limit: 1 },
    { $sort: { regNo: -1 } },
    {
      $project: {
        _id: 1,
        name: 1,
        regNo: 1,
        matter: 1,
        grounds: 1,
        status: 1,
      },
    },
  ]);
  // res.status(200).json({ special :specials });
  res.status(200).render("dvc", { x: specials });
});

exports.getAllExams = factory.getAll(Exam);

exports.getUnit = factory.getOne(Exam, { path: "regNo" });
