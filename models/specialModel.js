const mongoose = require("mongoose");
const validator = require("validator");

const specialSchema = new mongoose.Schema({
  regNo: {
    type: String,
    reqiured: [true, "You Must Include Your Reg No."],
    unique: true,
  },
  department: {
    type: String,
    reqiured: [true, "Please Type Your department here"],
  },
  programme: {
    type: String,
    required: [true, "Please Type Your Course here"],
  },
  year: {
    type: String,
    required: [true, "Please Type Your Year of Study And Semester"],
  },
  grounds: {
    type: String,
    required: [
      true,
      "Please Tell Us the Reason Why You Are Applying For Special Exams",
    ],
  },
  yearSemExamTime: {
    type: String,
    required: [
      true,
      "Please Tell Us The Year And Sem For Which You Are Applying Special Exam",
    ],
  },
  monthYearOfExam: {
    type: String,
    required: [
      true,
      "Please Tell Us When The Month And Year Ordinary Exam Was Done",
    ],
  },
  unitCode: {
    type: String,
    required: [true, "Please Tell Us The Unit Code"],
    unique: true,
  },
  unitName: {
    type: String,
    required: [true, "Please Tell Us The Unit Name"],
  },
  catsAssgnDone: {
    type: String,
    required: [
      true,
      "Please Tell Us How Many Cats And Assignments You Have Done",
    ],
  },
  appliedAt: Date,
});

specialSchema.pre("save", function (next) {
  if (!this.isModified("unitName") || this.isNew) return next();

  this.appliedAt = Date.now() - 1000;
  next();
});

const Exam = mongoose.model("Exam", specialSchema);

module.exports = Exam;
