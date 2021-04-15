const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/f0J9KS8.gif',
  'https://i.imgur.com/7VsEllT.gif',
  'https://i.imgur.com/r9aU2xv.gif',
  'https://i.imgur.com/BPLqSJC.gif',
  'https://i.imgur.com/ntqYLGl.gif',
  'https://i.imgur.com/6qYOUQF.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de abraçar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#483D8B')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage(rand)
        .setTimestamp()
      
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
};
