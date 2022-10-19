const Back = require("../Models/backModel");
const factory = require("./factory");
const User = require("../Models/userModel");

// Create new Back List by admin
exports.addNewBackExercise = factory.AddEx(Back);

// Get all Exercises of Back list
exports.findAllExercise = factory.Exercises(Back);

// Update one exercise of Back list
exports.updateOneExercise = factory.updateEx(Back);

// delete one Exercise of Back list
exports.deleteOneExercise = factory.deleteOneEx(Back);

// Get one Exercise of Back list
exports.getOneExercise = factory.getOneEx(Back);

// Subscribe on a list by current client
exports.Subscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeBack == false) {
      CurrentUser.SubscribeBack = true;
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
    if (CurrentUser.SubscribeBack == true) {
      CurrentUser.SubscribeBack = false;
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
