const Shoulder = require("../Models/shoulderModel");
const factory = require("./factory");
const User = require("../Models/userModel");

// Create new Shoulder List by admin
exports.addNewShoulderExercise = factory.AddEx(Shoulder);

// Get all Exercises of shoulder list
exports.findAllExercise = factory.Exercises(Shoulder);

// Update one exercise of Shoulder list
exports.updateOneExercise = factory.updateEx(Shoulder);

// delete one Exercise of Shoulder list
exports.deleteOneExercise = factory.deleteOneEx(Shoulder);

// Get one Exercise of Shoulder list
exports.getOneExercise = factory.getOneEx(Shoulder);

// Subscribe on a list by current client
exports.Subscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeShoulder == false) {
      CurrentUser.SubscribeShoulder = true;
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
    if (CurrentUser.SubscribeShoulder == true) {
      CurrentUser.SubscribeShoulder = false;
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
