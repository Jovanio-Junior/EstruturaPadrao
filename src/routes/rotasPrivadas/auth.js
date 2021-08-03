const express = require("express");
const routes = express.Router();
const login = require("../../controllers/rotasPrivadas/auth");
const routesNames = require("./definy");

routes.post(routesNames.PRIVATE_ROUTE_LOGIN, login);

module.exports = routes;
