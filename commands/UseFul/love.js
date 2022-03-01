const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
      name: "love",
      aliases: ['lc','Lc','Love'],
      description: "علاقه شما نسبت به فرد دیگر",
      usage: ">lc <Mention User>",
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

        const user = message.mentions.users.first();
        if(!user)
        return message.reply('**فرد مورد نظر را منشن کنید <a:795828303290302464:857012889599475712> **')

   

        const kissembed = new MessageEmbed()
        .setAuthor('درصــد عـشـق 💖' )
        .setDescription((`تو ${message.author.toString()} ` + ` **${pic}%** ` + user.toString() + " را دوســـت داری <a:779938360692047872:858651576704172094> "))
        .setColor(`#2f3136`)
        .setFooter(message.guild.name, message.guild.iconURL({dynamic: true}))
        message.reply({
            embeds: [kissembed]
        });

},
catch(error) {
    const errorlogs = client.channels.cache.get("911718981071667250");
    message.channel.send(
      "🔱 Sorry Somthing Went Wrong! Reported to Team :)"
    );
    errorlogs.send(`${emoji.arrow_red} ${message.author.tag} Got Error in ${message.content}!\n \`\`${JSON.stringify(error, null, "\t")}\`\``)
  },

};