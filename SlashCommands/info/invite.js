const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
const emoji = require('../../emoji')
const client = require('../../index')
const config = require('../../config.json')

module.exports = {
  name: "invite",
  description: "دعوت ربات",

  run: async (client, interaction, args, message) => {


    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setURL(`${config.inviteLink}`)
          .setLabel(`Invite ${client.user.username}`)
          .setStyle('LINK')
      )
      .addComponents(
        new MessageButton()
          .setURL(config.support)
          .setLabel(`Support ${client.user.username}`)
          .setStyle('LINK')
      )
      .addComponents(
        new MessageButton()
        .setURL(config.vote)
          .setLabel(`Vote ${client.user.username}`)
          .setStyle('LINK')
      )


    const invite = new MessageEmbed()
    .setAuthor(client.user.username , client.user.avatarURL())
    .setDescription(`**خوشحالم که میخوای منو به سرورت دعوت کنی (:\nبرای دعوت من به سرورت کافیه روی دکمه زیر که نوشته __Invite ${client.user.username}__ کلیک کنی**`)
    .setColor(config.color.blue)
    .setImage('https://cdn.discordapp.com/attachments/961264596440723536/1021132771915210803/invite.jpg')

    interaction.followUp({ embeds: [invite], components: [row] })

  }
};