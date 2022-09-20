const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/panjsanie.json')

module.exports = {
    name: "5sanie",
    category: "Event's",
    description: "ایونتِ بازیِ 5 ثانیه",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        var Text = Data[Math.floor(Math.random() * Data.length)];

        await interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .setColor(config.color.blue)
                    .setDescription(`**${Text}**`)
            ]
        })

        setTimeout(() => {
            interaction.editReply({
                content: `${interaction.user}` + ` | **تایم شما به اتمام رسید لطفا دوباره از کامند استفاده کنید ${emoji.Loading}**`,
                embeds: []
            })
        }, 1000 * 7)
    }
}