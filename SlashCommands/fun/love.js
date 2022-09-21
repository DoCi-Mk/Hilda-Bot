const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "love",
    description: "علاقه شما نسبت به فرد دیگر",
    category: "Fun",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    options: [
        {
            name: 'user',
            description: 'گزارش خودتون را بنویسیــد',
            type: 6,
            required: false,
        },
    ],


    run: async (client, interaction, args, message) => {
        const userSecond = interaction.options.getUser('user');
        if (!userSecond)
            return interaction.followUp({
                content: `${interaction.user} ${emoji.Love} ${interaction.user}`,
                embeds:[
                    new MessageEmbed()
                    .setColor(config.color.blue)
                    .setDescription(`شما **${Math.floor(Math.random() * 100)}%** به خودتان علاقه مند هستید ${emoji.Love}`)
                ]
            })


            interaction.followUp({
                content: `${interaction.user} ${emoji.Love} ${userSecond}`,
                embeds:[
                    new MessageEmbed()
                    .setColor(config.color.blue)
                    .setDescription(`شما **${Math.floor(Math.random() * 100)}%** به ${userSecond} علاقه مند هستید ${emoji.Love}`)
                ]
            })

    },

};