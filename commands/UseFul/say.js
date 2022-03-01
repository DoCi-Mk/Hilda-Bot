const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
    name: "say",
    category: "⛔️ Moderation Commands",
    description: "تکرار کردن حرف شما",
    usage: ",say TEXT",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS","MANAGE_MESSAGE"],
    run: async (client, message, args) => {

        message.delete()

        const say = args.join(" ")

        if (message.content.includes('@everyone')) return message.channel.send(`این کلمه را نمیتوان استفاده کرد ${emoji.smiling}`)
        if (message.content.includes('@here')) return message.channel.send(`این کلمه را نمیتوان استفاده کرد ${emoji.smiling}`)
        if (!say) return message.channel.send(`**لطفا متنی که میخواهید ارسال شود را تایپ کنید ${emoji.sepas}**`);
        message.channel.send(say)
    }
}
