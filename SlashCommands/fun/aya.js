const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const answers = [
    "شاید <:828935759200387092:862365020801597480>",
    "احتمالش کمه <a:810232019715358721:862365050404339752>",
    "احتمالش زیاده <:853973900676038666:862366012045525052>",
    "اصلا فکرشم نکن <:853973900676038666:862366012045525052>",
    "اوممممم 50 / 50 <:846336357496651796:862366010891173918>",
    "حتمااا 100% <:814157373039575080:862366010510016524>",
];

module.exports = {
    name: "aya",
    category: "Other",
    description: "پاسخ به سوال شما",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    options: [
        {
            name: 'text',
            description: "سوال خودتون رو مطرح کنید",
            type: 3,
            required: true,
        },
    ],

    run: async (client, interaction, args, message) => {

        const question = interaction.options.getString('text');

        interaction.followUp({
            embeds: [
                new MessageEmbed()
                    .addFields(
                        { name: `> سوال :`, value: `**${question}**`, inline: false },
                        { name: `> پاسخ :`, value: `**${(answers[Math.floor(Math.random() * answers.length)])}**`, inline: false }
                    )
                    .setColor(config.color.blue)
                    .setThumbnail(interaction.user.avatarURL())
            ]
        })



    },
}