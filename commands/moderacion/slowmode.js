const {  MessageEmbed } = require("discord.js");

const ms = require('ms')
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()
    let permsBot = message.guild.me.hasPermission("MANAGE_CHANNELS") //Verificar permisos del bot
    if (!permsBot) return message.channel.send("X | No tengo permisos")
    if(!message.member.hasPermission("MANAGE_CHANNELS")) { 
        return message.channel.send(" No tienes los permiso perdon :(") 
    }
      try{
            let channel = message.mentions.channels.first()
            if(channel) {
            let time = args.slice(1).join(' ');
            if (time == "off") {
                channel.setRateLimitPerUser(0)
                return message.channel.send('slowmode desactivado')
            }
            if(!time) return message.channel.send('No especificaste el **tiempo** debe ser en milisegundos')
        if(time == "1") return message.channel.send("No se puede hacer eso deben ser milisegundos")
        if(time >= 21600001) return message.channel.send("El valor maximo es 6hrs")
       
            let convert = ms(time)
            let toSecond = Math.floor(convert / 1000);
            if (!toSecond || toSecond == undefined) return ('Por favor inserte un formato válido')
      await channel.setRateLimitPerUser(toSecond).catch(e => message.reply("Error |`numeros invalidos`"));
      return message.channel.send(`El tiempo se establecio en ${time}`);
    
            } else {
              let time = args.slice(0).join(' ');
              if (time == "off") {
                message.channel.setRateLimitPerUser(0)
                return message.channel.send('slowmode desactivado')
            }
            if(!time) return message.channel.send('No especificaste el **tiempo** debe ser en milisegundos')

        if(time == "1") return message.channel.send("No se puede hacer eso deben ser milisegundos")
        if(isNaN(time)) return message.channel.send("Deeben de ser numeros o " + "`" + "off" + "`")
        if(time >= 21600001) return message.channel.send("El valor maximo es 6hrs")
            let convert = ms(time)
            let toSecond = Math.floor(convert / 1000);
            if (!toSecond || toSecond == undefined) return ('Por favor inserte un formato válido')
      await message.channel.setRateLimitPerUser(toSecond).catch(e => message.reply("Error |`numeros invalidos`"));
      return message.channel.send(`El tiempo se establecio en ${time}`);
            }
      } catch (error) {
        message.channel.send("A ocurrido un error" + error)
    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "slowmode",
    aliases: ["modolento"]
  }