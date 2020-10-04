const {  MessageEmbed } = require("discord.js");

const morse = require('morse');

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    if(!args[0]) return message.channel.send("Opciones: `de` (Decifrar un codigo morse) o `en` (Cifra un codigo morse)").then(m => m.delete({timeout: 10000})) 
   
    let Options = ["de", "en"]
   
    if(!Options.includes(args[0].toLowerCase())) return message.channel.send(":x: Opcion incorrecta!").then(m => m.delete({timeout: 10000}))
  
    
    let texto = args.slice(1).join(" ")
    try{
  
    if(args[0] == "de") {
  
      let decode = morse.decode(texto);
      
     
      if(!texto) return message.channel.send("Escribe algo a decifrar").then(m => m.delete({timeout: 10000}))
  
     message.delete()
      message.channel.send(decode)
  
    } else if(args[0] == 'en') {

       if(!texto) return message.channel.send("Escribe algo a encriptar").then(m => m.delete({timeout: 10000}))
      let decode = morse.encode(texto);
      message.delete();
      message.channel.send(decode)
  
     
  
    }
    } catch (error) {
           message.channel.send("A ocurrido un error" + error)
       }

    message.channel.stopTyping()
}

module.exports.help = {
    name: "morse",
    aliases: []
  }