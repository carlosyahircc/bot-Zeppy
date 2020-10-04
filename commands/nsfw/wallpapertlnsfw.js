const {  MessageEmbed } = require("discord.js");
const akaneko = require('akaneko');

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {

        const akanekoSan = new MessageEmbed();
        akanekoSan.setImage(akaneko.nsfw.mobileWallpapers());
        return message.channel.send(akanekoSan);
    
            } else {
                message.channel.send("Este canal no es nsfw")
            }
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "wallpapertlnsfw",
    aliases: []
  }