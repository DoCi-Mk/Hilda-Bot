const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')


module.exports = {
  name: "stats",
  description: "اطلاعات ربات",
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, interaction, args) => {
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`Support ${client.user.username}`)
          .setStyle("LINK")
          .setURL(config.support)
      )
      .addComponents(
        new MessageButton()
          .setLabel(`Vote ${client.user.username}`)
          .setStyle("LINK")
          .setURL(config.vote)
      )

    client.users.fetch("500740143532212245").then(DoCi => {
      const statsMessage = new MessageEmbed()
        .setAuthor(`Hilda Bot Stat's`, client.user.avatarURL())
        .addFields(
          { name: `${emoji.Developer}Developer`, value: `${emoji.Blank}${DoCi.tag}`, inline: false },
          { name: `${emoji.Guild}Guild's`, value: `${emoji.Blank}${client.guilds.cache.size}`, inline: false },
          { name: `${emoji.Members}Member's`, value: `${emoji.Blank}${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, inline: false },
          { name: `${emoji.Database}Database`, value: `${emoji.Blank}Connected !`, inline: false },
          { name: `${emoji.Ping}Ping`, value: `${emoji.Blank}${client.ws.ping}`, inline: false },
          { name: `${emoji.Version}Version`, value: `${emoji.Blank}${config.version}`, inline: false },
        )
        .setColor(config.color.blue)
        .setThumbnail(client.user.avatarURL())
        .setImage("https://cdn.discordapp.com/attachments/961264596440723536/1021126680015814757/stats.jpg")
        .setFooter(`Copyright © 2022 Observers™️ . All rights reserved | Made by ${DoCi.tag}`)

      interaction.followUp({
        embeds: [statsMessage],
        components: [row]
      })
    })
  }

};