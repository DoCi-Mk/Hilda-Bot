const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name: "shoharyab",
    category: "Games🎲",
    aliases: ['shy'],
    description: "پیدا کردن شوهر آینده خوب",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    
  run : async(client, message, args) => {  


    const aks = [
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
        var profzan = aks[Math.floor(Math.random() * aks.length)];

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
            var esm = name[Math.floor(Math.random() * name.length)];

            const sen = [
      '16',
      '18',
      '20',
      '21',
      '23',
      '24','25','26','27','28','29','30','32','33','34','35','36','38','37','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59',
      '60','62','64','66','68','69','70'
            ]

            var senn = sen[Math.floor(Math.random() * sen.length)];

            const sex = [
     '10',
     '11',
     '12',
     '13',
     '14',
     '15',
     '16',
     '17',
     '18','19','20'
            ]

            var darsadsex = sex[Math.floor(Math.random() * sex.length)];

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

            var shoghll = shoghl[Math.floor(Math.random() * shoghl.length)];

            const ghad = [
                '150','151','152','153','154','155','156','157','158','159','160','161','162','163','164','165','166','167','168','169','170','171','172','173','174','175','176',
                '177','178','179','180','181','182','183','184','185','186','187','188','189','190','191','192','193','194','195','196','197','198','199','200'
            ]
            var ghads = ghad[Math.floor(Math.random() * ghad.length)];

            const vazn = [
      '60','62','64','66','68','69','70','71','73','75','77','78','79','80','81','83','84','85','86','87','88','89','90','91','92','93','94'
      ,'95','96','97','98','99','100'
            ]
            var size = vazn[Math.floor(Math.random() * vazn.length)];



        const picembed = new MessageEmbed()
        .setColor(config.DefaultColor)
        .setAuthor('شـوهــر آیــنده شـما 👨')
        .setThumbnail(profzan)
        .addFields(
            { name: '<a:810232019715358721:862365050404339752> نـام آقا ', value: `${esm}` , inline: true}, 
            { name: '<:846336357496651796:862366010891173918> سـن آقا', value: `${senn}`, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '<a:test:912409567181279284> سـایز آقـا', value: `${darsadsex} **CM**`, inline: true },
            { name: '<:756506642094358659:874900371020075049> شـغـل آقـا', value: `${shoghll}`, inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '📏 قـد آقا', value: `${ghads}`, inline: true },
            { name: '🧭 وزن آقا', value: `${size} کـیلـوگـرم`, inline: true },
        )
        .setFooter(`${message.author.username}` , message.author.displayAvatarURL({ dynamic: true }))
        await message.reply({
            contents: [`**دوسش داری !؟**`],
            embeds: [picembed]
        }).then(msg => {

            msg.react('🤤')
            msg.react('🤢')
  
          })
  }
}
