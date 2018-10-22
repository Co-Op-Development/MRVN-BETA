exports.run = async (client, message) => {
  const embed = new client.Discord.MessageEmbed()
      .setColor('ORANGE')
      .setTitle("Pong!", true)
      .addField("API Latency", `${Math.round(client.ping)}ms`, true)
      .setFooter(`Requested by: ${message.author.username}`) 
      .setTimestamp()
  
  message.channel.send(embed)
} 

exports.help = {
  name: 'ping',
  description: 'Shows API Latency in MS.',
  usage: 'None',
  inHelp: 'yes'
}

exports.conf = {
  aliases: []
}