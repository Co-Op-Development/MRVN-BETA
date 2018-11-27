const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
module.exports.run = async (client, message, args) => {

    const embedStats = new client.Discord.MessageEmbed()
      .setColor('ORANGE')
      .setTitle("Status")
      .addField("Memory Usage(RAM)", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
      .addField("CPU Usage", "Coming soon!", true)
      .addField("API Latency", `${Math.round(client.ws.ping)}ms`, true)
      .addField("Uptime",`${Math.floor(client.uptime / 86400000)}d ${Math.floor(client.uptime / 3600000) % 24}h ${Math.floor(client.uptime / 60000) % 60}m $$
      .addField ("Issues?", 'https://discord.gg/fcm7Yh3', true)
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
      .setTimestamp()

 message.channel.send(embedStats)

};

exports.help = {
  name: 'status',
  description: 'Shows the status of MRVN',
  usage: 'None',
  inHelp: 'yes'
}
exports.conf = {
  aliases: []
}
