const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/girl-pic.json')

module.exports = {
    name: "gpic",
    aliases: ['girlpic'],
    description: "عکس پـروفایل دخـترونه ",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, message, args) => {


        var Pictures = Data[Math.floor(Math.random() * Data.length)];



        const kissembed = new MessageEmbed()
            .setTitle(`عـکـس پـروفایل دخـترونه ${emoji.girl}`)
            .setImage(Pictures)
            .setColor(`RANDOM`)
        message.reply({
            embeds: [kissembed]
        });
    }
}