exports.run = async (client, message, args) => {
  const config = require("../config.json")
  const prefix = config.prefix
  if (!args[0]) { const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .addField('Commands', client.commands.filter(u => u.help.inHelp === 'yes').map(u => `• ${prefix}\`${u.help.name}\` \n\t⮑ \`${u.help.usage.replace('None', 'There are no aliases for this command!')}\``), true)
    .addField('Do {}help followed by any of the commands listed above for a quick description & to see any aliases!', `\u200b`, true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))  
    .setTimestamp()
  
  message.channel.send(embed)
}
let cmd = args[0];
if (cmd) {
if (!client.commands.has(cmd)) return message.channel.send('Please provide a command which is shown in the help command!'); if (client.commands.get(cmd).help.inHelp === 'no') return message.channel.send('Please provide a command which is shown in the help command!'); 
let command = client.commands.get(cmd).help;
var embed = new client.Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle(cmd)
.addField('Description', command.description, true)
.addField('Aliases', '\t' + command.usage.replace('None', '\`There are no aliases for this command!\`'), true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024})) 
.setTimestamp()

message.channel.send(embed)
}
}

exports.help = {
  name: 'help',
  description: 'Shows all commands for the bot, and how to use them.',
  usage: '{}commands, {}cmds',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['cmds', 'commands']
}
