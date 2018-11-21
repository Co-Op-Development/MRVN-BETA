const hastebin = require('hastebin-gen');

module.exports.run = async (client, message, args) => {
    let NotDev = new client.Discord.MessageEmbed()
       .setColor('GREEN')
       .setTitle("Evaluation")
       .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
       .setTimestamp()
  
    if (!["183790855813988353, 216403723818106880", "295980401560649730"].includes(message.author.id)) return message.channel.send(NotDev);
     function clean(text) {
       if (typeof(text) === "string")
         return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
       else
           return text;
    } try {
           let code = args.join(" ");
           if (args.length == 0) return message.channel.send("You need to provide a code!");
           if(args[0].toLowerCase() == "async") code = `(async function(){\n${code.slice(5)}\n})(client, message, args)`;
           let evaled = await eval(code);
           let rawEvaled = evaled;
           if (typeof evaled !== "string")
             evaled = require("util").inspect(evaled, {
                  "depth": 0
              });

            if (clean(evaled).length > 1900) {
                hastebin(clean(evaled), "js").then(r => {
                    message.channel.send(`**Output was too large**\n${r}`)
                });

            } else {
  
                // The Embed for the result of the EVAl
                let EvalResult = new client.Discord.MessageEmbed()
                .setColor('GREEN')
                .setTitle(`Evaluated in ${Math.round(client.ping)}ms`)
                .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
                .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(client.token, "nein")}\n\`\`\``)
                .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
                .setFooter(`${message.author.username}`, message.author.displayAvatarURL({format:'png',size:1024}))
                .setTimestamp()
  
                message.channel.send(EvalResult);
            }

    } catch (err) {
         message.channel.send(`\`We seem to have encountered an error:\n\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
  }
  
  
  exports.help = {
      name: 'eval',
      description: 'Should not be in {}help!',
      usage: 'None',
      inHelp: 'no'
  };
  
  exports.conf = {
      aliases: []
  };
  
