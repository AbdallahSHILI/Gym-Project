const mongoose = require("mongoose");
const validator = require("validator");

// Status Schema
const shoulderSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: [true, "please enter your Name "],
  },
  Description: {
    type: String,
    required: [true, "Please enter the description !! "],
    select: true,
    minlength: 2,
  },
  Exercises: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "exercise",
    },
  ],
});

const Shoulder = mongoose.model("Shoulder", shoulderSchema);
module.exports = Shoulder;
