const discord = require("discord.js")

module.exports.run = async(client, message, args) => {
  //lets write the code
  let start = Date.now()
  const embed = new discord.MessageEmbed()
  .setDescription(`Fetching ping...`)
  .setColor("000000")
  message.channel.send(embed).then(m => {
    let end = Date.now()
    embed.setDescription(`Ping!`)
    embed.addField(`API ping`, Math.round(client.ws.ping) + "ms", true)
    embed.addField(`Message Latency`, end - start + "ms")
    embed.setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    embed.setFooter(client.user.username)
    m.edit(embed)
  })
}

module.exports.help = {
  name: "ping",
  aliases: ["pong"]
}