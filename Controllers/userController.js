const User = require("../models/UserModel");

//get current user using the getUserByID
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.findAllClients = async (req, res, next) => {
  try {
    // Test if there is a document
    const doc = await User.find({ Role: "client" });
    return res.status(200).json({
      status: " Success",
      result: doc.length,
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

exports.findOne = async (req, res, next) => {
  try {
    // Test if there is a document
    let doc = await User.findById(req.params.id);
    if (!doc) {
      return "No user with that id !! ";
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

exports.updateProfile = async (req, res, next) => {
  try {
    if (req.user.id == req.params.id) {
      // Update new changes
      let doc = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      // Test if document was update Successsffuly
      if (doc) {
        return res.status(200).json({
          status: " Success",
          data: {
            doc,
          },
        });
      }
      return res.status(404).json({
        status: "No doc with that id !!",
      });
    }
    return res.status(404).json({
      status: "You don't have the permission to do this action !!",
    });
  } catch (err) {
    return res.status(404).json({
      status: " Failed",
      data: err,
    });
  }
};
