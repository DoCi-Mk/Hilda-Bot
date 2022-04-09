const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name:"fact",
    aliases: ["f"],
    description: "دانستنی های دنیا",
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

        message.reply(`**آیا میدانستید ؟ : **\n<:816216804962730004:862366006471032882> ${infoValue3}`) 
    }}
