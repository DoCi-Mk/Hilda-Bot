const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const prefixdb = require('../../models/prefix')
const config = require('../../config.json')
const v = require('../../config.json')
const update = require('../../updatelog.json')

module.exports = {
  name: 'help',
  category: 'info',
  description: 'Say Help and All Commands',
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, message, args) => {

    OWNER = client.users.cache.get(config.owner)

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
          .setURL(`${config.botinvite}`)
          .setLabel(`Invite Hilda Bot`)
          .setStyle('LINK')
      )
      .addComponents(
        new MessageButton()
          .setURL(v.support)
          .setLabel(`Support Hilda Bot`)
          .setStyle('LINK')
      )
      .addComponents(
        new MessageButton()
          .setURL(`${v.vote}`)
          .setLabel(`Vote Hilda Bot`)
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
          .setPlaceholder(`بـرای دیدن دستـورات کلیک کنـید`)
          .setOptions([{
            label: 'دکـــلمه',
            emoji: `${emoji.deklame}`,
            // description: 'Baraye Didan Command Haye Deklame Click Konid',
            value: 'deklame'
          },
          {
            label: 'ســرگــرمی',
            emoji: `${emoji.sargarmi}`,
            // description: 'Baraye Didan Command Haye Sargarmi Click Konid',
            value: 'sargarmi'
          },
          {
            label: 'اطــلاعاتی',
            emoji: `${emoji.etelaati}`,
            // description: 'Baraye Didan Command Haye Etelaati Click Konid',
            value: 'information'
          },
          {
            label: 'کــاربردی',
            emoji: `${emoji.karbordi}`,
            // description: 'Baraye Didan Command Haye UseFul / PorKarbord Click Konid',
            value: 'karbordi'
          },
          {
            label: 'ایـــونت',
            emoji: `${emoji.event}`,
            // description: 'Baraye Didan Command Haye Event / ModiriateEvent Click Konid',
            value: 'event'
          },
          {
            label: 'پـــروفایـل',
            emoji: `${emoji.motefareghe}`,
            //  description: 'Baraye Didan Command Haye Profile Click Konid',
            value: 'prof'
          },
          {
            label: 'مـدیـریـتـی',
            emoji: `${emoji.mod}`,
            //  description: 'Baraye Didan Command Haye Profile Click Konid',
            value: 'moderation'
          },
          ])
      )

    const update_log = new MessageEmbed()
      .setAuthor(`تاریخچه بروزرسانی ها・ورژن کنونی بات : ${v.version_bot}`)
      .setDescription(`\`\`\`${update.update}\`\`\``)
      .setColor('#2f3136')
      .setFooter('اگر سوالی در رابطه با آپدیت های اخیر بات داشتید در سرور پشتیبان با ما در ارتباط باشید')

    const helo_deklame = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات دکـــلمه')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .addFields(
        { name: `・پخش بی کلام موزیک دکلمه`, value: ` ${emoji.deklame} \`\`${prefix}deklame\`\``, inline: false },
        { name: `・ارسال متن دکلمه`, value: `${emoji.deklame} \`\`${prefix}deklametext\`\``, inline: false },
      )

    const helo_sargarmi = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات ســرگــرمی')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .addFields(
        { name: `・پرسش و پاسخ با بات`, value: `${emoji.sargarmi} \`\`${prefix}aya [Your Question]\`\``, inline: true },
        { name: `・پیدا کردن زن آیندتون`, value: `${emoji.sargarmi} \`\`${prefix}zanyab\`\``, inline: true },
        { name: `・پیدا کردن شوهر آیندتون`, value: `${emoji.sargarmi} \`\`${prefix}shoharyab\`\``, inline: false },
        { name: `・درصد اعتیاد به دیسکورد`, value: `${emoji.sargarmi} \`\`${prefix}discord\`\``, inline: true },
        { name: `・درصد لز بودن شما دوست عزیز`, value: `${emoji.sargarmi} \`\`${prefix}lez\`\``, inline: true },
        { name: `・درصد هَوَل بودن شما دوست عزیز`, value: `${emoji.sargarmi} \`\`${prefix}haval\`\``, inline: false },
        { name: `・درصد گِی بودن شما دوست عزیز`, value: `${emoji.sargarmi} \`\`${prefix}gay\`\``, inline: false },
        { name: `・درصد علاقه شما به دیگری`, value: `${emoji.sargarmi} \`\`${prefix}love [MentionUser]\`\``, inline: false },

      )

    const help_mod = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات مـدیـریـتـی')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      // .addFields(
      //   {name: `فال حافظِ ` , value: `${emoji.karbordi} \`\`${prefix}fal\`\`` , inline:false},
      //   {name: `・ارسال متن از طریق بات` , value: `${emoji.karbordi} \`\`${prefix}say\`\`` , inline:false},
      //   {name: `・حدیث و سخن بزرگان` , value: `${emoji.karbordi} \`\`${prefix}hadis\`\`` , inline:false},
      //   {name: `جوک خنده دار` , value: `${emoji.karbordi} \`\`${prefix}joke\`\`` , inline:false},
      //   {name: `・دانستنی ها` , value: `${emoji.karbordi} \`\`${prefix}fact\`\`` , inline:false},
      //   {name: `・دیدن آواتار فرد` , value: `${emoji.karbordi} \`\`${prefix}avatar\`\`` , inline:false},
      //   {name: `・ساخت پسورد قوی` , value: `${emoji.karbordi} \`\`${prefix}gpass\`\`` , inline:false},
      //   {name: `・فیلم دپ و عاشقانه` , value: `${emoji.karbordi} \`\`${prefix}deplove\`\`` , inline:false},
      //   {name: `・متن دلنوشته` , value: `${emoji.karbordi} \`\`${prefix}delneveshte\`\`` , inline:false},
      //   {name: `・گیف خنده دار` , value: `${emoji.karbordi} \`\`${prefix}gif\`\`` , inline:false},
      // )
      .setDescription(`${emoji.load} به زودی !`)

    const helo_karbordi = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات کــاربــردی')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .addFields(
        { name: `فال حافظِ `, value: `${emoji.karbordi} \`\`${prefix}fal\`\``, inline: false },
        { name: `・ارسال متن از طریق بات`, value: `${emoji.karbordi} \`\`${prefix}say\`\``, inline: false },
        { name: `・حدیث و سخن بزرگان`, value: `${emoji.karbordi} \`\`${prefix}hadis\`\``, inline: false },
        { name: `جوک خنده دار`, value: `${emoji.karbordi} \`\`${prefix}joke\`\``, inline: false },
        { name: `・دانستنی ها`, value: `${emoji.karbordi} \`\`${prefix}fact\`\``, inline: false },
        { name: `・دیدن آواتار فرد`, value: `${emoji.karbordi} \`\`${prefix}avatar\`\``, inline: false },
        { name: `・ساخت پسورد قوی`, value: `${emoji.karbordi} \`\`${prefix}gpass\`\``, inline: false },
        { name: `・فیلم دپ و عاشقانه`, value: `${emoji.karbordi} \`\`${prefix}deplove\`\``, inline: false },
        { name: `・متن دلنوشته`, value: `${emoji.karbordi} \`\`${prefix}delneveshte\`\``, inline: false },
        { name: `・گیف خنده دار`, value: `${emoji.karbordi} \`\`${prefix}gif\`\``, inline: false },
      )


    const helo_event = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات ایــونت')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .addFields(
        { name: `・سوال حقیقت`, value: `${emoji.event} \`\`${prefix}haghighat / h\`\``, inline: false },
        { name: `・سوال جرئت`, value: `${emoji.event} \`\`${prefix}jorat / j\`\``, inline: false },
        { name: `・بازی پنج ثانیه`, value: `${emoji.event} \`\`${prefix}5s\`\``, inline: false },
        { name: `・پاک کردن پیام`, value: `${emoji.event} \`\`${prefix}clear\`\``, inline: false },
        { name: `・میوت کردن تمام افراد رو ویس`, value: `${emoji.event} \`\`${prefix}muteall\`\``, inline: false },
        { name: `・آنمیوت کردن تمام افراد رو ویس`, value: `${emoji.event} \`\`${prefix}unmuteall\`\``, inline: false },
        { name: `・دیفن کردن تمام افراد رو ویس`, value: `${emoji.event} \`\`${prefix}defall\`\``, inline: false },
        { name: `・آندیفن کردن تمام افراد رو ویس`, value: `${emoji.event} \`\`${prefix}undefall\`\``, inline: false },
      )

    const helo_prof = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات پـروقایل و عکس')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .addFields(
        { name: `・عکس پروفایل دخترونه`, value: `${emoji.motefareghe} \`\`${prefix}gpic\`\``, inline: false },
        { name: `・گیف پروفایل دخترونه`, value: `${emoji.motefareghe} \`\`${prefix}ggif\`\``, inline: false },
        { name: `・عکس پروفایل پسرونه`, value: `${emoji.motefareghe} \`\`${prefix}bpic\`\``, inline: false },
        { name: `・گیف پروفایل پسرونه`, value: `${emoji.motefareghe} \`\`${prefix}bgif\`\``, inline: false },
      )


    const helo_information = new MessageEmbed()
      .setColor('#2f3136')
      .setAuthor('• دستورات اطــلاعاتی')
      .setFooter(message.author.username, message.author.displayAvatarURL())
      .addFields(
        { name: `・درباره بات هیلدا`, value: `${emoji.etelaati} \`\`${prefix}about\`\``, inline: false },
        { name: `・گزارش مشکل در بات`, value: `${emoji.etelaati} \`\`${prefix}report [Your Report]\`\``, inline: false },
        { name: `・دعوت بات به سرورتون`, value: `${emoji.etelaati} \`\`${prefix}invite\`\``, inline: false },
        { name: `・دادن ایده راجب بات`, value: `${emoji.etelaati} \`\`${prefix}idea [Your Idea]\`\``, inline: false },
      )

    const Help = new MessageEmbed()
      .setAuthor("Hey I'm Hilda , Persian Language", 'https://cdn.discordapp.com/attachments/871858377972654090/874702796916674590/author.png')
      .setColor('#2f3136')
      //.setThumbnail(message.author.displayAvatarURL({dynamic: true }))
      .setDescription(`**ســــــلام ممنونم که منو انتخاب کردید برای سرورتون ${emoji.smile} من قابلیت های خفنی دارم میتونی رو منوی زیر کلیک کنی و دستورامو ببینی \n\n${emoji.dot1} از طریق دستور زیر میتونی پریفیکس منو در سرور خودت عوضی کنی\n${emoji.load} \`\`${prefix}prefix [Your Prefix]\`\`\n\n${emoji.dot1} از طریق دستور زیر هم میتوانید اگر مشکلی در بات دیدید به ما گزارش دهید\n${emoji.load}\`\`${prefix}report [Your Problem]\`\`\n\nبرای دعوت من به سرور خود کافیه بر روی [Invite Hilda Bot](${config.botinvite}) کلیک کنید ${emoji.sepas}**`)
      .setImage('https://cdn.discordapp.com/attachments/871858377972654090/874702849718759434/home.jpg')
      .setFooter(`Dev By ${OWNER.tag}`, OWNER.displayAvatarURL({ dynamic: true }))
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
            await i.update({ embeds: [helo_information], ephemeral: false });
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