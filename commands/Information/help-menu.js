const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const update = require('../../updatelog.json')
const pack = require('../../package.json')

module.exports = {
  name: 'help',
  category: 'info',
  description: 'تمام دستورات بات',
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args) => {

    doci = client.users.cache.get(config.Founder)

    let prefix = await prefixdb.findOne({
      guildid: message.guild.id
    }).exec();
    if (prefix == null) {
      prefix = config.prefix
    } else {
      prefix = prefix.prefix;
    }

    const invite = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setURL(`${config.BotInvite}`)
          .setLabel(`دعوت ربات`)
          .setStyle('LINK')
      )
      .addComponents(
        new MessageButton()
          .setURL(`${config.Support}`)
          .setLabel(`سرور پشتیبانی ربات`)
          .setStyle('LINK')
      )
      .addComponents(
        new MessageButton()
          .setLabel(`رأی دادن به ربات`)
          .setStyle('LINK')
          .setURL(config.Vote)
      )
      .addComponents(
        new MessageButton()
          .setLabel(`بروزرسانی اخیر`)
          .setCustomId('update')
          .setStyle('DANGER'),
      )

    const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('menu')
          .setPlaceholder(`بـرای دیدن دستـورات کلیک کنـید`)
          .setOptions([{
            label: 'دکـــلمه',
            emoji: `${emoji.Deklame_Help}`,
            // description: 'Baraye Didan Command Haye Deklame Click Konid',
            value: 'deklame'
          },
          {
            label: 'ســرگــرمی',
            emoji: `${emoji.Sargarmi_Help}`,
            // description: 'Baraye Didan Command Haye Sargarmi Click Konid',
            value: 'sargarmi'
          },
          {
            label: 'کــاربردی',
            emoji: `${emoji.Karbordi_Help}`,
            // description: 'Baraye Didan Command Haye UseFul / PorKarbord Click Konid',
            value: 'karbordi'
          },
          {
            label: 'ایـــونت',
            emoji: `${emoji.Event_Help}`,
            // description: 'Baraye Didan Command Haye Event / ModiriateEvent Click Konid',
            value: 'event'
          },
          {
            label: 'پـــروفایـل',
            emoji: `${emoji.Motefareghe_Help}`,
            //  description: 'Baraye Didan Command Haye Profile Click Konid',
            value: 'prof'
          },
          {
            label: 'مـدیـریـتـی',
            emoji: `${emoji.Mod_Help}`,
            //  description: 'Baraye Didan Command Haye Profile Click Konid',
            value: 'moderation'
          },
          {
            label: 'اطــلاعاتی',
            emoji: `${emoji.Etelaati_Help}`,
            // description: 'Baraye Didan Command Haye Etelaati Click Konid',
            value: 'information'
          },
          ])
      )

    const update_log = new MessageEmbed()
      .setAuthor(`بروزرسانی های اخیر بات`)
      .setDescription(`\`\`\`${update.update}\`\`\``)
      .setColor('#2f3136')
      .setFooter('اگر سوالی در رابطه با آپدیت های اخیر بات داشتید در سرور پشتیبان با ما در ارتباط باشید | ' + config.Version)

    const helo_deklame = new MessageEmbed()
      .setDescription(`
      \n\`${prefix}deklame\` ${emoji.Arrow_Help} **ربات برای شما متن دکلمه ارسال میکند**\n
      \n\`${prefix}deklamemusic\` ${emoji.Arrow_Help} **پخش موزیک بی کلام برای دکلمه**\n
      \n\`${prefix}adddeklame\` ${emoji.Arrow_Help} **اضافه کردن متن دکلمه( فقط برای __VIP__ ها )**\n
      `)
      .setColor(config.DefaultColor)
      .setTitle(`${emoji.Deklame_Help} دستورات دکـــلمه`)
      .setFooter(message.author.username, message.author.displayAvatarURL())

    const helo_sargarmi = new MessageEmbed()

      .setColor(config.DefaultColor)
      .setTitle(`${emoji.Sargarmi_Help} دستورات ســرگــرمی`)
      .setDescription(`
      \n\`${prefix}aya [Your Question]\` ${emoji.Arrow_Help} **پرسش و پاسخ با بات**\n
      \n\`${prefix}zanyab\` ${emoji.Arrow_Help} **پیدا کردن زن آیندتون**\n
      \n\`${prefix}shoharyab\` ${emoji.Arrow_Help} **پیدا کردن شوهر آیندتون**\n
      \n\`${prefix}discord\` ${emoji.Arrow_Help} **درصد اعتیاد به دیسکورد**\n
      \n\`${prefix}lez\` ${emoji.Arrow_Help} **درصد لز بودن شما دوست عزیز**\n
      \n\`${prefix}haval\` ${emoji.Arrow_Help} **درصد هَوَل بودن شما دوست عزیز**\n
      \n\`${prefix}gay\` ${emoji.Arrow_Help} **درصد گِی بودن شما دوست عزیز**\n
      \n\`${prefix}love [MentionUser]\` ${emoji.Arrow_Help} **درصد علاقه شما به دیگری**\n
      `)
      .setFooter(message.author.username, message.author.displayAvatarURL())

    const help_mod = new MessageEmbed()
      .setColor(config.DefaultColor)
      .setTitle(`${emoji.Mod_Help} دستورات مـدیـریـتـی`)
      .setDescription(`
      \n\`${prefix}setlog\` ${emoji.Arrow_Help} **تنظیم کردن چنل اکشن لاگ**\n
      \n\`${prefix}setbanner\` ${emoji.Arrow_Help} **تنظیم کردن بنر سرور**\n
      \n\`${prefix}clear\` ${emoji.Arrow_Help} **پاک کردن پیام**\n
      \n\`${prefix}muteall\` ${emoji.Arrow_Help} **میوت کردن تمام افراد رو ویس**\n
      \n\`${prefix}unmuteall\` ${emoji.Arrow_Help} *آنمیوت کردن تمام افراد رو ویس**\n
      \n\`${prefix}defall\` ${emoji.Arrow_Help} **دیفن کردن تمام افراد رو ویس**\n
      \n\`${prefix}undefall\` ${emoji.Arrow_Help} **آندیفن کردن تمام افراد رو ویس**\n
      `)

    const helo_karbordi = new MessageEmbed()
      .setColor(config.DefaultColor)
      .setTitle(`${emoji.Karbordi_Help} دستورات کــاربــردی`)
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setDescription(`
      \n\`${prefix}fal\` ${emoji.Arrow_Help} **فال حافظِ**\n
      \n\`${prefix}say\` ${emoji.Arrow_Help} **ارسال متن از طریق بات**\n
      \n\`${prefix}hadis\` ${emoji.Arrow_Help} **حدیث و سخن بزرگان**\n
      \n\`${prefix}joke\` ${emoji.Arrow_Help} **جوک خنده دار**\n
      \n\`${prefix}fact\` ${emoji.Arrow_Help} **دانستنی ها**\n
      \n\`${prefix}avatar\` ${emoji.Arrow_Help} **دیدن آواتار فرد**\n
      \n\`${prefix}gpass\` ${emoji.Arrow_Help} **ساخت پسورد قوی**\n
      \n\`${prefix}deplove\` ${emoji.Arrow_Help} **فیلم دپ و عاشقانه**\n
      \n\`${prefix}gif\` ${emoji.Arrow_Help} **گیف خنده دار**\n
      `)


    const helo_event = new MessageEmbed()
      .setColor(config.DefaultColor)
      .setTitle(`${emoji.Event_Help} دستورات ایــونت`)
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setDescription(`
      \n\`${prefix}haghighat / ${prefix}h\` ${emoji.Arrow_Help} **سوال حقیقت**\n
      \n\`${prefix}jorat / ${prefix}j\` ${emoji.Arrow_Help} **سوال جرئت**\n
      \n\`${prefix}5s\` ${emoji.Arrow_Help} **بازی پنج ثانیه**\n
      \n\`${prefix}sd\` ${emoji.Arrow_Help} **سوالات جنجالی صندلی داغ**\n
      \n\`${prefix}clear\` ${emoji.Arrow_Help} **پاک کردن پیام**\n
      \n\`${prefix}muteall\` ${emoji.Arrow_Help} **میوت کردن تمام افراد رو ویس**\n
      \n\`${prefix}unmuteall\` ${emoji.Arrow_Help} *آنمیوت کردن تمام افراد رو ویس**\n
      \n\`${prefix}defall\` ${emoji.Arrow_Help} **دیفن کردن تمام افراد رو ویس**\n
      \n\`${prefix}undefall\` ${emoji.Arrow_Help} **آندیفن کردن تمام افراد رو ویس**\n
      `)

    const helo_prof = new MessageEmbed()
      .setColor(config.DefaultColor)
      .setTitle(`${emoji.Motefareghe_Help} دستورات پـروقایل و عکس`)
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .setDescription(`
      \n\`${prefix}gpic / ${prefix}h\` ${emoji.Arrow_Help} **عکس پروفایل دخترونه**\n
      \n\`${prefix}ggif / ${prefix}j\` ${emoji.Arrow_Help} **گیف پروفایل دخترونه**\n
      \n\`${prefix}bpic\` ${emoji.Arrow_Help} **عکس پروفایل پسرونه**\n
      \n\`${prefix}bgif\` ${emoji.Arrow_Help} **گیف پروفایل پسرونه**\n
      `)

    const helo_information = new MessageEmbed()
      .setColor(config.DefaultColor)
      .setTitle(`> ${emoji.Title} Information Bot`)
      .setDescription(
        `${emoji.Loading} **Founder : **${doci.tag} \n${emoji.Loading} **Total Commands :** ${client.commands.size} \n${emoji.Loading} **Ping :** ${client.ws.ping} \n${emoji.Loading} **Guild's :** ${client.guilds.cache.size} \n${emoji.Loading} **Channels :** ${client.channels.cache.size}\n${emoji.Loading} **Bot Version : **${config.Version}\n${emoji.Loading} **Discord.js Library : **${pack.dependencies['discord.js']}`
      )
      .setFooter(`Developed By : ${doci.tag}`, doci.avatarURL());


    const Help = new MessageEmbed()
      .setAuthor("Hey I'm Hilda , Persian Language Bot", client.user.displayAvatarURL())
      .setColor(config.DefaultColor)
      .setDescription(`**__سلام دوست من__** ${emoji.Hi}\n خوشحالم که داری از من استفاده میکنی ! از طریق منوی زیر میتونی تمام دستورات منو ببینی و استفادشون کنی ${emoji.Cheshmak}\n\n**> یه سری نکات هست این زیر بهت میگم شاید بدردت بخوره**\n${emoji.Dot} برای تغییر پریفیکس ربات در سرور خودت کافیه از دستورزیر استفاده کنید\n${emoji.Arrow} \`${prefix}prefix <New Prefix>\`\n\n${emoji.Dot} اگر مشکلی در ربات وجود داشت میتونی از طرق دستور زیر به ما گزارش بدهید\n${emoji.Arrow} \`${prefix}report <Bug>\`\n\n${emoji.Dot} از طریق دستور زیر هم میتوایند لینک های دعوت ربات را ببینید\n${emoji.Arrow} \`${prefix}invite\`\n\n **__در مرحله آخر هم خوشحال میشم ربات رو به دوستانتون معرفی کنید تا همه بتونند استفاده کنند ${emoji.Kissing}__**`)
      .setImage('https://cdn.discordapp.com/attachments/871858377972654090/874702849718759434/home.jpg')
      .setFooter(`Hilda Bot | ${config.Version}`)
      .setTimestamp()
    message.channel.send({ embeds: [Help], components: [row, invite] })



    const filter = i => i.customId === 'menu' && i.user.id === i.user.id;

    const collector = message.channel.createMessageComponentCollector({ filter });

    collector.on('collect', async i => {
      if (i.values[0] === 'deklame') {
        await i.update({ embeds: [helo_deklame], ephemeral: false });
      } else {
        if (i.values[0] === 'sargarmi') {
          await i.update({ embeds: [helo_sargarmi], ephemeral: false });
        } else {
          if (i.values[0] === 'information') {
            await i.reply({ embeds: [helo_information], ephemeral: true });
          } else {
            if (i.values[0] === 'karbordi') {
              await i.update({ embeds: [helo_karbordi], ephemeral: false });
            } else {
              if (i.values[0] === 'event') {
                await i.update({ embeds: [helo_event], ephemeral: false });
              }
              else {
                if (i.values[0] === 'prof') {
                  await i.update({ embeds: [helo_prof], ephemeral: false });
                } else {
                  if (i.values[0] === 'moderation') {
                    await i.update({ embeds: [help_mod], ephemeral: false });
                  }
                }
              }
            }
          }
        }
      }
    })

    const filter1 = i => i.customId === 'update' && i.user.id === message.author.id;

    const collector1 = message.channel.createMessageComponentCollector({ filter1 });

    collector1.on('collect', async i => {
      if (i.customId === 'update') {
        await i.reply({ embeds: [update_log], ephemeral: true });
      }
    });

  },
  catch(error) {
    const errorlogs = client.channels.cache.get("911718981071667250");
    message.channel.send(
      "🔱 Sorry Somthing Went Wrong! Reported to team :)"
    );
    errorlogs.send(`${emoji.arrow_red} ${message.author.tag} Got Error in ${message.content}!\n \`\`${JSON.stringify(error, null, "\t")}\`\``)
  },
}