const mongoose = require("mongoose");
const validator = require("validator");

// Status Schema
const chestSchema = new mongoose.Schema({
  ExerciseName: {
    type: String,
    required: [true, "please enter your Name "],
  },
  Description: {
    type: String,
    required: [true, "Please enter the description !! "],
    select: true,
    minlength: 2,
  },
});

const Chest = mongoose.model("Chest", chestSchema);
module.exports = Chest;
