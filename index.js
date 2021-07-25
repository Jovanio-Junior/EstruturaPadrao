const express = require("express");
const middlewares = require("./src/config/middleware");
const rotas = require("./src/routes/rotas");

const app = express();

app.use(...middlewares);
app.use(rotas);

const host = "localhost";
const port = 3000;
app.listen(port, (err) => {
  if (!err) {
    console.log(`Servidor Inciado, escutando em:  ${host}:${port}`);
  } else {
    console.log(err);
  }
});
