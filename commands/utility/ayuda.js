const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    const Eme = new MessageEmbed()
    .setTitle("Comandos Ayuda")
    .setThumbnail("")
    .setDescription("Comandos Que ayudan a mejorar el bot  \n ```\n reportBug \n sugerencia```")
    .setTimestamp()
    .setColor("RANDOM")
    .setFooter("Mas proximamente")

    message.channel.send(Eme)
    message.channel.stopTyping()
}

module.exports.help = {
    name: "ayuda",
    aliases: []
  }