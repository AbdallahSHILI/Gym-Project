const express = require("express");
const router = express.Router();
const GymController = require("../Controllers/factory");

//Add abdominal list by admin
router.post(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.addNewList
);

//Add new exercise by admin
router.post(
  "/Exercise",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.addNewExercise
);

//update one exercise by admin
router.patch(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.updateOneExercise
);

// List of exercise for admin
router.get(
  "/id",
  authController.protect,
  authController.restrictTo("admin", "client"),
  GymController.findAllExercise
);

//delete one exercise by admin
router.delete(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.deleteOneExercise
);

// List of exercise for admin
router.get(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  GymController.getOneExercise
);

module.exports = router;
