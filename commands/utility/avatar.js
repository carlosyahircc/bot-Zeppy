const {  MessageEmbed } = require("discord.js");
module.exports.run = async(client, message, args) => {

    let user = message.mentions.users.first() || message.author//definimos lo que estamos buscando. Primero chequea si el usuario menciono a alguien sino elige al usuario que mando el mensaje
  
    const embed = new MessageEmbed()//creamos un embed
    .setDescription(`[Descargar Avatar](${user.displayAvatarURL({dynamic:true, size: 512})})`)//esto permite descargar la imagen del avatar
    .setImage(user.displayAvatarURL({dynamic:true, size: 512}))// este es la imagen del avatar
    .setColor("RANDOM")//el color del embed
    //la linea al final en el embed
   return message.channel.send(embed)//envia el embed.



}
module.exports.help = {
    name: "avatar",
    aliases: []
  }