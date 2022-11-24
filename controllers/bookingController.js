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

exports.bookings = catchAsync(async (req, res, next) => {
  const newBooking = await Exam.aggregate([
    {
      $match: {
        regNo: $regNo,
        unitCode: $unitCode,
        unitName: $unitName,
      },
    },
    {
      $merge: {
        into: "bookings",
        whenMatched: "replace",
        whenNotMatched: "insert",
      },
    },
  ]);
  res.status(201).json({
    status: "success",
    data: {
      newBooking,
    },
  });
});

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
