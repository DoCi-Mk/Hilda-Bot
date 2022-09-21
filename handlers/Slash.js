let slash = [];
const { readdirSync } = require("fs");
const { MessageEmbed, WebhookClient } = require('discord.js');
const channelLog = new WebhookClient({ url: "https://discord.com/api/webhooks/1022151041497710612/rSKY46H6vWgMEIGy7RE2fSAJNfdY7XRtdL2wINKnkd3q19b5qW9Z03moBCRcCEJ59Oj7" });
const ascii = require("ascii-table");
let table = new ascii("Slash Commands");
table.setHeading("Slash Command", " Load status");

module.exports = (client) => {
  readdirSync("./SlashCommands").forEach((dir) => {
    const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) =>
      file.endsWith(".js")
    );
    for (let file of commands) {
      let pull = require(`../SlashCommands/${dir}/${file}`);
      if (pull.name) {
        client.slash.set(pull.name, pull);
        slash.push(pull);
        table.addRow(file, "✔️ -> Loaded Slash Command");
      } else {
        table.addRow(
          file,
          `❌  -> missing a help.name, or help.name is not a string.`
        );
        continue;
      }
    }
  });
  console.log(table.toString());
  client.on("ready",async ()=> {
    await client.guilds.cache.get('904365024825442385').commands.set(slash);
    channelLog.send(`slashCommand's Registered!`)
 })
};