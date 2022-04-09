const emoji = require('../../emoji')
const { Permissions, MessageEmbed } = require('discord.js')
const prefixSchema = require('../../models/prefix')
const config = require('../../config.json')


module.exports = {
  name: 'setprefix',
  aliases: ["prefix"],
  description: "مشخص کردن پریفیکس جدید برای سرور",
  userPerms: ["ADMINISTRATOR"],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args, prefix) => {

    const channel_log = await client.channels.cache.get(config.ChannelLog)
    if (!message.content.startsWith(prefix)) return; //add this line to every commands

    const newprefix = args[0]
    if (!newprefix) return message.reply(`**لطفا پریفیکسی که میخواهید برای سرور انتخاب کنید را هم وارد کنید ${emoji.SmilingFace}**`)
    if (newprefix.length > 5) return message.channel.send(`**پریفیکس مورد نظر شما بیشتر از __5__ حرف است ${emoji.SmilingFace}**`)
    message.channel.send(`پریفیکس مورد نظر با موفقیت در سرور \`\`${message.guild.name}\`\` تنظیم شد ${emoji.Accept} | **Prefix** : \`\`${newprefix}\`\``)

    channel_log.send({
      embeds:[
        new MessageEmbed()
        .setAuthor(`Prfix Log's | Guild Name : ${message.guild.name}` , message.guild.iconURL())
        .setDescription(`New Prefix : \`\`${newprefix}\`\` ${emoji.Accept}`)
        .setColor('#2f3136')
        .setFooter(`Command Use : ${message.author.tag}` , message.author.displayAvatarURL())
      ]
    })
    currentprefix = await prefixSchema.findOne({
      guildid: message.guild.id
    }).exec();

    if (currentprefix) {
      currentprefix.delete()
      new prefixSchema({
        guildid: message.guild.id,
        prefix: newprefix
      }).save();
    } else {
      new prefixSchema({
        guildid: message.guild.id,
        prefix: newprefix
      }).save();
    }



  }
} 