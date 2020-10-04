const {  MessageEmbed } = require("discord.js");
const wtf = require("wtf_wikipedia")
const fetch = require('node-fetch');

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    let busqueda = args.join(" ") //la busqueda sera args
    if(!busqueda) return message.channel.send("Escribe algo para buscar") 
      //si no hay args/busqueda retorna.
    wtf.fetch(busqueda, 'es').then((doc) => {
    
    try{
        let sa1 = doc.sentences(0).text()
      let sa2 = doc.sentences(1).text()
      } catch (err) {
        message.channel.send("no encontre lo que buscas");
      }
          let sa1 = doc.sentences(0).text()
      let sa2 = doc.sentences(1).text()
      //fetcheamos la busqueda de wikipedia y colocamos el idioma de las busquedas
     const embed = new MessageEmbed()//el embed
    .setColor("RANDOM")
    .setTitle(`:mag_right: ${busqueda} :mag:`)
    .setDescription(`${sa1} ${sa2}`)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png") //el logo de Wikipedia
    .setFooter(`Pedido por ${message.member.displayName}`) //quien pidio la busqueda
    .setTimestamp()//la hora a la que se pidio
    message.channel.send(embed)
      .catch(err => { message.channel.send("No encontre lo que buscas")});
    
    })
    
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "wikipedia",
    aliases: []
  }