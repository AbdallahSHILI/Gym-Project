const User = require("../models/UserModel");

//get current user using the getUserByID
exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.findAllClients = async (req, res, next) => {
  try {
    // Test if there is a document
    const doc = await User.find({ role: client });
    return res.status(200).json({
      status: " succes",
      result: doc.length,
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

exports.findOne = async (req, res, next) => {
  try {
    // Test if there is a document
    let doc = await User.findById(req.params.idUser);
    if (!doc) {
      return "No doc with that id !! ";
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

exports.updateProfile = async (req, res, next) => {
  try {
    if (req.user.id == req.params.id) {
      // Update new changes
      let doc = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
      });
      // Test if document was update successfuly
      if (doc) {
        return res.status(200).json({
          status: " succes",
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
      status: " echec",
      data: err,
    });
  }
};

// get all subsciber of an specific list by admin
exports.findAllClientsList = async (req, res) => {
  try {
    // Test if there is a commande
    const list = await List.findById(req.params.idList);
    let subscibers = list.subscibers;
    // Test if current client have no offres
    if (offres.length == 0) {
      return res.status(400).send({ message: "vous n'avez pas d'offres !! " });
    }
    // Test if current client is the owner of commande
    if (commande.utilisateurID == req.user.id) {
      return res.status(200).json({
        status: " succes",
        offres,
      });
    }
    return res
      .status(400)
      .send({ message: "vous n'êtes pas responsable de cette commande !! " });
  } catch (err) {
    return res.status(404).json({
      status: " echec",
      err,
    });
  }
};
