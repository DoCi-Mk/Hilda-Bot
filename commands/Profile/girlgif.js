const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/girl-gif.json')

module.exports = {
      name: "ggif",
      aliases: ['girlgif'],
      description: "گـیـف پـروفایل دخـترونه ",
      cooldown: 2,
      userPerms: [],
      clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args) => {

    var Pictures = Data[Math.floor(Math.random() * Data.length)];


        const kissembed = new MessageEmbed()
        .setTitle(`گـیـف پـروفایل دخـترونه ${emoji.girl}`)
        .setImage(Pictures)
        .setColor(`RANDOM`)
        message.reply({
            embeds: [kissembed]
        });
}}