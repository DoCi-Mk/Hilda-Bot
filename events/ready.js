const client = require("../index.js");
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu, Permissions } = require('discord.js')
const emoji = require('../emoji')
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const config = require('../config.json')

client.on('ready', async () => {



  

  let targetGuild = client.guilds.cache.get("933722860856430722");

  //Update Channel
  setInterval(function () {
    client.channels.fetch("1021141488693948446").then((channel) => {
      channel.edit({
        name: `👥・${targetGuild.memberCount} Members`,
      });
    });

    client.channels.fetch("1021172293990350858").then((channel) => {
      channel.edit({
        name: `🪐・${client.guilds.cache.size} Guild's`,
      });
    });
  }, 1 * 60 * 1000);

  //Set Presence
  client.user.setPresence({ status: "idle" });
  global.servers = client.guilds.cache.size

  //Logged in & Activity
  console.log(red(`${client.user.tag} Ready!\nActive on ${client.guilds.cache.size} guild's!`));
  client.user.setActivity(`${config.version} | /hilda`, { type: "WATCHING" })

})

