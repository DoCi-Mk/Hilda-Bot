const { MessageEmbed, WebhookClient } = require('discord.js');
const Command = require('../webhook.json')
const JoinChannel = new WebhookClient({ url: Command.JoinLeave });
const client = require('../index.js')

client.on('guildDelete', async guild => {
    servers = global.servers - 1
    Channel = await client.channels.cache.get('947475743959556096')
    const Leave = new MessageEmbed()
        .setAuthor(`Bot Out From ﴾ ${guild.name} ﴿ Server | Server Count : ${servers}`, guild.iconURL())
        .setColor('#2f3136')
        .addFields(
            { name: 'Guild Owner :', value: `<@${guild.ownerId}>`, inline: true },
            { name: 'Server Created At :', value: `${guild.createdAt} \`${guild.createdTimestamp}\``, inline: true },
            { name: 'Server Members :', value: `${guild.memberCount}`, inline: true },
            { name: 'Region :', value: `${guild.region}`, inline: true },
            { name: 'Total Channels :', value: `${guild.channels.cache.size}`, inline: true },
            { name: 'Roles :', value: `${guild.roles.cache.size}`, inline: true },
        )

    Channel.send({
        embeds: [Leave]
    })

    LeaveChannel.send({
        username: 'Leave',
        avatarURL: 'https://cdn.discordapp.com/emojis/860884617770303519.png',
        embeds: [Leave],
    })
})