const jwt = require("jsonwebtoken");
const secretKey = require("../../config/jwt/secretKey");

function verifyToken(req, res, next) {
  console.log("verifyToken -> ");
  if (req.headers.authorization) {
    var token = req.headers.authorization.split(" ");
    if (token[0] == "Bearer") {
      var tok = 1;
      if (token.length == 3) {
        tok = 2;
      }

      jwt.verify(token[tok], secretKey, (err, decoded) => {
        if (!err) {
          console.log(decoded);
          next();
        } else {
          res.statusCode = 401;
          res.send(err);
          console.log(err + " <-");
        }
      });
    } else {
      res.statusCode = 401;
      res.send({ err: "O token informado não é valido" });
      console.log("O token informado não é valido <-");
    }
  } else {
    res.statusCode = 401;
    res.send({ err: "Token Não informado" });
    console.log("Token Não informado <-");
  }
}

module.exports = verifyToken;
