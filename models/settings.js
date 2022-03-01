const m = require('mongoose')

module.exports = m.model('setting', new m.Schema({
    botname: String,
    voicechannel: String,
	initmessage: String
}, {
    collection: 'settings'
  }))