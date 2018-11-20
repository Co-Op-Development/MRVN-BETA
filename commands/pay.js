exports.run = async (client, message, args) => {
  console.log(args)
  if (!message.mentions.users.first()) {
    console.log("error one");
    return client.utils.incorrectUsage(client, "pay", message);
  } else if (isNaN(args[1])) {
    return client.utils.incorrectUsage(client, "pay", message);
  } else if (client.userInfo.get(message.author.id).money < args[1]) {
    return client.utils.error(client, message, "You don't have enough money to send this amount!");
  } else if (message.mentions.users.first().id == message.author.id) {
    return client.utils.error(client, message, "You cannot pay yourself!");
  }

  client.userInfo.setProp(message.author.id, "money", client.userInfo.get(message.author.id).money - parseInt(10, args[1]));
  client.userInfo.setProp(message.mentions.users.first().id, "money", client.userInfo.get(message.mentions.users.first().id).money + parseInt(10, args[1]));
  return message.channel.send(`The transation has been completed!\nYou now have ${client.userInfo.get(message.author.id).money} remaining in your account.`);
  if (!client.userInfo.get(message.author.id).money) {
    client.userInfo.setProp(message.author.id, "money", 0);
    return client.utils.error(client, message, "Due to errors, your money has been set to zero.\nIf you wish to correct this, please contact Mio / Μισάνθρωπος.#5938");
  }
}

exports.help = {
  name: 'pay',
  description: 'Used to pay other users some credits. {}pay <targetPing> <Amount>',
  usage: '{}give',
  inHelp: 'yes'
}

exports.conf = {
  aliases: ['give']
}
