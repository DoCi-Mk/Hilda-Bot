const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/sandali-dagh.json')

module.exports = {
    name: "hotchair",
    category: "Event's",
    aliases: ['sd', 'sandalidagh', 'hc'],
    description: "سوالات جتجالی برای صندلی داغ",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],


    run: async (client, message, args) => {
        
        var Text = Data[Math.floor(Math.random() * Data.length)];
        message.reply({content: `${Text} ${emoji.SandaliDagh}`})
    }
}