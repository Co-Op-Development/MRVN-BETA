exports.run = async (client, message) => {
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("Bank", true)
    .addField("Pilot", message.author.username, true)
    .addField("Account Balance", `${client.userInfo.get(message.author.id).money.toLocaleString()} credits`)
    .setFooter(`Requested by: ${message.author.username}`) 
    .setTimestamp()
  
  message.channel.send(embed)
}

exports.help = {
  name: 'credits',
  description: 'Shows the balance of the user who ran the command.',
  usage: '{}balance, {}bal',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['balance', 'bal']
}