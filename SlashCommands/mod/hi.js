const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
const emoji = require('../../emoji')
const client = require('../../index')
const v = require('../../config.json')
const config = require('../../config.json')
module.exports = {
  name: "hi",
  description: "Invite The Bot",

  run: async (client, interaction, args, message) => {

    interaction.followUp()

  }
};