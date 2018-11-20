exports.run = async (client, message) => {
  let data = client.userInfo.array();
  let filteredData = data.sort((a, b) => b.level - a.level).splice(0, 10);

  var sending = "";
  for (var i = 0; i < d.length; i++) {
    sending += `\`${i+1}\`. User, level **${d[i].level}** with **${d[i].exp}** exp\n`
  }; 
  
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .addField("Global Level Leaderboard", sending)
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
    .setTimestamp()

     message.channel.send(embed)

}
exports.help = {
  name: 'leaderboard',
  description: 'Shows up to the top 10 users and their level',
  usage: '{}lb, {}leaderboard',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['lb']
}
