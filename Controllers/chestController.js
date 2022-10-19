const Chest = require("../Models/chestModel");
const factory = require("./factory");
const User = require("../Models/userModel");

// Create new Chest List by admin
exports.addNewChestExercise = factory.AddEx(Chest);

// Get all Exercises of Chest list
exports.findAllExercise = factory.Exercises(Chest);

// Update one exercise of Chest list
exports.updateOneExercise = factory.updateEx(Chest);

// delete one Exercise of Chest list
exports.deleteOneExercise = factory.deleteOneEx(Chest);

// Get one Exercise of Chest list
exports.getOneExercise = factory.getOneEx(Chest);

// Subscribe on a list by current client
exports.Subscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeChest == false) {
      CurrentUser.SubscribeChest = true;
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
    if (CurrentUser.SubscribeChest == true) {
      CurrentUser.SubscribeChest = false;
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
