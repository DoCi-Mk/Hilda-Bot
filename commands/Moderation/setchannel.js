const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const channelSchema = require('../../models/actionlog')

module.exports = {
    name: "setchannel",
    aliases: ['setlog'],
    description: "تنظیم چنل اکشن لاگ برای کامند های مدریشن",
    cooldown: 2,
    userPerms: ["ADMINISTRATOR"],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async(client, message, args) => {



        const newChannel = args[0] ? args[0] : message.channel.id


        currentChannel = await channelSchema.findOne({
            guild: message.guild.id
        }).exec();

        if (currentChannel) {
            channelSchema.findOne({ guild: message.guild.id }).exec().then(res => {
                if (res) {
                    res.channel = newChannel
                    res.user = message.author.tag
                    res.save()
                }
            })
        } else {
            new channelSchema({
                guild: message.guild.id,
                channel: newChannel,
                user: message.author.tag
            }).save();
        }
        message.reply(`**اکشن لاگِ** تمام کامند های مدریشن با موفقیت در چنل <#${newChannel}> ست شد ${emoji.Accept}\nشما با استفاده از این قابلیت میتوانید عملکرد ربات را در سرور خود مشاهده کنید ${emoji.Sepas}`)
        const Send = client.channels.cache.get(newChannel)
        Send.send(`${message.author} | این چنل به عنوان اکشن لاگ با موفقیت ست گردید ${emoji.Accept}`)
    }
}