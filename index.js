const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ],
  autoReconnect: true,
});
const fs = require('fs');

client.token = "your_bot_token_uwu";

console.log("Starting...");
client.on('ready', () => {
  var text = "";
  var line = "----------------------------------------------------";
  var logstr = `Logged in as ${client.user.tag}! ♥(。U ω U。)`;
  var strarr = logstr.split("");

  console.clear();
  function loop(a) {
    for (var i = 0; i < a.length; i++) {
      (function (i) {
        setTimeout(function () {
          text = text+a[i];
          console.clear();
          console.log(`${line}\n${text}|\n${line}`);
          if (i == a.length - 1) {
            console.clear();
            console.log(`${line}\n${logstr}\n${line}`);
            var data = fs.readFileSync('./uwu.txt', 'utf8');
            console.log(data.toString());
          }
        }, 50 * i);
      })(i);
    };
  }
  loop(strarr);
});
