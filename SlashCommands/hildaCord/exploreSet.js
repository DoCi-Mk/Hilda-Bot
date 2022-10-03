const { interactionActionRow, interactionEmbed, interactionButton } = require('discord.js')
const emoji = require('../../emoji')
const config = require('../../config.json')
const channelSchema = require('../../models/explore')

module.exports = {
    name: "explore-set",
    description: "تنظیم چنل اکسپلور",
    options: [
        {
          name: 'channel',
          description: 'چنل اکسپلور ر انتخاب کنید',
          type: 7,
          required: true,
        },
      ],
    userPerms: ["MANAGE_CHANNELS"],
    clientPerms: ["SEND_interactionS", "EMBED_LINKS"],

    run: async (client, interaction, args, message) => {



        const newChannel = interaction.options.getChannel('channel');


        currentChannel = await channelSchema.findOne({
            guild: interaction.guild.id
        }).exec();

        if (currentChannel) {
            channelSchema.findOne({ guild: interaction.guild.id }).exec().then(res => {
                if (res) {
                    res.channel = newChannel
                    res.user = interaction.tag
                    res.save()
                }
            })
        } else {
            new channelSchema({
                guild: interaction.guild.id,
                channel: newChannel,
                user: interaction.tag
            }).save();
        }
        interaction.followUp(`چنل اکسپلور در ${newChannel} تنظیم شد . تمام پست های تایید شده در این چنل ارسال میشود`)
        // const Send = client.channels.cache.get(newChannel)
        newChannel.send(`${interaction.user} | این چنل به عنوان **اکسپلور** با موفقیت ست گردید ${emoji.Accept}`)
    }
}