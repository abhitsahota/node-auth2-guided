const jwt = require('jsonwebtoken')
const secrets = require('../config/secrets')

module.exports = (req, res, next) => {
  // add code here to verify users are logged in
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
      err ? res.sendStatus(401) : req.decodedJWT = decodeToken
      next()
    })
  } else {
    res.sendStatus(401)
  }
}
