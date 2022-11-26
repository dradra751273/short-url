const checkURL = require('url').URL


class urlErrorHandler {

  constructor(inputUrl, model, response) {
    this.inputUrl = inputUrl
    this.model = model
    this.response = response
  }

  isEmptyUrl() {
    return this.inputUrl.trim() === ''
  }

  async duplicatedUrls() {
    return await this.model.find({'oriURL': this.inputUrl}).lean()
  }

  isValidUrl() {
    try {
      new checkURL(this.inputUrl)
      return true
    } catch (err) {
      return false
    }
  }

  // Errors handler
  emptyUrlHandler() {
    let errData = null

    if (this.isEmptyUrl()) {
      errData = {
        inputUrl: this.inputUrl,
        errMsg: 'Empty URL, please try again!'
      }
      this.response.render('index', {errData})
    }

    return errData
  }

  async duplicatedUrlHandler() {
    let errData = null
    let isDuplicated = false
    let shortenUrl = null

    const dupUrls = await this.duplicatedUrls()
    if (dupUrls.length !== 0) {
      shortenUrl = dupUrls[0].shortenURL
      isDuplicated = true
    }

    if (isDuplicated && !this.isEmptyUrl()) {
      errData = {
        inputUrl: this.inputUrl,
        duplicatedUrl: shortenUrl,
        errMsg: 'URL already exists in Database!'
      }
      this.response.render('index', {errData})
    }

    return errData
  }

  invalidUrlHandler() {
    let errData = null

    if (!this.isValidUrl() && !this.isEmptyUrl()) {
      errData = {
        inputUrl: this.inputUrl,
        errMsg: 'URL cannot be reached, please try again!'
      }
      this.response.render('index', {errData})
    }

    return errData
  }

}


module.exports = urlErrorHandler


