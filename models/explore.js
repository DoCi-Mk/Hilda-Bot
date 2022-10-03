const m = require('mongoose')

module.exports = m.model('explore', new m.Schema({
  guild: String,
  channel: String,
  user: String,
}, {
  collection: 'ExploreChannel'
}))