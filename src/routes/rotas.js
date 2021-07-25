const rotasPrivadas = require("./rotasPrivadas");
const rotasPublicas = require("./rotasPublicas");

module.exports = [...rotasPrivadas, ...rotasPublicas];
