const premiumSchema = require('../../models/premium')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const emoji = require('../../emoji')

module.exports = {
    name: "rem-vip",
    aliases: ['remvip','removevip'],
    description: "Remove Premium For User",
    category: "OnlyOwner",
    owneronly: true,
    

    run: async (client, message, args) => {

        // if (message.author.id !== '500740143532212245') 
        // return message.reply({
        //     embeds: [
        //         new MessageEmbed()
        //         .setDescription('You can not use this command below is for **Owner Only**')
        //         .setColor('#ef1607')
        //     ]
        // })

        const member =
            message.mentions.members.first() ||
            message.guild.members.cache.get(args[0]);

        if (!member) return message.reply({ content: 'لطفا ممبری که میخواهید **VIP** را ازش بگیرید اعلام کنید !' })

        premiumSchema.findOne({
            User: member.id
        }, async (err, data) => {
            if (!data) return message.reply({ content: `این یوزر در **دیتا بیس** نمیباشد ${emoji.decline}` })

           data.delete();
           message.reply(`یوزر ${member.user.tag} با موفقیت از دیتابیس حذف گردید ${emoji.success}`)
        }
        )
    }
}
