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
  bookingController.booking
);

module.exports = router;
