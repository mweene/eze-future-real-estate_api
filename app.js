require('dotenv').config();
const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", routes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({error: 'Internal server error'})
})

module.exports = app;
