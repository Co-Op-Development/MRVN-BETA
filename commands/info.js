exports.run = async (client, message) => {
   const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Information')
    .addField('Name', 'MRVN', true)
    .addField('Desc.','MRVN is a Titanfall themed Eco/Level bot that is constantly being expanded & improved!', true)
    .addField('Prefix', '{}', true)
    .addField('Guilds', `${client.guilds.size}`, true) 
    .addField('Owner', 'Ittim#1814', true)
    .addField('Version','0.0.5', true)
    .setFooter(`Requested by: ${message.author.username}`)  
    .setTimestamp()
  
  message.channel.send(embed)
}

exports.help = {
  name: 'info',
  description: 'Information regarding MRVN.',
  usage: 'None',
  inHelp: 'yes'
}

exports.conf = {
  aliases: []
}