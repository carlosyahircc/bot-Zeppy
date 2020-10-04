const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

message.channel.send("En mantenimiento")


    message.channel.stopTyping()
}

module.exports.help = {
    name: "lyrics",
    aliases: []
  }