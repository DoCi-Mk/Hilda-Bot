const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
      name: "lez",
      aliases: ['lez','les'],
      description: "درصد لز بودن شما دوست عزیز",
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
      '<a:756510199115677836:874900295203827753>',
      '<a:756510197400338553:874900294922813470>',
      '<a:756510183437369471:874900290162282496>',
      '<a:756510180471996467:874900289222754304>',
      '<a:756510176537870436:874900288010612746>',
      '<a:756510175443026050:874900294138466334>',
      '<a:756510145823113267:874900289306656788>',
    ]

    var emojies = emoji[Math.floor(Math.random() * emoji.length)];


        const kissembed = new MessageEmbed()
        .setAuthor('لـــز 🤓')
        .setDescription((`**دوست عزیز شما ${pic}% لــز هستیـد ${emojies}**`))
        .setColor(`#2f3136`)
        message.reply({
            embeds: [kissembed]
        });
}}