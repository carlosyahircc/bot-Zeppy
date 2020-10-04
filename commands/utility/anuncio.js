const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    if(!message.member.hasPermission("ADMINISTRATOR")) { 
        return message.channel.send(" No tienes los permiso perdon :(") 
      }
  try{
      
      let channel1 = message.mentions.channels.first()
  
      if(channel1){
          let encuesta1 = args.slice(1).join(' ');
  
      if(!encuesta1) return message.channel.send(':pencil: Debes escribir una encuesta a mandar,Tambien se puede mandar a un canal solo mencionalo primero') 
  
      
        const embed = new MessageEmbed()
        .setDescription(encuesta1)
        .setTitle("")
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
        .setFooter(`Autor ${message.author.username}`) 
        .setTimestamp()
        .setColor("RANDOM")
        const msg = await channel1.send(embed)
        await msg.react("👍")
        await msg.react("👎")
  
      }else {
      let encuesta = args.join(' ');
  
      if(!encuesta) return message.channel.send(':pencil: Debes escribir una encuesta a mandar,Tambien se puede mandar a un canal solo mencionalo primero') 
  
      
        const embed = new MessageEmbed()
        .setDescription(encuesta)
        .setTitle("")
        .setAuthor(message.guild.name, message.guild.iconURL({dynamic:true}))
        .setTimestamp()
        .setFooter(`Autor ${message.author.username}`) 
        .setColor("RANDOM")
        const msg = await message.channel.send(embed)
        await msg.react("👍")
        await msg.react("👎")
      }
  } catch (error) {
              message.channel.send("A ocurrido un error" + error)
          }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "anuncio",
    aliases: ["encuesta"]
  }