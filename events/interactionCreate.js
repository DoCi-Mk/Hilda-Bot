const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const client = require("../index");
const emoji = require('../emoji')
const config = require('../config.json')

client.on("interactionCreate", async (interaction) => {
  if (interaction.isCommand()) {
    await interaction.deferReply(({
      ephemeral: false
    })).catch(() => { });

    const errorRow = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setLabel(`${client.user.username} Support`)
      .setStyle("LINK")
      .setURL(config.support)
    )
    const errorMessage = new MessageEmbed()
    .setDescription(`${emoji.Danger} **این دستــور با مشکل مواجـه شده است ، برای اطلاعات بیشتر با پشتیبانی در ارتباط باشید**`)
    .setColor(config.color.blue)
    .setFooter(interaction.user.username, interaction.user.avatarURL())
    const cmd = client.slash.get(interaction.commandName);
    if (!cmd)
      return interaction.followUp({
        embeds: [errorMessage],
        components: [errorRow]
      });
    const guild = client.guilds.cache.get(interaction.guildId);
    const args = [];


    for (let option of interaction.options.data) {
      if (option.type === "SUB_COMMAND") {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value)
            args.push(x.value);
        })
      } else if (option.value)
        args.push(option.value);
    }
    interaction.member = interaction.guild.members.cache.get(interaction.user.id);
    cmd.run(client, interaction, guild, args);

  }
})