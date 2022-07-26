const { createToken } = require("../../lib/token");
const { generateUser } = require("../../lib/user");

const _login = (req, res) => {
  const { email, password } = req.body;
  if (
    !email ||
    !password ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    password.length < 6 ||
    password.length > 20
  ) {
    return res.status(400).json({
      message: "Invalid payload",
    });
  }

  // match email and password
  if (!(email === "example@example.com" && password === "pa$$word")) {
    return res.status(400).json({
      message: "Invalid credentials",
    });
  }

  return res.json({
    token: createToken(generateUser()),
  });
};

module.exports = _login;
