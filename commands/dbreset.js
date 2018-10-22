exports.run = async (client, message) => {
  let NotDev = new client.Discord.MessageEmbed()
     .setColor('GREEN')
     .setTitle("Database Reset")
     .setDescription("Sorry, the `resetDB` command can only be executed by the Developer.")
     .setFooter(`Requested by: ${message.author.username}`) 
     .setTimestamp()
  
  if (!["342796453477089281", "183790855813988353"].includes(message.author.id)) return message.channel.send(NotDev);
  client.userInfo.deleteAll()
  return message.channel.send(`User database has successfully been reset!`);

}

exports.help = {
  name: 'resetdb',
  description: 'Should not be in {}help!',
  usage: 'None',
    inHelp: 'no'
}

exports.conf = {
  aliases: []
}