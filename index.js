const express = require("express");
const cors = require("cors");
const app = express();
const { createToken } = require("./lib/token");
const { generateUser } = require("./lib/user");
const authenticated = require("./middlewares/authenticated");
const verifyRefreshToken = require("./middlewares/verifyRT");
const router = express.Router();

app.use(cors());
app.use(express.json());

router.post("/auth/login", (req, res) => {
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

  res.json({
    token,
  });
});

router.post("/auth/refresh/", verifyRefreshToken, (req, res) => {
  const token = createToken(req.user);
  res.json({
    token,
  });
});

router.get("/auth/me", authenticated, (req, res) => {
  res.json({
    data: req.user,
  });
});

router.get("/secure", authenticated, (req, res) => {
  res.json({
    message: "This is very secret information",
  });
});

app.use(router);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
