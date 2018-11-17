exports.run = async (client, message) => {
    const config = require("/home/ittim/MRVN/config.json")
    const args = message.content.split(" ").slice(1);
    const command = message.content.split(' ')[0].slice(config.prefix.length).toLowerCase();
    const cmd = client.commands.get(command) || client.commands.get(client.aliases.get(command));

    if (message.author.bot) return;
    if (!client.userInfo.has(message.author.id)) {
        client.userInfo.set(message.author.id, {
            money: 0,
            lastDaily: "Not Collected.",
            id: message.author.id,
            exp: 0,
            level: 0
        });
    }

    // Experience gain cooldown.
    if (!client.expCooldown.has(message.author.id)) {
      client.utils.experienceGain(client, client.userInfo.get(message.author.id).level, message.author.id);
      client.expCooldown.set(message.author.id);
      setTimeout(function(){ client.expCooldown.delete(message.author.id) }, 5000);
    }
    if (!message.content.startsWith(config.prefix)) return;
    // Command Cooldown.
    if (client.cmdCooldown.has(message.author.id) && message.author.id !== "183790855813988353") {
      return message.channel.send("You must wait 5 seconds between each command use.").then(m => {m.delete(5000)});
    } else {
      cmd.run(client, message, args);
      client.cmdCooldown.set(message.author.id);
      setTimeout(function(){ client.cmdCooldown.delete(message.author.id) }, 5000);
    }
}
