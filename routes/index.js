const express = require("express");
const router = express.Router();
const clientController = require('../controllers/clientControllers');
const dummyData = require("../db/data").default;

router.get("/api/clients", (req, res) => {
  res.send(dummyData);
});

router.get("/api/clients/:clientID", (req, res) => {
  const id = parseInt(req.params.clientID);
  const client = dummyData.find((client) => client.id === id);

  res.send(client);
});

router.post("/api/clients", (req, res) => {
  const id = dummyData.length + 1;
  dummyData.push({ id, ...req.body });

  res.status(201).send({ date: "resource added successfully" });
});

router.put("/api/clients/:clientID", (req, res) => {
  const id = parseInt(req.params.clientID);
  if (!id) res.status(401).send({ message: "resource not found" }); //check this out first

  const index = dummyData.findIndex((item) => item.id === id);
  dummyData[index] = { id, ...req.body };

  res.status(200).send({ message: "resource updated" });
});

router.delete("/api/clients/:clientID", (req, res) => {
  const id = parseInt(req.params.clientID);
  dummyData = dummyData.filter((data) => data.id !== id);

  res.send({ message: "successfully deleted the item" });
});

router.get('/', clientController.getClients);

module.exports = router;
