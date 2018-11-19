exports.run = async (client, message) => {
  let NotDev = new client.Discord.MessageEmbed()
     .setColor('GREEN')
     .setTitle("Reboot")
     .setDescription("Sorry, the `reboot` command can only be executed by the Developer.")
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
     .setTimestamp()

     if (!["183790855813988353, 216403723818106880"].includes(message.author.id)) return message.channel.send(NotDev);

  let embed = new client.Discord.MessageEmbed()
  .setColor('GREEN')
  .setTitle("Restarting, Please Wait...")
  .addField("Wait a few seconds before running any command.", `\u200b`)
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
  .setTimestamp()

  await message.channel.send(embed)

  process.exit(1);
};

exports.help = {
  name: 'reboot',
  description: 'Should not be in {}help!',
  usage: '{}restart',
  inHelp: 'no'
}

exports.conf = {
  aliases: ['restart']
}
