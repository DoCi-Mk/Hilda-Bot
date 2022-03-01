const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')


module.exports = {
    name : "stats",
    description : "The Information Of Bot",

  run: async (client, interaction, args) => {

    
    
        let embed = new MessageEmbed()
      .setAuthor("OnlyNudes", client.user.avatarURL())
      .setColor("RANDOM")
      .setTitle(`> ${emoji.titlee} Information Bot`)
      // .setDescription(
      //   `**${emoji.load} Founders : **HO3EiNWAVE#2237 | - DσCι ❦#0601 \n${emoji.load} **Total Commands :** ${client.commands.size} \n${emoji.load} **Ping :** ${client.ws.ping} \n${emoji.load} **Servers :** ${client.guilds.cache.size} \n${emoji.load} **Channels :** ${
      //   client.channels.cache.size}\n${emoji.load} **Bot Version : **${v.version_bot}\n${emoji.load} **Discord.js Library : **13.3.1`
      // )
      .addFields(
        { name: `${emoji.pink_dot}Founder's`, value: `${emoji.blank}${emoji.pink_arrow} - DσCι ❦#0601 | HO3EiNWAVE#2237`, inline: false },
        { name: `${emoji.pink_dot}Guild's`, value: `${emoji.blank}${emoji.pink_arrow} ${client.guilds.cache.size}`, inline: false },
        { name: `${emoji.pink_dot}Channel's`, value: `${emoji.blank}${emoji.pink_arrow} ${
        client.channels.cache.size}`, inline: false },
         { name: `${emoji.pink_dot}Ping`, value: `${emoji.blank}${emoji.pink_arrow} ${client.ws.ping}`, inline: false },
        {name: `${emoji.pink_dot}Discord.js Library` , value: `${emoji.blank}${emoji.pink_arrow} 13.3.1` , inline: false },
        {name: `\u200b` , value: "_ _" , inline: false },
        {name: `\u200b` , value: "_ _" , inline: false },
        { name: `${emoji.dot1}You Can Set **Custom Prefix** To Server Just Use`, value: `${emoji.arrow}\`\`/prefix [Your Prefix]\`\``, inline: false },
        { name: `${emoji.dot1}Let us know if you have a problem with the following command`, value: `${emoji.arrow}\`\`/report [Your Problem]\`\`\n\n${emoji.start_bug}If The Emojis Don't Open , Give The @everyone Role /  \`\`USE EXTERNAL EMOJI\`\` Permission To Open The Emojis.`, inline: false },
      )
      
      .setFooter(`Developed By Observers Team`, 'https://cdn.discordapp.com/emojis/941263349621080074.webp?size=96&quality=lossless');

    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`Invite Bot`)
          .setStyle('LINK')
          .setURL(`${config.botinvite}`),
      )
      .addComponents(
        new MessageButton()
          .setLabel(`Support Server `)
          .setStyle('LINK')
          .setURL(v.support)
      )
      .addComponents(
        new MessageButton()
          .setURL(`${v.vote}`)
          .setLabel(`Vote OnlyNude Bot`)
          .setStyle('LINK')
      )
        interaction.editReply( {embeds: [embed] , components: [row] } )
    }
};