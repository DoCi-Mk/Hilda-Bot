const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/jorat.json')

module.exports = {
    name: "jorat",
    category: "Event's",
    description: "سوالات جنجالی برای جرئت",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],


    run: async (client, interaction, args, message) => {
        var Text = Data[Math.floor(Math.random() * Data.length)];
        interaction.followUp({ embeds: [
            new MessageEmbed()
            .setColor(config.color.blue)
            .setDescription(`${emoji.Jorat}〢**${Text}**`)
        ] })
    }
}