const client = require("../index.js");
const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu,Permissions } = require('discord.js')
const emoji = require('../emoji')
const v = require('../config.json')
const settingsSchema = require('../models/settings.js')

client.on('ready', async() => {
    
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setURL(`${v.botinvite}`)
      .setLabel(`Invite OnlyNude Bot`)
      .setStyle('LINK')
    )
            .addComponents(
        new MessageButton()
          .setURL(`${v.vote}`)
          .setLabel(`Vote OnlyNude Bot`)
          .setStyle('LINK')
      )
    
    StateChannel = await client.channels.cache.get('947475748426493984')

    console.log(`${client.user.username} has logged in`);
    client.user.setPresence({ status: "dnd" });
    global.servers = client.guilds.cache.size
    console.log(`Ready! Logged in as ${client.user.tag} Now In ${client.guilds.cache.size} Server `);
    client.user.setActivity(`${global.servers} Guild | >help`, { type: "WATCHING" })


    var checkservers = 1,
        checkthe_interval = checkservers * 60 * 1000; //in interval har 5 min check mishe va mitoind khodeton [5] ro ba harchi mikhayed change konid vali havaseton be api block discord bashe!
    setInterval(function() {
        client.user.setActivity(`${global.servers} Guild | >help`, { type: "WATCHING" })
    }, checkthe_interval);

    // Deleting old init message
    
  //   try {
  //     settingsSchema.findOne({botname:"hilda bot"}).exec().then(async (res)=>{
  //       oldinit_message = await StateChannel.messages.fetch(res.initmessage)
  //       oldinit_message.delete()
  //     })
  //   } catch(err){
  //     console.log(err)
  //     console.log('Cant Find init Message!')
  //   }

  //   // Creating Init message for bot state
  //   let init_message = await StateChannel.send({
  //       embeds: [new MessageEmbed()
  //           .setTitle(`<a:loading:904395439539912725> Initializing State Message ...`)
  //           .setColor("#00ccff")
  //       ]
  //   })
  //   settingsSchema.findOne({botname:"hilda bot"}).exec().then((res)=>{
  //     res.initmessage = init_message.id
  //     res.save()
  //   })

  //   init_message.edit({
  //       embeds: [new MessageEmbed()
  //           .setAuthor('OnlyNudes Status' , 'https://cdn.discordapp.com/attachments/904392250170151012/904820587501871164/butts_for_dribble-01-modified.png')
  //           .setColor('#f9dbde')
  //           .setTitle(`> Bot Is **Online** ${emoji.online}`)
  //           .setDescription(`**\n${emoji.pink_dot} Api Ping**\n${emoji.blank}${emoji.pink_arrow} ${client.ws.ping} Ms\n\n${emoji.pink_dot} **Guild's**\n ${emoji.blank}${emoji.pink_arrow} ${client.guilds.cache.size}\n\n${emoji.pink_dot} **User's**\n${emoji.blank}${emoji.pink_arrow} ${client.users.cache.size}\n${emoji.blank}\n${emoji.pink_dot} **Invite Bot**\n${emoji.blank}${emoji.pink_arrow} [Click Here](https://discord.com/api/oauth2/authorize?client_id=893149506475032578&permissions=140726627664&scope=bot%20applications.commands)`)
  //           .setThumbnail('https://cdn.discordapp.com/attachments/904392250170151012/904820587501871164/butts_for_dribble-01-modified.png')
  //           .setFooter(`Observers Team | Version ${v.version_bot} | Refresh Every 30 Minute` , `https://cdn.discordapp.com/attachments/904440316025778276/904978827896320090/162523269438986082.png`)
  //       ] , components: [row]
  //   })
  //   setInterval(() => {
  //       const embed = new MessageEmbed()
  //       .setAuthor('OnlyNudes Status'  , 'https://cdn.discordapp.com/attachments/904392250170151012/904820587501871164/butts_for_dribble-01-modified.png')
  //       .setColor('#f9dbde')
  //       .setTitle(`> Bot Is **Online** ${emoji.online}`)
  //       .setDescription(`**\n${emoji.pink_dot} Api Ping**\n${emoji.blank}${emoji.pink_arrow} ${client.ws.ping} Ms\n\n${emoji.pink_dot} **Guild's**\n ${emoji.blank}${emoji.pink_arrow} ${client.guilds.cache.size}\n\n${emoji.pink_dot} **User's**\n${emoji.blank}${emoji.pink_arrow} ${client.users.cache.size}\n${emoji.blank}\n${emoji.pink_dot} **Invite Bot**\n${emoji.blank}${emoji.pink_arrow} [Click Here](https://discord.com/api/oauth2/authorize?client_id=893149506475032578&permissions=140726627664&scope=bot%20applications.commands)`)
  //       .setThumbnail('https://cdn.discordapp.com/attachments/904392250170151012/904820587501871164/butts_for_dribble-01-modified.png')
  //       .setFooter(`Observers Team | Version ${v.version_bot} | Refresh Every 30 Minute` , `https://cdn.discordapp.com/attachments/904440316025778276/904978827896320090/162523269438986082.png`)
  //    init_message.edit({ embeds: [embed] , components: [row] })
  //   }, 1000 * 30 * 60);

      
  // }
    
})

