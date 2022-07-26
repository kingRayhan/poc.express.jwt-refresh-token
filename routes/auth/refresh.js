const { createToken } = require("../../lib/token");

const _refresh = (req, res) => {
  const token = createToken(req.user);
  res.json({
    token,
  });
};

module.exports = _refresh;
