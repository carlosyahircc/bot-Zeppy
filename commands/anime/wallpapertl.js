const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {
return message.channel.send("En mantenimiento")

    message.channel.startTyping()


    const akanekoSan = new MessageEmbed();
    akanekoSan.setImage(akaneko.mobileWallpapers());
    message.channel.stopTyping()
    return message.channel.send(akanekoSan);

    
}

module.exports.help = {
    name: "wallpapertl",
    aliases: []
  }