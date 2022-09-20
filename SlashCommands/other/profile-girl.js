const { MessageActionRow, MessageEmbed, MessageButton, Interaction } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/girl.json')

module.exports = {
    name: "girl-profile",
    description: " پـروفایل دخترونه",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        var Pictures = Data[Math.floor(Math.random() * Data.length)];


        const picturesEmbed = new MessageEmbed()
            .setTitle(`${emoji.Girl}〢پـروفایل دخترونه `)
            .setImage(Pictures)
            .setColor(config.color.blue)
        interaction.followUp({
            embeds: [picturesEmbed]
        });
    }
}