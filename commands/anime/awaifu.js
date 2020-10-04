const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {sfw} = new clien();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    
    let imagen = await sfw.avatar().then(juas => {
        const embed = new MessageEmbed()
          .setImage(juas.url)
          .setColor("RANDOM")
          
      
message.channel.send({embed});
      })


    message.channel.stopTyping()
}

module.exports.help = {
    name: "awaifu",
    aliases: []
  }