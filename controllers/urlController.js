const URL = require('../models/urlModel')
const urlErrorHandler = require('../utils/urlErrorHandler')
const {shortURLGenerator, searchDocsByShorthand} = require('../utils/urlUtils')


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
    const shortenURL = shortURLGenerator()

    await URL.create({
      'oriURL': inputUrl, 'shortenURL': shortenURL
    })

    const successData = {
      inputUrl, shortenURL, param: shortenURL.split('/').at(-1)
    }
    res.render('success', {successData})
  }
}


exports.deleteShortURL = async (req, res) => {
  const doc = await searchDocsByShorthand(URL, req.params['shorthand'])
  await URL.findByIdAndDelete(doc._id)
  res.redirect('/')
}


exports.redirectToWebsite = async (req, res) => {
  const doc = await searchDocsByShorthand(URL, req.params['shorthand'])
  if (doc) {
    res.redirect(doc.oriURL)
  } else {
    res.render('error')
  }

}