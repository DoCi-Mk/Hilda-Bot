const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const dbdeklame = require('../../models/newdeklame')


module.exports = {
    name: "deklametext",
    category: "Games🎲",
    aliases: ['deklamet','dt'],
    description: "متن دکلمه برای اجرا",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run : async(client, message, args) => {  

    let Matn = await dbdeklame.find({
    }).exec()

    var Desc = Matn[Math.floor(Math.random() * Matn.length)];

        const picembed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(`${emoji.deklame_text} مــتــن دکـلـمه`)
        .setDescription(`**\n ${Desc.deklame} \n**`)
        .setFooter(`${message.author.username}` , message.author.displayAvatarURL({ dynamic: true }))
        await message.reply({
            embeds: [picembed]
        });
  }
  }