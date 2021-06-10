const express = require('express')
const { postPosition } = require('../controllers/Map/position')
const authRoutes = require('./auth')
const tagRoutes = require('./tag')
const router = express.Router()

router
  .use('/auth', authRoutes)
  .use('/tag', tagRoutes)
  .post('/position', postPosition)


module.exports = router