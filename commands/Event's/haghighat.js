const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/haghighat.json')

module.exports = {
    name: "haghighat",
    category: "Event's",
    aliases: ['h'],
    description: "سوالات جنجالی برای حقیقت",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run : async(client, message, args) => {  


        var Text = Data[Math.floor(Math.random() * Data.length)];
        message.reply({content: `${emoji.Haghighat}〢${Text}`})
  }
  }