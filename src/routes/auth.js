const express = require('express')
const { loginPost } = require('../controllers/Auth/login')
const { register } = require('../controllers/Auth/register')
const getToken = require('../middleware/getToken')
const verifyToken = require('../middleware/verifyToken')
const authRoutes = express.Router()

authRoutes
  .post('/login', loginPost)
  .post('/register', register)
  .get('/check', getToken, verifyToken, (req, res) => {
    res.sendStatus(200)
  })

module.exports = authRoutes