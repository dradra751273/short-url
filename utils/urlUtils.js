const URL = require('../models/urlModel')
const sample = (array) => {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

exports.shortURLGenerator = () => {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = []
    .concat(lowerCaseLetters.split(''))
    .concat(upperCaseLetters.split(''))
    .concat(numbers.split(''))

  let hashcode = ''
  for (let i = 0; i < 5; i++) {
    hashcode += sample(collection)
  }
  return `http://localhost:3000/${hashcode}`
}


exports.searchDocsByShorthand = async (model, shorthand) => {
  const docs = await model.find().lean()
  return docs.find((doc) => {
    return doc.shortenURL.includes(`/${shorthand}`)
  })
}