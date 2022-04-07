//Important: See The Video How I Edit All Commands
const client = require('../index.js')
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const config = require('../config.json')
const { Permissions } = require('discord.js')
const prefixdb = require('../models/prefix')
const premiumSchema = require('../models/premium.js')
const emoji = require('../emoji')
LOG_CHANNEL = '904827498548850698'


client.on('messageCreate', async message => {
  if (message.author.bot && (!message.channel.id === '886691835752370186' || !message.channel.id === 903761113177530398)) return;
  let owner = config.owner

  if ((!message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.EMBED_LINKS) || !message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.SEND_MESSAGES, Permissions.FLAGS.EMBED_LINKS))) return
  if (message.author.bot) return;
  if (!message.guild) return;
  let prefix = await prefixdb.findOne({
    guildid: message.guild.id
  }).exec();
  if (prefix == null) {
    prefix = config.prefix
  } else {
    prefix = prefix.prefix;
  }
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  try {
    if (command) {

      //USER PERMISSION
      if (!message.member.permissions.has(command.userPerms || [])) return message.reply(`${emoji.Denied} You Dont Have \`${command.userPerms || []}\` Permission`)

      //BOT PERMISSION
      if (!message.guild.me.permissions.has(command.clientPerms || []))
        return message.reply(`${emoji.Denied} Bot Doesn't Have \`${command.clientPerms || []}\` Permission , Please Give It To Bot`)

      if (command.premium && !(await premiumSchema.findOne({ User: message.author.id })))
        return message.reply(`این دســــتور فقط بــرای افــراد **VIP** فعال میباشد ${emoji.Smile}`)
      if (command.disable) {
        if (!owner.includes(message.author.id)) {
          message.reply(`**ایــن دستــور در دســت تعمیر و فــعلا غیرفـعال اســت . پس از فــعالسازی در ســرور پشتیبانی به شما اطلاع میــدهیم ${emoji.Down}**\n${config.support}`)
          return;
        }
      }
      if (command.owneronly) {
        if (!owner.includes(message.author.id)) {
          message.channel.send(`${message.member} این کامند فقط برای **__سازندگان بات__** قابل استفاده است ${emoji.Smile}`)
          return;
        }
      }

    }
    command.run(client, message, args, prefix)

  } catch (err) {
    console.error(err)
  }









})