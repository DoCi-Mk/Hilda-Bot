const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/boy-gif.json')

module.exports = {
      name: "bgif",
      aliases: ['boygif'],
      description: "گـیـف پـروفایل پسـرونه",
      cooldown: 2,
      userPerms: [],
      clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args) => {

    var Pictures = Data[Math.floor(Math.random() * Data.length)];


        const kissembed = new MessageEmbed()
        .setTitle(`گـیـف پـروفایل پسـرونه ${emoji.Boy}`)
        .setImage(Pictures)
        .setColor(config.DefaultColor)
        message.reply({
            embeds: [kissembed]
        });
}}