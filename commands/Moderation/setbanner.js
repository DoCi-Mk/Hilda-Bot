const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji-exp')
const config = require('../../config.json')

module.exports = {
    name: "setbanner",
    aliases: [],
    description: "گـیـف پـروفایل پسـرونه",
    cooldown: 2,
    userPerms: ["MANAGE_GUILD"],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_GUILD"],

    run: async (client, message, args) => {


        if (!args[0]) return
        message.guild.edit({ banner: args[0] })
        message.channel.send('Ok ! Banner Changed')


    }
}