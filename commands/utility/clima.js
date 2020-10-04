const {  MessageEmbed } = require("discord.js");
const weathe = require("weather-js");

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    weathe.find({ search: args.join(" "), degreeType: "C" }, function(
        err,
        result
      ) {
        if (!args[0])
          return message.channel.send("Falta un pais")
       try{
    
        var current = result[0].current;
        var location = result[0].location;
    
        let embed = new MessageEmbed() 
    
          .setDescription("`" + current.skytext + "`")
          .setAuthor(`☁️ Clima ☁️`)
          .setThumbnail(current.imageUrl)
          .setColor("RANDOM")
          .addField("⏰ » Zona Horaria", `GMT${location.timezone}`)
          .addField("🏳️ » País", current.observationpoint)
          .addField("🌡️ » Temperatura", `${current.temperature}º ${location.degreetype}`)
          .addField("🍃 » Viento", current.windspeed)
          .addField("💦 » Humedad", `${current.humidity}%`)
          .addField("📅 » Fecha", current.day + " " + current.date)
          .setTimestamp() 
    
        message.channel.send(embed);
       }catch (error){
         message.channel.send("Pais no encontrado")
         
       }
    })
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "clima",
    aliases: ["weather"]
  }