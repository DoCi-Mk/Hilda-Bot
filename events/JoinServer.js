const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const client = require('../index.js');
const emoji = require('../emoji');
const config = require('../config.json');

client.on('guildCreate', async guild => {
    servers = global.servers + 1
    const JoinChannel = client.channels.cache.get('961359170874011740')
    owner = client.users.cache.get(guild.ownerId)
    const row = new MessageActionRow()

    .addComponents(
        new MessageButton()
        .setURL(`${config.Support}`)
        .setLabel(`پشتیبانی ربات`)
        .setStyle('LINK')
    )

    const Join = new MessageEmbed()
        .setAuthor(`Bot Joined to ﴾ ${guild.name} ﴿ Server | Server Count : ${servers}`, guild.iconURL())
        .setColor('#2f3136')
        .addFields({ name: `${emoji.Dot} Guild Owner :`, value: `${emoji.Arrow} <@${guild.ownerId}> | ${guild.ownerId}`, inline: false }, { name: `${emoji.Dot} Server Created At :`, value: `${emoji.Arrow} <t:${guild.createdTimestamp.toString().slice(0, guild.createdTimestamp.toString().length - 3)}:f> | <t:${guild.createdTimestamp.toString().slice(0, guild.createdTimestamp.toString().length - 3)}:R>`, inline: false }, { name: `${emoji.Dot} Server Members :`, value: `${emoji.Arrow} ${guild.memberCount}`, inline: false }, { name: `${emoji.Dot} Total Channels :`, value: `${emoji.Arrow} ${guild.channels.cache.size}`, inline: false }, { name: `${emoji.Dot} Roles :`, value: `${emoji.Arrow} ${guild.roles.cache.size}`, inline: false },)
        .setImage(guild.bannerURL({
            dynamic: true,
            format: "png",
            size: 2048,
        }))

    const JoinGuild = new MessageEmbed()
        .setAuthor(guild.name, guild.iconURL())
        .setDescription(`سلام <@${guild.ownerId}> ممنون که **هیلدا** را به سرور خودتون اد کردید \n\n برای دیدن تمام دستورات میتوانید از دستور \`help.\` استفاده کنید و اگر سوال یا مشکلی داشتید به سرور پشتیبانی آمده و مشکل خودتون رو با ما در میان بگذارید ${emoji.Sepas}`)
        .setColor(config.DefaultColor)

    owner.send({ contents: `<@${guild.ownerId}>`, embeds: [JoinGuild], components: [row] })


    JoinChannel.send({
        // username: 'Join',
        // avatarURL: 'https://cdn.discordapp.com/emojis/860884617820110909.png',
        embeds: [Join],
    })
})