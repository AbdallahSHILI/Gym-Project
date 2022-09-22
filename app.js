const bodyParser = require("body-parser");

const express = require("express");

const userRouter = require("./Routes/userRoutes");

app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.use("/v2/users", userRouter);

module.exports = app;
