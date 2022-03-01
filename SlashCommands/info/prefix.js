const emoji = require('../../emoji')
const { Permissions, MessageEmbed } = require('discord.js')
const prefixSchema = require('../../models/prefix')



module.exports = {
    name : "prefix",
    description : "Set Custom Prefix For Server",
    options: [
		{
			name: 'new',
			description: 'Write custom Prefix',
			type: 3,
			required: true,
		},
    ],

    run: async(client, interaction, args ,message) => {

    
    const channel_log = await client.channels.cache.get('924418073103073330')
    // if (!interaction.content.startsWith(prefix)) return; //add this line to every commands

    if (!interaction.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR)) return interaction.editReply(`you dont have **ADMINISTRATOR** permission to use this command`)
    const newprefix = interaction.options.getString('new');
    if (!newprefix) return interaction.editReply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**Please Enter Prefix ${emoji.error}**`)
          .setColor('#ef1607')
      ]
    })
    if (newprefix.length > 5) return interaction.editReply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**Invalid Prefix, Prefix Is Too Long ${emoji.error}**`)
          .setColor('#ef1607')
      ]
    })
    interaction.editReply({
      embeds: [
        new MessageEmbed()
          .setDescription(`**Succes ${emoji.success} New Prefix Set To \`\`${newprefix}\`\`**`)
          .setColor('#25a934')
      ]
    })

    channel_log.send({
      embeds:[
        new MessageEmbed()
        .setAuthor(`Guild Name : ${interaction.guild.name}` , interaction.guild.iconURL())
        .setDescription(`New Prefix : \`\`${newprefix}\`\` ${emoji.success}`)
        .setColor('#2f3136')
        .setFooter(`Command Use : ${interaction.user.tag}` , interaction.user.displayAvatarURL())
      ]
    })
    currentprefix = await prefixSchema.findOne({
      guildid: interaction.guild.id
    }).exec();

    if (currentprefix) {
      currentprefix.delete()
      new prefixSchema({
        guildid: interaction.guild.id,
        prefix: newprefix
      }).save();
    } else {
      new prefixSchema({
        guildid: interaction.guild.id,
        prefix: newprefix
      }).save();
    }



  }}