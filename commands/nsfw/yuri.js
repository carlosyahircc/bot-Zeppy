const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {nsfw} = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {

        message.delete()
      let imagen = await nsfw.yuri().then(juas => {
            const embed = new MessageEmbed()
              .setImage(juas.url)
              .setColor("RANDOM");
          
    message.channel.send({embed});
          })
      
      }else{
        message.channel.send("Este no es un canal NSFW")
      }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "yuri",
    aliases: []
  }