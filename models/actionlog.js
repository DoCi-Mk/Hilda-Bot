const m = require('mongoose')

module.exports = m.model('action', new m.Schema({
  guild: String,
  channel: String,
  user: String,
}, {
  collection: 'ActionLogs'
}))