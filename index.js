// Initialization
const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const config = require("./config.json")
const client = new Discord.Client({
    disableEveryone: true
});

// Collections
client.Discord = Discord;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
client.userInfo = new Enmap({name: "User Information"});
client.guildInfo = new Enmap({name: "Guild Information"});
client.utils = require("./utils.js")

fs.readdir(`./commands`, (err, files) => {
  if (err) console.error(err);
    let jsfiles = files.filter(f => f.split('.').pop() === 'js');
    if (jsfiles.length <= 0) return console.log(`[Commands]\tNo commands to load!`);
    console.log(`[Commands]\tLoaded a total amount ${files.length} Commands`);
    jsfiles.forEach(f => {
        let props = require(`./commands/${ f }`);
        props.fileName = f;
        client.commands.set(props.help.name, props);
        props.conf.aliases.map(alias => client.aliases.set(alias, props.help.name));
    });
});

fs.readdir(`./events`, async (err, files) => {
  if (err) return console.error(err);
  const jsfiles = files.filter(f => f.split('.').pop() === 'js');
  if (jsfiles.length <= 0) return console.log(`[Events]\tNo events could be loaded`);
  console.log(`[Events]\tLoaded a total amount ${jsfiles.length} events`);
  files.forEach(file => {
    let eventFunc = require(`./events/${file}`);
    if (!eventFunc.run) return;
    let run = eventFunc.run.bind(null, client);
    client.events.set(file.split('.')[0], run);
    client.on(file.split('.')[0], run);
  });
});

process.on(`unhandledRejection`, err => {
  console.error(`Uncaught Promise Error:\t`, err);
});

client.login(config.token).catch(e => {
  console.error(`Incorrect token.`);
});
