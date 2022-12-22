const express = require("express");
const zoteController = require("../controllers/zoteController");
const authController = require("../controllers/authController");

const app = express();

const router = express.Router();

router.patch(
  "/admin-comment",
  authController.protect,
  zoteController.adminComments
);
router.patch(
  "/dean-comment",
  authController.protect,
  zoteController.deanComments
);
router.patch(
  "/dvc-comment",
  authController.protect,
  zoteController.dvcComments
);

module.exports = router;
