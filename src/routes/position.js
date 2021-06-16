const express = require('express')
const { postPosition, getPosition } = require('../controllers/Map/position')
const positionRoutes = express.Router()

positionRoutes
  .post('/', postPosition)
  .get('/', getPosition)

module.exports = positionRoutes