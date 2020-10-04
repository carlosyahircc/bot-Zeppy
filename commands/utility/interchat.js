const {  MessageEmbed } = require("discord.js");

const db = require("megadb")
let interchat = new db.crearDB('interchat');
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


 let perms = message.member.hasPermission("ADMINISTRATOR") 
        if (!perms)    return message.channel.send("X | No tienes permisos")
        let canal = message.mentions.channels.first()

        if(!canal) return message.channel.send("Te falto mencionar el canal")
        let tiene = interchat.tiene("array")
        if(tiene === false) return interchat.establecer("array", [`${canal.id}`])
        
      
          interchat.push("array", canal.id)
        
      
          const embed = new MessageEmbed()
          .setTitle("Bienvenidos al interchat")
          .addField("Reglas", "1. No spam \n 2: No nopor \n 3:No peleas todos somos hermanos uwu \n 4: no flood  \n 5: **Si su interchat no funciona enviar una imagen ya con eso se arregla** \n6:  **En caso de romper una regla se le baneara del interchat** si cree que fue una equivocacion unirse al servidor de soporte")
          .setThumbnail("https://www.heflo.com/es/wp-content/uploads/sites/6/2018/08/reglas-negocio-1280x720.jpg")
          message.channel.send(embed)
          


    message.channel.stopTyping()
}

module.exports.help = {
    name: "setInterchat",
    aliases: []
  }