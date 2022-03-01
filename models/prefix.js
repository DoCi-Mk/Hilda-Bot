const m = require('mongoose')

module.exports = m.model('prefix', new m.Schema({
  guildid: String,
  prefix: String
}, {
    collection: 'prefixs'
  }))