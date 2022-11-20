const URL = require('../models/urlModel')


exports.showHomePage = async (req, res) => {
  res.render('index')
}