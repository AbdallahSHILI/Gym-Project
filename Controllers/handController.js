const Hand = require("../Models/handModel");
const factory = require("./factory");
const User = require("../Models/userModel");

// Create new Hand List by admin
exports.addNewHandExercise = factory.AddEx(Hand);

// Get all Exercises of Leg list
exports.findAllExercise = factory.Exercises(Hand);

// Update one exercise of Hand list
exports.updateOneExercise = factory.updateEx(Hand);

// delete one Exercise of Hand list
exports.deleteOneExercise = factory.deleteOneEx(Hand);

// Get one Exercise of Hand list
exports.getOneExercise = factory.getOneEx(Hand);

// Subscribe on a list by current client
exports.Subscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeHand == false) {
      CurrentUser.SubscribeHand = true;
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
    if (CurrentUser.SubscribeHand == true) {
      CurrentUser.SubscribeHand = false;
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
