const Abdominal = require("../Models/abdominalModel");
const factory = require("./factory");
const User = require("../Models/userModel");

// Create new Abdominal List by admin
exports.Add = factory.AddEx(Abdominal);

// Get all Exercises of Abdominal list
exports.findAllExercise = factory.Exercises(Abdominal);

// delete one Exercise of Abdominal list
exports.deleteOneExercise = factory.deleteOneEx(Abdominal);

// Get one Exercise of Abdominal list
exports.getOneExercise = factory.getOneEx(Abdominal);

// Update one Exercise of Abdominal list
exports.updateOneExercise = factory.updateEx(Abdominal);

// Subscribe on a list by current client
exports.Subscribe = async (req, res, next) => {
  try {
    const CurrentUser = req.user;
    if (CurrentUser.SubscribeAbdominal == false) {
      CurrentUser.SubscribeAbdominal = true;
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
    if (CurrentUser.SubscribeAbdominal == true) {
      CurrentUser.SubscribeAbdominal = false;
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

//get all subscribers of an list by admin
exports.findAllSubscribers = async (req, res) => {
  try {
    // find the status
    const users = await User.find({ SubscribeAbdominal: true });
    // Test if List of exercise is an empty List
    if (!users.length) {
      return res.status(400).send({ message: "There is no subscribers !! " });
    }
    return res.status(200).json({
      status: " Success",
      users,
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      err,
    });
  }
};
