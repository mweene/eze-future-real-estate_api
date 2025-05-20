const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const routes = require("../routes");
require("dotenv").config();

module.exports = function (app) {
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(bodyParser.urlencoded());
  app.use("/", routes);
};
