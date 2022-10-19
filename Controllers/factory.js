const User = require("../Models/userModel");

// Create new List by admin
exports.AddEx = (Model) => async (req, res, next) => {
  try {
    const Ex = await Model.create(req.body);
    return res.status(201).json({
      status: " Success",
      data: {
        Ex,
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
    const list = await Model.find({});
    // Test if List of exercise is an empty List
    if (!list.length) {
      return res.status(400).send({ message: "There is no exercise here !! " });
    }
    return res.status(200).json({
      status: " Success",
      list,
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      err,
    });
  }
};

exports.deleteOneEx = (Model) => async (req, res, next) => {
  try {
    const doc = await Model.findByIdAndDelete(req.params.idExercise);
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

exports.getOneEx = (Model) => async (req, res) => {
  try {
    // Test if there is an exercise
    const exercise = await Model.findById(req.params.idExercise);
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

exports.updateEx = (Model) => async (req, res, next) => {
  try {
    // Test if there is an status
    let doc = await Model.findByIdAndUpdate(req.params.idExercise, req.body, {
      new: true,
      runValidators: true,
    });
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
