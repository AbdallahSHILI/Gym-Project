const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");
const AbdominalController = require("../Controllers/abdominalController");

//Subscribe on a list by current client
router.patch(
  "/Subscribe",
  authController.protect,
  authController.restrictTo("client"),
  AbdominalController.Subscribe
);

//Unsubscribe on a list by current client
router.patch(
  "/Unsubscribe",
  authController.protect,
  authController.restrictTo("client"),
  AbdominalController.Unsubscribe
);

//delete one exercise by admin
router.delete(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  AbdominalController.deleteOneExercise
);

//update one exercise by admin
router.patch(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  AbdominalController.updateOneExercise
);

//Add new exercise by- admin
router.post(
  "/Exercise",
  authController.protect,
  authController.restrictTo("admin"),
  AbdominalController.Add
);

// List of exercise for admin
router.get(
  "/AllExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  AbdominalController.findAllExercise
);

// List of subscribers for admin
router.get(
  "/AllSubscribers",
  authController.protect,
  authController.restrictTo("admin"),
  AbdominalController.findAllSubscribers
);

// List of exercise for admin
router.get(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  AbdominalController.getOneExercise
);

module.exports = router;
