const {  MessageEmbed } = require("discord.js");

const Booru = require('booru')
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        if(!args[0]) return message.channel.send("ingresa lo que quieres buscar")
        
     try {
        Booru.search('gelbooru.com', [args[0]], { limit: 1, random: true })
          .then(posts => {
            for (let post of posts)
              message.channel.send(post.fileUrl, post.postView)
    
          })
          
        } catch (error) {
          message.channel.send("No encontre nada ;-; perdon..")
          console.error("a");
          
        }
        
    
      } else {
        message.channel.send("No puedo hacer eso en este canal porque me pegan")
      }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "gelbooru",
    aliases: []
  }