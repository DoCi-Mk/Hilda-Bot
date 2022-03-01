const { MessageEmbed, MessageActionRow, MessageSelectMenu, MessageButton } = require("discord.js");
const emoji = require('../../emoji')
const client = require('../../index')
const v = require('../../config.json')
const config = require('../../config.json')
module.exports = {
  name: "invite",
  description: "Invite The Bot",

  run: async (client, interaction, args, message) => {


    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
          .setURL(`${config.botinvite}`)
          .setLabel(`Invite OnlyNude Bot`)
          .setStyle('LINK')
          .setEmoji(`${emoji.link2}`)
      )
      .addComponents(
        new MessageButton()
          .setURL(`https://discord.gg/Ed2EHXunFA`)
          .setLabel(`Support OnlyNude Bot`)
          .setStyle('LINK')
          .setEmoji(`${emoji.Observers}`)
      )
      .addComponents(
        new MessageButton()
          .setLabel(`Vote Bot `)
          .setStyle('LINK')
          .setEmoji(`${emoji.Vote}`)
          .setURL('https://discordbotlist.com/bots/onlynudes/upvote')
      )


    const invite = new MessageEmbed()
    .setAuthor('Do You Want To Add me?' , 'https://cdn.discordapp.com/emojis/843845378352873492.gif')
    .setDescription(`${emoji.dot1} Invite **OnlyNude** Bot \n ${emoji.blank}${emoji.arrow} [**Invite Bot**](${config.botinvite})\n${emoji.blank}${emoji.arrow} [**Server Support**](https://discord.gg/6v5CBpRkTr)\n\n${emoji.dot1}You Can Invite **My Other Bot** Click Link Bellow : \n ${emoji.blank}${emoji.arrow} [**Invite Linker Bot**](https://discord.com/api/oauth2/authorize?client_id=839194473018818611&permissions=0&scope=bot) / [**Invite Hilda Bot**](https://discord.com/api/oauth2/authorize?client_id=856599103960907786&permissions=140693073600&scope=bot%20applications.commands)`)
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/904392250170151012/905568905643327508/banner.png')

    interaction.followUp({ embeds: [invite], components: [row] })

  }
};