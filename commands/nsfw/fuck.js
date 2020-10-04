const {  MessageEmbed } = require("discord.js");
const clien = require('nekos.life');
const {nsfw} = new clien();

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        let user = message.mentions.users.first()
        if(!user) return message.channel.send("A quien quieres c*jer")
        let aut = message.author.username
               if(user.id === "725877650870239254"){
               return  message.channel.send("Estas loco")
            }
        
      let imagen = await nsfw.classic().then(juas => {
            const embed = new MessageEmbed()
              .setDescription(`${aut} se cosho a ${user}`)
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
    name: "fuck",
    aliases: []
  }