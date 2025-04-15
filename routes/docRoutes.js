const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("docs", { title: "EzeEsates-API" });
});

module.exports = router;
