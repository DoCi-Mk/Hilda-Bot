const { MessageEmbed } = require(`discord.js`)
const axios = require(`axios`);
const config = require(`../../config.json`)
const emoji = require('../../emoji')
module.exports = {
    name: "hack",
    description: "هک کردن و دریافت اطلاعات شخصی افراد",
    category: "Fun",
    options: [
        {
            name: `user`,
            description: `کاربر رو وارد کنید`,
            type: 6,
            required: true,
        },
    ],


    run: async (client, interaction, args, message) => {


        const user = interaction.options.getUser(`user`);
        let avatar = user.displayAvatarURL({ dynamic: false, format: `png` });

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
            "عـلی",
            "ممد نونوا",
            "کامبیز",
            "مــهدی",
            "فِــــری",
            "کــاظم",
            "قــاسم",
            "احــمد",
            "پــــارسـا",
            "سپــهر",
        ]

        const mobile = [
            `سامـسـونگ`,
            `آیــفون`,
            `شیائــومی`,
            `الــ جی`,
            `هـو آ وی`,
            `نــوکیا`,
            `اچ تی سی`,
            `جی ال ایکس`,
            `هـونور`,
        ]


        const shoghl = [
            `مهندس برق`,
            `مهندس معماری`,
            `مهندس شیمی`,
            `مهندس شیمی`,
            `مهندس هوا فضا`,
            `مهندس دریا`,
            `مهندس کشاورزی`,
            `استاد دانشگاه`,
            `معلم`,
            `معلم کودکان خاص`,
            `مشاور شغلی`,
            `پژوهشگر`,
            `حسابدار`,
            `کارشناس بیمه`,
            `خانه دار`,
            `ممیز مالیاتی`,
            `پزشک`,
            `جراح`,
            `داروساز	`,
            `دندانپزشک`,
            `دامپزشک`,
            `میکروبیولوژیست`,
            `آبیار گیاهان دریایی`,
            `ماما`,
            `برنامه نویس کامپیوتر`,
            `تحلیل گر و طراح نرم افزار`,
            `کارشناس شبکه`,
            `انیماتور`,
            `مدیر وب سایت`,
            `ماساژور`,
        ]


        let getInfo3 = async () => {

            let response3 = await axios.get('http://api.codebazan.ir/password/?length=9');
            let info3 = response3.data;
            return info3;
        };
        let password = await getInfo3();


        const hackEmbed = new MessageEmbed()
            .setThumbnail(avatar)
            .setColor(config.color.blue)
            .addFields(
                { name: `${emoji.Hack} جیمیل کاربر`, value: `${user.username}@gmail.com`, inline: true },
                { name: `${emoji.Hack} پسورد جیمیل کاربر`, value: `${password}`, inline: true },
                { name: `${emoji.Hack} نام اصلی دریافت شده`, value: `${name[Math.floor(Math.random() * name.length)]}`, inline: true },
                { name: `${emoji.Hack} هک شده توسط`, value: `${interaction.user}`, inline: true },
                { name: `${emoji.Hack} شغل کاربر`, value: `${shoghl[Math.floor(Math.random() * shoghl.length)]}`, inline: true },
                { name: `${emoji.Hack} گوشی کاربر`, value: `${mobile[Math.floor(Math.random() * mobile.length)]}`, inline: true },
                { name: `${emoji.Hack} آموزش هک کردن`, value: `[کلیک کنید](${config.support})`, inline: true },

            )



        let text = [
            `**${user} دسترسی به اطلاعات اولیه انجام شد <a:721137995859624057:859492606793875506>**`,
            `**${user} توکن و بقیه اطلاعات در حال دریافت است صبور باشید .... <a:864032851477790770:869615105791389806>**`,
        ];

        let current = 0;
        let count = text.length;
        let edittime = 3000;//3 Second in ms

        interaction.followUp(`**در حال دریافت کردن تمام اطلاعات فرد مورد نظر <a:738372747243290635:859492606693605396>**`).then((msg) => {
            let interval = setInterval(() => {
                if (current === count) {
                    msg.edit({ embeds: [hackEmbed] , content: `**هــک با موفقیت انجام شــد ✅**` });
                    clearInterval(interval);
                    return;
                }
                let hackmsg = text[current];
                msg.edit({ content: `${hackmsg}` })
                current++;

            }, edittime);
        })
    }
}