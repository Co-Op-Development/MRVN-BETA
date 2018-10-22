exports.run = async (client, message) => {
    const config = require("../config.json")
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
        })
    }

    //


      if (!message.content.startsWith(config.prefix)) return;
  cmd.run(client,message,args);
}