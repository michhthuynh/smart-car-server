const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const mail = require('./configs/mailSetup')
require('./configs/database')()

const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)
app.get('/send', (req, res) => {
  mail.sendMail({
    from: "payment of transition<smart.car.bk@gmail.com>",
    to: 'huynhhoang.st.97@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  })
  res.send('ok')
})

app.listen(5000, () => console.log('server is running at 5000'))