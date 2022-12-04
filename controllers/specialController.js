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

exports.getForAdmin = catchAsync(async (req, res, next) => {
  const special = await Exam.aggregate([
    { $sort: { regNo: -1 } },
    {
      $project: {
        _id: 1,
        name: 1,
        regNo: 1,
        unitCode: 1,
        unitName: 1,
        status: 1,
      },
    },
  ]);
  res.status(200).json({
    // status: "success",
    special,
  });
});

exports.getAllExams = factory.getAll(Exam);

// exports.getAllBookings = catchAsync(async (req, res, next) => {
//   let data = await Exam.find(
//     { department: { $regex: "CS &IT" } },
//     {
//       group: {
//         _id: {
//           unitCode: "$unitCode",
//           unitName: "$unitName",
//           appliedAt: "$appliedAt",
//         },
//       },
//     }
//   );
//   // data.map((data) => data.regNo, data.unitCode, data.unitName);
//   res.status(200).json({ status: "success", results: data.length, data });
//   // res.status(200).render("specialList", data);
// });

exports.getUnit = factory.getOne(Exam, { path: "regNo" });
