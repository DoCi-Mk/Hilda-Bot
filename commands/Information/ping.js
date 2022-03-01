const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'ping',
    category : 'info',
    description : 'دریافت پینگ بات',
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('🏓 Pong!')
            .setColor('#2f3136')
            .setDescription(`**WebSocket : **${client.ws.ping}Ms\n**Latency :**${Math.floor(msg.createdAt - message.createdAt)}Ms`)
            await message.channel.send({ embeds: [embed] })
            msg.delete()
    }
}