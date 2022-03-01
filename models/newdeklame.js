const m = require('mongoose')

module.exports = m.model('deklame', new m.Schema({
  deklame: String
}, {
  collection: 'deklames'
}))