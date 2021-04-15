const Discord = require("discord.js"); 

module.exports = function help(msg) {
  if (msg.content === '!help' || msg.content === '!ajuda' || msg.content === '!comandos') {
    let embed = new Discord.MessageEmbed()
      .setTitle('🤖 Comandos do nosso bot 🤖')
      .setDescription(`
        **!ajuda, !help ou !comandos** - Mostra todos os comandos do nosso bot;
        **!avatar** - Mostra o avatar da pessoa que marcar;
        **!beijar** - Beija a pessoa que você marcar;
        **!clear** - Limpa até 100 mensagens no canal que for utilizado;
        **!coinflip** - Jogue cara ou coroa e teste a sua sorte;
        **!color** - Define a cor do seu nome, com as cores disponiveis no servidor;
        **!emoji** - Mostra o emoji que for solicitado;
        **!falar** - Bot fala oque você desejar;
        **!ping** - Mostra o ping entre o BOT e o Servidor;
        **!shipp** - Mostra a porcentagem do amor entre quem você marcar;
        
      `)
      .setFooter('Criado por @Ryan Leite#0016')
      .setColor('#fff200');
    msg.channel.send(embed);
  }
};