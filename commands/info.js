const config = require("/home/ittim/MRVN/config.json")
exports.run = async (client, message) => {
   const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Information')
    .addField('Name', 'MRVN', true)
    .addField('Desc.','MRVN is a Titanfall themed Eco/Level bot that is constantly being expanded & improved!', true)
    .addField('Prefix', `${config.prefix}`, true)
    .addField('Guilds', `${client.guilds.size}`, true)
    .addField('Owner', `${config.author}`, true)
    .addField('Version', `${config.version}`, true)
    .addField('Node Version',`${process.version}`, true)
    .addField('Discord.js Version', `${require('discord.js').version}`, true)
    .addField("Uptime",`${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`, true)
    .addField('Support Server', 'https://discord.gg/fcm7Yh3', true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
    .setTimestamp()

  message.channel.send(embed)
}

exports.help = {
  name: 'information',
  description: 'Information regarding MRVN.',
  usage: '{}info',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['info']
}
