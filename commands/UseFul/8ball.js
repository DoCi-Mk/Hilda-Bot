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
	aliases: ["8balls" , "soal" , "aya"],
    category: "Games🎲",
    description: "Answers a Question",
    usage: "8ball <QUESTION>",
    userPerms: [],
    clientPerms: ["SEND_MESSAGES", "EMBED_LINKS"],
    
    run: async (client, message, args) => {

        let prefix = await db.fetch(`prefix_${message.guild.id}`);
        if(prefix == null) {
          prefix = config.prefix
        } else {
          prefix = prefix;
        }

        if(!args[0]){
            message.reply({
                embeds: [
                    new MessageEmbed()
                    .setColor('#ef1607')
                    .setDescription(`Lotfan Soale Khod Ra Benevisid <a:850335306657955840:856794054540394526>\n**Usage : **\`\`${prefix}aya [Soale Khod]\`\``)
                ]
            })
            return;
        }
        // Creates an ambed and picks a random answer from the answer array
            let embed = new MessageEmbed()
            .setAuthor('حــاضر جــواب ❓')
            .setDescription(`**${(answers[Math.floor(Math.random() * answers.length)])}**`)
            .setColor(`RANDOM`)
            .setFooter(`${message.author.username}` , message.author.displayAvatarURL({ dynamic: true }))
            message.reply({ embeds: [embed] })

    },
    catch(error) {
        const errorlogs = client.channels.cache.get("911718981071667250");
        message.channel.send(
          "🔱 Sorry Somthing Went Wrong! Reported to Team :)"
        );
        errorlogs.send(`${emoji.arrow_red} ${message.author.tag} Got Error in ${message.content}!\n \`\`${JSON.stringify(error, null, "\t")}\`\``)
      },
}