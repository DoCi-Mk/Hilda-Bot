const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const channeldb = require('../../models/actionlog')
const prefixdb = require('../../models/prefix')

module.exports = {
    name: "setbanner",
    aliases: [],
    description: "تنظیم بنر برای سرور",
    cooldown: 2,
    userPerms: ["MANAGE_GUILD"],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_GUILD"],

    run: async (client, message, args) => {

        let channelLog = await channeldb.findOne({
            guild: message.guild.id,
        }).exec();

        let prefix = await prefixdb.findOne({
            guildid: message.guild.id
        }).exec();
        if (prefix == null) {
            prefix = config.prefix
        } else {
            prefix = prefix.prefix;
        }


        if(channelLog) {
            const ActionChannelLog = client.channels.cache.get(channelLog.channel)
        


        if (message.guild.premiumTier === "NONE" || message.guild.premiumTier === "TIER_1") {
            return message.reply(`برای قرار دادن بنر در سرور خود باید **بوست سرور** خود را به ابتدا **لول 2 یا 3** برسانید ${emoji.Smile}`)
        }
        if (!args[0]) return message.reply(`لطفا لینک بنری که میخواهید بزارید هم وارد کنید ${emoji.Denied}`)
        message.guild.edit({ banner: args[0] })
        ActionChannelLog.send({
            embeds: [
                new MessageEmbed()
                    .setDescription(`بنر سـرورِ \`${message.guild.name}\` در ساعت <t:${message.createdTimestamp.toString().slice(0, message.createdTimestamp.toString().length - 3)}:f> به بنر زیر توسط **${message.author.tag}** تغییر یافت ${emoji.Accept}`)
                    .setImage(args[0])
                    .setColor(config.DefaultColor)
            ]
        })

        return message.reply({
            embeds: [
                new MessageEmbed()
                    .setDescription(`بنر با موفقیت توسط **${message.author.tag}** تغییر یافت ${emoji.Accept}`)
                    .setImage(args[0])
                    .setColor(config.DefaultColor)
            ]
        })
    } else {
     message.reply(`شــما چنل **اکشن لاگ** را ست نکردید . ابتدا دستور زیر را در چنلی که میخواهید به عنوان **لاگ** ست شود تایپ کنید\n${emoji.Arrow} \`${prefix}setchannel\`\n\n**اکشن لاگ چیست ؟** چنلی هست که شما میتوانید ست کنید و عملکرد های مدیریتی سرور که از طریق **هیلدا** توسط کاربران انجام میشود را ببینید`)
    }

    }
}