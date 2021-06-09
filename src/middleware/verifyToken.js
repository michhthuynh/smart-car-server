const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
  jwt.verify(res.locals.token, "secret", (err, data) => {
    if (err) {
      res.status(403).json({
        message: '403 Forbidden'
      })
      return
    }
    res.locals.username = data.username
    next()
  })
}

module.exports = verifyToken