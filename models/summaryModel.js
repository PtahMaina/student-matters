const mongoose = require("mongoose");

const summarySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "Id must belong to a Special Exam!"],
  },
  regNo: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "RegNo must belong to a Special Exam!"],
  },
  name: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "Name must belong to a Special Exam!"],
  },
  matter: {
    type: String,
    ref: "Exam",
    require: [true, "Please atell Us the Matter."],
  },
  grounds: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "Grounds must belong to a Special Exam!"],
  },
  status: {
    type: String,
    enum: ["pending", "approved", "disapproved"],
    default: "pending",
  },
});
summarySchema.pre(/^find/, function (next) {
  this.populate("_id").populate({
    path: "name",
    select: "regNo",
  });
  next();
});

const Summary = mongoose.model("Summary", summarySchema);

module.exports = Summary;
