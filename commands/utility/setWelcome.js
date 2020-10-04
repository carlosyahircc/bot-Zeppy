const {  MessageEmbed } = require("discord.js");


//const db = require('quick.db');

module.exports.run = async(client, message, args) => {
return message.channel.send("En mantenimiento")
    message.channel.startTyping()

    if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send("Tu no eres admin");
    try{
    let canal = message.mentions.channels.first()
    if(!canal) return message.channel.send("debe mencionar el canal donde se daran las bienvenidas")
    db.set(`welcom_${message.guild.id}`, canal.id)

    message.channel.send("Canal establecido con exito")
    } catch (error) {
        message.channel.send("A ocurrido un error" + error)
    }





    message.channel.stopTyping()
}

module.exports.help = {
    name: "setWelcome",
    aliases: []
  }