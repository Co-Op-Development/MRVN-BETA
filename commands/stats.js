exports.run = async (client, message) => {
  var totalAccounts = 0;
  let money = client.userInfo; 
  var total = 0; money.forEach(u => { total += Number(u.money)});
  var richestCash = 0;
  var HLvl = 0;
  let HLvlUser;
  let richestUser;
  const arrOfUsers = client.userInfo.map(g => g);
  
  client.userInfo.forEach((user, id) => {
    if (Number(user.money) > richestCash) {
      total = total + user.money;
      richestCash = user.money;
      richestUser = id;
      
     } 
  });
  client.userInfo.forEach((user, id) => {
    if (Number(user.lvl) > HLvl) {
      HLvl = user.lvl;
      HLvlUser = id;
    }
  });
  
  console.log(richestUser)
  richestUser = await client.users.fetch(richestUser);
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle('Statistics')
    .addField('Pilots', arrOfUsers.length, true)
    .addField('Total Credits', `${total.toLocaleString()}`, true)
    .addField('Richest Pilot', `${richestUser} with ${richestCash} credits`, true)
    .addField('Highest Level', `${HLvlUser} at level ${HLvl}`, true)
    .setFooter(`Requested by: ${message.author.username}`) 
    .setTimestamp()
  
  message.channel.send(embed);
}

exports.help = {
  name: 'stats',
  description: 'Shows total combined stats from all servers bot is in.',
  usage: '{}top',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['top']
}