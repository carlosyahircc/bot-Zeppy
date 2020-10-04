const {  MessageEmbed } = require("discord.js");

const akaneko = require('akaneko');
module.exports.run = async(client, message, args) => {

    return message.channel.send("En mantenimiento")

    message.channel.startTyping()
    const akanekoSan = new MessageEmbed();
    akanekoSan.setImage(akaneko.wallpapers());
    message.channel.stopTyping()
    return message.channel.send(akanekoSan);



    
}

module.exports.help = {
    name: "wallpaperPC",
    aliases: []
  }