const mongoose = require("mongoose");
const validator = require("validator");

// Status Schema
const abdominalSchema = new mongoose.Schema({
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

const Abdominal = mongoose.model("Abdominal", abdominalSchema);
module.exports = Abdominal;
