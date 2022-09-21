const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const moment = require("moment");
require("moment-duration-format");


module.exports = {
  name: "hilda",
  description: "دستورات ربات",

  run: async (client, interaction, args, message) => {

    const duration = moment.duration(client.uptime).format(" D [Day's], H [Hour's], m [Minute's], s [Second's]");

    const inviteRow = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setLabel(`Support ${client.user.username}`)
          .setStyle("LINK")
          .setURL(config.support)
      )
      .addComponents(
        new MessageButton()
          .setLabel(`Vote ${client.user.username}`)
          .setStyle("LINK")
          .setURL(config.vote)
      )

    const categoryRow = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('menu')
          .setPlaceholder(`بـرای دیدن دستـورات کلیک کنـید`)
          .setOptions([{
            label: 'ایـــونت',
            emoji: `${emoji.Event_Help}`,
            value: 'event'
          },
          {
            label: 'سرگرمی',
            emoji: `${emoji.Sargarmi_Help}`,
            value: 'sargarmi'
          },
          {
            label: 'متفرقه',
            emoji: `${emoji.Karbordi_Help}`,
            value: 'karbordi'
          },
          {
            label: 'مدیریتی',
            emoji: `${emoji.Mod_Help}`,
            value: 'moderation'
          },
          {
            label: 'اطلاعات ربات',
            emoji: `${emoji.Etelaati_Help}`,
            value: 'information'
          },
          ])
      )

    const mainHelp = new MessageEmbed()
      .setThumbnail(client.user.avatarURL())
      .setAuthor(`Hilda Bot Help's`, client.user.avatarURL())
      .setColor(config.color.blue)
      .setDescription(`**سلامـ اسمـ من __هیلـدا__ اسـت ${emoji.Hi}\n\n> مَـن کیَـم ؟\nاگه بخوام بهتون بگم من __اولین بات ایونت__ ایرانی هستم که انواع بازی ها و ایونت هایی که باعث گذروندن وقت شما میشه رو دارم ، خوشحال میشم اگه ایده جدیدی هم داریداز طریق دستور \`idea/\`بهم بگید تا براتون اضافه کنم\n\n${emoji.Smile} برای استفاده از من کافیه بر روی منوی زیر کلیک کنی تا تمام دستورات من در بخش های مختلف رو ببینی**`)
      .setImage("https://cdn.discordapp.com/attachments/961264596440723536/1021132771642585088/help.jpg")

    const eventHelp = new MessageEmbed()
      .setColor(config.color.blue)
      .setFooter(`برای استفاده از دستور ها کافی است آن هارا در سرور اجرا و ارسال کنید`, interaction.user.displayAvatarURL())
      .setThumbnail(client.user.avatarURL())
      .addFields(
        { name: `${emoji.Event_Help}\`/5sanie\``, value: `${emoji.Reply}〢بازی سرعتی و جالب 5 ثانیه`, inline: true },
        { name: `${emoji.Event_Help}\`/jorat\``, value: `${emoji.Reply}〢بازی هیجانی و جرئت`, inline: true },
        { name: `${emoji.Event_Help}\`/haghighat\``, value: `${emoji.Reply}〢بازی هیجانی و حقیقت`, inline: true },
        { name: `${emoji.Event_Help}\`/sandalidagh\``, value: `${emoji.Reply}〢بازی هیجانی و +18 صندلی داغ`, inline: true },
        { name: `${emoji.Event_Help}\`/deklame\``, value: `${emoji.Reply}〢متن های دکلمه آماده`, inline: true },
        { name: `${emoji.Event_Help}\`/deklamemusic\``, value: `${emoji.Reply}〢ارسال متن دکلمه + پخش موزیک دکلمه`, inline: true },
      )

    const funHelp = new MessageEmbed()
      .setColor(config.color.blue)
      .setFooter(`برای استفاده از دستور ها کافی است آن هارا در سرور اجرا و ارسال کنید`, interaction.user.displayAvatarURL())
      .setThumbnail(client.user.avatarURL())
      .addFields(
        { name: `${emoji.Sargarmi_Help}\`/aya [Question]\``, value: `${emoji.Reply}〢بازی پرسش و پاسه با ربات`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/zanyab\``, value: `${emoji.Reply}〢پیدا کردن زن خوشگل برای شما`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/shoharyab\``, value: `${emoji.Reply}〢پیدا کردن شوهر خوشگل برای شما`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/s-discord\``, value: `${emoji.Reply}〢درصد اعتیاد شما به دیسکورد`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/s-lesbian\``, value: `${emoji.Reply}〢درصد لز بودن شما`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/s-gay\``, value: `${emoji.Reply}〢درصد گِی بودن شما`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/s-haval\``, value: `${emoji.Reply}〢مقدار هول بودن شما دوست عزیز`, inline: true },
        { name: `${emoji.Sargarmi_Help}\`/love [User]\``, value: `${emoji.Reply}〢درصد علاقه شما با ...`, inline: true },
      )

    const moderationHelp = new MessageEmbed()
      .setColor(config.color.blue)
      .setFooter(`برای استفاده از دستور ها کافی است آن هارا در سرور اجرا و ارسال کنید`, interaction.user.displayAvatarURL())
      .setThumbnail(client.user.avatarURL())
      .addFields(
        { name: `${emoji.Mod_Help}\`/setlog [Channel]\``, value: `${emoji.Reply}〢تنظیم چنل لاگ برای تاریخچه عملکرد ربات`, inline: true },
        { name: `${emoji.Mod_Help}\`/setbanner\``, value: `${emoji.Reply}〢تنظیم بنر سرور`, inline: true },
        { name: `${emoji.Mod_Help}\`/clear\``, value: `${emoji.Reply}〢پاک کردن پیام های چت`, inline: true },
        { name: `${emoji.Mod_Help}\`/lock\``, value: `${emoji.Reply}〢قفل کردن چنل`, inline: true },
        { name: `${emoji.Mod_Help}\`/unlock\``, value: `${emoji.Reply}〢باز کردن چنل`, inline: true },
      )

    const otherHelp = new MessageEmbed()
      .setColor(config.color.blue)
      .setFooter(`برای استفاده از دستور ها کافی است آن هارا در سرور اجرا و ارسال کنید`, interaction.user.displayAvatarURL())
      .setThumbnail(client.user.avatarURL())
      .addFields(
        { name: `${emoji.Karbordi_Help}\`/avatar\``, value: `${emoji.Reply}〢تنظیم چنل لاگ برای تاریخچه عملکرد ربات`, inline: true },
        { name: `${emoji.Karbordi_Help}\`/danestani\``, value: `${emoji.Reply}〢تنظیم بنر سرور`, inline: true },
        { name: `${emoji.Karbordi_Help}\`/fal\``, value: `${emoji.Reply}〢پاک کردن پیام های چت`, inline: true },
        { name: `${emoji.Karbordi_Help}\`/gif-fun\``, value: `${emoji.Reply}〢قفل کردن چنل`, inline: true },
        { name: `${emoji.Karbordi_Help}\`/hadis\``, value: `${emoji.Reply}〢باز کردن چنل`, inline: true },
        { name: `${emoji.Karbordi_Help}\`/boy-profile\``, value: `${emoji.Reply}〢باز کردن چنل`, inline: true },
        { name: `${emoji.Karbordi_Help}\`/girl-profile\``, value: `${emoji.Reply}〢باز کردن چنل`, inline: true },
      )

    client.users.fetch("500740143532212245").then(DoCi => {
      const statsEmbed = new MessageEmbed()
        .setAuthor(`Hilda Bot Stat's`, client.user.avatarURL())
        .addFields(
          { name: `${emoji.Developer} Developer`, value: `${emoji.Blank}${DoCi.tag}`, inline: false },
          { name: `${emoji.Guild} Guild's`, value: `${emoji.Blank}${client.guilds.cache.size}`, inline: false },
          { name: `${emoji.Members} Member's`, value: `${emoji.Blank}${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`, inline: false },
          { name: `${emoji.Database} Database`, value: `${emoji.Blank}Connected !`, inline: false },
          { name: `${emoji.Ping} Ping`, value: `${emoji.Blank}${client.ws.ping}`, inline: false },
          { name: `${emoji.Version} Version`, value: `${emoji.Blank}${config.version}`, inline: false },
          { name: `${emoji.Uptime} Uptime`, value: `${emoji.Blank}\`${duration}\``, inline: false },
        )
        .setColor(config.color.blue)
        .setThumbnail(client.user.avatarURL())
        .setImage("https://cdn.discordapp.com/attachments/961264596440723536/1021126680015814757/stats.jpg")
        .setFooter(`Copyright © 2022 Observers™️ . All rights reserved | Made by ${DoCi.tag}`)


      interaction.followUp({
        embeds: [mainHelp],
        components: [inviteRow, categoryRow]
      })

      const filter = i => i.customId === 'menu' && i.user.id === i.user.id;

      const collector = interaction.channel.createMessageComponentCollector({ filter });

      collector.on('collect', async i => {
        if (i.values[0] === 'sargarmi') {
          await i.update({ embeds: [funHelp], ephemeral: false });
        } else {
          if (i.values[0] === 'karbordi') {
            await i.update({ embeds: [otherHelp], ephemeral: false });
          } else {
            if (i.values[0] === 'event') {
              await i.update({ embeds: [eventHelp], ephemeral: false });
            } else {
              if (i.values[0] === 'moderation') {
                await i.update({ embeds: [moderationHelp], ephemeral: false });
              } else {
                if (i.values[0] === 'information') {
                  await i.reply({ embeds: [statsEmbed], ephemeral: true });
                }
              }
            }
          }
        }
      })
    })
  }
}