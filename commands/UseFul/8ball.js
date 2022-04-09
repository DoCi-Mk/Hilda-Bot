const { MessageActionRow , MessageEmbed , MessageButton , MessageSelectMenu } = require('discord.js')
const emoji = require('../../emoji')
// const { Database } = require("quick.replit");
// const db = new Database(process.env.REPLIT_DB_URL)
const config = require('../../config.json')


const answers = [
    "شاید <:828935759200387092:862365020801597480>",
    "احتمالش کمه <a:810232019715358721:862365050404339752>",
    "احتمالش زیاده <:853973900676038666:862366012045525052>",
    "اصلا فکرشم نکن <:853973900676038666:862366012045525052>",
    "اوممممم 50 / 50 <:846336357496651796:862366010891173918>",
    "حتمااا 100% <:814157373039575080:862366010510016524>",
];

module.exports = {
    name: "8ball",
	aliases: ["8balls" , "soal" , "aya" , "آیا" , "ایا"],
    category: "Games🎲",
    description: "پاسخ به سوال شما",
    usage: "8ball <QUESTION>",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    
    run: async (client, message, args) => {


        if(!args[0]){
            message.reply(`لطفا پرسش خود را هم مطرح کنید ${emoji.SmilingFace}`)
            return;
        }
        // Creates an ambed and picks a random answer from the answer array

            message.reply(`پاسخ : **${(answers[Math.floor(Math.random() * answers.length)])}**`)

    },
    catch(error) {
        const errorlogs = client.channels.cache.get("911718981071667250");
        message.channel.send(
          "🔱 Sorry Somthing Went Wrong! Reported to Team :)"
        );
        errorlogs.send(`${emoji.arrow_red} ${message.author.tag} Got Error in ${message.content}!\n \`\`${JSON.stringify(error, null, "\t")}\`\``)
      },
}