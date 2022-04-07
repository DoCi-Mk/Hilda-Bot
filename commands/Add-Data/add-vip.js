const premiumSchema = require('../../models/premium')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "add-vip",
    aliases: ['addvip'],
    description: "اضافه کردن افراد به VIP",
    category: "OnlyOwner",
    owneronly: true,

    run: async (client, message, args) => {

        const member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);

        if (!member) return message.reply({ content: 'لطفا ممبری که میخواهید **VIP** کنید را وارد کنید !' })

        premiumSchema.findOne({
            User: member.id
        }, async (err, data) => {
            if (data) return message.reply({ content: `این یوزر قبلا **VIP** بوده است ! ${emoji.Ajab}` })

            new premiumSchema({
                User: member.id
            }).save();
            return message.reply(`یوزر **${member.user.tag}** با موفقیت **VIP** شد ${emoji.Accept}`)
        }
        )
    }
}
