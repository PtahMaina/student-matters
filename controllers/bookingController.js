const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const Booking = require("../models/statusModel");
const Exam = require(".././models/specialModel");

// exports.booking = catchAsync(async (req, res, next) => {
//   const newBooking = await Booking.createView("bookings", "exams", [
//     {
//       $lookup: {
//         from: "users",
//         localField: "name",
//         foreignField: "name",
//         as: "userDocs",
//       },
//     },
//     {
//       $project: {
//         _id: 0,
//         unitCode: "$unitCode",
//         unitName: "$unitName",
//         appliedAt: "$appliedAt",
//         status: "$userDocs.status",
//       },
//     },
//     { $unwind: "$status" },
//   ]);
//   res.status(201).json({
//     status: "success",
//     data: {
//       newBooking,
//     },
//   });
// });

// exports.bookings = catchAsync(async (req, res, next) => {
//   const newBooking = await Exam.aggregate([
//{
//   $match: {
//     regNo: $regNo,
//     unitCode: $unitCode,
//     unitName: $unitName,
//   },
// },
//     {
//       $merge: {
//         into: "bookings",
//         on: ["_id", "regNo", "unitCode", "unitName"],
//         whenMatched: "replace",
//         whenNotMatched: "insert",
//       },
//     },
//   ]);
//   res.status(201).json({
//     status: "success",
//     data: {
//       newBooking,
//     },
//   });
// });

exports.bookings = catchAsync(async (req, res, next) => {
  const newBooking = await Exam.aggregate([
    { $project: { _id: 1, regNo: 1, unitCode: 1, unitName: 1 } },
    // {
    //   $group: {
    //     _id: { regNo: "$regNo", unitCode: "$unitCode", unitName: "$unitName" },
    //   },
    // },
    { $merge: { into: "bookings" } },
  ]);
  // res.status(200).json({ status: "success", results: data.length, data });
  res.status(201).json({
    status: "success",
    data: {
      newBooking,
    },
  });
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
// exports.getAllBookings = catchAsync(async (req, res, next) => {
//   // 1) Find all bookings
//   const doc = await Booking.find();

//   res.status(200).json({
//     status: "success",
//     results: doc.length,
//     data: {
//       data: doc,
//     },
//   });
// });

exports.getAllBookings = factory.getAll(Booking);

exports.approve = factory.updateOne(Booking);

exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
