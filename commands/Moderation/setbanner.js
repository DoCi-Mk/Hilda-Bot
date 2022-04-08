const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
    name: "setbanner",
    aliases: [],
    description: "گـیـف پـروفایل پسـرونه",
    cooldown: 2,
    userPerms: ["MANAGE_GUILD"],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_GUILD"],

    run: async (client, message, args) => {


        if (!args[0]) return message.reply(`لطفا لینک بنری که میخواهید بزارید هم وارد کنید ${emoji.Denied}`)
        message.guild.edit({ banner: args[0] })
        message.channel.send({embeds: [
            new MessageEmbed()
            .setDescription(`بنر با موفقیت توسط **${message.author.tag}** تغییر یافت ${emoji.Accept}`)
            .setImage(args[0])
            .setColor(config.DefaultColor)
        ]})


    }
}