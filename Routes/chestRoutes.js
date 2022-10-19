const express = require("express");
const router = express.Router();
const ChestController = require("../Controllers/chestController");
const authController = require("../Controllers/authController");

//Subscribe on a list by current client
router.patch(
  "/Subscribe",
  authController.protect,
  authController.restrictTo("client"),
  ChestController.Subscribe
);

//Unsubscribe on a list by current client
router.patch(
  "/Unsubscribe",
  authController.protect,
  authController.restrictTo("client"),
  ChestController.Unsubscribe
);

//Add new exercise by admin
router.post(
  "/Exercise",
  authController.protect,
  authController.restrictTo("admin"),
  ChestController.addNewChestExercise
);

//update one exercise by admin
router.patch(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  ChestController.updateOneExercise
);

// List of exercise for admin
router.get(
  "/AllExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  ChestController.findAllExercise
);

//delete one exercise by admin
router.delete(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  ChestController.deleteOneExercise
);

// List of exercise for admin
router.get(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  ChestController.getOneExercise
);

module.exports = router;
