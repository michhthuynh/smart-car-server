const express = require('express')
const { postPosition } = require('../controllers/Map/position')
const { postTag, getTag } = require('../controllers/Map/tag')
const authRoutes = require('./auth')
const router = express.Router()

router
  .use('/auth', authRoutes)
  .post('/position', postPosition)
  .post('/tag', postTag)
  .get('/tag', getTag)

module.exports = router