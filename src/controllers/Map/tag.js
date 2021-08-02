
const { sendMail } = require("../../configs/mailSetup")
const UserModel = require("../../models/User")
const moment = require('moment-timezone');
const TagModel = require("../../models/Tag");
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


module.exports.registerTag = async (req, res) => {
  const arrayValid = ["366556677", "366556688", "366556699"]
  const { username, tag_id, series } = req.body
  const query = await TagModel.findOne({ tag_id: tag_id })
  if (!query) {
    res.sendStatus(400)
    return
  }
  if (!arrayValid.includes(series)) {
    res.sendStatus(400)
    return
  }
  const user = await UserModel.find({ username })
  const result = await UserModel.updateOne({ username: username }, { tag_id: tag_id, number: user[0].number + 5 })
  if (result.ok === 1) {
    console.log("Register successfully")
    res.send("OK")
    return
  } else {
    console.log("Cannot connect mongodb...")
    res.status(503).json({
      msg: "Cannot update Register..."
    })
  }

}


module.exports.addTag = async (req, res) => {
  const { tag_id } = req.body
  const query = await TagModel.findOne({ tag_id })

  if (!query) {
    await TagModel.create({
      tag_id
    })
    res.send("ok")
    return
  }
  res.sendStatus(409)
}