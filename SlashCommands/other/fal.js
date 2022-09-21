const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "fal",
    description: "فال حافظ شـما",
    category: "Other",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        let getInfo = async () => {
            let response = await axios.get(`https://api.falehafez.org/`);
            let info = response.data;
            return info;
        };
        let data = await getInfo();

        let poem = `${data.poem[0]} — ${data.poem[1]}\n${data.poem[2]} — ${data.poem[3]}\n${data.poem[4]} — ${data.poem[5]}`;

        let explanation = `${data.explanation}`


        let falEmbed = new MessageEmbed()
            .setColor(config.color.blue)
            .addField(
                `**شـعـر**`,
                `> ${poem}`
            )
            .addField(
                `**تعبیر**`,
                `> ${explanation}`)
            .setImage(
                "https://cdn.discordapp.com/attachments/1021307160497496084/1022055114262974514/5bb43414524ee68d.jpg"
            )
            .setFooter(`Source Fal By : im-parsa#9694`, interaction.user.avatarURL());
        interaction.followUp({ embeds: [falEmbed] });
    },
};
