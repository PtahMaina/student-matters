const mongoose = require("mongoose");

const deanSchema = new mongoose.Schema({
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
    ref: "Admin",
    require: [true, "Please atell Us the Matter."],
  },
  grounds: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "Grounds must belong to a Special Exam!"],
  },
  decision: {
    type: String,
    enum: ["pending", "approved", "disapproved"],
    default: "pending",
  },
});
deanSchema.pre(/^find/, function (next) {
  this.populate("_id").populate({
    path: "name",
    select: "regNo",
  });
  next();
});

const Dean = mongoose.model("Dean", deanSchema);

module.exports = Dean;
