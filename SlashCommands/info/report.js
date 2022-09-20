const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')


module.exports = {
  name: "report",
  description: "گزارش باگــ",
  options: [
    {
      name: 'text',
      description: 'گزارش خودتون را بنویسیــد',
      type: 3,
      required: true,
    },
  ],

  run: async (client, interaction, args, message) => {
    const reportChannel = client.channels.cache.get(config.channel.report);
    const report = interaction.options.getString('text');
    const inviteLink = await interaction.channel.createInvite({ maxAge: 0, maxUses: 0, unique: true })
    const row = new MessageActionRow().addComponents(
      new MessageButton().setStyle('LINK').setLabel(`${interaction.guild.name} Invite link`).setURL(inviteLink.url)
    )

    interaction.editReply({
      embeds: [
        new MessageEmbed()
          .setDescription(`${emoji.Accept} **گزارش شما با موفقیت ثبت شــد ، درصورت تاییـد دولوپر ها بهتون پیغام میدهند**`)
          .setColor(config.color.blue)
      ]
    }

    );
    const embed = new MessageEmbed()
      .setThumbnail(interaction.user.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
      }))
      .addFields([
        { name: `Channel :`, value: `${interaction.channel.id} | ${interaction.channel.name}`, inline: false },
        { name: `Guild :`, value: `${interaction.guild.id} | ${interaction.guild.name}`, inline: false },
        { name: `User :`, value: `${interaction.user.id} | \`${interaction.user.tag}\``, inline: false },
      ])
      .setFooter(`${client.user.username} | ${config.version}`)
      .setColor(config.color.blue);

    reportChannel.send({ embeds: [embed], content: `${report}` , components: [row] });
  }
}