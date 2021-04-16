const Discord = require("discord.js")

module.exports.run = async(client,message,args) => {


    if(!args[0]) return message.channel.send("Você precisa fazer uma pergunta")
    if(args[0].length < 1) return message.channel.send("Você precisa fazer uma pergunta")

    let i = ["Sim",
    "Não",
    "Talvez",
    "Eu não sei, tente de novo",
    "Quem sabe?",
    "Isso é um mistério",
    "Não posso te contar",
    "Meu informante disse que não",
    "Provavelmente",
    "Me pergunte mais tarde!",
    "Claro que não!",
    "Não conte comigo para isso",
    "Dúvido muito",
    "NUNCA",
    "Não Quero Responder Agora Tou No Zipzop",
    "Mais e Claro",
    "Certeza Que Sim",
    "COM CERTEZA",
    "Modo Vidente Está Desligado"]

    let y = i[Math.floor(i.length * Math.random())]


    message.channel.send(`:8ball: ${y}`)
}

exports.help = {
    name:"8ball",
    description:"8ball",
    usage:"8ball ask",
    category:"fun"
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliase:[]
}