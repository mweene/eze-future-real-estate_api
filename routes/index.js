const express = require("express");
const router = express.Router();

const [
  defaultRoute,
  getAllClients,
  getClientByID,
  createNewClient,
  updateClientByID,
  deleteClientByID,
  deleteAllClients,
] = require("../controllers");

router.get("/", defaultRoute);
router.get("/api/clients", getAllClients);
router.get("/api/clients/:clientID", getClientByID);
router.post("/api/clients", createNewClient);
router.put("/api/clients/:clientID", updateClientByID);
router.delete("api/clients/:clientID", deleteClientByID);
router.delete("api/clients", deleteAllClients);

module.exports = router;
