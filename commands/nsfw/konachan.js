const {  MessageEmbed } = require("discord.js");

const Booru = require('booru')
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()


    if (message.channel.nsfw === true) {
        if(!args[0]) return message.channel.send("ingresa lo que quieres buscar")
     
        Booru.search('konachan.com', [args[0]], { limit: 1, random: true })
          .then(posts => {
            for (let post of posts)
              message.channel.send(post.fileUrl, post.postView)
              if(!posts.length) {
                message.channel.send("Que?")
              }
          })
    
      } else {
        message.channel.send("No puedo hacer eso en este canal porque me pegan")
      }
    

    message.channel.stopTyping()
}

module.exports.help = {
    name: "konachan",
    aliases: []
  }