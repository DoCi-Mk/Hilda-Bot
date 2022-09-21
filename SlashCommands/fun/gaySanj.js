const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
    name: "gaysanj",
    description: "درصد گی بودن شما دوست عزیز",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {


        const emoji = [
            '<:805531742176804944:874374479235670086>',
            '<:810981901095141407:862365029969690626>',
            '<:810983797709078558:862366006760833035>',
            '<:814157373039575080:862366010510016524>',
            '<:846336357496651796:862366010891173918>',
            '<:851138943403163658:856794040733663242>',
            '<:854029180371337216:862366004801699860>',
        ]

        var emojies = emoji[Math.floor(Math.random() * emoji.length)];

        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(config.color.blue)
                    .setDescription(`** دوست عزیز شما ${Math.floor(Math.random() * 100)}% گــی هستید ${emojies}**`)
            ]
        })
    }
}