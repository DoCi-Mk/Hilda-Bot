const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu, DiscordAPIError, MessageAttachment } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')


module.exports = {
    name: "kiss",
    description: "بوسیدن فرد موردنظر",
    category: "Fun",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    options: [
        {
            name: 'user',
            description: 'کاربر رو وارد کنید',
            type: 6,
            required: true,
        },
    ],


    run: async (client, interaction, args, message) => {

        const user = interaction.options.getUser('user');
    
        interaction.followUp({
            content: `${interaction.user} 💋 ${user}`,
            embeds: [
                new MessageEmbed()
                .setTitle(`چه بوسه زیبایی`)
                .setImage("https://cdn.discordapp.com/attachments/961264596440723536/1022207954025455656/unknown.png")
                .setColor(config.color.blue)
            ]
        })
    },

};