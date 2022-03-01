const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js')
const dbdeplove = require('../../models/newdeplove')

module.exports = {
    name: "deplove",
    aliases: ["depl", "lovedep"],
    description: "محتوای دپ و عاشقانه",
    category: "Other",
    cooldown: 2,
    onlyowner: true,
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],

    run: async (client, message, args) => {



        const dep = [
            'https://cdn.discordapp.com/attachments/913023899917246484/913024396917108746/video2.mov',
            'https://cdn.discordapp.com/attachments/913023899917246484/913024396527009832/video1.mov',
            'https://cdn.discordapp.com/attachments/913023899917246484/913024396136943626/video0.mov',
            'https://cdn.discordapp.com/attachments/913023899917246484/913024025956065310/257715281_1499124900455643_1052857397544202687_n.mp4',
            'https://cdn.discordapp.com/attachments/913023899917246484/913024025612124180/258735092_899356454035221_1612052271304287885_n.mp4',
            'https://cdn.discordapp.com/attachments/913023899917246484/913024025251426334/258033173_1051660045629370_6848347448362523010_n.mp4',
            'https://cdn.discordapp.com/attachments/913023899917246484/913024024836182066/259455021_1142166572982416_5858729021671720725_n.mp4',
            'https://cdn.discordapp.com/attachments/913023899917246484/913023937108148244/video0.mov',
            'https://cdn.discordapp.com/attachments/886538016921894973/914441922427383808/260173439_265161355643478_3868165489878967141_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/914429251158155274/242365662_202022568660285_3784979220850633150_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/914428583517229086/245556856_4449754291773252_7400749247671347298_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/914428148630831104/250139020_249381280585415_8979123546969741047_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/914427694911983677/258137310_426096822449944_6368489216990324635_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/914427017448001606/260875704_580494643168659_805219158317351572_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/913244532622127164/hanker__love_14000904_051516341.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/911602649743372368/modep.video__tv_2653261518487649232_1_2653261518487649232.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/911601978075938837/editing.org___tv_2683511015841053364_1_2683511015841053364.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/911601047733166100/editing.org___tv_2688489641233809625_1_2688489641233809625.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/911600586816888902/editing.org___tv_2639468521352837953_1_2639468521352837953.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/910810063197859860/unlimited_8974546.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/910809332462018570/video_2021-11-16_18-03-55.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/910806524065120286/video_2021-11-16_18-16-35.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/910624170365296660/VID-20211117-WA0020.mp4',
            'https://cdn.discordapp.com/attachments/886538014250131496/910490101757407252/tannazpv1_14000826_145159633.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/912723922154319932/khandon.tv_14000902_184127728.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/912504132668129310/a9717ee3de0d303cf8a13993066f9558.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/911620096416415815/258354394_361749529079034_8850571754616337022_n.mp4',
            'https://cdn.discordapp.com/attachments/886538016921894973/911620095984410704/258093134_1067142320783507_4743428594040047572_n.mp4',
        ]


        let Matn = await dbdeplove.find({
        }).exec()

        var Video = Matn[Math.floor(Math.random() * Matn.length)];

        message.reply({
            content: `**Dep / Love Content <:HeartInFire:893437841223352320>** ||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ ${Video.deplove}`
        })
    }
}
