const jwt = require("jsonwebtoken");
const secretKey = require("../../config/jwt/secretKey");
const jwtOption = require("../../config/jwt/options");
const db = require("../../../db");

function login(req, res) {
  console.log("Post -> /login ");
  console.log("dados: ", req.body.login);

  try {
    if (req.body.login) {
      var user = db.find((u) => u.email == req.body.login);
      if (user) {
        if (user.password == req.body.password) {
          var result = Math.random().toString(36).substr(2, 99);
          jwt.sign(
            {
              user: user,
              cifra: result,
              data: Date.now(),
            },
            secretKey,
            { ...jwtOption.sign },
            (err, token) => {
              if (!err) {
                console.log({
                  status: "token gerado!",
                  token: token,
                  result: result,
                  data: Date.now(),
                });
                res.setHeader("Authorization", "Bearer " + token);
                res.statusCode = 200;
                res.send({
                  statusCode: 200,
                  mensagem: "sucesso",
                });
              } else {
                console.log(err);
                res.statusCode = 500;
                res.send({ err: "Erro interno do servidor" });
              }
            }
          );
        } else {
          res.statusCode = 404;
          res.send({ err: "Usuario ou Senha incorretos!!" });
          console.log("A senha informada está incorreta!!");
        }
      } else {
        res.statusCode = 404;
        res.send({ err: "Usuario ou Senha incorretos!!" });
        console.log("Usuario não consta na base de dados!!");
      }
    } else {
      res.statusCode = 401;
      res.send({ err: "O campo de Login não foi informado!!" });
      console.log("O campo de Login não foi informado!!");
    }
  } catch (err) {}
}

module.exports = login;
