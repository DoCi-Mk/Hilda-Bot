const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
      name: "gay",
      aliases: ['gaysanj'],
      description: "درصد گی بودن شما دوست عزیز",
      cooldown: 2,
      userPerms: [],
      clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args) => {

    const Darsad = [
      '1',
      '3',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      '12',
      '13',
      '14',
      '16',
      '18',
      '20',
      '21',
      '23',
      '24','25','26','27','28','29','30','32','33','34','35','36','38','37','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59',
      '60','62','64','66','68','69','70','71','73','75','77','78','79','80','81','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100🤍🤍🤍'
  
    ]

    var pic = Darsad[Math.floor(Math.random() * Darsad.length)];

    const emoji = [
      '<:805531742176804944:874374479235670086>',
      '<:810981901095141407:862365029969690626>',
      '<:810983797709078558:862366006760833035>',
      '<:814157373039575080:862366010510016524>',
      '<:846336357496651796:862366010891173918>',
      '<:851138943403163658:856794040733663242>',
      '<:854029180371337216:862366004801699860>',
    ]

    var emojies = emoji[Math.floor(Math.random() * emoji.length)];


        const kissembed = new MessageEmbed()
        .setAuthor('گِـــی 🏳️‍🌈')
        .setDescription((`** دوست عزیز شما ${pic}% گــی هستید ${emojies}**`))
        .setColor(`#2f3136`)
        message.reply({
            embeds: [kissembed]
        });
}}