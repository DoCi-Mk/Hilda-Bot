const { MessageEmbed , MessageActionRow , MessageButton, Guild} = require('discord.js');
const Discord = module.require("discord.js");
const emoji = require('../../emoji')
const client = require('../../index')
const config = require('../../config.json')
const prefixdb = require('../../models/prefix')

module.exports = {
  name: "report",
  description: "Report a bug",
  userPerms: [],
  clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
  
  run: async (client, message, args ) => {

    let prefix = await prefixdb.findOne({
      guildid:message.guild.id
    }).exec();
    if (prefix == null) {
      prefix = config.prefix
    } else {
      prefix = prefix.prefix;
    }


    const reportchannel = client.channels.cache.get("911934635569721345");
    const report = args.join(" ");
    if (!report) {
      return message.reply({ embeds: [
          new MessageEmbed()
          .setDescription(`لطفا **مشکلی** که میخواهید به ما اطلاع دهید را بنویسید ${emoji.smiling}`)
          .setColor('#FF0000')
      ]});
    }
    message.reply({ embeds: [
        new MessageEmbed()
        .setDescription(`مشکل شما با موفقیت برای **تیم پشتیبانی** ارسال گردید . برای اطلاع از آخرین اخبار در [سرور پشتیبان](${config.support}) جوین شوید ${emoji.success}`)
        .setColor('#25a934')
    ]}
      
    );
    const embed = new MessageEmbed()
      .setTitle(`${emoji.bug} New Bug Report`)
      .setThumbnail(message.author.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       }))
      .setDescription(`${emoji.arrow_red} **${report}**\n\n${emoji.dot1}**Report By : **${message.author.tag}\n${emoji.dot1}**UserID : **${message.author.id}`)
      .setFooter(`Bug Report From : ${message.guild.name}` , message.guild.iconURL())
      .setColor("RANDOM");

    reportchannel.send({ embeds: [embed] , content: '<@500740143532212245> | <@851218809204768788>' });
  },
  catch(error) {
    const errorlogs = client.channels.cache.get("911718981071667250");
    message.channel.send(
      "Looks Like an Error has Ocurred. The Error has been reported to the Report Section!"
    );
    errorlogs.send("Error on Report Command \nError: \n" + error);
  },
};