const { MessageEmbed, WebhookClient } = require('discord.js');
const Command = require('../webhook.json')
const LogChannel = new WebhookClient({ url: Command.Log });
const client = require('../index')

client.on("interactionCreate", async (interaction) => {
    const Channel = client.channels.cache.get('947475743959556096')
    const LogEmbed = new MessageEmbed()
        .setColor('#2f3136')
        .setAuthor('Command Run Log', interaction.guild.iconURL())
        .addFields(
            { name: '• User Used :', value: `${interaction.user.tag} | ${interaction.user.id}`, inline: false },
            { name: '• ChannelID :', value: `${interaction.channel.id}`, inline: false },
            { name: '• ChannelName :', value: `${interaction.channel.name}`, inline: false },
            { name: '• ServerName :', value: `${interaction.guild.name} | ${interaction.guild.id}`, inline: false },
            { name: '• CommandName :', value: `${interaction.commandName}`, inline: false }
        )
    Channel.send({
        embeds: [LogEmbed]
    })
    LogChannel.send({
        username: 'Command Logs',
        avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Notepad-117597_640.png',
        embeds: [LogEmbed],
    })
})