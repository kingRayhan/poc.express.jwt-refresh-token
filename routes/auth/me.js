const _me = (req, res) => {
  res.json({
    data: req.user,
  });
};

module.exports = _me;
