const express = require("express");
const bookingController = require("../controllers/bookingController");
const authController = require("../controllers/authController");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.use(authController.protect);

// router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router.use(authController.restrictTo("admin", "dean", "cod"));

router
  .route("/")
  .get(bookingController.getAllBookings)
  // .get(specialController.getAllBookings)
  .post(bookingController.bookings);
// .get("/bookings", viewsController.bookings);

// router.get("/all-bookings", authController.protect, viewsController.bookings);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking)
  .patch(bookingController.approve);

module.exports = router;
