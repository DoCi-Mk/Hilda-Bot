const { Collection , Client , Discord } = require('discord.js')
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const mongoose = require('mongoose');
const token = process.env.TOKEN
const fs = require('fs');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_VOICE_STATES",
        "GUILD_MESSAGES",
    ],
});

module.exports = client;

client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
client.slash = new Collection();

["command", "event", "Slash"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// Database
const uri = "mongodb+srv://hilda-db:" + process.env.DB_PASS +"@cluster0.840td.mongodb.net/hildapp";
const localURI = 'mongodb://localhost:27017/main';

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => console.log(blue('MongoDB Connected')));
db.on('error', (e) => console.log(e));

client.slash = new Collection();


process.on("unhandledRejection", console.error);


client.login(token)