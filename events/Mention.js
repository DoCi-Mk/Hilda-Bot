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
                .setURL(`${config.BotInvite}`)
                .setLabel(`دعوت ربات`)
                .setStyle('LINK')
            )
            .addComponents(
                new MessageButton()
                .setURL(`${config.Support}`)
                .setLabel(`پشتیبانی ربات`)
                .setStyle('LINK')
            )

        const mention = new MessageEmbed()
            .setAuthor('Do You Want To Use Me ?', 'https://cdn.discordapp.com/avatars/862062016344358913/b206fc212d5272270625ca4a78e9033a.webp?size=4096')
            .setDescription(`Hi My Prefix In This Server Is **${prefix}**`)
            .setColor('#30b4c2')
            .setFooter(`Use ${prefix}help See All Command's`, message.author.displayAvatarURL({ dynamic: true }))
        if (message.author.bot) return;
        return message.reply({ content: `**ســلام دوست من ${emoji.Hi} فکر کنم میخوای ازم استفاده کنی که منشنم کردی ! \n برای دیدن تمام دستورات من میتونی از دستور \`help${prefix}\` یا \`help/\`  استفاده کنی ${emoji.Sharab}**`, components: [row] });
    }


})