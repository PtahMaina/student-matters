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

// exports.getAllBookings = catchAsync(async (req, res, next) => {
//   await Exam.aggregate([
//     { $match: { department: "CS &IT" } },
//     { $sort: { regNo: -1 } },
//     { $project: { _id: 0, regNo: 1, unitCode: 1, unitName: 1 } },
//   ]).then((response) => {
//     res.status(200).render("specialList", { Exam })({
//       response,
//       title: "All Special Examinations Bookings",
//       // status: "success",
//       // results: doc.length,
//       // data: {
//       //   data: doc,
//       // },
//     });
//   });
// });

exports.getAllBookings = catchAsync(async (req, res, next) => {
  let data = await Exam.aggregate([
    { $match: { department: "CS &IT" } },
    { $sort: { regNo: -1 } },
    { $project: { _id: 0, regNo: 1, unitCode: 1, unitName: 1 } },
    {
      $group: {
        _id: { regNo: "$regNo", unitCode: "$unitCode", unitName: "$unitName" },
      },
    },
  ]);
  // res.status(200).json({ status: "success", results: data.length, data });
  res.status(200).render("specialList");
});
