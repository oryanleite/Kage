const Discord = require("discord.js");

exports.run = async(bot, message, args) => { // Aqui definimos nosso client, message e args

    let embed = new Discord.MessageEmbed() // Aqui vai ser a primeira embed que o bot irá mostrar
    .setTitle(message.author.username)
    .setColor('RANDOM')
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription(`Calculando...`)
    .addField(`:white_check_mark: ⇝ Ajuda`, [
        `Use \`!ajuda\` para saber mais comandos!`
    ])

    let embed2 = new Discord.MessageEmbed() // Aqui vai ser a segunda embed que o bot irá mostrar
    .setTitle(message.author.username)
    .setColor('RANDOM')
    .setThumbnail(message.author.displayAvatarURL())
    .setDescription("Espero que não esteja alto 😬!")
    .addField(`:white_check_mark: ⇝ Ajuda`, [
        `Use \`!ajuda\` para saber mais comandos!`
    ])

    let embed_ping = new Discord.MessageEmbed() // Aqui vai ser a terceira embed que o bot irá mostrar
    .setTitle(message.author.username)
    .setColor('RANDOM')
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`:ping_pong: ⇝ Ping`,[
        `\`${parseInt(bot.ws.ping)}\` ms\n`
    ])
    .addField(`:white_check_mark: ⇝ Ajuda`, [
        `Use \`!ajuda\` para saber mais comandos!`
    ])

    const msg = await message.channel.send(embed) // Aqui o bot irá mostrar a primeira embed
    setTimeout(() => { // Aqui criamos um timeout para mostrar a primeira embed com a duração de 3 segundos, para depois editar ela e mostrar a segunda embed
      msg.edit(embed2)
    }, 3000) // 1000 ms = 1s
    setTimeout(() => { // Aqui criamos um timeout para mostrar a embed final com a duração de 5 segundos
      msg.edit(embed_ping)
    }, 5000)

}

exports.help = {
    name: 'ping',
    aliases: ["pingar"]
}