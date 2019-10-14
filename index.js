const express = require("express")

const app = express()
const jwt = require("jsonwebtoken")
const router = express.Router()

const tokens = []

router.post("/login", (req, res) => {
  let payload = {
    userId: 1,
    x: 1,
    y: 2
  }

  const accessToken = jwt.sign({ ...payload }, process.env.JWT_TOKEN_SECRET, {
    expiresIn: 30
  })
  const refreshToken = jwt.sign(
    { ...payload },
    process.env.JWT_REFRESH_TOKEN_SECRET
  )

  if (tokens.findIndex(t => t.userId === payload.userId) === -1) {
    tokens.push({ userId: payload.userId, refreshToken, accessToken })
  } else {
    res.json({
      message: "You are already logged in"
    })
  }

  res.json({
    message: "You are logged in successfully",
    accessToken,
    refreshToken
  })
})

router.post("/accessToken/:refreshToken", (req, res) => {
  let refreshToken = req.params.refreshToken
  let index = tokens.findIndex(t => t.refreshToken === refreshToken)
  if (index !== -1) {
    const accessToken = jwt.sign({ userId: 1 }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: 30
    })

    tokens[index].accessToken = accessToken
    return res.json({
      message: "Token regenerated",
      accessToken
    })
  }

  res.json({
    message: "Invalid refresh token"
  })
})

const Authenticated = (req, res, next) => {
  const accessToken = req.headers["x-access-token"]

  // decode token
  if (accessToken) {
    // verifies secret and checks exp
    jwt.verify(accessToken, process.env.JWT_TOKEN_SECRET, function(
      err,
      decoded
    ) {
      if (err) {
        return res
          .status(401)
          .json({ error: err, message: "Unauthorized access." })
      }
      req.user = {
        userId: 1,
        name: "Rayhan",
        email: "example@example.com"
      }
      next()
    })
  } else {
    // if there is no token
    // return an error
    return res.status(403).send({
      error: true,
      message: "No token provided."
    })
  }
}

router.post("/all-tokens", (req, res) => {
  res.json(tokens)
})

router.get("/secure", Authenticated, (req, res) => {
  res.json({
    message: "This is very secret information"
  })
})

app.use(router)

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
