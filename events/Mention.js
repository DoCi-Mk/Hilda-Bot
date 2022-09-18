const { MessageEmbed, MessageButton, MessageActionRow, Permissions } = require('discord.js')
const config = require('../config.json')
const emoji = require('../emoji')
const client = require('../index')
const prefixdb = require('../models/prefix')
const v = require('../config.json')

client.on('messageCreate', async message => {
    if (!message.guild) return;

    let prefix = await prefixdb.findOne({
        guildid: message.guild.id
    }).exec();
    if (prefix == null) {
        prefix = config.prefix
    } else {
        prefix = prefix.prefix;
    }
    if (message.content === `<@!${client.user.id}>` || message.content === `<@${client.user.id}>`) {
        if (!message.guild.me.permissions.has(Permissions.FLAGS.SEND_MESSAGES) || !message.guild.me.permissionsIn(message.channel).has(Permissions.FLAGS.SEND_MESSAGES))
            return message.author.send('Bot Permission does not have `SEND_MESSAGES` to execute this command, please give Bot Permission')

        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setURL(`${config.inviteLink}`)
                    .setLabel(`Invite ${client.user.username}`)
                    .setStyle('LINK')
            )
            .addComponents(
                new MessageButton()
                    .setURL(`${config.support}`)
                    .setLabel(`Support ${client.user.username}`)
                    .setStyle('LINK')
            )

        const mentionText = new MessageEmbed()
            .setAuthor(client.user.username, client.user.avatarURL())
            .setThumbnail(client.user.avatarURL())
            .setDescription(`**ســلام دوست من اسم من __هیلدا__ است${emoji.Hi} فکر کنم میخوای ازم استفاده کنی که منشنم کردی ! \n برای دیدن تمام دستورات من میتونی مانند تصویر زیر از دستور \`hilda/\`  استفاده کنی ${emoji.Sharab}**`)
            .setColor(config.color.blue)
            .setImage("https://cdn.discordapp.com/attachments/942398678117793813/1021050704850321408/aebdc87b703df742.jpg")
        if (message.author.bot) return;
        
        return message.reply({
            embeds: [mentionText],
            components: [row]
        });
    }


})