const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const specialController = require("../controllers/specialController");
const bookingController = require("../controllers/bookingController");

const app = express();

const router = express.Router();

router.post(
  "/special",
  authController.protect,
  specialController.special,
  bookingController.bookings
);
// router.get(authController.protect, specialController.getAllBookings);

router.get("/for-admin", authController.protect, specialController.getForAdmin);

router.route("/").get(authController.protect, specialController.getAllExams);

module.exports = router;
