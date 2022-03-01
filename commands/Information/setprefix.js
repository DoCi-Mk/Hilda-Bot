const emoji = require('../../emoji')
const { Permissions, MessageEmbed } = require('discord.js')
const prefixSchema = require('../../models/prefix')


module.exports = {
  name: 'setprefix',
  aliases: ["prefix"],
  description: "مشخص کردن پریفیکس جدید برای سرور",
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args, prefix) => {

    const channel_log = await client.channels.cache.get('947818972517122098')
    if (!message.content.startsWith(prefix)) return; //add this line to every commands

    if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return message.reply(`you dont have **ADMINISTRATOR** permission to use this command`)
    const newprefix = args[0]
    if (!newprefix) return message.reply(`**لطفا پریفیکسی که میخواهید برای سرور انتخاب کنید را هم وارد کنید ${emoji.smiling}**`)
    if (newprefix.length > 5) return message.channel.send(`**پریفیکس مورد نظر شما بیشتر از __5__ حرف است ${emoji.smiling}**`)
    message.channel.send(`پریفیکس مورد نظر با موفقیت در سرور \`\`${message.guild.name}\`\` تنظیم شد ${emoji.success} | **Prefix** : \`\`${newprefix}\`\``)

    channel_log.send({
      embeds:[
        new MessageEmbed()
        .setAuthor(`Guild Name : ${message.guild.name}` , message.guild.iconURL())
        .setDescription(`New Prefix : \`\`${newprefix}\`\` ${emoji.success}`)
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