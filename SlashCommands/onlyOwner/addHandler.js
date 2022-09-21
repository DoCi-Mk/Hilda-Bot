const premiumSchema = require('../../models/premium')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "add-handler",
    description: "اضافه کردن به هندلر",
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
            if (data) return interaction.followUp({ content: `${emoji.Danger} این کاربر در قبلا در **دیتابیس** ذخیره شده است` })

            new premiumSchema({
                User: member.id
            }).save();
            return interaction.followUp(`کاربر **${member.tag}** با موفقیت در دیتابیس ذخیره شد ${emoji.Accept}`)
        }
        )
    }
}
