const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const v = require('../../config.json')


module.exports = {
  name : 'invite',
  category : 'info',
  aliases: ["support" , "sup"],
  description : 'Say Help and All Commands',
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
    .setURL(`${config.botinvite}`)
    .setLabel(`Invite Hilda Bot`)
    .setStyle('LINK')
  )
  .addComponents(
    new MessageButton()
    .setURL(`${config.support}`)
    .setLabel(`Support Hilda Bot`)
    .setStyle('LINK')
    )
    .addComponents(
      new MessageButton()
      .setLabel(`Vote Hilda Bot `)
      .setStyle('LINK')
      .setURL(config.vote)
    )
    
    

   const invite = new MessageEmbed()
  .setAuthor('Invite Hilda Bot' , 'https://cdn.discordapp.com/emojis/843845378352873492.gif' , config.botinvite)
  //  .setDescription(`${emoji.link} برای دعوت بات ما به سرور خود کافیه بر روی دکمۀ [**Invite Hilda Bot**](${config.botinvite}) کلیک کنید `)
   .setColor('#316799')
   .setImage('https://cdn.discordapp.com/attachments/871858377972654090/874702842169000037/invite.jpg')
   message.reply({ embeds: [invite] , components: [row] })

  }}