const mongoose = require('mongoose')
const password = ''
const DB_URI =
  process.env.MONGODB_URI ||
  `mongodb+srv://fushaowei:${password}@cluster0.plcfxth.mongodb.net/url_container?retryWrites=true&w=majority`

mongoose.connect(DB_URI)
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


module.exports = db