const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
      name: "disord",
      aliases: ['discord'],
      description: "درصد اعتیاد به دیسکورد",
      usage: ">discord",
      category: "فان و بازی",
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
      '<:756506596837949531:874900378083270726>',
      '<a:756506667834802217:874900377538007040>',
      '<:756506642094358659:874900371020075049>',
      '<:756506637715636234:874900373855408158>',
      '<:756506601606742067:874900370634207264>',
      '<:756506601145499668:874900371657601044>',
      '<:756506600981790773:874900374010609685>',
      '<:756506600826732686:874900372769095720>',
      '<:756506600746909827:874900372169293825>',
    ]

    var emojies = emoji[Math.floor(Math.random() * emoji.length)];


        const kissembed = new MessageEmbed()
        .setAuthor('اعــتیاد بـه دیـسکـورد 🚬')
        .setDescription((`**دوست عزیز شما ${pic}% به دیسکورد معتاد هستید ${emojies}**`))
        .setColor(`RANDOM`)
        message.reply({
            embeds: [kissembed]
        });
}}