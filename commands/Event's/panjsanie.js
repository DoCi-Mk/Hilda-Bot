const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const Data = require('../../Data/panjsanie.json')

module.exports = {
  name: "panjsanie",
  category: "Event's",
  aliases: ['5s', '5sanie'],
  description: "ایونتِ بازیِ 5 ثانیه",
  cooldown: 2,
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args) => {

    var Text = Data[Math.floor(Math.random() * Data.length)];

    First = await message.reply({
      content: `${emoji.PanjSanie}〢${Text}`
    })
    setTimeout(()=>{
      First.delete()
      message.channel.send(`${message.author}` + ` | **تایم شما به اتمام رسید لطفا دوباره از کامند استفاده کنید ${emoji.Loading}**`)
    }, 1000 * 7)
  }
}