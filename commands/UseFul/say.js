const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
    name: "say",
    category: "⛔️ Moderation Commands",
    description: "Says text",
    usage: ",say TEXT",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    run: async (client, message, args) => {

        message.delete()

        const say = args.join(" ")

        if (message.content.includes('@everyone')) return message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor('#ff0a26')
                    .setDescription('**این کلمه را نمیتوان استفاده کرد <a:850335306657955840:856794054540394526> **')
            ]
        })
        if (message.content.includes('@here')) return message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor('#ff0a26')
                    .setDescription('**این کلمه را نمیتوان استفاده کرد <a:850335306657955840:856794054540394526> **')
            ]
        })
        if (!say) return message.channel.send(`**لطفا متنی که میخواهید ارسال شود را تایپ کنید **`);
        message.channel.send(say)
    }
}
