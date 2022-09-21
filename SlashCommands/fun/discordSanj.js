const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')

module.exports = {
  name: "discordsanj",
  description: "درصد اعتیاد به دیسکورد",
  category: "Fun",
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

  run: async (client, interaction, args, message) => {

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


    interaction.followUp({
        embeds: [
            new MessageEmbed()
            .setColor(config.color.blue)
            .setDescription(`**دوست عزیز شما ${Math.floor(Math.random() * 100)}% به دیسکورد معتاد هستید ${emojies}**`)
        ]
    })
  }
}