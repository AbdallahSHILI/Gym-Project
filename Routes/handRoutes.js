const express = require("express");
const router = express.Router();
const HandController = require("../Controllers/handController");
const authController = require("../Controllers/authController");

//Subscribe on a list by current client
router.patch(
  "/Subscribe",
  authController.protect,
  authController.restrictTo("client"),
  HandController.Subscribe
);

//Unsubscribe on a list by current client
router.patch(
  "/Unsubscribe",
  authController.protect,
  authController.restrictTo("client"),
  HandController.Unsubscribe
);

//Add new exercise by admin
router.post(
  "/Exercise",
  authController.protect,
  authController.restrictTo("admin"),
  HandController.addNewHandExercise
);
//update one exercise by admin
router.patch(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  HandController.updateOneExercise
);

// List of exercise for admin
router.get(
  "/AllExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  HandController.findAllExercise
);

//delete one exercise by admin
router.delete(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  HandController.deleteOneExercise
);

// List of exercise for admin
router.get(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  HandController.getOneExercise
);

module.exports = router;
