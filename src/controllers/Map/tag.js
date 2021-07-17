
const { sendMail } = require("../../configs/mailSetup")
const UserModel = require("../../models/User")
const moment = require('moment-timezone');
moment.locale('vi')

module.exports.postTag = async (req, res) => {
  const id = req.body.id
  const result = await UserModel.find({ tag_id: id })
  if (result[0] !== undefined) {
    // TODO: update status user tag
    const { number } = result[0]
    // Check number
    if (number <= 0) {
      res.status(400).json({
        msg: "Tag invalid. Please renew tag"
      })
      return
    } else {
      const result = await UserModel.updateOne({ tag_id: id }, { number: number - 1 })
      if (result.ok === 1) {
        try {
          sendMail({
            from: "payment of transition<smart.car.bk@gmail.com>",
            // to: 'huynhhoang.st.97@gmail.com',
            to: "1512836@hcmut.edu.vn",
            subject: `Hóa đơn thanh toán #${Math.round(Math.random() * 10000000)}`,
            html: `<h3>Hóa đơn xe buýt số 15: BX. Miền Tây đến BX.An Sương</h3><h4>Giá vé: 7000đ/lượt</h4><h4>Ngày xuất hóa đơn: ${moment().format('LLL')}</h4><h4>Số lượt còn lại: ${number - 1}</h4>`
          })
        } catch (error) {
          console.log(error)
        }
        console.log("Update successfully")
        res.send("OK")
        return
      } else {
        console.log("Update failed!!!")
        res.sendStatus(503)
      }
    }
  } else {
    console.log("Request body: ", req.body)
    console.log('Tag invalid')
    res.status(400).json({
      msg: "Tag invalid"
    })
  }
}

module.exports.getTag = async (req, res) => {
  const listUser = await UserModel.find({})
  let ids = []
  listUser.forEach(user => {
    if (user.number > 0) {
      ids.push(JSON.parse(user.tag_id))
    }
  })

  res.send({
    ids: ids
  })
}
