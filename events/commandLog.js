const { MessageEmbed, WebhookClient } = require('discord.js');
const client = require('../index')
const config = require("../config.json")
const LogChannel = new WebhookClient({ url: "https://discord.com/api/webhooks/961359449077973002/Cls6THDdX8k6QW_FgyH9JdW-HHFb8XNfdftsXXVzMp7Zq7uNLL6ZA8fZuzq077HWZq4P" });


client.on("interactionCreate", async (interaction) => {
    const LogEmbed = new MessageEmbed()
        .setColor("WHITE")
        .setAuthor(`${interaction.guild.name} | ${interaction.guild.id}` , interaction.guild.iconURL())
        .addFields(
            { name: '• User Used :', value: `${interaction.user.tag} | ${interaction.user.id}`, inline: false },
            { name: '• ChannelID :', value: `${interaction.channel.id}`, inline: false },
            { name: '• ChannelName :', value: `${interaction.channel.name}`, inline: false },
            { name: '• CommandName :', value: `${interaction.commandName}`, inline: false }
        )

    LogChannel.send({
        username: 'Command Logs',
        avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Notepad-117597_640.png',
        embeds: [LogEmbed],
    })
})