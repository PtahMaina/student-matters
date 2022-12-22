const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const Summary = require("../models/summaryModel");
const Exam = require(".././models/specialModel");

exports.summary = catchAsync(async (req, res, next) => {
  await Exam.aggregate([
    { $project: { _id: 1, regNo: 1, name: 1, grounds: 1, status: 1 } },

    {
      $lookup: {
        from: "leaves",
        localField: "name",
        foreignField: "name",
        as: "leaveDocs",
      },
    },

    {
      $merge: {
        into: "summaries",
        whenMatched: "replace",
        whenNotMatched: "insert",
      },
    },
  ]);
  res.status(201).send({});
});

exports.getAllSummary = factory.getAll(Summary);
