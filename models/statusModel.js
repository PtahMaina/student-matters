const mongoose = require("mongoose");
const User = require("./userModel");
const Exam = require("./specialModel");

const bookingSchema = new mongoose.Schema({
  regNo: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "Booking must belong to a Tour!"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Booking must belong to a User!"],
  },
  unitCode: {
    type: String,
    ref: "Exam",
    require: [true, "Booking must have a price."],
  },
  unitName: {
    type: String,
    ref: "Exam",
    require: [true, "Booking must have a price."],
  },
  status: {
    type: String,
    enum: ["pending", "approved", "disapproved"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate({
    path: "exam",
    select: "regNo",
  });
  next();
});

// catchAsync(async (req, res, next) => {
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

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
