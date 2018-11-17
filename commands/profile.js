exports.run = async (client, message) => {
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("Profile")
    .setThumbnail(message.author.displayAvatarURL({size:1024}))
    .addField("Pilot", message.author.username, true)
    .addField("Account Balance", `${client.userInfo.get(message.author.id).money.toLocaleString()} credits`, true)
    .addField("Level", `**${client.userInfo.get(message.author.id).level}**!`, true)
    .addField("Current Experience", `**${client.userInfo.get(message.author.id).exp}** experience`, true)
    .addField("Experience Needed", `**${client.userInfo.get(message.author.id).level * 1000 + 125 - client.userInfo.get(message.author.id).exp }** experience until level up!`, true)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))

    .setTimestamp()

     message.channel.send(embed)

}

exports.help = {
  name: 'profile',
  description: 'Shows Level, XP, & Money for the Pilot who ran the command!',
  usage: 'None',
  inHelp: 'yes'
}

exports.conf = {
  aliases: []
}
