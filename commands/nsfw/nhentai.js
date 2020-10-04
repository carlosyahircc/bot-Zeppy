const {  MessageEmbed } = require("discord.js");

const NanaAPI = require("nana-api");
const nana = new NanaAPI();
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        const text = args.slice(0).join(" ")
       
         if(!text) return message.channel.send("Escribe algo para buscar")
         var aleta = Math.round(Math.random() * 25);
           var ran = Math.round(Math.random() * 1000);
         console.log(aleta)
       nana.search(text, [,ran, true]).then(a => {
         let resul = a.results
             let ima = resul[aleta].thumbnail.s
             if(!ima.length <= 0) return message.channel.send("No encontre lo que buscas")
             if(!ima.length) return message.channel.send("No encontre lo que buscas")
        const embed = new MessageEmbed()
        .setTitle("Esto es lo que encontre")
        .addField("ID:",resul[aleta].id, true )
        .addField("Titulo",resul[aleta].title, true)
        .addField("Link:", `https://nhentai.net/g/${resul[aleta].id}`)
        .setColor("RANDOM")
        .addField("Idioma:",resul[aleta].language, true)
        .setImage(ima)
           message.channel.send(embed)
           
       })
       
       }else {
           message.channel.send("Este canal no es nsfw")
       }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "nhentai",
    aliases: []
  }