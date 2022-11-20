const URL = require('../urlModel')
const db = require('../../config/mongoose')


const urlData = [
  {
    oriURL: 'https://www.google.com/',
    shortenURL: 'https//clean-url.com/abYk1'
  },
  {
    oriURL: 'https://medium.com/',
    shortenURL: 'https//clean-url.com/@dU32'
  }
]

db.once('open', async () => {
  const docs = await URL.insertMany(urlData)
  console.log(docs)
})