exports.run = async (client, message) => {
 .setColor('ORANGE')
    .setTitle('Status')
    .addField('Name', 'MRVN', true)
    .addfield() 
    .addField("Uptime",`${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m ${Math.floor(client.uptime / 1000) % 60}s`, true)
    .addField()
   .addField('Support Server', 'https://discord.gg/fcm7Yh3', true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
    .setTimestamp()

  message.channel.send(embed)
}
exports.help = {
  name: 'status',
  description: 'Shows the status of MRVN',
  usage: 'None',
  inHelp: 'Yes'
}

exports.conf = {
  aliases: []
}
