const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  oriURL: {
    type: String,
    unique: true,
    trim: true,
    require: true
  },
  shortenURL: {
    type: String,
    require: true,
    default: ''
  }
})

module.exports = mongoose.model('URL', urlSchema)