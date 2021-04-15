exports.run = async (client, message, args) => {
  const roleA = await message.guild.roles.cache.find(role => role.id === "812178634957389854"); 

  if (
    !message.member.roles.cache.some(r =>
      [
        "812483995216248832",
        "",
        ""
      ].includes(r.id) )) {
    return message.channel.send(`${message.author.username} esse comando é restrito.`);
  } else if (message.content.includes("on")) {
    await roleA.setPermissions(0).catch(console.error);
    await message.channel.send(`O sistema de Antiraid foi ligado por ${message.author.username}`);
  } else if (message.content.includes("off")) {
    await roleA.setPermissions(0).catch(console.error);
    await message.channel.send(
      `O sistema de Antiraid foi desligado por ${message.author.username}`);
  } else {
    return message.channel.send(`${message.author.username} a sintaxe correta é antiraid on | off`);
  }
};