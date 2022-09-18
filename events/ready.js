const client = require("../index.js");
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu, Permissions } = require('discord.js')
const emoji = require('../emoji')
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const config = require('../config.json')

client.on('ready', async () => {

  client.user.setPresence({ status: "idle" });
  global.servers = client.guilds.cache.size
  console.log(green(`${client.user.tag} Ready!\nActive on ${client.guilds.cache.size} guild's!`));
  client.user.setActivity(`${config.Version} | .help`, { type: "WATCHING" })

})

