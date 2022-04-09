const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
  name: "haval",
  aliases: [],
  description: "درصد هول بودن شما ",
  cooldown: 2,
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args) => {

    const Darsad = [
      'https://cdn.discordapp.com/attachments/872099884151476255/875322806886334484/1.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322807712641084/2.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322808819920936/3.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322809788801034/4.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322810371813437/5.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322811462352966/6.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322814108946462/7.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322815568576562/8.png',
      'https://cdn.discordapp.com/attachments/872099884151476255/875322816470319164/9.png',
    ]

    var pic = Darsad[Math.floor(Math.random() * Darsad.length)];

    const emoji = [
      '<a:756506579838435369:874900274978881558>',
      '<a:756506607080308826:874900257568342026>',
      '<a:756506630538920046:874900257119543326>',
      '<a:756506647697948694:874900262895120415>',
      '<:869313338994196550:870641070516621403>',
    ]

    var emojies = emoji[Math.floor(Math.random() * emoji.length)];


    const kissembed = new MessageEmbed()
      .setAuthor('هَـــوَل 🤤')
      .setImage(pic)
      .setColor(config.DefaultColor)
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
  }
}