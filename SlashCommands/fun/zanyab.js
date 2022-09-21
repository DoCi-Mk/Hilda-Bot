const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "zanyab",
    category: "Games🎲",
    description: "پیدا کردن زن جذاب",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        //Picture's
        const pictures = [
            'https://cdn.discordapp.com/attachments/608711473652563968/840819255157981214/image0.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840815580545286144/image0.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840815557791318046/image0.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840815529207660585/image0.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840815519513837588/image0.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840812020860452914/a_808c6a52d28331070ec1171074cbeadd.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777868321882138/a_091ea797fa4a9bf040f52841d4b6666f.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777947232600124/a_3b4ad799540c713fe579944e0eb85198.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777767187644436/a_beadb749e814a2baea594e1aa0ac6b71.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777729744961536/6pai9YYIK0fM3BE7GX.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777644840583178/woman.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777592545738752/maskw_5.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777582219231232/woman_3.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777545615278100/image1-2-1.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777511246757888/image0-30.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777471946653756/image0-12-1.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777425691476058/image0-16.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777390812823572/image0-3-3.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777296453304360/image0-2.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777223106723890/image0-3-1-2.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777149119725599/a_756fe1b81f703eaba32c3467028b61c0.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777124041457684/image8.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777076201750579/hhm_1-1.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840777023202525224/image0_55.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776968701083658/a_45b2f26f2a7a6cf1f5e23f2acb5ab2d7-1.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776764943106118/sleviowoman39.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776780524421120/sleviowoman50.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776642766962688/astrow.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776619140710420/gif_124.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776563867123733/image0_37.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776493763657728/image1_1.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776444145303572/a_24fe297869192902e5a8510b4a5ea280.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776406735912990/Varon_10.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776384748978217/Varon_15.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776348188540948/Varon_30.gif',
            'https://cdn.discordapp.com/attachments/608711473652563968/840776262891864064/Varon_119.gif',
        ]

        const name = [
            "فرا",
            "افشید",
            "آپامه",
            "آتری",
            "آتوسا",
            "آدخت",
            "آذر",
            "آذربانو",
            "آذرچهر",
            "آذرگون",
            "آراسته",
            "آرام",
            "باران",
            "بنفشه",
            "پادمیرا ",
            "پارمیدا",
            "تابان",
            "تارا",
            "ثریّا",
            "ثمر",
            "ثمین",
            "ثنا",
            "جانا",
            "حدیثه",
            "حلیا",

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

        const emojiZanyab = {
            nameEmoji: `<:854030890358145054:862366004831322122>`,
            senEmoji: `<:853973852672360468:862366006458187786>`,
            sexEmoji: `<a:810231903826739220:862366009250545674>`,
            shoghlEmoji: `<:853973900676038666:862366012045525052>`,
        }


        const zanyabEmbed = new MessageEmbed()
            .setColor(config.color.blue)
            .setTitle(`👧〢زن آیــنده شـما`)
            .setThumbnail(pictures[Math.floor(Math.random() * pictures.length)])
            .addFields(
                { name: `${emojiZanyab.nameEmoji}نام`, value: `${name[Math.floor(Math.random() * name.length)]}`, inline: true },
                { name: `${emojiZanyab.senEmoji}سن`, value: `${Math.floor(Math.random() * 45)}`, inline: true },
                { name: `\u200B`, value: `\u200B` },
                { name: `${emojiZanyab.sexEmoji} درصد علاقه به سکس`, value: `${Math.floor(Math.random() * 100)}%`, inline: true },
                { name: `${emojiZanyab.shoghlEmoji} شغل`, value: `${shoghl[Math.floor(Math.random() * shoghl.length)]}`, inline: true },
                { name: `\u200B`, value: `\u200B` },
                { name: `📏 قـد`, value: `${Math.floor(Math.random() * 175)}`, inline: true },
                { name: `🧭 وزن`, value: `${Math.floor(Math.random() * 85)} کـیلـوگـرم`, inline: true },
            )
            .setFooter(`${interaction.user.username}`, interaction.user.avatarURL())
        await interaction.followUp({
            contents: [`**دوسش داری !؟**`],
            embeds: [zanyabEmbed]
        }).then(msg => {

            msg.react('🤤')
            msg.react('🤢')

        })
    },
}
