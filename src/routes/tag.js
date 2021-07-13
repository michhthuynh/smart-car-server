const express = require('express')
const { postTag, getTag, postRegisterTag, postRenewTag } = require('../controllers/Map/tag')
const tagRoutes = express.Router()

tagRoutes
  .post('/', postTag)
  .get('/', getTag)

module.exports = tagRoutes