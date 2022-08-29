const User = require("../Models/userModel");
const Exercice = require("../Models/exerciceModel");

// Create new List by admin
exports.Add = (Model) => async (req, res, next) => {
  try {
    const list = await Model.create(req.body);
    return res.status(201).json({
      status: " succes",
      data: {
        list,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      data: err,
    });
  }
};

// Create new exercice by admin
exports.addNewExercice = async (req, res, next) => {
  try {
    const exercice = await Exercice.create(req.body);
    return res.status(201).json({
      status: " succes",
      data: {
        exercice,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      data: err,
    });
  }
};

exports.updateOneExercice = async (req, res, next) => {
  try {
    // Test if there is an status
    let doc = await Exercice.findByIdAndUpdate(
      req.params.idExercice,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!doc) {
      return res.status(400).send({
        message: "No exercice with that id !! ",
      });
    }
    return res.status(200).json({
      status: " succes",
      data: {
        doc,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      data: err,
    });
  }
};

//get all exercices of an list by admin
exports.Exercices = (Model) => async (req, res) => {
  try {
    // find the status
    const list = await Model.findById(req.user.id);
    let exercices = list.exercices;
    // Test if liste of exercice is an empty liste
    if (!exercices.length) {
      return res.status(400).send({ message: "There is no exercice here !! " });
    }
    return res.status(200).json({
      status: " succes",
      exercices,
    });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      err,
    });
  }
};

exports.deleteEx = async (req, res, next) => {
  try {
    const doc = await Exercice.findByIdAndDelete(req.params.id);
    if (doc) {
      return res.status(200).json({
        status: " succes",
        data: null,
      });
    }

    return res.status(404).json({
      status: "You can't delete this exercice !!",
    });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      data: err,
    });
  }
};

exports.getOneEx = async (req, res) => {
  try {
    // Test if there is an exercice
    const exercice = await Exercice.findById(req.params.id);
    if (!exercice) {
      return res.status(400).send({
        message: "No exercice with that id !! ",
      });
    }
    return res.status(200).json({
      status: " succes",
      data: {
        exercice,
      },
    });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      data: err,
    });
  }
};
