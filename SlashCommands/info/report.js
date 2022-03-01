const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')


module.exports = {
    name : "report",
    description : "Report Problem For Bot",
    options: [
		{
			name: 'text',
			description: 'Write Problem For Bot',
			type: 3,
			required: true,
		},
    ],

  run: async (client, interaction, args, message) => {
    const reportchannel = client.channels.cache.get("905828659041038376");
    const report = interaction.options.getString('text');
    if (!report) {
      return interaction.editReply({ embeds: [
          new MessageEmbed()
          .setDescription(`${emoji.danger} Please Send Your Report Along With The Text`)
          .setColor('#FF0000')
      ]});
    }
    interaction.editReply({ embeds: [
        new MessageEmbed()
        .setDescription(`${emoji.tik} Your Report Has Been Submitted . We Will Be In Touch With You in Case Of Any Problems`)
        .setColor('#25a934')
    ]}
      
    );
    const embed = new MessageEmbed()
      .setTitle(`${emoji.bug} New Bug Report`)
      .setThumbnail(interaction.user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       }))
      .setDescription(`${emoji.arrow_red} **${report}**\n\n${emoji.dot1}**Report By : **${interaction.user.tag}\n${emoji.dot1}**UserID : **${interaction.user.id}`)
      .setFooter(`Bug Report From : ${interaction.guild.name}` , interaction.guild.iconURL())
      .setColor("RANDOM");

    reportchannel.send({ embeds: [embed] , content: '<@890926764027691028> | <@851218809204768788>' });
  }}