const { MessageActionRow, MessageEmbed, MessageButton, Interaction } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
    name: "haval",
    aliases: [],
    description: "درصد هول بودن شما ",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        const havalPhotos = [
            'https://cdn.discordapp.com/attachments/872099884151476255/875322806886334484/1.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322807712641084/2.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322808819920936/3.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322809788801034/4.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322810371813437/5.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322811462352966/6.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322814108946462/7.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322815568576562/8.png',
            'https://cdn.discordapp.com/attachments/872099884151476255/875322816470319164/9.png',
        ]

        var randomPhotos = havalPhotos[Math.floor(Math.random() * havalPhotos.length)];

        const havalEmbed = new MessageEmbed()
            .setImage(randomPhotos)
            .setColor(config.color.blue)
        interaction.followUp({ embeds: [havalEmbed] })
    }
}