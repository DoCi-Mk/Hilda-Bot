const { MessageEmbed, WebhookClient } = require('discord.js');
const client = require('../index.js')
const emoji = require('../emoji')



client.on('guildDelete', async guild => {
    servers = global.servers - 1
    const LeaveChannel = client.channels.cache.get('961359170874011740')

    const Leave = new MessageEmbed()
        .setAuthor(`Bot Joined to ﴾ ${guild.name} ﴿ Server | Server Count : ${servers}`, guild.iconURL())
        .setColor('#2f3136')
        .addFields({ name: `${emoji.Dot} Guild Owner :`, value: `${emoji.Arrow} <@${guild.ownerId}> | ${guild.ownerId}`, inline: false }, { name: `${emoji.Dot} Server Created At :`, value: `${emoji.Arrow} <t:${guild.createdTimestamp.toString().slice(0, guild.createdTimestamp.toString().length - 3)}:f> | <t:${guild.createdTimestamp.toString().slice(0, guild.createdTimestamp.toString().length - 3)}:R>`, inline: false }, { name: `${emoji.Dot} Server Members :`, value: `${emoji.Arrow} ${guild.memberCount}`, inline: false }, { name: `${emoji.Dot} Total Channels :`, value: `${emoji.Arrow} ${guild.channels.cache.size}`, inline: false }, { name: `${emoji.Dot} Roles :`, value: `${emoji.Arrow} ${guild.roles.cache.size}`, inline: false },)
        .setImage(guild.bannerURL({
            dynamic: true,
            format: "png",
            size: 2048,
        }))

    LeaveChannel.send({
        // username: 'Leave',
        // avatarURL: 'https://cdn.discordapp.com/emojis/860884617770303519.png',
        embeds: [Leave],
    })
})