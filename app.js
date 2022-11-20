const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

// Customized setting
require('./config/mongoose')

// PORT
const PORT = process.env.PORT || 3000

// Initialize app
app = express()

// 1) Set app view engine
app.engine('hbs', exphbs.engine({defaultLayout: 'main', extname: 'hbs'}))
app.set('view engine', 'hbs')

// 2) App middleware
app.use(express.static('./'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

// 3) Start server
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})

