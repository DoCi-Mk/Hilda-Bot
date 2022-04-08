const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const v = require('../../config.json')


module.exports = {
  name : 'invite',
  category : 'info',
  aliases: ["support" , "sup"],
  description : 'دعوت بات به سرور خود',
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run : async(client, message, args) => {


    let prefix = await prefixdb.findOne({
      guildid:message.guild.id
    }).exec();
    if (prefix == null) {
      prefix = config.prefix
    } else {
      prefix = prefix.prefix;
    }

  const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setURL(`${config.BotInvite}`)
    .setLabel(`دعوت ربات`)
    .setStyle('LINK')
  )
  .addComponents(
    new MessageButton()
    .setURL(`${config.Support}`)
    .setLabel(`سرور پشتیبانی ربات`)
    .setStyle('LINK')
    )
    .addComponents(
      new MessageButton()
      .setLabel(`رأی دادن به ربات`)
      .setStyle('LINK')
      .setURL(config.Vote)
    )
    
   message.reply({ content: `https://cdn.discordapp.com/attachments/871858377972654090/874702842169000037/invite.jpg` , components: [row] })

  }}