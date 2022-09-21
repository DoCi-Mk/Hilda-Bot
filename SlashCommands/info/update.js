const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const config = require('../../config.json')
const emoji = require('../../emoji')


module.exports = {
  name: "updatelog",
  description: "تاریخچه آپدیت های بات",

  run: async (client, interaction, args) => {

    const updateLog = new MessageEmbed()
      .setAuthor(`آپدیــت های جـدید ربات`, client.user.avatarURL())
      .setDescription(
        `${emoji.Dot}〢\`انتقال تمام دستور ها به / کامند\`
         ${emoji.Dot}〢\`تغییر دیزاین و پروفایل بات\`
         ${emoji.Dot}〢\`تغییر ورژن ربات از بتا به 2\`
         ${emoji.Dot}〢\`مرتب شدن دستورها\``
      )
      .setColor(config.color.blue)
      .setImage("https://cdn.discordapp.com/attachments/1021307160497496084/1021666581115326484/51e58d900a71662c.png")
      .setFooter(`${client.user.username} | Version : ${config.version}`, client.user.avatarURL())

    interaction.editReply({ embeds: [updateLog] })

  }
}