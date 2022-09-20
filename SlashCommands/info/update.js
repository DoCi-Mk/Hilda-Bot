const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const update = require('../../updatelog.json')


module.exports = {
    name : "updatelog",
    description : "تاریخچه آپدیت های بات",

  run: async (client, interaction, args) => {

  const updateLog = new MessageEmbed()
    .setAuthor(`آپدیــت های جـدید ربات` , client.user.avatarURL())
    .setDescription(`\`\`\`${update.update}\`\`\``)
    .setColor(config.color.blue)
    .setImage("https://cdn.discordapp.com/attachments/1021307160497496084/1021666581115326484/51e58d900a71662c.png")
    .setFooter(`${client.user.username} | Version : ${config.version}`, client.user.avatarURL())

  interaction.editReply({ embeds: [updateLog] })

  }}