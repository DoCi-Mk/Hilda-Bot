const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/jorat.json')

module.exports = {
    name: "jorat",
    category: "Games 🎲",
    aliases: ['j'],
    description: "سوالات جنجالی برای جرئت",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, message, args) => {

        var Text = Data[Math.floor(Math.random() * Data.length)];

        const picembed = new MessageEmbed()
            .setColor('#2f3136')
            .setDescription(`${emoji.jorat} **${Text}**`)
        await message.reply({
            embeds: [picembed]
        });
    }
}