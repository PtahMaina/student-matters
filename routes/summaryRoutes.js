const express = require("express");
const summaryController = require("../controllers/summaryController");
const authController = require("../controllers/authController");
const viewsController = require("../controllers/viewsController");

const router = express.Router();

router.use(authController.protect);

// router.get("/checkout-session/:tourId", bookingController.getCheckoutSession);

router.use(authController.restrictTo("admin", "dean", "cod"));

router
  .route("/")
  .get(summaryController.getAllSummary)
  // .get(specialController.getAllBookings)
  .post(summaryController.summary);
// .get("/bookings", viewsController.bookings);

router.post("/summary", summaryController.summary);

// router
//   .route("/:id")
//   .get(summaryController.getSummary)
//   .patch(summaryController.updateSummary)
//   .delete(summaryController.deleteSummary)
//   .patch(summaryController.approve);

module.exports = router;
