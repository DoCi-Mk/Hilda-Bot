const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const dbdeklame = require('../../models/newdeklame')


module.exports = {
  name: "deklame",
  category: "Event's",
  description: "متن های اماده برای دکلمه",
  cooldown: 2,
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args) => {

    let Matn = await dbdeklame.find({
    }).exec()

    var Desc = Matn[Math.floor(Math.random() * Matn.length)];

    const picembed = new MessageEmbed()
      .setColor('#e4cd5c')
      .setDescription(`${emoji.Deklame} ${Desc.deklame}`)
      // .setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
    await message.reply({
      embeds: [picembed]
    });
  }
}