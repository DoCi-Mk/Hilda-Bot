const sdSchema = require('../../models/newsd')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "addsd",
    aliases: ['asd'],
    description: "اضافه کردن متن دکلمه",
    category: "OnlyOwner",
    premium: true,

    run: async (client, message, args) => {
        const Channel_Log = client.channels.cache.get(config.ChannelLog)

        const Text = args.join(' ')
        if (!Text) return message.reply(`لطفا متن صندلی داغ که میخواهید اضافه کنید هم وارد کنید ${emoji.Denied}`)


        new sdSchema({
            hot: Text
        }).save();
        message.reply({ content: `متن **صندلی داغ** با موفقیت در دیتابیس ذخیره شد ${emoji.Accept}` })

        Channel_Log.send({
            embeds: [
                new MessageEmbed()
                .setAuthor(`SandaliDagh Log's`)
                    .setFooter(`${message.author.tag}`, message.author.avatarURL())
                    .setDescription(Text)
                    .setTimestamp()
                    .setColor('#2f3136')
            ]
        })


    }

}

