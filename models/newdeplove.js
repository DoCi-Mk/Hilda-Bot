const m = require('mongoose')

module.exports = m.model('deplove', new m.Schema({
    deplove: String
}, {
  collection: 'deploves'
}))