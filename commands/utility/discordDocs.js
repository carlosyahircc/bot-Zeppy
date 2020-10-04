const {  MessageEmbed } = require("discord.js");

const fetch = require('node-fetch');
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if(!args[0]) return message.channel.send("Ingresa lo que quieras buscar")
      
    let src = "";
    let cont = ""
    if(["stable", "master", "commando", "rpc", "akairo", "akairo-master", "collection"].includes(args[0])) {
      src = args[0];
      cont = args.slice(1).join(" ");
    } else {
      //Si no hay una rama predefinida usar "stable"
      src = "stable"
      cont = args.slice(0).join(" ");
    }

    //Recoger el JSON de esa página.
    try{
    fetch(`https://djsdocs.sorta.moe/v2/embed?src=${src}&q=${cont}`)
      .then(r => r.json())
      .then(res => {

      message.channel.send(new MessageEmbed(res));
    }).catch(err => message.channel.send("Error: no encontre lo que buscas"));
    } catch (error) {
	        message.channel.send("A ocurrido un error" + error)
	    }
    


    message.channel.stopTyping()
}

module.exports.help = {
    name: "Docs",
    aliases: ["discordDocs"]
  }