const {  MessageEmbed } = require("discord.js");

const clien = require('nekos.life');
const {nsfw} = new clien();

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        let user = message.mentions.users.first()
        if(!user) return message.channel.send("Menciona a alguien")

        message.delete()
      let imagen = await nsfw.bJ().then(juas => {
            const embed = new MessageEmbed()
              .setDescription(`${message.author.username} se la chupa a ${user}`)
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
    name: "suck",
    aliases: []
  }