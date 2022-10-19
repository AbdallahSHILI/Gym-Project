const Leg = require("../Models/legModel");
const factory = require("./factory");
const User = require("../Models/userModel");

// Create new Leg List by admin
exports.addNewLegExercise = factory.AddEx(Leg);

// Get all Exercises of Leg list
exports.findAllExercise = factory.Exercises(Leg);

// Update one exercise of Leg list
exports.updateOneExercise = factory.updateEx(Leg);

// delete one Exercise of Leg list
exports.deleteOneExercise = factory.deleteOneEx(Leg);

// Get one Exercise of Leg list
exports.getOneExercise = factory.getOneEx(Leg);

// Subscribe on a list by current client
exports.Subscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeLeg == false) {
      CurrentUser.SubscribeLeg = true;
      let user = await User.findByIdAndUpdate(CurrentUser.id, CurrentUser, {
        new: true,
        runValidators: true,
      });
      if (user) {
        return res.status(200).json({
          status: "Success",
          user,
        });
      }
      return res.status(404).json({
        status: " Failed",
        data: err,
      });
    }
    return res.status(400).send({
      message: "You already subscribe on this list !! ",
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};

// Unsubscribe on a list by current client
exports.Unsubscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeLeg == true) {
      CurrentUser.SubscribeLeg = false;
      let user = await User.findByIdAndUpdate(CurrentUser.id, CurrentUser, {
        new: true,
        runValidators: true,
      });
      if (user) {
        return res.status(200).json({
          status: "Success",
          user,
        });
      }
      return res.status(404).json({
        status: " Failed",
        data: err,
      });
    }
    return res.status(400).send({
      message: "You are not subscribe on this list !! ",
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};
