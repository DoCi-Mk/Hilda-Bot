const { interactionActionRow, interactionEmbed, interactionButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const channelSchema = require('../../models/explore')

module.exports = {
    name: "post",
    description: "آپلود پست",
    userPerms: [],
    clientPerms: ["SEND_interactionS", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {

        let exploreChat = await channelSchema.find({
            channel: newChannel
        }).exec()

        console.log(exploreChat)


    }
}