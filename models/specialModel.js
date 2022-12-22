const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");

const specialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "You Must Tell Us You Name"],
  },
  regNo: {
    type: String,
    reqiured: [true, "You Must Include Your Reg No."],
    unique: true,
  },
  session: {
    type: String,
    reqiured: [true, "Please Type Your department here"],
  },
  sponsorship: {
    type: String,
    required: [true, "Please Type Your Course here"],
  },
  phone: {
    type: Number,
    required: [true, "Please Tell Us Your Phone Number"],
  },
  grounds: {
    type: String,
    required: [
      true,
      "Please Tell Us the Reason Why You Are Applying For Special Exams",
    ],
  },
  yearSem: {
    type: String,
    required: [
      true,
      "Please Tell Us The Year And Sem For Which You Are Applying Special Exam",
    ],
  },
  monthYear: {
    type: String,
    required: [
      true,
      "Please Tell Us When The Month And Year Ordinary Exam Was Done",
    ],
  },

  unitCode: [
    {
      type: String,
      required: [true, "Please Tell Us The Unit Code"],
    },
  ],
  unitName: [
    {
      type: String,
      required: [true, "Please Tell Us The Unit Name"],
    },
  ],
  catsAssgnDone: [
    {
      type: String,
      required: [
        true,
        "Please Tell Us How Many Cats And Assignments You Have Done",
      ],
    },
  ],
  status: {
    type: String,
    default: "pending",
  },
  matter: {
    type: String,
    default: "Special Exam Request",
  },
  comments: {
    type: String,
    default: "Approved",
  },
  appliedAt: {
    type: Date,
    default: Date.now(),
  },
  // slug: String,
});

// specialSchema.pre(
//   "save",
//   function (next) {
//     if (!this.isModified("regNo") || this.isNew) return next();

//     this.appliedAt = Date.now() - 1000;
//     next();
//   },
//   {
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

specialSchema.pre(/^find/, function (next) {
  this.populate("name").populate({
    path: "regNo",
    select: "grounds",
    sort: "regNo",
  });
  next();
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
// specialSchema.pre("save", function (next) {
//   this.slug = slugify(this.unitName, { lower: true });
//   next();
// });

const Exam = mongoose.model("Exam", specialSchema);

module.exports = Exam;
