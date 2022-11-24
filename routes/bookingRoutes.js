const express = require("express");
const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");
const specialController = require("../controllers/specialController");

const router = express.Router();

router.use(authController.protect);

// router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router.use(authController.restrictTo("admin", "dean", "cod"));

router
  .route("/")
  // .get(bookingController.getAllBookings)
  .get(specialController.getAllBookings)
  .post(bookingController.bookings);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
