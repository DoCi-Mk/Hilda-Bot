const { MessageActionRow, MessageEmbed, MessageButton, Interaction } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/boy.json')

module.exports = {
    name: "boy-profile",
    description: " پـروفایل پسـرونه",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        var Pictures = Data[Math.floor(Math.random() * Data.length)];


        const picturesEmbed = new MessageEmbed()
            .setTitle(`${emoji.Boy}〢پـروفایل پسـرونه `)
            .setImage(Pictures)
            .setColor(config.color.blue)
        interaction.followUp({
            embeds: [picturesEmbed]
        });
    }
}