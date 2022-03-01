const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const update = require('../../updatelog.json')


module.exports = {
    name : "updatelog",
    description : "Recent Bot Updates",

  run: async (client, interaction, args) => {

    const invite = new MessageActionRow()
    .addComponents(
      new MessageButton()
        .setURL(`${config.botinvite}`)
        .setLabel(`Invite OnlyNude Bot`)
        .setStyle('LINK')
    )
    .addComponents(
      new MessageButton()
      .setURL(v.support)
        .setLabel(`Support OnlyNude Bot`)
        .setStyle('LINK')
    )
    .addComponents(
      new MessageButton()
        .setURL(`${v.vote}`)
        .setLabel(`Vote OnlyNude Bot`)
        .setStyle('LINK')
    )





  const update_log = new MessageEmbed()
    .setAuthor(`Update Log • Curnet Version : ${v.version_bot}`)
    .setDescription(`\`\`\`${update.update}\`\`\``)
    .setColor('#2f3136')
    .setFooter('If you have questions about the latest bot updates, join the support server')

  interaction.editReply({ embeds: [update_log] , components: [invite] })

  }}