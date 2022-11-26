const URL = require('../models/urlModel')
const urlErrorHandler = require('../utils/urlErrorHandler')
const {shortURLGenerator} = require('../utils/urlUtils')


exports.showHomePage = async (req, res) => {
  res.render('index')
}


exports.createShortURL = async (req, res, next) => {
  const inputDoc = await req.body
  const inputUrl = inputDoc['inputUrl']
  const errHandler = new urlErrorHandler(inputUrl, URL, res)

  /**
   * ★ Error handler ★
   * 1) empty url
   * 2)duplicated url in MongoDB,
   * 3)invalid url that cannot connect
   * */
  const errData =
    errHandler.emptyUrlHandler() ||
    await errHandler.duplicatedUrlHandler() ||
    errHandler.invalidUrlHandler()

  // ★Create short URL★
  if (errData === null) {
    await URL.create({
      'oriURL': inputUrl, 'shortenURL': shortURLGenerator()
    })
    const successData = await URL.findOne({oriURL: inputUrl}).lean()
    res.render('success', {successData})
  }
}