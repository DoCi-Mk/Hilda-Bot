const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')


module.exports = {
  name: "avatar",
  description: "دیدن پروفایل فرد مورد نظر",
  aliases: ['av'],
  args: true,
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
              
  run: async (client, message, args, ) => {

  


      let user 
  if (message.mentions.users.first()) {
    user = message.mentions.users.first()
     
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author

   }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  const embed = new MessageEmbed()
  .setAuthor('آواتــار🖼️')
  .setDescription("**شما در حال دیدن آواتــار**" + user.toString() + "**هـستـید ** <:853973876593131580:862366006920085534>")
  .setColor(config.DefaultColor)
  .setImage(avatar)
  .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
  return message.reply({
      embeds: [embed]
  });

  

  

  }}