const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const Exam = require("./../models/specialModel");

exports.special = catchAsync(async (req, res, next) => {
  const newExam = await Exam.create({
    regNo: req.body.regNo,
    department: req.body.department,
    programme: req.body.programme,
    year: req.body.year,
    grounds: req.body.grounds,
    yearSemExamTime: req.body.yearSemExamTime,
    monthYearOfExam: req.body.monthYearOfExam,
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
