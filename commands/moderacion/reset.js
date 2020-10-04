const {  MessageEmbed } = require("discord.js");

//const db = require("quick.db")
//const db = require("megadb")
module.exports.run = async(client, message, args) => {
    return message.channel.send("En mantenimiento")

/*
    message.channel.startTyping()

         
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("No tienes permiso")
      }
      
      const user = message.mentions.members.first()
      
      if(!user) {
      return message.channel.send("Menciona a alguien")
      }
      
      if(message.mentions.users.first().bot) {
        return message.channel.send("Los bots no juegan")
      }
      
      if(message.author.id === user.id) {
        return message.channel.send("xd")
      }
      
       let warnings = servers.tiene(`${message.guild.id}.warns.usuarios.${user.id}`)
       //let log = db.get(`kanal_${message.guild.id}`)
       
      if(warnings === false) {
        return message.channel.send(`${message.mentions.users.first().username} esta limpio`)
      }
     // if(log === null) {
      servers.eliminar(`${message.guild.id}.warns.usuarios.${user.id}`)
      user.send(`Estas limpio por ${message.author.username} en ${message.guild.name}`)
      await message.channel.send(`Se resetearon las warns ${message.mentions.users.first().username}`)
    //  } else {
               servers.eliminar(`${message.guild.id}.warns.usuarios.${user.id}`)
        let user1 = message.mentions.users.first()
             const mensa1 = new MessageEmbed()
            .setTitle("Un usuario a sido Limpiado de Warns")
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
        .addField("Usuario Limpio:", `${user} - (${user.id})`, true)
  
            .setThumbnail(user1.displayAvatarURL({dynamic:true}))
            .setColor("RANDOM")
        .setTimestamp()
        .addField("Admin responsable:", message.author.username)
             message.channel.send("Usuario limpiado")
         return client.channels.cache.get(log).send(mensa1)
        


    message.channel.stopTyping()
    */
}

module.exports.help = {
    name: "resetWarns",
    aliases: ["resetWarn"]
  }