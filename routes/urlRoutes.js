const express = require('express')
const urlController = require('../controllers/urlController')

// Create router
const router = express.Router()

router.route('/')
  .get(urlController.showHomePage)
  .post(urlController.createShortURL)

router.route('/delete/:shorthand')
  .get(urlController.deleteShortURL)

module.exports = router