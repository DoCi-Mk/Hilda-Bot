const premiumSchema = require('../../models/premium')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "handler-rem",
    description: "حذف کردن هندلر",
    category: "OnlyOwner",
    onlyOwner: true,
    options: [
        {
            name: 'user',
            description: 'کاربر رو وارد کنید',
            type: 6,
            required: true,
        },
    ],
    

    run: async (client, interaction, args, message) => {

        const member = interaction.options.getUser('user');

        premiumSchema.findOne({
            User: member.id
        }, async (err, data) => {
            if (!data) return interaction.followUp({ content: `این کاربر در **دیتابیس** نمیباشد ${emoji.Danger}` })

           data.delete();
           interaction.followUp(`کاربر **${member.tag}** با موفقیت از دیتابیس حذف گردید ${emoji.Accept}`)
        }
        )
    }
}
