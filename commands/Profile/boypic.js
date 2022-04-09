const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/boy-pic.json')

module.exports = {
      name: "bpic",
      aliases: ['boypic'],
      description: "عکس پـروفایل پسـرونه",
      cooldown: 2,
      userPerms: [],
      clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args) => {

    var Pictures = Data[Math.floor(Math.random() * Data.length)];

        const kissembed = new MessageEmbed()
        .setTitle(`عـکـس پـروفایل پسـرونه ${emoji.Boy}`)
        .setImage(Pictures)
        .setColor(config.DefaultColor)
        message.reply({
            embeds: [kissembed]
        });
}}