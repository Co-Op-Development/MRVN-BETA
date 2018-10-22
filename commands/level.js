exports.run = async (client, message) => {
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("XP")
    .addField("Level", `You are level **${client.userInfo.get(message.author.id).level}**!`)
    .addField("Current Experience", `With **${client.userInfo.get(message.author.id).exp}** experience!`)
    .addField("Experience Needed", `**${client.userInfo.get(message.author.id).level * 1000 + 125 - client.userInfo.get(message.author.id).exp }** experience until you level up!`)
    .setFooter(`Requested by: ${message.author.username}`) 
    .setTimestamp()
   
     message.channel.send(embed)
  
}
exports.help = {
  name: 'level',
  description: 'Shows the level & xp of the user who ran the command, along with the xp needed to level up.',
  usage: '{}xp, {}exp',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['xp', 'exp']
}