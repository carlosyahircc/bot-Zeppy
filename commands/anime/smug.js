const {  MessageEmbed } = require("discord.js");
const clien = require('nekos.life');
const {sfw} = new clien();

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    let persona = message.mentions.members.first()
    
     
    
    if(!persona) {
        let imagen = await sfw.smug().then(juas => {
            const embed = new MessageEmbed()
              .setDescription(`${message.author.username} se ha puesto a presumir`)
              .setImage(juas.url)
              .setColor("RANDOM");
          
    message.channel.send({embed});
          })

    }else {
      if(persona.id === "725877650870239254") return message.channel.send("Presumirme? yo tengo un poni y tu no")

    
  let imagen = await sfw.smug().then(juas => {
        const embed = new MessageEmbed()
          .setDescription(`${message.author.username} le ha presumido a ${persona} uwu`)
          .setImage(juas.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })
    }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "smug",
    aliases: []
  }