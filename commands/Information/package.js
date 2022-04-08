const premiumSchema = require('../../models/premium')
const { MessageEmbed, MessageActionRow, MessageButton, interaction } = require("discord.js");
const config = require('../../config.json')
const pack = require('../../package.json')
const emoji = require('../../emoji')

module.exports = {
    name: "package",
    description: "پکیج کل بات",
    category: "OnlyOwner",
    owneronly: true,

    run: async (client, message, args) => {

       message.reply({
           embeds: [
               new MessageEmbed()
               .setColor(config.DefaultColor)
               .setAuthor('Package Of Hilda Bot')
               .setDescription(`\`\`\`json\n${JSON.stringify(pack.dependencies).replace(/,(?=[^\s])/g, ",\n")}\`\`\``)
           ]
       }
       )
    }
}
