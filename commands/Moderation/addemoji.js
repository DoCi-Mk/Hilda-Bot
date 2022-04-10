const { Util } = require('discord.js')
const emoji = require('../../emoji')

module.exports = {
  name: 'addemoji',
  category: 'admin',
  description: 'اضافه کردن ایموجی به سرور',
  run: async (client, message, args) => {
    if (!args.length) return message.reply("**لطفا ایموجی که میخواید اد کنید هم وارد کنید ! **")
    for (const rawEmoji of args) {
      const parsedEmoji = Util.parseEmoji(rawEmoji)
      if (parsedEmoji.id) {
        const extention = parsedEmoji.animated ? ".gif" : ".png";
        const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extention}`
        message.guild.emojis.create(url, parsedEmoji.name).then((emoji) => {
          message.channel.send(`با موفقیت ایموجی به سرور اضافه شد \`${emoji.url}\` ${emoji.Accept}`)
        })
      }
    }
  }
}