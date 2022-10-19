const express = require("express");
const bodyParser = require("body-parser");

const userRouter = require("./Routes/userRoutes");
const abdominalRouter = require("./Routes/abdominalRoutes");
const backRouter = require("./Routes/backRoutes");
const chestRouter = require("./Routes/chestRoutes");
const handRouter = require("./Routes/handRoutes");
const legRouter = require("./Routes/legRoutes");
const shoulderRouter = require("./Routes/shoulderRoutes");

app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use("/Gym/Users", userRouter);
app.use("/Gym/Abdominal", abdominalRouter);
app.use("/Gym/Back", backRouter);
app.use("/Gym/Chest", chestRouter);
app.use("/Gym/Hand", handRouter);
app.use("/Gym/Leg", legRouter);
app.use("/Gym/Shoulder", shoulderRouter);

module.exports = app;
