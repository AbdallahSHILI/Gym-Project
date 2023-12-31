const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");
const SALT_WORK_FACTOR = 10;

// User Schema
const userSchema = new mongoose.Schema({
  FirstLastName: {
    type: String,
    required: [true, "please enter your First and Last name !! "],
  },
  Email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "please enter your email ! "],
    validate: [validator.isEmail, "Please fill a valid email !! "],
  },
  Password: {
    type: String,
    required: [true, "please enter your password "],
    minlength: 8,
    select: false,
  },
  ConfirmPassword: {
    type: String,
    required: [true, "please confirm your password !! "],
    validate: {
      // This only works on CREATE and SAVE!!!
      validator: function (el) {
        return el === this.Password;
      },
      message: "Passwords are not the same !!",
    },
  },
  PhoneNumber: {
    type: Number,
    required: [true, "please enter your phone number !! "],
    minlength: 8,
  },
  Role: {
    type: String,
    default: "client",
    enum: ["admin", "client"],
  },
  SubscribeAbdominal: {
    type: Boolean,
    default: false,
  },
  SubscribeBack: {
    type: Boolean,
    default: false,
  },
  SubscribeChest: {
    type: Boolean,
    default: false,
  },
  SubscribeHand: {
    type: Boolean,
    default: false,
  },
  SubscribeLeg: {
    type: Boolean,
    default: false,
  },
  SubscribeShoulder: {
    type: Boolean,
    default: false,
  },
});

//2) validate password
userSchema.methods.validatePassword = async function (
  condidatePassword,
  userPassword
) {
  return await bcrypt.compare(condidatePassword, userPassword);
};
userSchema.pre("save", async function save(next) {
  if (!this.isModified("Password")) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.Password = await bcrypt.hash(this.Password, salt);
    this.ConfirmPassword = undefined;
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
