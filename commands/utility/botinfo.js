const {  MessageEmbed } = require("discord.js");
const moment = require("moment");
require('moment-duration-format');

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    const actividad = moment.duration(client.uptime).format(" D [dias], H [hrs], m [mins], s [secs]");
    
    
    const embed = new MessageEmbed()
    .setColor('RANDOM') 
    
    .setAuthor(client.user.username, client.user.avatarURL())
    .setDescription(`**Información del cliente**`)
    .addField(`Developer`, `Asuke#1797`, true)
    .addField(`Version`, `v20`, true)
    .addField(`Libreria`, `Discord ^12.2.3 (Js)`, true)
    .addField(`Memoria`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true)
    .addField(`Uptime`, `${actividad}`, true)
    .addField(`Servidores`, `${client.guilds.cache.size.toLocaleString()}`, true)
    .addField(`Usuarios`, `${client.users.cache.size.toLocaleString()}`, true)
    .addField(`Canales`, `${client.channels.cache.size.toLocaleString()}`, true)
    .addField(`Conexiones a voz`, `${client.voice.connections.size}`, true)
    
    message.channel.send(embed);
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "botinfo",
    aliases: ["infobot"]
  }