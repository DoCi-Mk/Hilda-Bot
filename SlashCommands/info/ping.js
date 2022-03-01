const { MessageEmbed } = require("discord.js")
module.exports = {
        name : "ping",
        description : "Cheacking The Ping Of Bot",
        run : async (client, interaction, args) => {
              const embed = new MessageEmbed()
              .setDescription('🏓 Pinging...')
              .setColor("RANDOM");    
              const msg = await interaction.followUp({ embeds: [embed] })
              const ping = new MessageEmbed()
              .setTitle('🏓 Pong!')
              .setColor('#2f3136')
              .setDescription(`**WebSocket : **${client.ws.ping}Ms\n**Latency :**${Math.floor(msg.createdAt - interaction.createdAt)}Ms`)
                msg.edit({ embeds: [ping] })
       }
}