const express = require('express')
const urlController = require('../controllers/urlController')

// Create router
const router = express.Router()

router.route('/')
  .get(urlController.showHomePage)
  .post(urlController.createShortURL)

module.exports = router