exports.run = async (client, message) => {
  const moment = require("moment")
  if (client.userInfo.get(message.author.id).lastDaily != moment().format('L')) {
  client.userInfo.setProp(message.author.id, `lastDaily`, moment().format('L'));
  client.userInfo.setProp(message.author.id, `money`, client.userInfo.get(message.author.id).money + 150);

  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("Daily Reward", true)
    .setDescription("Daily Reward of **150** credits has been deposited into your account!", true)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
    .setTimestamp()

  message.channel.send(embed)
  } else {
  const embed = new client.Discord.MessageEmbed()
    .setColor('ORANGE')
    .setTitle("Daily Reward", true)
    .setDescription("Pilot, you have already claimed your Daily Reward! Try again **" + moment().endOf('day').fromNow() + '**.', true)
        .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
    .setTimestamp()


  message.channel.send(embed);
  }
}

exports.help = {
  name: 'daily',
  description: 'Collects daily payment for user, if possible.',
  usage: 'None',
  inHelp: 'yes'
}

exports.conf = {
  aliases: []
}
