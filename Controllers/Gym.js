const Abdominal = require("../Models/abdominalModel");
const Back = require("../Models/backModel");
const Chest = require("../Models/chestModel");
const Hand = require("../Models/handModel");
const Leg = require("../Models/legModel");
const Shoulder = require("../Models/shoulderModel");

// Create new Abdominal List by admin
exports.addNewList = factory.Add(Abdominal);

// Create new Back List by admin
exports.addNewList = factory.Add(Back);

// Create new Chest List by admin
exports.addNewList = factory.Add(Chest);

// Create new Hand List by admin
exports.addNewList = factory.Add(Hand);

// Create new Leg List by admin
exports.addNewList = factory.Add(Leg);

// Create new Shoulder List by admin
exports.addNewList = factory.Add(Shoulder);

// Get all exercices of shoulder list
exports.findAllExercice = factory.Execices(Shoulder);

// Get all exercices of Leg list
exports.findAllExercice = factory.Execices(Leg);

// Get all exercices of Hand list
exports.findAllExercice = factory.Execices(Hand);

// Get all exercices of Chest list
exports.findAllExercice = factory.Execices(Chest);

// Get all exercices of Back list
exports.findAllExercice = factory.Execices(Back);

// Get all exercices of Abdominal list
exports.findAllExercice = factory.Execices(Abdominal);
