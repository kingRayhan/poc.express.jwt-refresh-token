const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authenticated = require("./middlewares/authenticated");
const verifyRefreshToken = require("./middlewares/verifyRT");
const app = express();
const router = express.Router();

app.use(cors());
app.use(express.json());

router.get("/", (_, res) => {
  res.json({
    message: "Refresh token based jwt authentication dummy API",
    repository:
      "https://github.com/kingRayhan/dummy-jwt-refresh-token-api#readme",
    author: {
      name: "King Rayhan",
      email: "rayhan.dev.bd@gmail.com",
      github: "https://github.com/kingrayhan",
      twitter: "https://twitter.com/rayhan095",
      instagram: "https://www.instagram.com/king_rayhan/",
    },
  });
});

router.post("/auth/login", require("./routes/auth/login"));
router.post(
  "/auth/refresh",
  verifyRefreshToken,
  require("./routes/auth/refresh")
);
router.get("/auth/me", authenticated, require("./routes/auth/me"));
router.get("/protected-route", authenticated, (req, res) => {
  res.json({
    message: "This is very secret information",
  });
});

app.use(router);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
