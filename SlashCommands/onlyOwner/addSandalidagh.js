const sdSchema = require('../../models/newsd')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "add-sandalidagh",
    description: "اضافه کردن متن صندلی داغ",
    category: "OnlyOwner",
    handler: true,
    options: [
        {
            name: 'text',
            description: 'سوال صندلی داغ خود را وارد کنید',
            type: 3,
            required: true,
        },
    ],

    run: async (client, interaction, args, message) => {
        const channelLog = client.channels.cache.get(config.channel.otherLogs)


        const text = interaction.options.getString('text');


        new sdSchema({
            hot: text
        }).save();

        interaction.followUp({ content: `متن **صندلی داغ** توسط **${interaction.user.tag}** با موفقیت در **دیتابیس** ذخیره شد ${emoji.Accept}` })

        channelLog.send({
            embeds: [
                new MessageEmbed()
                .setAuthor(`تاریخچه اضافه شدن سوال صندلی داغ`)
                    .setFooter(`${interaction.user.tag}`, interaction.user.avatarURL())
                    .setDescription(text)
                    .setTimestamp()
                    .setColor('#2f3136')
            ]
        })


    }

}

