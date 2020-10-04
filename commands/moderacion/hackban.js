const {  MessageEmbed } = require("discord.js");
//const db = require("quick.db")

module.exports.run = async(client, message, args) => {


    let permisos = message.member.hasPermission("BAN_MEMBERS") 
    if (!permisos) return message.channel.send("No tienes permisos para usar este comando.")
    
    let permisosbot = message.guild.me.hasPermission("BAN_MEMBERS") 
    if (!permisosbot) return message.channel.send("No tengo permisos para banear :(")
  

    let id = args.join(" ") 
    if (!id) return message.channel.send("Necesitas colocar la id.") 
    if(id === "725877650870239254") return message.channel.send("No me puedes banear unu")
    if(isNaN(id)) return message.channel.send("solo se pueden numeros")
   
    let member = await client.users.fetch(id).catch(error => message.channel.send("`" + "ocurrio un error "+  error + "`"))
    if (!member.bannable) return message.channel.send('No tengo permisos suficientes.');
    //you might also want to rename some of these messages
    if (member.id === message.author.id) return message.channel.send('eso no se puede !');
    
    
    message.guild.members.ban(member.id) 
 
   // let log = db.get(`kanal_${message.guild.id}`)
    
   // if(log === null){
                const ban = new MessageEmbed()
    
                  .setTitle(":axe:HACKBAN A UN USUARIO :axe:")
                  .setDescription(`El usuario:${member.tag} a sido baneado`)
                  .addField("ID:", member.id, true)
                  .addField("Persona responsable: \n", message.author, true)
                  .setTimestamp()
                  .setFooter("ban >w<")
                  .setColor("RANDOM");
                message.channel.send(ban);
   // } else {
        /* const ban = new MessageEmbed()
    
                  .setTitle(":axe:BAN A UN USUARIO :axe:")
                  .setDescription(`El usuario:${member.tag} a sido baneado`)
                  .addField("ID:", member.id, true)
                  .addField("Persona responsable: \n", message.author, true)
                  .setTimestamp()
                  .setFooter("ban >w<")
                  .setColor("RANDOM");
                message.channel.send("Usuario baneado")
                return client.channels.cache.get(log).send(ban)
                */
        
   // }
    


}

module.exports.help = {
    name: "hackban",
    aliases: []
  }