const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const moment = require("moment");
require("moment-duration-format");


module.exports = {
  name: 'about',
  category: 'info',
  aliases: ["botinfo", "bot", "stats", "support", "stat"],
  description: 'اطلاعات ربات',
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args) => {

    doci = client.users.cache.get(config.owner)



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
      .setColor("#2f3136")
      .setTitle(`> ${emoji.titlee} Information Bot`)
      .setDescription(
        `**${emoji.load} **Founder : **${doci.tag} \n${emoji.load} **Total Commands :** ${client.commands.size} \n${emoji.load} **Ping :** ${client.ws.ping} \n${emoji.load} **Guild's :** ${client.guilds.cache.size} \n${emoji.load} **Channels :** ${client.channels.cache.size}\n${emoji.load} **Bot Version : **${config.version}\n${emoji.load} **Discord.js Library : **13.3.1`
      )
      .setFooter(`Developed By : ${doci.tag}`, doci.avatarURL());

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`Invite Bot`)
          .setStyle('LINK')
          .setURL(`${config.botinvite}`),
      )
      .addComponents(
        new MessageButton()
          .setLabel(`Support Server`)
          .setStyle('LINK')
          .setURL(config.support)
      )
      .addComponents(
        new MessageButton()
          .setURL(`${config.vote}`)
          .setLabel(`Vote Hilda Bot`)
          .setStyle('LINK')
      )




    message.channel.send({ embeds: [embed], components: [row] });




  }
}