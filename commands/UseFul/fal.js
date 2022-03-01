const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const v = require('../../config.json')
const axios = require("axios");

module.exports = {
    name:"fal",
    description: "فال شانسی شما از حافظ",
    category: "Other",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

run: async (client, message, args) => {


  var number_random = Math.floor(Math.random() * 495);

  let getInfo = async () => {
    let response = await axios.get(`https://api.falehafez.org/`);
    let info = response.data;
    return info;
  };
  let data = await getInfo();


  let poem = `${data.poem[0]} — ${data.poem[1]}\n${data.poem[2]} — ${data.poem[3]}\n${data.poem[4]} — ${data.poem[5]}`;
  
  let explanation = `${data.explanation}`


  let embed1 = new MessageEmbed()
  .setColor("#2f3136")
  .setDescription(`> **فـــال شــماره :** : **(${number_random})**`)
  .addField(
    `**${emoji.Title} شـــعــر :**`,
    `> ${poem}`
  )
  .addField(`**${emoji.title} تــعــبیر : **`, `> ${explanation}`)
  .setImage(
    "https://cdn.discordapp.com/attachments/906989513866362921/912047445389758464/hafezz-min.png"
  )
      .setFooter(`Source Fal By : im-parsa#9694` , 
  );
  message.channel.send({ embeds: [embed1] });

 
},
catch(error) {
    const errorlogs = client.channels.cache.get("911718981071667250");
    message.channel.send(
      "🔱 Sorry Somthing Went Wrong! Reported to Team :)"
    );
    errorlogs.send(`${emoji.arrow_red} ${message.author.tag} Got Error in ${message.content}!\n \`\`${JSON.stringify(error, null, "\t")}\`\``)
  },};
