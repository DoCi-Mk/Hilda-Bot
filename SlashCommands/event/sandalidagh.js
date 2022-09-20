const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/sandali-dagh.json')
const sddb = require('../../models/newsd')

module.exports = {
    name: "sandalidagh",
    category: "Event's",
    description: "سوالات جتجالی برای صندلی داغ",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],


    run: async (client, interaction, args, message) => {

        let Matn = await sddb.find({
        }).exec()
        
        var Text = Matn[Math.floor(Math.random() * Matn.length)];
    
        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(config.color.blue)
                    .setDescription(`${emoji.SandaliDagh}〢**${Text.hot}**`)
            ]
        })
    }
}