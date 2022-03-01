const { MessageEmbed, WebhookClient } = require('discord.js');
const Command = require('../webhook.json')
const JoinChannel = new WebhookClient({ url: Command.JoinLeave });
const client = require('../index.js');
const emoji = require('../emoji');

client.on('guildCreate', async guild => {
    servers = global.servers + 1

    Channel = await client.channels.cache.get('947475743959556096')


    const Join = new MessageEmbed()
        .setAuthor(`Bot Joined to ﴾ ${guild.name} ﴿ Server | Server Count : ${servers}`, guild.iconURL())
        .setColor('#2f3136')
        .addFields({ name: `<:dot2org:918203606618996826> Guild Owner :`, value: `<:arrow:865002283934154774> <@${guild.ownerId}> | ${guild.ownerId}`, inline: false }, { name: `<:dot2org:918203606618996826> Server Created At :`, value: `<:arrow:865002283934154774> <t:${guild.createdTimestamp.toString().slice(0, guild.createdTimestamp.toString().length - 3)}:f> | <t:${guild.createdTimestamp.toString().slice(0, guild.createdTimestamp.toString().length - 3)}:R>`, inline: false }, { name: `<:dot2org:918203606618996826> Server Members :`, value: `<:arrow:865002283934154774> ${guild.memberCount}`, inline: false }, { name: `<:dot2org:918203606618996826> Total Channels :`, value: `<:arrow:865002283934154774> ${guild.channels.cache.size}`, inline: false }, { name: `<:dot2org:918203606618996826> Roles :`, value: `<:arrow:865002283934154774> ${guild.roles.cache.size}`, inline: false },)
        .setImage(guild.bannerURL())


    Channel.send({
        embeds: [Join]
    })
    JoinChannel.send({
        username: 'Join',
        avatarURL: 'https://cdn.discordapp.com/emojis/860884617820110909.png',
        embeds: [Join],
    })
})