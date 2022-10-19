const mongoose = require("mongoose");
const validator = require("validator");

// Status Schema
const backSchema = new mongoose.Schema({
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

const Back = mongoose.model("Back", backSchema);
module.exports = Back;
