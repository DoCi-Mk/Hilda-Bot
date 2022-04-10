const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const moment = require("moment");
const pack = require('../../package.json')
require("moment-duration-format");


module.exports = {
  name: 'about',
  category: 'info',
  aliases: ["botinfo", "bot", "stats", "support", "stat"],
  description: 'اطلاعات ربات',
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args) => {

    doci = client.users.cache.get(config.Founder)



    let prefix = await prefixdb.findOne({
      guildid: message.guild.id
    }).exec();
    if (prefix == null) {
      prefix = config.prefix
    } else {
      prefix = prefix.prefix;
    }

    const duration = moment
      .duration(client.uptime)
      .format(" D [days], H [hrs], m [mins], s [secs]");

    let embed = new MessageEmbed()
      // .setAuthor("Hilda Bot", client.user.avatarURL())
      .setColor(config.DefaultColor)
      .setTitle(`> ${emoji.Title} Information Bot`)
      .setDescription(
        `${emoji.Loading} **Founder : **${doci.tag} \n${emoji.Loading} **Total Commands :** ${client.commands.size} \n${emoji.Loading} **Ping :** ${client.ws.ping} \n${emoji.Loading} **Guild's :** ${client.guilds.cache.size} \n${emoji.Loading} **Channels :** ${client.channels.cache.size}\n${emoji.Loading} **Bot Version : **${config.Version}\n${emoji.Loading} **Discord.js Library : **${pack.dependencies['discord.js']}`
      )
      .setFooter(`Developed By : ${doci.tag}`, doci.avatarURL());

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
          .setLabel(`پشتیبانی ربات`)
          .setStyle('LINK')
      )


    message.channel.send({ embeds: [embed], components: [row] });




  }
}