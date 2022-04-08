const deploveSchema = require('../../models/newdeplove')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "add-deplove",
    aliases: ['adddeplove'],
    description: "اضافه کردن متن دکلمه",
    category: "OnlyOwner",
    premium: true,

    run: async (client, message, args) => {
        const Channel_Log = client.channels.cache.get(config.ChannelLog)

        const Text = args.join(' ')
        if (!Text) return message.reply(`لطفا لینک ویدیو یا عکس که میخواهید اضافه کنید هم وارد کنید ${emoji.decline}`)


        new deploveSchema({
            deplove: Text
        }).save();
        message.reply({ content: `ویدیو با موفقیت در دیتابیس ذخیره شد ${emoji.Accept}` })

        Channel_Log.send({
            content: `The ${message.author.tag} Adding **DepLove** Content To DataBase \n${emoji.Arrow} ${Text}`,
        })


    }

}

