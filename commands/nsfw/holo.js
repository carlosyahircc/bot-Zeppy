const {  MessageEmbed } = require("discord.js");
const clien = require('nekos.life');
const { nsfw } = new clien();

module.exports.run = async(client, message, args) => {
    if (message.channel.nsfw === true) {

        message.delete()
      let imagen = await nsfw.holo().then(juas => {
            const embed = new MessageEmbed()
            
              .setImage(juas.url)
              
          
    message.channel.send({embed});
          })
      
      }else{
        message.channel.send("Este no es un canal NSFW")
      }




}
module.exports.help = {
    name: "holo",
    aliases: []
  }