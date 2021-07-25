const express = require("express");
const routes = express.Router();
const verifyToken = require("../../controllers/rotasPrivadas/verifyToken");

routes.get("/asd", verifyToken, (req, res) => {
  res.statusCode = 200;
  res.send("deu certo hehe");

  console.log(req.headers.authorization);
});

module.exports = routes;
