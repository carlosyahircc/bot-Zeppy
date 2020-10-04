const {  MessageEmbed } = require("discord.js");
const Booru = require('booru')


module.exports.run = async(client, message, args) => {

    if(!args[0]) return message.channel.send("ingresa lo que quieres buscar")
    message.channel.startTyping()
    Booru.search('safebooru', [args[0]], { limit: 1, random: true })
      .then(posts => {
        for (let post of posts)
          message.channel.send(post.fileUrl, post.postView)
          if(!posts.length) {
            message.channel.send("Que?")
          }
      })

      message.channel.stopTyping()
    }
module.exports.help = {
    name: "booru",
    aliases: ["boru"]
  }