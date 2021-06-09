const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "smart.car.bk@gmail.com",
    pass: "12345678x@X"
  }
})

module.exports.sendMail = (mailOption) => {
  transporter.sendMail(mailOption)
    .then(res => {
      console.log('Email sent: ' + res.response)
    })
    .catch(err => {
      console.log(err)
    })
}