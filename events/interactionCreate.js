const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const client = require("../index");
const emoji = require('../emoji')
const config = require('../config.json')
const premiumSchema = require('../models/premium')

client.on("interactionCreate", async (interaction) => {
  const owner = config.founder
  if (interaction.isCommand()) {
    await interaction.deferReply(({
      ephemeral: false
    })).catch(() => { });

    const errorRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`Support ${client.user.username}`)
          .setStyle("LINK")
          .setURL(config.support)
      )
    const errorMessage = new MessageEmbed()
      .setDescription(`${emoji.Danger} **این دستــور با مشکل مواجـه شده است ، برای اطلاعات بیشتر با پشتیبانی در ارتباط باشید**`)
      .setColor(config.color.blue)
      .setFooter(interaction.user.username, interaction.user.avatarURL())


    const cmd = client.slash.get(interaction.commandName);

    if (!cmd)
      return await interaction
        .followUp({
          embeds: [errorMessage],
          components: [errorRow]
        })


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

    if (cmd.onlyOwner) {
      if (!owner.includes(interaction.user.id)) {
        interaction.followUp({
          content: `${emoji.Danger} **این دسـتور فقط برای سازندگان بـات قابل استفاده میباشـد**`,
          ephemeral: true,
        });
        return;
      }
    }

    if (cmd) {
      //USER PERMISSION
      if (!interaction.member.permissions.has(cmd.userPerms || []))
        return interaction.followUp({
          content: `${emoji.Danger} You Dont Have \`${cmd.userPerms || []
            }\` Permission`,
          ephemeral: true,
        });

      //BOT PERMISSION
      if (!interaction.guild.me.permissions.has(cmd.clientPerms || []))
        return interaction.followUp({
          content: `${emoji.Danger} Bot Doesn't Have \`${cmd.clientPerms || []
            }\` Permission , Please Give It To Bot`,
          ephemeral: true,
        });
    }
    if (cmd.handler && !(await premiumSchema.findOne({ User: interaction.user.id })))
      return interaction.followUp({
        content: `این دســــتور فقط بــرای **هندلر ها** فعال میباشد ${emoji.Smile}`,
        ephemeral: true,
      })

    cmd.run(client, interaction, guild, args);

  }


})