const express = require('express')
const { postTag, getTag, postRegisterTag, postRenewTag, addTag } = require('../controllers/Map/tag')
const tagRoutes = express.Router()

tagRoutes
  .post('/', postTag)
  .get('/', getTag)
  .post('/add', addTag)

module.exports = tagRoutes