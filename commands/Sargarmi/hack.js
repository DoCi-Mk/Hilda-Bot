const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const axios = require('axios');

module.exports = {
      name: "hack",
      aliases: [],
      description: "kisses a mentioned user",
      usage: ">hack <Mention User>",
      category: "فان و بازی",
      cooldown: 2,
  
  run: async (client, message, args) => {

    let user = message.mentions.users.first();
      if (!user){
          return message.reply({ embeds: [
              new MessageEmbed()
              .setDescription('**لطفا یک نفر را منشن کنید <a:850335306657955840:856794054540394526> **')
              .setColor('#ea202a')
           ]} )
      }
      let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });

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
        var esm = name[Math.floor(Math.random() * name.length)];

        const mobile = [
            'سامـسـونگ',
            'آیــفون',
            'شیائــومی',
            'الــ جی',
            'هـو آ وی',
            'نــوکیا',
            'اچ تی سی',
            'جی ال ایکس',
            'هـونور',
        ]

        var gooshi = mobile[Math.floor(Math.random() * mobile.length)];

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


   

    
      const hack = new MessageEmbed()
      .setThumbnail(avatar)
      .setAuthor('هــک با موفقیت انجام شــد ✅')
      .setColor(`RANDOM`)
      .addFields(
        { name: '<a:868606020799324200:874374478874943519> جیمیل فرد مورد نظر', value: `${user.username}@gmail.com` , inline:true},
        { name: '<a:868606020799324200:874374478874943519> پسورد فرد مورد نظر', value: `-;35oB2vsqA#PC@` , inline:true},
        { name: '<a:868606020799324200:874374478874943519> نام اصلی دریافت شده', value: `${esm}` , inline:true},
        { name: '<a:868606020799324200:874374478874943519> هک شده توسط', value: `${message.author}` , inline:true},
        { name: '<a:868606020799324200:874374478874943519> شغل فرد مورد نظر', value: `${shoghll}` , inline:true},
        { name: '<a:868606020799324200:874374478874943519> گوشی فرد مورد نظر', value: `${gooshi}` , inline:true},
        { name: '<a:868606020799324200:874374478874943519> آموزش هک کردن', value: `[کلیک کنید](https://discord.gg/HQgE9pU6Ju)` , inline:true},
        
      )

     

      let text = [
          `**${user} دسترسی به اطلاعات اولیه انجام شد <a:721137995859624057:859492606793875506>**`,
          `**${user} توکن و بقیه اطلاعات در حال دریافت است صبور باشید .... <a:864032851477790770:869615105791389806>**`,
      ];

      let current = 0;
      let count = text.length;
      let edittime = 3000;//3 Second in ms

      message.reply(`**در حال دریافت کردن تمام اطلاعات فرد مورد نظر <a:738372747243290635:859492606693605396>**`).then((msg) => {
          let interval = setInterval(() => {
              if (current === count) {
                  msg.edit({ embeds: [hack] });
                  clearInterval(interval);
                  return;
              }
              let hackmsg = text[current];
              msg.edit({ embeds: [hackmsg] })
              current++;

          }, edittime);
      })
}}