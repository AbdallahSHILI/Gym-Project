const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

//create ew compte
router.post("/signup", authController.signup);

//login by adress and psw
router.post("/login", authController.login);

//get profil by current user
router.get(
  "/me",
  authController.protect,
  userController.getMe,
  userController.getUserById
);

// Liste of all clients for admin
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
  userController.getUserById
);

//update user
router.patch("/:id", authController.protect, userController.updateUser);

module.exports = router;
