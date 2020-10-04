const {  MessageEmbed } = require("discord.js");
const mal = require("mal-scraper")

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let name = args.slice(0).join(" ")//usaremos args para buscar
    if(!name) return message.channel.send("Escribe el nombre de un Anime o Manga")//si no hay args retorna
    try{
    mal.getInfoFromName(name).then((data) => {//el JSON con la informacion
    const embed = new MessageEmbed() //creamos el embed
    
    .setColor("RANDOM")
    .setTitle(":mag_right: Resultados de la Busqueda :mag:")
    .addField("Titulo: ", `[${data.title}](${data.url})`)
    .addField("Generos: ", `${data.genres}`)
    .addField("Ranked: ", `${data.ranked}`)
    .setImage(`${data.picture}`)//la portada del Anime
    if (data.synopsis.length <= 2048){
      embed.setDescription(`**Sinopsis:** \n ${data.synopsis}`)
     
    } 
    else { 
      let chunks = data.synopsis.match(/[\s\S]{1,1023}/g) 
  
      for (let chunk of chunks) embed.addField("\u200b", chunk, false)
  }
  if (embed.length > 6000) return message.reply("Es muy larga la informacion"); 
  message.channel.send(embed)
     })
     
    } catch (error) {
              message.channel.send("A ocurrido un error" + error)
              message.channel.stopTyping()
          }
  


    
}

module.exports.help = {
    name: "buscaranime",
    aliases: ["searchanime"]
  }