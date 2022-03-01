const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name:"hadis",
    description: "حدیث و سخن بزرگان",
    category: "Other",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

run: async (client, message, args) => {

  
    
  let getInfo3 = async () => {
            
    let response3 = await axios.get('http://api.codebazan.ir/hadis/');
    let info3 = response3.data;
    return info3;
  };
    let infoValue3 = await getInfo3();

        let embed1 = new MessageEmbed()
        .setAuthor('ســخــن بــزرگــان 📚')
        .setColor("RANDOM")
        .setDescription(`**\n${infoValue3}\n\n**`)
        .setFooter(`${message.author.username}` , message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send({ embeds: [embed1] })
    },
    catch(error) {
        const errorlogs = client.channels.cache.get("911718981071667250");
        message.channel.send(
          "🔱 Sorry Somthing Went Wrong! Reported to Team :)"
        );
        errorlogs.send(`${emoji.arrow_red} ${message.author.tag} Got Error in ${message.content}!\n \`\`${JSON.stringify(error, null, "\t")}\`\``)
      },}
