const { Collection , Client , Discord , WebhookClient } = require('discord.js')
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
require('dotenv').config()
const config = require('./config.json')
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

const errorChannel = new WebhookClient({ url: "https://discord.com/api/webhooks/1021422890899476591/O7UThE9-4ikfNSmm-ygvfn_W48UBUQp5NliQyKzJbnc4ue8c-gv8xHOsxSR1juHKxFoX" });
process.on("unhandledRejection", async (err) => {
    console.log(err);
    errorChannel.send(`Unhandled Rejection: \`\`\`${err.stack}\`\`\``);
});

process.on("uncaughtException", async (err) => {
    console.log(err);
    errorChannel.send(`Unhandled Exception: \`\`\`${err.stack}\`\`\``);
});


client.login(token)