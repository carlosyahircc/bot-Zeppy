const {  MessageEmbed } = require("discord.js");

const Booru = require('booru')
module.exports.run = async(client, message, args) => {


    message.channel.startTyping()

    if (message.channel.nsfw === true) {
        message.delete()
           Booru.search('konachan.com', ["loli rating:questionableplus"], { limit: 1, random: true })
             .then(posts => {
               for (let post of posts)
                 message.channel.send(post.fileUrl, post.postView)
                 if(!posts.length) {
                   message.channel.send("Hubo un error")
                 }
             })
             
       
         } else {
           message.channel.send("No puedo hacer eso en este canal porque me pegan")
         }


    message.channel.stopTyping()
}

module.exports.help = {
    name: "loli",
    aliases: []
  }