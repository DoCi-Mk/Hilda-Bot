const { MessageEmbed , MessageActionRow , MessageButton, Guild} = require('discord.js');
const Discord = module.require("discord.js");
const emoji = require('../../emoji')
const client = require('../../index')

module.exports = {
  name: "idea",
  description: "Ideas About Bot",
  options: [
    {
        name: 'text',
        description: 'Write Idea For Bot',
        type: 3,
        required: true,
    },
],
  run: async (client, interaction, args ) => {
    const ideachannel = client.channels.cache.get("943287106791432192");
    const report = interaction.options.getString('text');
    if (!report) {
      return interaction.followUp({ embeds: [
          new MessageEmbed()
          .setDescription(`${emoji.danger} Please Send Your Idea Along With The Text`)
          .setColor('#FF0000')
      ]});
    }
    interaction.followUp({ embeds: [
        new MessageEmbed()
        .setDescription(`${emoji.tik} Thanks to your idea, your idea will be reviewed and, if approved, you will be given a special role on the backup server .`)
        .setColor('#25a934')
    ]}
      
    );
    const embed = new MessageEmbed()
      .setTitle(`${emoji.idea} New Idea`)
      .setThumbnail(interaction.user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       }))
      .setDescription(`${emoji.arrow_red} **${report}**\n\n${emoji.dot1}**Report By : **\`\`${interaction.user.tag}\`\`\n${emoji.dot1}**UserID : **${interaction.user.id}\n${emoji.dot1}**Channel : **${interaction.channel.name} | ${interaction.channel.id}`)
      .setFooter(`Bug Report From : ${interaction.guild.name}` , interaction.guild.iconURL())
      .setColor("RANDOM");

    ideachannel.send({ embeds: [embed] , content: '<@500740143532212245> | <@851218809204768788>' });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("905828659041038376");
    message.channel.send(
      "Looks Like an Error has Ocurred. The Error has been reported to the Report Section!"
    );
    errorlogs.send("Error on Report Command \nError: \n" + error);
  },
};