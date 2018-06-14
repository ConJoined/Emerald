const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
​
const client = new Discord.Client();
const config = require("./config.json");
// We also need to make sure we're attaching the config to the CLIENT so it's accessible everywhere!
client.config = config;
​
fs.readdir("./modules/runtime/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./modules/runtime/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});
​
client.commands = new Enmap();
​
fs.readdir("./modules/api/commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./modules/api/commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
​
client.login(process.env.clientruntime);
