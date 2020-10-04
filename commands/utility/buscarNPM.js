const {  MessageEmbed } = require("discord.js");

const search = require('libnpmsearch')

module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if(!args[0]) return message.channel.send("Ingresa el nombre de la npm")
    
     let a = await search(args[0], {limit: 1,})
                if(!a.length){
        message.channel.send("No encontre nada")
      }
    try {
    a.forEach(element =>{
      
      let mai = element.maintainers.username
      
      
      let home = element.links.homepage
      let repo = element.links.repository
      let bu = element.links.bugs
      let sc = element.scope
      
      let ss = element.scope
if(mai === undefined){
  mai = "no hay"
}
    if(home === undefined){
  home = "no hay"
}
if(repo === undefined){
  repo = "no hay"
}
if(bu === undefined){
  bu = "no hay"
}
 if(ss === undefined){
  ss = "no hay"
}   
 if(sc === undefined){
  sc = "no hay"
}     
    
      let saq = new MessageEmbed()
      .setTitle(element.name)
      .setThumbnail("https://codigoonclick.com/wp-content/uploads/2019/05/npm-nodejs.jpeg")
      .setColor("RED")
      .addField("link npm:" , element.links.npm,true)
      .addField("homepage:" , home,true)
      .addField("Repository:" , repo,true)
      .addField("bugs:" , bu,true)
      .addField("Fecha:" , element.date,true)
      .addField("Scope" , sc,true)
      .addField("Version:" , element.version,true)
      .addField("Autor:" , element.author.name,true)
      .addField("Maintainers:" , mai,true)
      .setDescription(element.description)
      
      message.channel.send(saq)

	})
    } catch (error) {
	        message.channel.send("A ocurrido un error" + error)
	    }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "npm",
    aliases: []
  }