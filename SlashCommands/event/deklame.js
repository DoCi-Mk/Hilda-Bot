const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const dbDeklame = require('../../models/newdeklame')


module.exports = {
  name: "deklame",
  category: "Event's",
  description: "متن های اماده برای دکلمه",
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, interaction, args, message) => {

    let Matn = await dbDeklame.find({
    }).exec()

    var Desc = Matn[Math.floor(Math.random() * Matn.length)];

    const deklameEmbed = new MessageEmbed()
      .setColor(config.color.blue)
      .setImage("https://cdn.discordapp.com/attachments/961264596440723536/1021739269502554122/bafda33cbb9dad2b.jpg")
      .setDescription(`*${Desc.deklame}**`)
      .setFooter(`${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }))
    await interaction.followUp({
      embeds: [deklameEmbed]
    });
  }
}