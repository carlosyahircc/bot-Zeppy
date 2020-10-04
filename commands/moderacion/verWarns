const {  MessageEmbed } = require("discord.js");

const db = require("megadb")
let servers = new db.crearDB('servers');

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


 const user = message.mentions.members.first() || message.author
    
  
        let warnings = servers.tiene(`${message.guild.id}.warns.usuarios.${user.id}`)
        
        
    if(warnings === false) return message.channel.send("Este usuario no tiene warns")
        
        
        servers.obtener(`${message.guild.id}.warns.usuarios.${user.id}`).then(datos => {
                let warn = datos.conteo
                 message.channel.send(`${user} Tiene **${warn}** warning(s)`)
              })
       

    message.channel.stopTyping()
}

module.exports.help = {
    name: "warns",
    aliases: ["warns"]
  }