const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/haghighat.json')

module.exports = {
    name: "haghighat",
    category: "Event's",
    description: "سوالات جنجالی برای حقیقت",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {
        var Text = Data[Math.floor(Math.random() * Data.length)];
        interaction.followUp({ embeds: [
            new MessageEmbed()
            .setColor(config.color.blue)
            .setDescription(`${emoji.Haghighat}〢*${Text}**`)
        ] })
    }
}