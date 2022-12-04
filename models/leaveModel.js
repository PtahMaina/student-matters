const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  name: {
    type: String,
    reqiured: [true, "You Must Include Your Name."],
    unique: true,
  },
  regNo: {
    type: String,
    reqiured: [true, "You Must Include Your Reg No."],
    unique: true,
  },
  session: {
    type: String,
    reqiured: [true, "Please Tell Us Your Session"],
  },
  sponsorship: {
    type: String,
    required: [true, "Please Tell Us If You Are GoK Sponsored Or SSP"],
  },
  phone: {
    type: Number,
    required: [true, "Please Tell Us Your Phone Number"],
  },
  leaveDuration: {
    type: String,
    required: [true, "Please Tell Us The Duration of Your Leave"],
  },
  leavePeriod: {
    type: String,
    required: [
      true,
      "Please Tell Us The Period of Your Leave In Terms Of Months",
    ],
  },
  resumption: {
    type: String,
    required: [
      true,
      "Please Tell Us When The Month, Year And Semester You Want To Resume",
    ],
  },
  catsDone: {
    type: String,
    required: [true, "Please Tell Us The No. of CATs Done"],
  },
  assignDone: {
    type: String,
    required: [true, "Please Tell Us The No. of Assignments Done"],
  },
  status: {
    type: String,
    enum: ["pending", "approved", "disapproved"],
    default: "pending",
  },
});

const Leave = mongoose.model("Leave", leaveSchema);

module.exports = Leave;
