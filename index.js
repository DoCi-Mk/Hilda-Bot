const express = require('express');
const router = express.Router();
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`http://localhost:${port}`));

const axios = require("axios").default;
const ytdl = require('ytdl-core')
const { Collection , Client , Discord } = require('discord.js')
const config = require('./config.json');
const mongoose = require('mongoose');
const token = process.env.TOKEN
const fs = require('fs');
const premiumSchema = require('./models/premium')
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

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

// global.mongoose = require('mongoose')
// mongoose.connect("mongodb+srv://hilda-db:" + process.env.DB_PASS +"@cluster0.840td.mongodb.net/hildapp", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
//     console.log("Connected to the Mongodb database.");
// }).catch((err) => {
//     console.log("Unable to connect to the Mongodb database. Error:" + err);
// });



// Database
const uri = "mongodb+srv://hilda-db:" + process.env.DB_PASS +"@cluster0.840td.mongodb.net/hildapp";
const localURI = 'mongodb://localhost:27017/main';

mongoose.connect(uri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => console.log('Successfully Connected To MongoDB'));
db.on('error', (e) => console.log(e));

client.once('ready', () => {
    console.log(`${client.guilds.cache.size} G.I.S`)
    console.log(`${client.user.tag} is ready`)
})

client.slash = new Collection();

//FIND STRUCTURES
["Slash"].forEach(handler => {
    require(`./Structures/${handler}`)(client);
});
process.on("unhandledRejection", console.error);




client.login(token)