const {  MessageEmbed } = require("discord.js");
const clien = require('nekos.life');
const {sfw} = new clien();

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    let persona = message.mentions.members.first()
    if(!persona) return message.channel.send("Y... a quien vas a besar?")
    if(message.author.id === persona.id) return message.channel.send("No puedes besarte a ti mismo :(")
    if(persona.id === "725877650870239254") return message.channel.send("Quieres ir a la carcel?")


    
  let imagen = await sfw.kiss().then(juas => {
        const embed = new MessageEmbed()
          .setDescription(`${message.author.username} a besado a ${persona} >w<`)
          .setImage(juas.url)
          .setColor("RANDOM");
      
message.channel.send({embed});
      })



    message.channel.stopTyping()
}

module.exports.help = {
    name: "kiss",
    aliases: []
  }