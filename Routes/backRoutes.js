const express = require("express");
const router = express.Router();
const BackController = require("../Controllers/backController");
const authController = require("../Controllers/authController");

//Subscribe on a list by current client
router.patch(
  "/Subscribe",
  authController.protect,
  authController.restrictTo("client"),
  BackController.Subscribe
);

//Unsubscribe on a list by current client
router.patch(
  "/Unsubscribe",
  authController.protect,
  authController.restrictTo("client"),
  BackController.Unsubscribe
);

//Add new exercise by admin
router.post(
  "/Exercise",
  authController.protect,
  authController.restrictTo("admin"),
  BackController.addNewBackExercise
);

//update one exercise by admin
router.patch(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  BackController.updateOneExercise
);

// List of exercise for admin
router.get(
  "/AllExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  BackController.findAllExercise
);

//delete one exercise by admin
router.delete(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin"),
  BackController.deleteOneExercise
);

// List of exercise for admin
router.get(
  "/:idExercise",
  authController.protect,
  authController.restrictTo("admin", "client"),
  BackController.getOneExercise
);

module.exports = router;
