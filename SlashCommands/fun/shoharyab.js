const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "shoharyab",
    category: "Games🎲",
    aliases: ['shy'],
    description: 'پیدا کردن زن جذاب',
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {


        const pictures = [
            "https://cdn.discordapp.com/attachments/659108283549745193/872405914827763752/LaurieManGif_7.gif",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701556515446794/Screenshot_201506131903301.png",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701553931771945/olegwsh2_177660479_900830054108773_2445571525039374602_n.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701551624908880/olegwsh2_160632503_432285417868125_347280444904003756_n.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701534495367168/karizmatik-sigara-icen-erkekler_1386511.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701530036805652/jashlem_118604108_731783084051113_1407447095727933354_n.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701526446473227/f62ef4576742f82f25fc64dc3d280c16.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701524265447465/e28ed953adf69871b380e31022d7bb87.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701509002387487/ca7b126857b0663c874354600315ad85.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701485929525279/afa903f6c60d4501c21b8b6310403009.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701475598934016/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f.jpg",
            "https://cdn.discordapp.com/attachments/659108283549745193/871701465020911646/5483ba848ee0b78f749fe5a578a4c222.jpg",
            "https://cdn.discordapp.com/attachments/706108878785347634/827006690792439828/1.gif",
            "https://cdn.discordapp.com/attachments/706108878785347634/827006695133806592/2.gif",
            "https://cdn.discordapp.com/attachments/706108878785347634/809212297624551444/de5fc6f63370715808281628df294331.gif",
            "https://cdn.discordapp.com/attachments/706108878785347634/772966542841217024/test1.gif",
            "https://cdn.discordapp.com/attachments/706108878785347634/768056016339599370/a_beccba3c119818db306a33b6aa8a7ca9.gif",
            "https://cdn.discordapp.com/attachments/706108878785347634/764270701606731836/ezgif-6-d7401d2c27f1.gif",
        ]

        const name = [
            "مـمـد",
            "جـعفـر",
            "اصغـر",
            "اکـبر",
            "رضـا",
            "شـایـان",
            "مـصـطـفی",
            "سـعید",
            "امیرعلی",
            "ماهان",
            "هادی",
            "ارسلان",
            "امیر",
            "مـحـسن",
            "ایلیا",
            "فرهاد",
            "ساسان",
            "نیـما",
            "کـریم",
        ]


        const shoghl = [
            'مهندس برق',
            'مهندس معماری',
            'مهندس شیمی',
            'مهندس شیمی',
            'مهندس هوا فضا',
            'مهندس دریا',
            'مهندس کشاورزی',
            'استاد دانشگاه',
            'معلم',
            'معلم کودکان خاص',
            'مشاور شغلی',
            'پژوهشگر',
            'حسابدار',
            'کارشناس بیمه',
            'خانه دار',
            'ممیز مالیاتی',
            'پزشک',
            'جراح',
            'داروساز	',
            'دندانپزشک',
            'دامپزشک',
            'میکروبیولوژیست',
            'آبیار گیاهان دریایی',
            'ماما',
            'برنامه نویس کامپیوتر',
            'تحلیل گر و طراح نرم افزار',
            'کارشناس شبکه',
            'انیماتور',
            'مدیر وب سایت',
            'ماساژور',
        ]


        const emojiShoharyab = {
            nameEmoji: `<a:810232019715358721:862365050404339752>`,
            senEmoji: `<:846336357496651796:862366010891173918>`,
            sexEmoji: `<a:test:912409567181279284>`,
            shoghlEmoji: `<:756506642094358659:874900371020075049>`,
        }



        const shoharyabEmbed = new MessageEmbed()
            .setColor(config.color.blue)
            .setTitle(`👨〢شـوهــر آیــنده شـما`)
            .setThumbnail(pictures[Math.floor(Math.random() * pictures.length)])
            .addFields(
                { name: `نام `, value: `${name[Math.floor(Math.random() * name.length)]}`, inline: true },
                { name: `سـن`, value: `${Math.floor(Math.random() * 45)}`, inline: true },
                { name: `\u200B`, value: '\u200B' },
                { name: `سـایز`, value: `${Math.floor(Math.random() * 20)} **CM**`, inline: true },
                { name: `شـغـل`, value: `${shoghl[Math.floor(Math.random() * shoghl.length)]}`, inline: true },
                { name: `\u200B`, value: '\u200B' },
                { name: `📏 قـد`, value: `${Math.floor(Math.random() * 200)}`, inline: true },
                { name: `🧭 وزن`, value: `${Math.floor(Math.random() * 100)} کـیلـوگـرم`, inline: true },
            )
            .setFooter(`${interaction.user.username}`, interaction.user.displayAvatarURL({ dynamic: true }))
        await interaction.followUp({
            contents: [`**دوسش داری !؟**`],
            embeds: [shoharyabEmbed]
        }).then(msg => {

            msg.react('🤤')
            msg.react('🤢')

        })
    }
}
