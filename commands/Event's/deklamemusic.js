const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const prefixdb = require('../../models/prefix')
const ytdl = require('ytdl-core')
const config = require('../../config.json')
const DiscordVoice = require('@discordjs/voice')
const emoji = require('../../emoji')

let audios = [
  "https://www.youtube.com/watch?v=P-tzw16Iitg",
  "https://www.youtube.com/watch?v=ymWfl86Mybg",
  "https://www.youtube.com/watch?v=aWIE0PX1uXk",
  "https://www.youtube.com/watch?v=zMvCfm_AjYo",
  "https://www.youtube.com/watch?v=dY0SYtIeBew",
  "https://www.youtube.com/watch?v=jc205c1Wnag",
  "https://www.youtube.com/watch?v=fyG890AZ1bQ",
  "https://www.youtube.com/watch?v=mmr1LqxKOL4",
  "https://www.youtube.com/watch?v=tF4ZxHGGpCo",
]

module.exports = {
  name: 'deklamemusic',
  aliases: ['dekmusic'],
  description: 'پخش موزیک هایی برای دکلمه',
  category: "Event's",
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],

  run: async (client, message, args, intraction) => {

    let prefix = await prefixdb.findOne({
      guildid: message.guild.id
    }).exec();
    if (prefix == null) {
      prefix = config.prefix
    } else {
      prefix = prefix.prefix;
    }


    const channel = message.member.voice.channel
    let embed = new MessageEmbed()
      .setDescription(`**لطفا ابتدا به ویس متصل شوید سپس ، مجدداً از دستور استفاده کنید** ${emoji.Sepas}`)
      .setColor('#316899')
      .setFooter(
        `${message.author.tag}`,
        message.author.displayAvatarURL({
          dynamic: true,
          format: "png",
          size: 2048,
        })
      )

    if (!channel) return message.channel.send({ embeds: [embed] })
    audioIndex = Math.floor(Math.random() * 5)
    const player = DiscordVoice.createAudioPlayer();
    const resource = DiscordVoice.createAudioResource(ytdl(audios[audioIndex]))
    const connection = DiscordVoice.joinVoiceChannel({
      channelId: channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator
    })
    player.play(resource)
    connection.subscribe(player)
    player.on(DiscordVoice.AudioPlayerStatus.Idle, () => {
      connection.destroy()
    })
    message.reply(`موزیک **دکــــلـمه** در حال پخش است ${emoji.Microphone}`)
  }
}
