const m = require('mongoose')

module.exports = m.model('hotchair', new m.Schema({
  hot: String
}, {
  collection: 'SandaliDagh'
}))