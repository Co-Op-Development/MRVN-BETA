exports.run = async (client, message) => {
  var totalAccounts = 0;
  let money = client.userInfo;
  var total = 0; money.forEach(u => { total += Number(parseInt(u.money, 10))});
  var richestCash = 0;
  let richestUser;
  var highestLevelUser;
  var highestLevel = 0;
  const arrOfUsers = client.userInfo.map(g => g);

  client.userInfo.forEach((user, id) => {
    if (Number(user.money) > richestCash) {
      richestCash = user.money;
      richestUser = id;
     }
    if (Number(user.level) > highestLevel) {
      highestLevel = user.level;
      highestLevelUser = id;
      console.log(id)
    }
  });
  console.log(highestLevelUser )
  highestLevelUser = await client.users.fetch(highestLevelUser);
  richestUser = await client.users.fetch(richestUser);
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Statistics')
    .addField('Pilots', arrOfUsers.length, true)
    .addField('Total Credits', `${total.toLocaleString()}`, true)
    .addField('Richest Pilot', `${richestUser} with ${richestCash.toLocaleString('en-IN',{ style: 'decimal'})} credits`, true)
    .addField('Most Experienced Pilot', `**${highestLevelUser}** at **${client.userInfo.fetch(highestLevelUser.id).level}** level with **${client.userInfo.fetch(highestLevelUser.id).exp.toLocaleString()}** $
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
    .setTimestamp()

  message.channel.send(embed);
}

exports.help = {
  name: 'stats',
  description: 'Shows total stats from all servers bot is in.',
  usage: '{}top',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['top']
}

