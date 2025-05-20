const db = require("../db");

const defaultRoute = (req, res) => {};
const getAllClients = (req, res) => {};
const getClientByID = (req, res) => {};
const createNewClient = (req, res) => {};
const updateClientByID = (req, res) => {};
const deleteClientByID = (req, res) => {};
const deleteAllClients = (req, res) => {};

module.exports = [
  defaultRoute,
  getAllClients,
  getClientByID,
  createNewClient,
  updateClientByID,
  deleteClientByID,
  deleteAllClients,
];
