const express = require("express");
const viewsController = require("../controllers/viewsController");
const authController = require("../controllers/authController");
const app = express();

const router = express.Router();

router.get("/", authController.isLoggedIn, viewsController.getOverview);

router.get("/login", authController.isLoggedIn, viewsController.getLoginForm);
router.get("/signup", authController.isLoggedIn, viewsController.getSignUpForm);
router.get(
  "/staff-login",
  authController.isLoggedIn,
  viewsController.getStaffLoginForm
);

router.get(
  "/activities",
  authController.protect,
  viewsController.getActivities
);

router.get("/special", authController.protect, viewsController.getSpecial);
router.get("/me", authController.protect, viewsController.getAccount);
router.get("/my-specials", authController.protect, viewsController.getMyTours);
module.exports = router;
