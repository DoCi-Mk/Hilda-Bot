const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name:"fact",
    aliases: ["f"],
    description: "",
    category: "Other",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

run: async (client, message, args) => {

  
    
  let getInfo3 = async () => {
            
    let response3 = await axios.get('http://api.codebazan.ir/danestani/');
    let info3 = response3.data;
    return info3;
  };
    let infoValue3 = await getInfo3();

        let embed1 = new MessageEmbed()
        .setAuthor('آیا میـدانـسـتید ؟ 🧐')
        .setColor("RANDOM")
        .setDescription(`**\n<:816216804962730004:862366006471032882> ${infoValue3}\n\n**`)
        .setTimestamp()
        .setFooter(`${message.author.username}` , message.author.displayAvatarURL({ dynamic: true }))
        message.reply({
            embeds: [embed1]
        }) 
    }}
