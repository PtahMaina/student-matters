const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const leaveController = require("../controllers/leaveController");
const bookingController = require("../controllers/bookingController");

const app = express();

const router = express.Router();

router.post("/leave-request", authController.protect, leaveController.leave);
// router.get(authController.protect, leaveController.getAllBookings);

module.exports = router;
