const { MessageEmbed, MessageActionRow, MessageButton, Guild } = require('discord.js');
const Discord = module.require("discord.js");
const emoji = require('../../emoji')
const config = require("../../config.json")
const client = require('../../index')

module.exports = {
  name: "idea",
  description: "ایده شما",
  options: [
    {
      name: 'text',
      description: "ایده خودتون رو بنویسید",
      type: 3,
      required: true,
    },
  ],
  run: async (client, interaction, args) => {
    const ideaChannel = client.channels.cache.get(config.channel.idea);
    const idea = interaction.options.getString('text');

    interaction.followUp({
      embeds: [
        new MessageEmbed()
          .setDescription(`${emoji.Accept} ** ایده شما ثبت شد و در صورت تایید به ربات اضافه میشود و اگر در سرور پشتیبان جوین شوید رول __Best Idea__ دریفات میکنید**`)
          .setColor(config.color.blue)
      ]
    }

    );
    const logIdea = new MessageEmbed()
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

    ideaChannel.send({ embeds: [logIdea], content: `${idea}` });
  },
};