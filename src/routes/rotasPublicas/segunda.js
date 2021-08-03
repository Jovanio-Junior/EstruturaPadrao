const express = require("express");
const routes = express.Router();
const rotas = require("./definy");

routes.get(`${rotas.PUBLIC_ROUTE_CONTATO}/teste`, (req, res) => {
  res.statusCode = 200;
  res.send("funciona");
});

module.exports = routes;
