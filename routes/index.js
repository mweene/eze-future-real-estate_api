const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`client ID: ${id}`);
});

module.exports = router;
