const express = require("express");
const routes = express.Router();
const login = require("../../controllers/rotasPrivadas/auth");

routes.post("/login", login);

module.exports = routes;
