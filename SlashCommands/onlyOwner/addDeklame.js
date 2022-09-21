const deklameSchema = require('../../models/newdeklame')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "add-deklame",
    description: "اضافه کردن متن دکلمه",
    category: "OnlyOwner",
    handler: true,
    options: [
        {
            name: 'text',
            description: 'متن دکلمه خود را وارد کنید',
            type: 3,
            required: true,
        },
    ],

    run: async (client, interaction, args, message) => {

        const channelLog = client.channels.cache.get(config.channel.otherLogs)

        const text = interaction.options.getString('text');


        new deklameSchema({
            deklame: text
        }).save();

        interaction.followUp({ content: `متن **دکلمه** با موفقیت توسط **${interaction.user.tag}** در **دیتابیس** ذخیره شد ${emoji.Accept}` })

        channelLog.send({
            embeds: [
                new MessageEmbed()
                    .setAuthor(`تاریخچه اضافه شدن دکلمه`)
                    .setFooter(`${interaction.user.tag}`, interaction.user.avatarURL())
                    .setDescription(text)
                    .setTimestamp()
                    .setColor(config.color.blue)
                    .setThumbnail(interaction.user.avatarURL())
            ]
        })


    }

}

