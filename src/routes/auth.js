const express = require('express')
const { loginPost } = require('../controllers/Auth/login')
const { register } = require('../controllers/Auth/register')
const { remove } = require('../controllers/Auth/remove')
const { registerTag } = require('../controllers/Map/tag')
const getToken = require('../middleware/getToken')
const verifyToken = require('../middleware/verifyToken')
const authRoutes = express.Router()

authRoutes
  .post('/login', loginPost)
  .post('/register', register)
  .post('/registerTag', registerTag)
  .get('/check', getToken, verifyToken, (req, res) => {
    res.sendStatus(200)
  })
  .delete('/remove', remove)

module.exports = authRoutes