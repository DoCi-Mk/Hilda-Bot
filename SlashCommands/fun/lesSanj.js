const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
    name: "lessanj",
    description: "درصد لز بودن شما دوست عزیز",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        const emoji = [
            '<a:756510199115677836:874900295203827753>',
            '<a:756510197400338553:874900294922813470>',
            '<a:756510183437369471:874900290162282496>',
            '<a:756510180471996467:874900289222754304>',
            '<a:756510176537870436:874900288010612746>',
            '<a:756510175443026050:874900294138466334>',
            '<a:756510145823113267:874900289306656788>',
        ]

        var emojies = emoji[Math.floor(Math.random() * emoji.length)];

        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(config.color.blue)
                    .setDescription(`**دوست عزیز شما ${Math.floor(Math.random() * 100)}% لــز هستیـد ${emojies}**`)
            ]
        })
    }
}