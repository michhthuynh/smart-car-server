const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mail = require('./configs/mailSetup')
require('./configs/database')()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)

app.listen(5000, () => console.log('server is running at 5000'))