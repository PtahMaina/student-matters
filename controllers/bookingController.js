const catchAsync = require("../utils/catchAsync");
const factory = require("./handlerFactory");
const Booking = require("../models/bookingModel");

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBookings = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);
