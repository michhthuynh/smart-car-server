const express = require('express')
const { postTag, getTag, postRegisterTag, postRenewTag } = require('../controllers/Map/tag')
const tagRoutes = express.Router()

tagRoutes
  .post('/', postTag)
  .post('/user/register', postRegisterTag)
  .post('/renew', postRenewTag)
  .get('/', getTag)

module.exports = tagRoutes