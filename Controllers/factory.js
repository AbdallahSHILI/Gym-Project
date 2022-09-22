const User = require("../Models/userModel");
const exercise = require("../Models/exerciseModel");

// Create new List by admin
exports.Add = (Model) => async (req, res, next) => {
  try {
    const list = await Model.create(req.body);
    return res.status(201).json({
      status: " Success",
      data: {
        list,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};

// Create new exercise by admin
exports.addNewEx = async (req, res, next) => {
  try {
    const exercise = await exercise.create(req.body);
    return res.status(201).json({
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

exports.updateOneEx = async (req, res, next) => {
  try {
    // Test if there is an status
    let doc = await exercise.findByIdAndUpdate(
      req.params.idExercise,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      return res.status(400).send({
        message: "No exercise with that id !! ",
      });
    }
    return res.status(200).json({
      status: " Success",
      data: {
        doc,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};

//get all exercises of an list by admin
exports.Exercises = (Model) => async (req, res) => {
  try {
    // find the status
    const list = await Model.findById(req.user.id);
    let exercises = list.exercises;
    // Test if List of exercise is an empty List
    if (!exercises.length) {
      return res.status(400).send({ message: "There is no exercise here !! " });
    }
    return res.status(200).json({
      status: " Success",
      exercises,
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      err,
    });
  }
};
