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
    require: [true, "Booking must have a price."],
  },
  unitName: {
    type: String,
    require: [true, "Booking must have a price."],
  },
  status: {
    type: String,
    enum: ["pending", "approved", "disapproved"],
    default: "pending",
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now(),
  // },
});

bookingSchema.pre(/^find/, function (next) {
  this.populate("_id").populate({
    path: "regNo",
    select: "regNo",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
