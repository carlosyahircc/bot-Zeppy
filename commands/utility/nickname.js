const {  MessageEmbed } = require("discord.js");


module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    if(!message.guild.me.hasPermission("MANAGE_NICKNAMES")) { 
        return message.channel.send(" No tengo permniso perdon :(") 
    }
      
    if(!message.member.hasPermission("MANAGE_NICKNAMES")){ 
        return message.channel.send("No tienes permisos dile al ADMIN") 
    }
    
    let persona = message.mentions.members.first()
    
    if(!persona) {
        return message.channel.send("mencione a una persona  >w<")
    
    }
    if(persona.roles.highest.comparePositionTo(message.member.roles.highest) >= 0){
        return message.channel.send("error: `DiscordAPIError: Missing Permissions`") 
    
    }
       
       let apodo = args.slice(1).join(' ') 
       if(!apodo) return message.channel.send("Y.... como se llamara?") 
       if(apodo.length > 32) return message.channel.send("El limite de caracteres es 32")
    
    
    persona.setNickname(apodo)
       
    message.delete()
      
    
    const embe = new MessageEmbed()
    .setAuthor(" ||Cambio exitoso  ", "https://image.freepik.com/vector-gratis/conjunto-vectores-mano-escribiendo-lapiz_60352-703.jpg")
    .setDescription(`El nickname de ${persona} fue cambiado a ${apodo}`)
    .addField("Persona responsable:", message.author.username)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embe)
       
     
    

    message.channel.stopTyping()
}

module.exports.help = {
    name: "nickname",
    aliases: ["apodo"]
  }