const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/panjsanie.json')

module.exports = {
  name: "panjsanie",
  category: "Event's 🎲",
  aliases: ['5s', '5sanie'],
  description: "ایونتِ بازیِ 5 ثانیه",
  cooldown: 2,
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args) => {

    var Text = Data[Math.floor(Math.random() * Data.length)];

    const picembed = new MessageEmbed()
      .setColor('#309fb7')
      .setDescription(`${emoji.alaram} **${Text}**`)

    First = await message.reply({
      embeds: [picembed]
    })
    setTimeout(()=>{
      First.delete()
      message.channel.send(`${message.author}` + ` | **تایم شما به اتمام رسید لطفا دوباره از کامند استفاده کنید ${emoji.load}**`)
    }, 1000 * 7)
  }
}