const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/haghighat.json')

module.exports = {
    name: "haghighat",
    category: "Games 🎲",
    aliases: ['h'],
    description: "سوالات جنجالی برای حقیقت",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run : async(client, message, args) => {  


        var Text = Data[Math.floor(Math.random() * Data.length)];
    
    
        const picembed = new MessageEmbed()
        .setColor('#2f3136')
        .setDescription(`${emoji.haghighat} **${Text}**`)
        await message.reply({
            embeds: [picembed]
        });
  }
  }