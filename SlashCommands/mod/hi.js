const { MessageEmbed } = require("discord.js")
module.exports = {
        name : "hi",
        description : "فاک یو",
        run : async (client, interaction, args) => {
             interaction.editReply("Hi")
       }
}