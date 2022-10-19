const express = require("express");
const router = express.Router();
const ShoulderController = require("../Controllers/shoulderController");
const authController = require("../Controllers/authController");

//Subscribe on a list by current client
router.patch(
  "/Subscribe",
  authController.protect,
  authController.restrictTo("client"),
  ShoulderController.Subscribe
);

//Unsubscribe on a list by current client
router.patch(
  "/Unsubscribe",
  authController.protect,
  authController.restrictTo("client"),
  ShoulderController.Unsubscribe
);

//Add new exercise by admin
router.post(
  "/Exercise",
  authController.protect,
  authController.restrictTo("admin"),
  ShoulderController.addNewShoulderExercise
);

//update one exercise by admin
router.patch(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  ShoulderController.updateOneExercise
);

// List of exercise for admin
router.get(
  "/AllExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  ShoulderController.findAllExercise
);

//delete one exercise by admin
router.delete(
  "/:idList/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  ShoulderController.deleteOneExercise
);

// List of exercise for admin
router.get(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  ShoulderController.getOneExercise
);

module.exports = router;
