const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const v = require('../../config.json')
const update = require('../../updatelog.json')


module.exports = {
  name: "help",
  description: "Shows the Help Menu",

  run: async (client, interaction, args , message ) => {
  
      // if (!message.channel.nsfw) {
      //   const nsfwembed = new MessageEmbed()
      //    .setColor("#fc1814")
      //    .setDescription(`${emoji.danger} The **OnlyNudes** Bot Just Worked In NSFW Channel's \n ${emoji.start_bug} You Can Set This Channel To ** NSFW ** Faster , Just Use It \`/makensfw\`And Now You Can Use All Bot Command's ${emoji.boom}`)
      //    .setFooter(
      //     `${interaction.user.tag}`,
      //     interaction.author.displayAvatarURL({
      //      dynamic: true,
      //      format: "png",
      //      size: 2048,
      //     })
      //    )
      //    //.setImage("https://media.discordapp.net/attachments/721019707607482409/855827123616481300/nsfw.gif");
      //   return message.reply({ embeds: [nsfwembed] });
      //  }
  
  
      const invite = new MessageActionRow()
        .addComponents(
          new MessageButton()
            .setURL(`${config.botinvite}`)
            .setLabel(`Invite OnlyNude Bot`)
            .setStyle('LINK')
        )
        .addComponents(
          new MessageButton()
          .setURL(v.support)
            .setLabel(`Support OnlyNude Bot`)
            .setStyle('LINK')
        )
        .addComponents(
          new MessageButton()
            .setURL(`${v.vote}`)
            .setLabel(`Vote OnlyNude Bot`)
            .setStyle('LINK')
        )
        .addComponents(
          new MessageButton()
            .setLabel(`Update Log !`)
            .setCustomId('update')
            .setStyle('DANGER'),
        )
  
      const row = new MessageActionRow()
        .addComponents(
          new MessageSelectMenu()
            .setCustomId('menu')
            .setPlaceholder('Click And Scroll Up For See More Commands')
            .setOptions([{
              label: 'Nude Commands',
              emoji: `${emoji.DogStyle}`,
              // description: 'Nude Command',
              value: 'first'
            },
            {
              label: 'General Commands',
              emoji: `${emoji.Rubber}`,
              // description: 'General Video Command',
              value: 'general'
            },
            {
              label: 'AutoPorn & Config Commands',
              emoji: `${emoji.Cuffs}`,
              // description: 'Config NSFW Command',
              value: 'auto'
            },
            {
              label: 'Fun Commands',
              emoji: `${emoji.VibratingEgg}`,
              // description: 'Fun Command',
              value: 'fun'
            }, {
              label: 'Premium Commands',
              emoji: `${emoji.ProfBot}`,
              // description: 'Premium Command',
              value: 'premium'
            },
            {
              label: 'Information Command',
              emoji: `${emoji.candom}`,
              // description: 'Information Command',
              value: 'second'
            },
            ])
        )
  
  
  
  
      const update_log = new MessageEmbed()
        .setAuthor(`Update Log • Curnet Version : ${v.version_bot}`)
        .setDescription(`\`\`\`${update.update}\`\`\``)
        .setColor('#2f3136')
        .setFooter('If you have questions about the latest bot updates, join the support server')
  
  
      const general_help = new MessageEmbed()
        .setAuthor('• NSFW General Command')
        .addFields(
          // { name: `${emoji.Rubber} \`\`/play\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Play Sex Audio In Voice**`, inline: false },
          { name: `${emoji.Rubber} \`\`/squirt\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Squirt Porn Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/general\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send General And Public Sex Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/asian\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Asian Porn Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/creampie\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Creampie Porn Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/gay\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Gay Porn Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/lesbian\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Lesbian Porn Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/milf\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Milf Porn Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/hentai-vid\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Hentai Video**`, inline: false },
          { name: `${emoji.Rubber} \`\`/hentai-pic\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Hentai Picture**`, inline: false },
        )
        .setColor('#2f3136')
        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
  
  
      const premium_help = new MessageEmbed()
        .setAuthor('• NSFW Premium Command')
        .setDescription(`Coming Soon ... ${emoji.loading_2}`)
        .setColor('#2f3136')
        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
  
  
      const fun_help = new MessageEmbed()
        .setAuthor('• NSFW Fun Command')
        .setColor('#2f3136')
        .addFields(
          { name: `${emoji.VibratingEgg} \`\`/favpornstar\`\` | \`\`/favps\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Serach And Send You Favorite Porn Star**`, inline: false },
          { name: `${emoji.VibratingEgg} \`\`/spank [Mention User]\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Spank Your Friend By Bot**`, inline: false },
          { name: `${emoji.VibratingEgg} \`\`/kiss [Mention User]\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Kiss Your Friend's**`, inline: false },
          )
        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
  
  
      const config_help = new MessageEmbed()
        .setAuthor('• AutoPorn & Config Command')
        .addFields(
          { name: `${emoji.Cuffs} \`\`/autopornpic set\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Set AutoNude PicSend Channel**`, inline: false },
          { name: `${emoji.Cuffs} \`\`/autopornpic unset\`\``, value: `${emoji.blank}${emoji.pink_arrow} **UnSet AutoNude PicSend Channel**`, inline: false },
          { name: `${emoji.Cuffs} \`\`/autopornvid set\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Set AutoNude VideoSend Channel**`, inline: false },
          { name: `${emoji.Cuffs} \`\`/autopornvid unset\`\``, value: `${emoji.blank}${emoji.pink_arrow} **UnSet AutoNude VideoSend Channel**`, inline: false },
          { name: `${emoji.Cuffs} \`\`/makensfw\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Change Chnnel To NSFW Channel**`, inline: false },
        )
        .setColor('#2f3136')
        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
  
  
      const nsfw_help = new MessageEmbed()
        .setAuthor('• NSFW Nude Command')
        .addFields(
          { name: `${emoji.DogStyle} \`\`/tiktok\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send TikTok NSFW Video**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/onlyfans\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send OnlyFans NSFW Video**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/ass\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Ass Picture/Gif**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/4k\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send 4k Picture/Gif**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/pussy\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Pussy Picture/Gif**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/boobs\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Boobs Picture/Gif**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/anal\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Anal Picture/Gif**`, inline: false },
          { name: `${emoji.DogStyle} \`\`/thigh\`\``, value: `${emoji.blank}${emoji.pink_arrow} **Send Thigh Picture/Gif**`, inline: false },
  
        )
        .setColor('#2f3136')
        .setFooter(interaction.user.tag, interaction.user.displayAvatarURL())
  
  
      // const info_help = new MessageEmbed()
      // .setAuthor('• Information Command')
      // .addFields(
      //   {name: `\u200b` , value: "_ _" , inline: false },
      //   {name: `${emoji.candom} \`\`/about\`\`` , value: `${emoji.blank}${emoji.pink_arrow} **Send Bot About**` , inline:false},
      //   {name: `${emoji.candom} \`\`/ping\`\`` , value: `${emoji.blank}${emoji.pink_arrow} **Send Ping Bot**` , inline:false},
      //   {name: `${emoji.candom} \`\`/report\`\`` , value: `${emoji.blank}${emoji.pink_arrow} **Report Bug**` , inline:false},
      //   {name: `${emoji.candom} \`\`/prefix [New Prefix]\`\`` , value: `${emoji.blank}${emoji.pink_arrow} **Set Custom Prefix**` , inline:false},
      //   {name: `\u200b` , value: "\u200b" , inline: true },
      // )
      // .setColor('#2f3136')
      // .setFooter(interaction.user.tag , interaction.user.displayAvatarURL())
  
  
  
      const Help = new MessageEmbed()
        .setAuthor("Hey I'm OnlyNude", 'https://cdn.discordapp.com/attachments/904392250170151012/904820587501871164/butts_for_dribble-01-modified.png')
        .setColor('#2f3136')
        //.setThumbnail(interaction.author.displayAvatarURL({dynamic: true }))
        .setDescription(`・Click On The **Menu** Below To See The All Commands And Use\n\n ${emoji.start_bug} You Can Set **Custom Prefix** To Server Just Use \n${emoji.arrow_red}\`\`/prefix [Your Prefix]\`\`\n\n${emoji.start_bug} If You Have An Idea For Bot Development, Let Us Know With The Following Command\n${emoji.arrow_red}\`\`/idea [Your Idea]\`\`\n\n${emoji.dot1}You Can Change Channel To **NSFW** Faster Just Use\n${emoji.arrow}\`\`/makensfw\`\`\n\n${emoji.start_bug}If The Emojis Don't Open , Give The @everyone Role /  \`\`USE EXTERNAL EMOJI\`\` Permission To Open The Emojis \n\n ${emoji.smile}**At The Bottom , You Can See And Invite My Other Bots ${emoji.paeen}**\n${emoji.dot1}[Click Me Invite **Hilda Bot**](https://discord.com/api/oauth2/authorize?client_id=856599103960907786&permissions=140693073600&scope=bot%20applications.commands)\n${emoji.dot1}[Click Me Invite **Linker Bot**](https://discord.com/api/oauth2/authorize?client_id=839194473018818611&permissions=0&scope=bot)\n\n\n・Click on **Update Log!** You Can See The Latest Updates Of The [OnlyNudes](${config.botinvite})`)
        // .addFields(
        //   { name: `**\nUpdate Log** \n**__V ${v.version_bot}__**`, value: `${v.update_log}`, inline: false },
        // )
        .setImage('https://cdn.discordapp.com/attachments/864936919312629850/916386910409195530/Helpp.png')
        .setFooter(`OnlyNudes | Version : ${v.version_bot}`, v.footericon)
  
  
      const about_help = new MessageEmbed()
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
          {
            name: `${emoji.pink_dot}Channel's`, value: `${emoji.blank}${emoji.pink_arrow} ${
              client.channels.cache.size}`, inline: false
          },
          { name: `${emoji.pink_dot}Ping`, value: `${emoji.blank}${emoji.pink_arrow} ${client.ws.ping}`, inline: false },
          { name: `${emoji.pink_dot}Discord.js Library`, value: `${emoji.blank}${emoji.pink_arrow} 13.3.1`, inline: false },
          { name: `\u200b`, value: "_ _", inline: false },
          { name: `\u200b`, value: "_ _", inline: false },
          { name: `${emoji.dot1}You Can Set **Custom Prefix** To Server Just Use`, value: `${emoji.arrow}\`\`/prefix [Your Prefix]\`\``, inline: false },
          { name: `${emoji.dot1}Let us know if you have a problem with the following command`, value: `${emoji.arrow}\`\`/report [Your Problem]\`\`\n\n${emoji.start_bug}If The Emojis Don't Open , Give The @everyone Role /  \`\`USE EXTERNAL EMOJI\`\` Permission To Open The Emojis.`, inline: false },
        )
  
        .setFooter(`Developed By Observers Team`,v.footericon);
      interaction.followUp({ embeds: [Help], components: [row, invite] })
  
  
      const filter = i => i.customId === 'menu' && i.user.id === interaction.user.id;
  
      const collector = interaction.channel.createMessageComponentCollector({ filter });
  
      collector.on('collect', async i => {
        if (i.values[0] === 'first') {
          await i.update({ embeds: [nsfw_help] }); return
        } else {
          if (i.values[0] === 'second') {
            await i.reply({ embeds: [about_help] , ephemeral: true }); return
          } else {
            if (i.values[0] === 'auto') {
              await i.update({ embeds: [config_help] }); return
            } else {
              if (i.values[0] === 'fun') {
                await i.update({ embeds: [fun_help] }); return
              } else {
                if (i.values[0] === 'premium') {
                  await i.update({ embeds: [premium_help] }); return
                } else {
                  if (i.values[0] === 'general') {
                    await i.update({ embeds: [general_help] }); return
                  }
                }
              }
            }
          }
        }
      })
  
  
      const filter1 = i => i.customId === 'update' && i.user.id === interaction.user.id;
  
      const collector1 = interaction.channel.createMessageComponentCollector({ filter1 });
  
  collector1.on('collect', async i => {
      if (i.customId === 'update') {
          await i.reply({ embeds: [update_log] , ephemeral: true});
      }
  });
    
  }
};