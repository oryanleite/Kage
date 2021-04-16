module.exports = {

  run: (client, message, args) => {
    /** Objeto embed que irá ser enviado. */
    const embed = {
      color: 0xB1103C,
      title: 'Lista de comandos do servidor!',
      description: `
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
        
      `,
      timestamp: new Date(),
      footer: {
        text: '2021 ® Ryan Leite#5871'
      },
      fields: []
    }

    let commands = client.commands

    if (message.member === null || !message.member.hasPermission('ADMINISTRATOR')) commands = commands.filter(c => !c.help.admin)

    message.author.send({
      embed: embed
    })
      .then(() => message.react('⚡'))
      .catch(() => message.reply('eu não tenho permissões para enviar DM para você 😥'))
  },

  conf: {},

  help: {
    name: 'help',
    category: 'Ajuda',
    description: 'Mostra todos os comandos disponíveis do bot.',
    usage: 'help'
  }
}