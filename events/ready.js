const moment = require('moment');
require('moment-duration-format')
const config = require("/home/ittim/MRVN/config.json")
exports.run = (client) => {

  const http = require('http');
  const express = require('express');
  const app = express();
  app.get("/", (request, response) => {
    console.log(`${Date.now()} Ping Received!`);
    response.sendStatus(200);
  });
  app.listen(process.env.PORT);
  setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
  }, 25000)


  let Ready = [
    `----------------------------------------------------------------------------`,
    `Ready since :  ${moment().format('HH:mm:ss')}`,
    `Bot         :  ${client.user.username}`,
    `Members     :  ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
    `Guilds      :  ${client.guilds.size}`,
    `Author      :  Ittim | Mio`,
    `----------------------------------------------------------------------------`
  ].join('\n');

  console.log(`[Ready]\n${Ready}`);

  function botStatus() {
    let status = [
      `Prefix: ${config.prefix}`,
      `${client.guilds.size} guilds with ${client.users.size} users!`
    ];

    let rstatus = Math.floor(Math.random() * status.length);

  client.user.setActivity(status[rstatus], {type: 'STREAMING', url: "https://www.twitch.tv/twitch"});
  };
  setInterval(botStatus, 20000);

}
