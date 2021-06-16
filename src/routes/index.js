const express = require('express')
const authRoutes = require('./auth')
const positionRoutes = require('./position')
const tagRoutes = require('./tag')
const router = express.Router()

router
  .use('/auth', authRoutes)
  .use('/tag', tagRoutes)
  .use('/position', positionRoutes)


module.exports = router