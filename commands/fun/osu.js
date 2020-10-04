const {  MessageEmbed } = require("discord.js");
const osu = require('node-osu');
const osuApi = new osu.Api("fe2e6eb15d55a2a97927de82f6cd2ef2baa7f16e", {
    // baseUrl: sets the base api url (default: https://osu.ppy.sh/api)
    notFoundAsError: true, // Throw an error on not found instead of returning nothing. (default: true)
    completeScores: false, // When fetching scores also fetch the beatmap they are for (Allows getting accuracy) (default: false)
    parseNumeric: false // Parse numeric values into numbers/floats, excluding ids
});

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let text = args.slice(0).join(" ")
    if(!text) return message.channel.send("Ingresa el nombre del usuario")
    osuApi.getUser({ u: text }).then(user => {
       
          let usuario = user.name
        
        
          
          if(user.name === undefined) return message.channel.send("Usuario no encontrado")
                
          const imagen = `http://s.ppy.sh/a/${user.id}`
          const users = `https://osu.ppy.sh/users/${user.id}`
          
          let segundos = user.secondsPlayed/60
          const asa = new MessageEmbed()
          
        .setAuthor(user.name)
          .setColor("#FF00E8")
          .addField("Perfil completo:",`[perfil](${users})`, true )
          .addField("ID:", user.id, true)
          .setThumbnail(imagen)
          .addField("puntuaje (rank):", user.scores.ranked, true)
          .addField("puntuaje (total):", user.scores.total, true)
          .addField("plays:", user.counts.plays, true)
          .addField("Region:", user.country, true)
          .addField("Nivel:", user.level, true)
          .addField("Accuracy:", user.accuracy, true)
          .addField("Minutos jugados:", `${segundos}min`, true)
          .addField("Cuenta creada:", user.raw_joinDate, true)
          
          
          message.channel.send(asa)
        
        
        
            
          
        }).catch (err=> {
            message.channel.send("usuario no encontrado")
          })




    message.channel.stopTyping()
}

module.exports.help = {
    name: "osu",
    aliases: []
  }