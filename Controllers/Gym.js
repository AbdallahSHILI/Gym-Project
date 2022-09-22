const Abdominal = require("../Models/abdominalModel");
const Back = require("../Models/backModel");
const Chest = require("../Models/chestModel");
const Hand = require("../Models/handModel");
const Leg = require("../Models/legModel");
const Shoulder = require("../Models/shoulderModel");

// Create new Abdominal List by admin
exports.addNewList = factory.Add(Abdominal);

// Create new Back List by admin
exports.addNewList = factory.Add(Back);

// Create new Chest List by admin
exports.addNewList = factory.Add(Chest);

// Create new Hand List by admin
exports.addNewList = factory.Add(Hand);

// Create new Leg List by admin
exports.addNewList = factory.Add(Leg);

// Create new Shoulder List by admin
exports.addNewList = factory.Add(Shoulder);

exports.addNewExercise = factory.addNewEx(exercise);

exports.updateOneExercise = factory.updateOneEx(exercise);

// Get all Exercises of shoulder list
exports.findAllExercise = factory.Exercises(Shoulder);

// Get all Exercises of Leg list
exports.findAllExercise = factory.Exercises(Leg);

// Get all Exercises of Hand list
exports.findAllExercise = factory.Exercises(Hand);

// Get all Exercises of Chest list
exports.findAllExercise = factory.Exercises(Chest);

// Get all Exercises of Back list
exports.findAllExercise = factory.Exercises(Back);

// Get all Exercises of Abdominal list
exports.findAllExercise = factory.Exercises(Abdominal);

exports.deleteOneExercise = async (req, res, next) => {
  try {
    const doc = await exercise.findByIdAndDelete(req.params.idExercise);
    if (doc) {
      return res.status(200).json({
        status: " Success",
        data: null,
      });
    }

    return res.status(404).json({
      status: "You can't delete this exercise !!",
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};

exports.getOneExercise = async (req, res) => {
  try {
    // Test if there is an exercise
    const exercise = await exercise.findById(req.params.idExercise);
    if (!exercise) {
      return res.status(400).send({
        message: "No exercise with that id !! ",
      });
    }
    return res.status(200).json({
      status: " Success",
      data: {
        exercise,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};
