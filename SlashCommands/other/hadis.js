const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "hadis",
    description: "حدیث و سخن بزرگان",
    category: "Other",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        let getInfo3 = async () => {

            let response3 = await axios.get('http://api.codebazan.ir/hadis/');
            let info3 = response3.data;
            return info3;
        };
        let hadisText = await getInfo3();

        interaction.followUp({
            embeds: [
                new MessageEmbed()
                .setColor(config.color.blue)
                .setDescription(`**بزرگی میفرمایـد** ${hadisText}`)
            ]
        })
    },
}
