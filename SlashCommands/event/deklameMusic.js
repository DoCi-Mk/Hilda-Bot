const { interactionEmbed, interactionActionRow, interactionButton, interaction, MessageEmbed } = require("discord.js");
const dbDeklame = require('../../models/newdeklame')
const config = require('../../config.json')
const DiscordVoice = require('@discordjs/voice')
const emoji = require('../../emoji')

let audios = [
    "https://cdn.discordapp.com/attachments/1021307160497496084/1021744976792662026/Y2Mate.is_-_Now_You_Can_Sleep-P-tzw16Iitg-160k-1660226356736.mp3",
]

module.exports = {
    name: 'deklamemusic',
    description: 'پخش موزیک هایی برای دکلمه + متن دکلمه',
    category: "Event's",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS", "CONNECT", "SPEAK"],

    run: async (client, interaction, args, ) => {

        let Matn = await dbDeklame.find({
        }).exec()

        var Desc = Matn[Math.floor(Math.random() * Matn.length)];

        const channel = interaction.member.voice.channel

        const errorVoice = new MessageEmbed()
            .setDescription(`${emoji.Sepas}〢**لطفا ابتدا به ویس متصل شوید سپس ، مجدداً از دستور استفاده کنید**`)
            .setColor(config.color.blue)

        if (!channel) return interaction.followUp({ embeds: [errorVoice] })
        audioIndex = Math.floor(Math.random() * 1)
        const player = DiscordVoice.createAudioPlayer();
        const resource = DiscordVoice.createAudioResource((audios[audioIndex]))
        const connection = DiscordVoice.joinVoiceChannel({
            channelId: channel.id,
            guildId: interaction.guild.id,
            adapterCreator: interaction.guild.voiceAdapterCreator
        })
        player.play(resource)
        connection.subscribe(player)
        player.on(DiscordVoice.AudioPlayerStatus.Idle, () => {
            connection.destroy()
        })
        interaction.followUp({
            content: `${emoji.Microphone}〢موزیک **دکــــلـمه** در حال پخش اسـت `,
            embeds: [
                new MessageEmbed()
                    .setColor(config.color.blue)
                    .setImage("https://cdn.discordapp.com/attachments/961264596440723536/1021739269502554122/bafda33cbb9dad2b.jpg")
                    .setDescription(`**${Desc.deklame}**`)
                    .setFooter(`${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }))
            ]
        })
    }
}
