const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const userController = require("../Controllers/userController");

//create ew compte
router.post("/signup", authController.signup);

//login by address and psw
router.post("/login", authController.login);

//get profile by current user
router.get(
  "/Me",
  authController.protect,
  userController.getMe,
  userController.findOne
);

// List all client by admin
router.get(
  "/AllClients",
  authController.protect,
  authController.restrictTo("admin"),
  userController.findAllClients
);

//get user by id for admin
router.get(
  "/:idUser",
  authController.protect,
  authController.restrictTo("admin"),
  userController.findOne
);

//update user
router.patch("/:id", authController.protect, userController.updateProfile);

module.exports = router;
