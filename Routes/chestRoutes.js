const express = require("express");
const router = express.Router();
const GymController = require("../Controllers/factory");

//Add chest list by admin
router.post(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.addNewList
);

//Add new exercice by admin
router.post(
  "/Exercice",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.addNewExercice
);

//update one exercice by admin
router.patch(
  "/",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.updateOneExercice
);

// Liste of exercice for admin
router.get(
  "/",
  authController.protect,
  authController.restrictTo("admin", "client"),
  GymController.findAllExercice
);

//delete one exercice by admin
router.delete(
  "/:idExercice",
  authController.protect,
  authController.restrictTo("admin"),
  GymController.deleteOneExercice
);

// Liste of exercice for admin
router.get(
  "/:idExercice",
  authController.protect,
  authController.restrictTo("admin", "client"),
  GymController.getOneExercice
);

module.exports = router;
