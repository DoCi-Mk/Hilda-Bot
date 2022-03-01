const { MessageActionRow , MessageEmbed , MessageButton } = require('discord.js')

module.exports = {
    name:"gif",
    aliases: [""],
    description: "گیف خنده دار",
    category: "Other",
    cooldown: 2,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

run: async (client, message, args) => {

  
    
        const falhafez = [
            'https://media.discordapp.net/attachments/712317129554395266/851060485200805888/ezgif.com-gif-maker_8.gif',
            'https://media.discordapp.net/attachments/580403780714102794/872419309090111568/1_5116525498125517134_1.gif',
            'https://media.discordapp.net/attachments/765082099912409108/893955183606894592/image0.gif',
            'https://media.discordapp.net/attachments/865995326649139271/866739637325004880/New_Project.gif',
            'https://media.discordapp.net/attachments/902086282321223711/903266283913642014/GIF-211028_162730.gif',
            'https://media.discordapp.net/attachments/868499639496757269/895199935815893002/20210827_095116.gif',
            'https://media.discordapp.net/attachments/828354853616353280/864893403673264128/ezgif.com-gif-maker.gif',
            'https://gfycat.com/decentnervoushalcyon',
            'https://media.discordapp.net/attachments/819298413391642654/893214598843478106/0353821c2f380281.gif',
            'https://cdn.discordapp.com/attachments/832907983247376385/834034556632825936/XiaoYing_Video_1618919632934.gif',
            'https://media.discordapp.net/attachments/653194356936933399/897071470554021909/storage_emulated_0_Download_2_1.gif',
            'https://media.discordapp.net/attachments/876164122499223634/887457196361809930/5mziaf.gif',
            'https://media.discordapp.net/attachments/741696928957464720/829704617776119808/1.gif',
            'https://media.giphy.com/media/OzAF4FUb9ZZXx2km2X/giphy.gif',
            'https://media.discordapp.net/attachments/839577475696164884/884777558393106432/image0.gif',
            'https://media.discordapp.net/attachments/839577475696164884/884777467334762566/image0-1.gif',
            'https://media.discordapp.net/attachments/860175548088320020/875433826367713360/New_Project.gif',
            'https://media.discordapp.net/attachments/814053096232976384/844622147540615178/ezgif.com-gif-maker_6.gif',
            'https://media.discordapp.net/attachments/580403780714102794/850288643699638292/a_9e13463c330c59421136d5c5a7c8c707.gif',
            'https://tenor.com/view/mahmoud-ahmadinejad-iran-god-bless-smile-gif-15090278',
            'https://media.discordapp.net/attachments/806402192777019412/806402235201355786/image0.gif',
            'https://media.discordapp.net/attachments/769250847301304332/791614028664799253/4ri020.gif',
            'https://media.discordapp.net/attachments/806575905283506176/806877940973305856/VID_20200210_161615_294.gif',
            'https://media.discordapp.net/attachments/762922527612862526/881528809864691742/ezgif.com-gif-maker_39.gif',
            'https://media.discordapp.net/attachments/807962002923847680/848477651298418739/image0-18.gif',
            'https://media.discordapp.net/attachments/846363119748120596/861279995099349042/PUBxelwT57jsQ.gif',
            'https://media.discordapp.net/attachments/653194356936933399/897071470554021909/storage_emulated_0_Download_2_1.gif',
            'https://media.discordapp.net/attachments/876164122499223634/887457196361809930/5mziaf.gif',
            'https://media.discordapp.net/attachments/828230554981498960/871847098394476624/7.gif',
            'https://media.discordapp.net/attachments/846131274707238954/867415435057430598/KhobJaleb.gif',
            'https://media.discordapp.net/attachments/885196050007220225/889275877924438047/er.gif  ',
            'https://d14eu5yur8w3te.cloudfront.net/api/v1/media/baseclub-media-uploads-production/559c64f1-afe8-4cbf-bc44-73ebfdbfa1cc.gif',

        ]


        var fal = falhafez[Math.floor(Math.random() * falhafez.length)];

        let embed1 = new MessageEmbed()
        .setAuthor('گـیـف مــولایی 🗿')
        .setColor("#2f3136")
        .setDescription('**[برای دیدن گیف های بیشتر کلیک کنید](https://discord.gg/Ed2EHXunFA)**')
        .setImage(`${fal}`)
        .setFooter(`${message.author.username}` , message.author.displayAvatarURL({ dynamic: true }))
        message.reply({
            embeds: [embed1]
        })  
    }}
