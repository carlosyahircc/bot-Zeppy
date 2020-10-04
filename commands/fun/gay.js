const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    var guil = message.guild.members.cache.random().id

    message.channel.send(` El gay del servidor es: <@${guil}>`)


    message.channel.stopTyping()
}

module.exports.help = {
    name: "gay",
    aliases: []
  }