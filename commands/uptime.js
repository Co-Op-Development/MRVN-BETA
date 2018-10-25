exports.run = async (client, message) => {
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("Uptime")
    .setDescription(`${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`, true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024})) 
    .setTimestamp()
  
  message.channel.send(embed)
}

exports.help = {
  name: 'uptime',
  description: 'Shows the current total uptime of the bot.',
  usage: 'None',
  inHelp: 'yes'
}

exports.conf = {
  aliases: []
}