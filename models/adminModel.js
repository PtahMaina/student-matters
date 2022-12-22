const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
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
  grounds: {
    type: mongoose.Schema.ObjectId,
    ref: "Exam",
    required: [true, "Grounds must belong to a Special Exam!"],
  },
  matter: {
    type: String,
    require: [true, "Please atell Us the Matter."],
  },
});
adminSchema.pre(/^find/, function (next) {
  this.populate("_id").populate({
    path: "name",
    select: "regNo",
  });
  next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
