const { createToken } = require("../../lib/token");
const { generateUser } = require("../../lib/user");

const _login = (req, res) => {
  if (
    !(
      req.body.email === "example@example.com" &&
      req.body.password === "pa$$word"
    )
  ) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }
  const user = generateUser();
  const token = createToken(user);

  res.json({ token });
};

module.exports = _login;
