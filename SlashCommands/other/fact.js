const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "danesatni",
    description: "دانستنی های دنیا",
    category: "Other",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        let getInfo3 = async () => {

            let response3 = await axios.get('http://api.codebazan.ir/danestani/');
            let info3 = response3.data;
            return info3;
        };
        let danestaniText = await getInfo3();

        interaction.followUp({
            embeds: [
                new MessageEmbed()
                .setColor(config.color.blue)
                .setDescription(`**آیا میدانستید ؟** ${danestaniText}`)
            ]
        })
    }
}
