const jwt = require("jsonwebtoken");

const verifyRefreshToken = async (req, res, next) => {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    token = bearerToken;

    jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          message: "Unauthorized access.",
        });
      } else {
        delete decoded.iat;
        delete decoded.exp;
        req.user = decoded;
      }
    });

    next();
  } else {
    res.status(403).json({
      message: "Unauthenticated access",
    });
  }
  next();
};
module.exports = verifyRefreshToken;
